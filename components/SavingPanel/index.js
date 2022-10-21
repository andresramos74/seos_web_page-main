import { useState, startTransition } from 'react'
import FormSaving from 'components/FormSaving'
import InformationSaving from 'components/InformationSaving'
import Warning from 'components/InfoSavingPanel/Warning'

const SavingPanel = ({ goToForm, setGoToForm, selectedMethod }) => {

  const [informationLead, setInformationLead] = useState(null)
  const [buttonZendesk, setButtonZendesk] = useState(false)

  const handleClick = () => {
    startTransition(() => {
      setGoToForm(false)
      setInformationLead(null)
    })
  }

  return (
    <article className={`transition ${goToForm ? "block translate-x-0" : "translate-x-full hidden"} font-[Poppins] my-4`}>
      <div className="w-full" data-cy="method">
        Escogiste un {<p className='font-semibold inline'>{selectedMethod}</p>}. Recuerda que:
      </div>
      <Warning selectedMethod={selectedMethod} />
      <p className='mt-4'>Por favor ayúdanos con algunos datos para poder identificar nuestra mejor solución para ti</p>
      <section className="flex flex-wrap md:w-[768px] lg:w-[860px] h-max my-4 mt-4 mx-auto py-2">
        <FormSaving
          goToForm={goToForm}
          selectedMethod={selectedMethod}
          setInformationLead={setInformationLead}
        />
        <InformationSaving
          selectedMethod={selectedMethod}
          informationLead={informationLead}
          buttonZendesk={buttonZendesk}
          setButtonZendesk={setButtonZendesk}
        />
      </section>
      <div className="w-full">
        <p>
          Si quieres escoger otro metodo de ahorro, haz clic <button
            onClick={handleClick}
            className="hover:underline text-seos-blue-light"
          >
            aqui.
          </button>
        </p>
      </div>
    </article>
  )

}

export default SavingPanel