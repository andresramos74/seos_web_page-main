import { METHODS_OF_SAVING } from 'helpers/texts'
import { startTransition, useReducer, useRef } from 'react'
/* import { validateInvoiceValue, validateStratum, validateHoursWhithoutElectricity } from 'helpers/validationsForms' */
import SelectInformationCO from 'components/SelectInformationCO'
import { formSavingReducer, initialStateFormSaving } from 'reducers/formSavingReducer'
import { TOUCHED_STATES } from 'helpers/states'
import { TYPES_FORM_SAVING } from 'actions/formSavingActions'


const FormSaving = ({ goToForm, selectedMethod, setInformationLead }) => {

  const [state, dispatch] = useReducer(formSavingReducer, initialStateFormSaving)
  const { values, errors, touched } = state

  //* Styles to reset
  /*   useEffect(() => {
  
      setFormValues(initialValues)
  
    }, [goToForm]) */

  const updateFormValues = (name, value) => {

    const formatMoney = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' })


    //* Update the state of the reducer
    if (name === 'invoice_value') {

      //* Format the invoice_value
      //* Example format: $ 500.000 

      let newValue = value
      let valueWithoutPoint = value.replaceAll('.', '')

      if (value.startsWith('$')) {
        newValue = valueWithoutPoint.substring(2, value.length)
      }

      dispatch({ type: TYPES_FORM_SAVING.CHANGE_INVOICE_VALUE, payload: `${formatMoney.format(newValue)}` })
    }

    if (name === 'stratum') {
      dispatch({ type: TYPES_FORM_SAVING.CHANGE_STRATUM, payload: value })
    }

    if (name === 'hours_without_electricity') {
      dispatch({ type: TYPES_FORM_SAVING.CHANGE_HOURS_WITHOUT_ENERGY, payload: value })
    }
  }

  const changeClassSpan = (event) => {

    const $divParent = event.target.parentNode
    const $span = $divParent.querySelector('span')
    const $input = $divParent.querySelector('input')

    //* Add and delete css classes to generate the efect of the label
    $span.classList.add('content-name')
    $span.classList.add('transition')
    $span.classList.remove('content')

    $input.focus()
  }

  const handleBlurField = (event) => {

    const $divParent = event.target.parentNode
    const $span = $divParent.querySelector('span')

    const name = event.target.name
    const value = event.target.value

    if (event.target.value.length === 0) {
      $span.classList.remove('content-name')
      $span.classList.remove('transition')
      $span.classList.add('content')
      $span.style.color = ''
    }

    if (event.target.value.length !== 0) {
      $span.style.color = 'black'
    }

    updateFormValues(name, value)

  }

  const handleChange = (event) => {

    const name = event.target.name
    const value = event.target.value

    updateFormValues(name, value)

  }

  const handleSubmit = (e) => {

    let errorFreeForm = true
    
    e.preventDefault()
    
    //* Validate that the submit is ok

    //* The form has no errors
    if (Object.entries(errors).length !== 0) return

    if (selectedMethod === METHODS_OF_SAVING.SOLAR) {
      delete values.hours_without_electricity
    }

    if (values.department === "Bogotá D.C.") {
      delete values.municipality
    }

    if (values.department !== "Bogotá D.C.") {
      delete values.locality
    }

    //* Use some for the validation of the blank spaces in the form
    Object.entries(values).forEach(element => {

      if (element[1] === null) return

      if (element[1].length === 0) {
        errorFreeForm = false
        return
      }
    })

    if (!errorFreeForm) return
    
    startTransition(()=>{
      setInformationLead(values)
    })
  }

  return (
    <form
      className='flex flex-col h-full w-80 sm:w-[48%] pr-2 md:px-8 pt-4 pb-7 mr-2 border border-gray rounded-md shadow-md'
      data-cy="form"
    >
      <h1 className='border-b text-lg'>Tus datos:</h1>
      <section className='relative h-8 mt-8' >
        <label id="invoice_value">
          <span
            className='content absolute transition duration-100 bottom-0 z-10 p-1 pl-2 w-full'
            onClick={changeClassSpan}
          >Valor de tu factura:</span>
          <input
            name="invoice_value"
            className='w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1'
            onFocus={changeClassSpan}
            onBlur={handleBlurField}
            onChange={handleChange}
            value={values.invoice_value}
            data-cy="input-invoice_value"
            aria-labelledby='invoice_value'
          />
        </label>
      </section >
      {
        errors?.invoice_value || (touched.invoice_value === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
          <div
            className={`text-red-warning mt-1 text-sm mb-8`}
            data-cy="error-invoice_value"
          >
            {errors.invoice_value}
          </div>
          :
          <p className={`mb-8`}></p>
      }
      <section className='relative h-8' >

        <label id="stratum" className="absolute h-full w-full">
          <span
            className='content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full'
            onClick={changeClassSpan}
          >Estrato:</span>
          <input
            name="stratum"
            className='w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1'
            onFocus={changeClassSpan}
            onBlur={handleBlurField}
            onChange={handleChange}
            value={values.stratum}
            data-cy="input-stratum"
            aria-labelledby='stratum'
          />
        </label>
      </section >
      {
        errors?.stratum || (touched.stratum === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
          <div
            className={`mb-8 text-red-warning text-sm`}
            data-cy="error-stratum"
          >{errors.stratum}</div>
          :
          <p className={`mb-8`}></p>
      }
      {(selectedMethod === METHODS_OF_SAVING.SUPPORT_SOLAR || selectedMethod === METHODS_OF_SAVING.SYSTEM_SUPPORT) &&
        <section className='relative h-8'>
          <label id="hours_without_electricity" className="absolute h-full w-full">
            <span
              className='content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full'
              onClick={changeClassSpan}
            >Horas sin electricidad:</span>
            <input
              name="hours_without_electricity"
              className='w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1'
              onFocus={changeClassSpan}
              onBlur={handleBlurField}
              onChange={handleChange}
              values={values.hours_without_electricity}
              data-cy="input-hours_without_electricity"
              aria-labelledby='hours_without_electricity'
            />
          </label>
        </section>
      }
      {
        ((errors?.hours_without_electricity || (touched.hours_without_electricity === TOUCHED_STATES.TOUCHED_FIRST_TIME)) &&
          (selectedMethod === METHODS_OF_SAVING.SUPPORT_SOLAR || selectedMethod === METHODS_OF_SAVING.SYSTEM_SUPPORT)) ?
          <div className='text-red-warning mb-6 text-sm' data-cy="error-hours_without_electricity">{errors.hours_without_electricity}</div>
          :
          <p
            className={`${!(selectedMethod === METHODS_OF_SAVING.SUPPORT_SOLAR || selectedMethod === METHODS_OF_SAVING.SYSTEM_SUPPORT) && "hidden"} mb-9`}
          ></p>
      }
      <SelectInformationCO
        goToForm={goToForm}
        values={values}
        errors={errors}
        touched={touched}
        dispatch={dispatch}
      />
      <section className='mb-4'>
        <label htmlFor='rural'>Vive en una zona rural:</label>
        <input
          type='checkbox'
          id='rural'
          name='rural'
          value='Si'
          className='ml-2'
          onChange={() => {
            dispatch({ type: TYPES_FORM_SAVING.CHANGE_RURAL, payload: true })
          }}
        />
        <p className='text-xs mt-2'>Selecciona la casilla si tu predio se ubica en una zona rural</p>
      </section>
      <input type='submit'
        className='transition w-min m-auto px-2 py-1 bg-seos-blue-light rounded-md text-white cursor-pointer hover:bg-seos-blue-dark'
        value="Confirmar datos" form="{}"
        onClick={handleSubmit}
      />
      <style jsx>{`
      .content-name{
        transform: translateY(-110%);
        font-size: 14px;
        color: black;
        padding-left: 0.3rem;
      }
      .content{
        font-size: 16px;
        transform: translateY(0%);
        
      }
    `}</style>
    </form>
  )

}

export default FormSaving