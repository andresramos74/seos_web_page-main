import { ADD_INSTALLER_DATA } from 'graphql/mutations/addInstaller'
import { formPartnersReducer, initialValuesFormPartners } from 'reducers/formPartnersReducer'
import { TOUCHED_STATES } from 'helpers/states'
import { useMutation } from '@apollo/client'
import { useState, useReducer } from 'react'
import Image from 'next/image'
import logoSeos from 'public/logo_seos_blanco.png'
import PartnersCompanyData from 'components/PartnersCompanyData'
import PartnersContactData from 'components/PartnersContactData'
import PartnersLegalData from 'components/PartnersLegalData'

const referrerNameInitialValue = {
  value: '',
  touched: TOUCHED_STATES.NOT_TOUCHED
}

const nameEventInitialValue = {
  value: '',
  touched: TOUCHED_STATES.NOT_TOUCHED
}

const Partners = () => {

  const [state, dispatch] = useReducer(formPartnersReducer, initialValuesFormPartners)
  const { values, errors, touched } = state

  //* State to save the referrer name
  const [referrerName, setReferrerName] = useState(referrerNameInitialValue)
  //* State to save the name of the event in that the INSTALLER learned about SEOS
  const [nameEvent, setNameEvent] = useState(nameEventInitialValue)
  //* Error in the form (blank spaces, errors, etc)
  const [errorForm, setErrorForm] = useState(null)
  //* State to save if the INSTALLER accept the terms 
  const [acceptTerms, setAcceptTerms] = useState(false)

  //* Use mutation
  const [sendData, result] = useMutation(ADD_INSTALLER_DATA)
  const { loading, data, error } = result

  const formatObjectToSend = async(values) => {

    //* Create a new object with all values of the form
    let newValues = JSON.parse(JSON.stringify(values))

    //* Link the nit value and the verificationDigit
    let nit = `${newValues.nit.value}-${newValues.nit.verificationDigit}`

    //* Format of the date that the input give YYYY/MM/DD
    let partsOfTheDate = newValues.date.split('-')

    const day = Number(partsOfTheDate[2])
    const month = Number(partsOfTheDate[1])
    const year = Number(partsOfTheDate[0])

    //* Create the date of the date of constitution
    let dateConstitution = new Date(year, month - 1, day)

    // * Convert the miliseconds to seconds, its necessary because the ttl field is a timestamp in seconds
    newValues.ttl = Math.round(Date.now() / 1000) + 300
    newValues.nit = nit
    //* Get the timestamp of the date of constitution
    newValues.date = dateConstitution.getTime()
    //* Parse the values to number
    newValues.kw_installed = Number(values.kw_installed)
    newValues.number_of_clients = Number(values.number_of_clients)

    //* Capture the ip of the device that fill the form
    const ip = await fetch('https://api.ipify.org/?format=json')
    const okip = await ip.json()
    const res = okip

    newValues.ip = res.ip
    
    return newValues

  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setErrorForm(null)
    values.referrerFrom = values.origin_lead

    if (values.origin_lead === "Evento") {
      values.referrerFrom = nameEvent.value
    }

    if (values.origin_lead === "Instalador referido") {
      values.referrerFrom = referrerName.value
    }


    //* Validate that the form has no errors
    if (Object.getOwnPropertyNames(errors).length !== 0) {
      setErrorForm("Tienes errores en el formulario")
      return
    }

    //* Some, if a condition is fullfilled with a value of the array then return false to the isEmpty
    const isEmpty = Object.entries(values).some((value) => {

      //* value[0] -> Name of the field
      //* value[1] -> Value of the field

      //* Validate that the fields are not empty except acosol_associate (boolean) and web_page(optional)
      if (!(value[0] === "acosol_associate" ) && !(value[0] === "web_page")) {
        if (value[1] === "") {
          return true
        }
      }
    })

    if (isEmpty) {
      setErrorForm("Los campos no pueden estar vacios")
      return
    }

    //* 
    if (acceptTerms === false) {
      setErrorForm("Debes aceptar los términos y condiciones")
      return
    }

    
    try {
      
      const installerData = await formatObjectToSend(values)

      await sendData({
        variables: {
          installer: installerData
        }
      })
      
    } catch (e) {
      console.log(e)
    }

  }

  const handleChangeCheckbox = () => {
    setAcceptTerms(!acceptTerms)
  }

  if (data) {
    return (
      <section className="font-['Poppins'] overflow-x-hidden flex flex-col h-screen w-screen">
        <header className='sticky top-0 w-full bg-seos-blue-dark'>
          <div className='relative w-52 h-20 mx-auto'>
            <Image
              src={logoSeos}
              alt={"Logo seos"}
              unoptimized={true}
              layout='fill'
              objectFit='contain'
              priority={true}
            />
          </div>
        </header>
        <article className='grow flex items-center'>
          <p className='w-2/4 h-min py-7 px-4 m-auto text-center font-semibold rounded-md bg-slay-bg'>
            Gracias por registrarte
          </p>
        </article>
      </section>
    )
  }

  if (error) {
    return (
      <section className="font-['Poppins'] overflow-x-hidden flex flex-col h-screen w-screen">
        <header className='sticky top-0 w-full bg-seos-blue-dark'>
          <div className='relative w-52 h-20 mx-auto'>
            <Image
              src={logoSeos}
              alt={"Logo seos"}
              unoptimized={true}
              layout='fill'
              objectFit='contain'
              priority={true}
            />
          </div>
        </header>
        <article className='grow flex items-center'>
          <p className='w-2/4 h-min py-7 px-4 m-auto text-center font-semibold bg-slay-bg'>
            Hemos encontrado un usuario con el mismo número de NIT, por favor verifica tus datos, si tu problema persiste por favor contacta
            soporte técnico
          </p>
        </article>
      </section>
    )
  }

  return (
    <section className="flex flex-col font-['Poppins'] w-full overflow-x-hidden">
      <header className='sticky top-0 w-full bg-seos-blue-dark'>
        <div className='relative w-52 h-20 mx-auto'>
          <Image
            src={logoSeos}
            alt={"Logo seos"}
            unoptimized={true}
            layout='fill'
            objectFit='contain'
            priority={true}
          />
        </div>
      </header>
      <form
        className='flex flex-col pb-4 m-auto mt-8 mb-32 w-full border border-gray sm:w-4/5 md:w-[680px] lg:w-[750px] h-min rounded-md'
        onSubmit={handleSubmit}
      >
        <p className='px-3 py-2 border-b border-b-gray text-lg font-semibold'>Afiliación al club</p>
        <div className='flex flex-wrap'>
          <PartnersLegalData
            values={values}
            errors={errors}
            touched={touched}
            dispatch={dispatch}
          />
          <PartnersCompanyData
            values={values}
            errors={errors}
            touched={touched}
            dispatch={dispatch}
          />
        </div>
        <PartnersContactData
          values={values}
          errors={errors}
          touched={touched}
          referrerName={referrerName}
          nameEvent={nameEvent}
          setReferrerName={setReferrerName}
          setNameEvent={setNameEvent}
          dispatch={dispatch}
        />
        <article className='mt-4 px-4 py-2'>
          <label htmlFor="" className=''>
            <a className='text-seos-blue-light hover:underline cursor-pointer'>
              Aceptar términos y condiciones:</a> <input type="checkbox" onChange={handleChangeCheckbox} />
          </label>
          <section className='w-full my-2 mt-4'>
            {
              errorForm && 
              <p>
                {errorForm}
              </p>
            }
            <button
              className='flex mx-auto mt-2 px-4 h-8 leading-8 bg-seos-blue-light text-white hover:bg-seos-blue-dark rounded-md'
              onClick={handleSubmit}
            >
              Registrarme
            </button>
          </section>
        </article>
      </form>
    </section>
  )
}

export default Partners