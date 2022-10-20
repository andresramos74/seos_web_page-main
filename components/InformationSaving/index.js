import { useState, startTransition, useEffect } from 'react'
import { METHODS_OF_SAVING, PRICE_KWH, PROJECT_COST, VALUES_RADIATION } from "helpers/texts"
import Script from 'next/script'

const getwattage = (selectedMethod, informationLead) => {

  //* Validate if a solar method or system and solar method
  if (!(selectedMethod === METHODS_OF_SAVING.SOLAR || selectedMethod === METHODS_OF_SAVING.SUPPORT_SOLAR)) return null
  if (informationLead === null) return null

  const stratum = Number(informationLead.stratum)
  const invoice_value_unformat = informationLead.invoice_value.substring(2, informationLead.invoice_value.length).replaceAll('.', '')

  //* If the stratum is greatest than four is neccesary 
  const invoice_value = stratum > 4 ? Number(invoice_value_unformat) / 1.2 : Number(invoice_value_unformat)

  //* Get the value of the radiation depending on the department
  const value_radiation = VALUES_RADIATION.find(department => department.department === informationLead.department)

  //* Get the price of the kWh depending on the department
  const preciokwh = PRICE_KWH.find(department => department.department === informationLead.department)

  //* Use the formula to calculate wattage

  const averageConsumption = invoice_value / preciokwh.value
  const anualConsumption = averageConsumption * 12
  const wattage = anualConsumption / value_radiation.value

  const decimalPartWattage = wattage % 1

  let wattageToDisplay = Math.floor(wattage)

  if (decimalPartWattage < 0.5) {
    wattageToDisplay = wattageToDisplay + 0.5
  } else {
    wattageToDisplay = wattageToDisplay + 1
  }

  return wattageToDisplay

}

//* Get the total cost of the project
const getProjectCost = (selectedMethod, wattage) => {

  if (!(selectedMethod === METHODS_OF_SAVING.SOLAR || selectedMethod === METHODS_OF_SAVING.SUPPORT_SOLAR)) return
  if (wattage === null) return

  let entireWattage = Math.ceil(wattage)

  //* Get the cost of the project
  const costProject = PROJECT_COST.filter(costPertWattage => costPertWattage.wattage === entireWattage)

  return Math.ceil(costProject[0].value / 100000) * 100000



}

const getSaving = (wattageToDisplay, informationLead) => {
  if (informationLead === null) return

  let monthly_saving
  const stratum = Number(informationLead.stratum)
  //* Get the value of the radiation depending on the department
  const value_radiation = VALUES_RADIATION.find(department => department.department === informationLead.department)

  //* Get the price of the kWh depending on the department
  const preciokwh = PRICE_KWH.find(department => department.department === informationLead.department)

  const monthlyGeneration = (wattageToDisplay * value_radiation.value) / 12

  monthly_saving = monthlyGeneration * preciokwh.value

  if (stratum > 4) {
    monthly_saving = (monthly_saving * 1.2) * 12
  }

  const valueSavingInteger = Math.trunc(monthly_saving)

  return Math.ceil(valueSavingInteger / 100000) * 100000

}

//* Get the number of luzioles
const getNumberOfBatteries = (selectedMethod, informationLead) => {

  if (!(selectedMethod === METHODS_OF_SAVING.SYSTEM_SUPPORT || selectedMethod === METHODS_OF_SAVING.SUPPORT_SOLAR)) return null
  if ((informationLead === null)) return null

  //* Get the information of the form
  const invoice_value_unformat = informationLead.invoice_value.substring(2, informationLead.invoice_value.length).replaceAll('.', '')
  const hours_without_electricity = informationLead.hours_without_electricity
  const wattageLuziol = 2.4

  //* Get the cost kw/h in the select department
  const preciokwh = PRICE_KWH.filter(department => department.department === informationLead.department)

  //* Use the formula to calculate wattage per hour
  const necessaryWattageInHoursWithoutElectricity = (((invoice_value_unformat / preciokwh[0].value) / 30) / 24) * hours_without_electricity
  const batteriesNecessary = necessaryWattageInHoursWithoutElectricity / wattageLuziol

  return Math.ceil(batteriesNecessary)

}

//* Get the cost of the luzioles
const getCostBatteries = (selectedMethod, numberOfLuzioles) => {
  if (!(selectedMethod === METHODS_OF_SAVING.SYSTEM_SUPPORT || selectedMethod === METHODS_OF_SAVING.SUPPORT_SOLAR)) return null

  return Math.ceil((numberOfLuzioles * 20000000) / 100000) * 100000
}

const InformationSaving = ({ informationLead, selectedMethod, buttonZendesk, setButtonZendesk }) => {

  //* Actualizar formulas

  const [isLowerOfTheNecessaryValue, setIsLowerOfTheNecessaryValue] = useState(false)
  const [wattage, setWattage] = useState(null)
  const [saving, setSaving] = useState("")
  const [projectCost, setProjectCost] = useState(null)
  const [luzioles, setLuzioles] = useState(null)
  const [costBatteries, setCostBatteries] = useState("")


  useEffect(() => {

    if (informationLead === null) return

    const invoice_value_unformat = informationLead.invoice_value.substring(2, informationLead.invoice_value.length).replaceAll('.', '')

    if (Number(invoice_value_unformat) <= 125000) {

      setIsLowerOfTheNecessaryValue(true)
      return

    } else {

      setIsLowerOfTheNecessaryValue(false)
    }

    const wattageToDisplay = getwattage(selectedMethod, informationLead)

    if (wattageToDisplay > 10) {
      setWattage(wattageToDisplay?.toString())
      return
    }

    const cost = getProjectCost(selectedMethod, wattageToDisplay)
    const savingOfTheProject = getSaving(wattageToDisplay, informationLead, cost)?.toString()
    const numberOfLuzioles = getNumberOfBatteries(selectedMethod, informationLead)?.toString()
    const valueBatteries = getCostBatteries(selectedMethod, numberOfLuzioles)?.toString()

    //* Format the cost with local format
    const costWithFormat = new Intl.NumberFormat('es-CO').format(cost)
    const savingWithFormat = new Intl.NumberFormat('es-CO').format(savingOfTheProject)
    const valueBatteriesWithFormat = new Intl.NumberFormat('es-CO').format(valueBatteries)

    setWattage(wattageToDisplay?.toString())
    setSaving(savingWithFormat)
    setProjectCost(costWithFormat)
    setLuzioles(numberOfLuzioles)
    setCostBatteries(valueBatteriesWithFormat)

  }, [informationLead])


  //! This method only works because in the entire page only have two iframes tags, if a third iframe tag is addes the update 
  //! the method
  const openChatZendesk = () => {

    setButtonZendesk(true)

    const d = window.document

    //! The timeout is neccesary because the script need time to load
    setTimeout(() => {
      const iframe = d.querySelectorAll('iframe')
      const content = iframe[2].contentWindow
      const docIframe = content.document

      docIframe.querySelector('button').click()
    }, 3000)


  }

  if (!informationLead) {
    return (
      <article className='w-80 grow sm:w-[48%] md:px-8 ml-2 h-full py-4 border border-gray rounded-md shadow-md'>
        Llena el fomulario y dale al boton <p className="inline font-semibold">Confirmar datos</p>
      </article>
    )
  }


  if (Number(informationLead.invoice_value.substring(2, informationLead.invoice_value.length).replaceAll('.', '')) <= 125000) {
    return (
      <article className='w-80 sm:w-[48%] md:px-8 ml-2 h-full py-4 border border-gray rounded-md shadow-md'>
        Gracias por compartir con nosotros tú información. Con estos datos, consideramos que el costo y el tiempo de amortización
        no son tan rentables aún, especialmente por el costo de los equipos principales. ¡Pero no te preocupes! Estos sistemas
        han bajado más del 97% en los anteriores 10 años, por lo que pensamos que ya estamos cerca de poder atenderte. Te invitamos
        a compartir con nosotros tu correo y seguirnos en redes sociales para identificar el mejor momento para volver a revisar. ¡Gracias!
      </article>
    )
  }

  if (wattage > 10) {
    return (
      <article className='w-80 sm:w-[48%] md:px-8 ml-2 h-full py-4 border border-gray rounded-md shadow-md'>
        La potencia de tu proyecto excede los 10 kWp, contáctate con uno de nuestros asesores

        <div className='flex justify-center'>
          <button
            className='transition mt-2 px-2 py-1 text-white bg-seos-blue-light hover:bg-seos-blue-dark hover:text-white rounded-md'
            onClick={openChatZendesk}
          >
            Contactate con nosotros
          </button>
        </div>

        {buttonZendesk &&
          <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=d29e7764-d740-457b-9ec5-2fd81060e208" />
        }

      </article>
    )
  }

  return (
    <article className='w-80 sm:w-[48%] h-full border  border-gray rounded-md shadow-md'>

      <p className='px-4 py-2'>Con tus datos obtuvimos:</p>
      <section className='w-full md:pl-12 md:pr-2 h-min'>
        {
          selectedMethod === METHODS_OF_SAVING.SOLAR &&
          <ul className='list-disc list-outside'>
            <li className='mb-1'>
              Potencia de tu proyecto: <p className='text-red-warning inline'>{wattage}  kWp</p>
            </li>
            <li className='mb-1'>
              Número de paneles solares: <p className='text-red-warning inline'> {Number(wattage) / 0.5} paneles</p>
            </li>
            <li className='mb-1'>
              Número de inversores para tu proyector: <p className='text-red-warning inline'> 1 inversor</p>
            </li>
            <li className='mb-1'>
              Ahorro anual de tu proyecto: <p className='text-red-warning inline'> ${saving}</p>
            </li>
            <li className='mb-1'>
              Costo de tu proyecto: <p className='text-red-warning inline'> ${projectCost}</p>
            </li>
          </ul>
        }

        {
          selectedMethod === METHODS_OF_SAVING.SYSTEM_SUPPORT &&
          <ul className='list-disc list-outsid'>
            <li className='mb-1'>
              Cantidad de luzioles necesarios: <p className='text-red-warning inline'> {luzioles} unidades</p>
            </li>
            <li className='mb-1'>
              Costo de las baterías: <p className='text-red-warning inline'> ${costBatteries}</p>
            </li>
          </ul>
        }
        {
          selectedMethod === METHODS_OF_SAVING.SUPPORT_SOLAR &&
          <ul className='list-disc list-outsid'>
            <li className='mb-1'>
              Potencia de tu proyecto: <p className='text-red-warning inline'> {wattage} kWp</p>
            </li>
            <li className='mb-1'>
              Número de paneles: <p className='text-red-warning inline'> {Number(wattage) / 0.5} paneles</p>
            </li>
            <li className='mb-1'>
              Ahorro anual de tu proyecto: <p className='text-red-warning inline'> ${saving}</p>
            </li>
            <li className='mb-1'>
              Costo de tu proyecto: <p className='text-red-warning inline'> ${projectCost}</p>
            </li>
            <li className='mb-1'>
              Cantidad de luzioles necesarios: <p className='text-red-warning inline'> {luzioles} unidades</p>
            </li>
            <li className='mb-1'>
              Costo de las baterías: <p className='text-red-warning inline'> ${costBatteries}</p>
            </li>
          </ul>
        }
      </section>

      <div className='flex justify-center pt-2 pb-4'>
        <button
          className='transition mt-2 px-2 py-1 text-white bg-seos-blue-light hover:bg-seos-blue-dark hover:text-white rounded-md'
          onClick={openChatZendesk}
        >
          Contactate con nosotros
        </button>
      </div>

      {buttonZendesk &&
        <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=d29e7764-d740-457b-9ec5-2fd81060e208" />
      }
    </article>
  )

}

export default InformationSaving