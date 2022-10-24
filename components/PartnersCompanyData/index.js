import { generateMunicipalities } from 'helpers/formPartnersHelpers'
import { LABEL_TEXTS } from './texts'
import { TYPES_FORM_PARTNERS } from 'actions/partnersActions'
import { useColombia } from "hooks/useColombia"
import { useEffect } from 'react'
import DatalistInput from 'react-datalist-input'
import { TOUCHED_STATES } from 'helpers/states'

const PartnersCompanyData = ({ values, errors, touched, dispatch }) => {

  const { data, departments, municipalities, setMunicipalities } = useColombia()

  useEffect(() => {
    if (data === null) return
    const cities = generateMunicipalities(data)
    setMunicipalities(cities)
  }, [data])

  const updateFormValues = (value, name) => {

    //* Update the value of the state of the reducer
    if (name === "kw_installed") {
      dispatch({ type: TYPES_FORM_PARTNERS.CHANGE_KW_INSTALLED, payload: value })
    }

    if (name === "number_of_clients") {
      dispatch({ type: TYPES_FORM_PARTNERS.CHANGE_NUMBER_CLIENTES, payload: value })
    }

    if (name === "checkbox_acosol") {
      dispatch({ type: TYPES_FORM_PARTNERS.CHANGE_ACOSOL_ASSOCIATE })
    }

    if (name === "influency_city") {
      dispatch({ type: TYPES_FORM_PARTNERS.CHANGE_INFLUENCY_CITY, payload: { value, arrayCities: municipalities } })
    }
  }

  const handleChange = (event, fieldName) => {

    const value = event.target.value
    const name = fieldName

    updateFormValues(value, name)

  }

  const changeClassSpan = (event) => {

    const $labelParent = event.target.parentNode
    const $span = $labelParent.querySelector('span')
    const $input = $labelParent.querySelector('input')

    //* Add and delete css classes to generate the efect of the label
    $span.classList.add('content-name')
    $span.classList.add('transition')
    $span.classList.remove('content')

    $input.focus()
  }

  const changeClassLabel = (event) => {

    const $divParent = event.target.parentNode
    const $label = event.target
    const $input = $divParent.querySelector('input')

    //* Add and delete css classes to generate the efect of the label
    $label.classList.add('content-name')
    $label.classList.add('transition')
    $label.classList.remove('content')

    $input.focus()

  }

  const handleBlurInput = (event, fieldName) => {

    const $labelParent = event.target.parentNode
    const $span = $labelParent.querySelector('span')

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

    updateFormValues(value, fieldName)

  }

  const handleClickDataListOption = (event, fieldName) => {

    if (!event.target.classList.contains('react-datalist-input__listbox-option')) return

    const value = event.target.getAttribute("aria-label")

    updateFormValues(value, fieldName)

  }

  const handleBlurDataList = (event, fieldName) => {

    const value = event.target.value
    updateFormValues(value, fieldName)

  }

  const focusInputChangeLabel = (event) => {

    const $parentDiv = event.target.parentNode
    const $label = $parentDiv.querySelector('label')
    const $input = event.target

    $label.classList.add('content-name')
    $label.classList.add('transition')
    $label.classList.remove('content')

    $input.focus()

  }

  const blurInputChangeLabel = (event) => {

    const $parentDiv = event.target.parentNode
    const $label = $parentDiv.querySelector('label')

    if (event.target.value.length === 0) {
      $label.classList.remove('content-name')
      $label.classList.remove('transition')
      $label.classList.add('content')
      $label.style.color = ''
    }

    if (event.target.value.length !== 0) {
      $label.style.color = 'black'
    }

  }

  return (
    <article className='px-3 py-4 md:w-2/4 w-full border-b border-b-gray md:border-b-0'>
      <h1 className='font-semibold'>Información de tu compañía:</h1>
      <section className='relative h-8 mt-7' >
        <label id="kw_installed">
          <span
            className='content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full'
            onClick={changeClassSpan}
          >{LABEL_TEXTS.kw_installed}</span>
          <input
            name="kw_installed"
            className='w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1'
            onFocus={changeClassSpan}
            onBlur={(e) => handleBlurInput(e, "kw_installed")}
            onChange={(e) => handleChange(e, "kw_installed")}
            value={values.kw_installed}
            aria-labelledby='kw_installed'
          />
        </label>
      </section >
      {
        (errors.kw_installed || touched.kw_installed === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
          <div className='text-red-warning mb-8 px-1 text-sm'>{errors.kw_installed}</div>
          :
          <p className='mb-8'></p>
      }
      <section className='relative h-8 mt-4' >
        <label id="number_of_clients">
          <span
            className='content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full'
            onClick={changeClassSpan}
          >{LABEL_TEXTS.number_clients}</span>
          <input
            name="number_of_clients"
            className='w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1'
            onFocus={changeClassSpan}
            onBlur={(e) => handleBlurInput(e, "number_of_clients")}
            onChange={(e) => handleChange(e, "number_of_clients")}
            value={values.number_of_clients}
            aria-labelledby='number_of_clients'
          />
        </label>
      </section>
      {
        (errors.number_of_clients || touched.number_of_clients === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
          <div className='text-red-warning mb-8 px-1 text-sm'>{errors.number_of_clients}</div>
          :
          <p className='mb-8'></p>
      }
      <section className='h-min mt-4 mb-6'>
        <label id='checkbox_acosol'>
          Asociado Acosol: <input type="checkbox" name="checkbox_acosol" onChange={(e) => updateFormValues("", e.target.name)} form="{}"/>
        </label>
        <p className='text-gray text-xs' >Si eres asociado a Acosol entonces marca la casilla</p>
      </section>
      <section>
        {
          municipalities &&
          <DatalistInput
            label="Ciudad de influencia:"
            onSelect={(selectedItem) => dispatch({
              type: TYPES_FORM_PARTNERS.CHANGE_INFLUENCY_CITY,
              payload: { value: selectedItem.value, arrayCities: municipalities }
            })}
            onChange={(e) => handleChange(e, 'influency_city')}
            onBlur={(e) => handleBlurDataList(e, 'influency_city')}
            onClick={(e) => handleClickDataListOption(e, 'influency_city')}
            inputProps={{
              className: 'outline-none w-full border border-gray focus:border-seos-blue-light rounded-[3px] p-1 pl-1',
              "aria-labelledby": "influency_city",
              onFocus: focusInputChangeLabel,
              onBlur: blurInputChangeLabel
            }}
            labelProps={{
              className: 'content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full',
              id: "influency_city",
              onClick: changeClassLabel
            }}
            items={municipalities}
          />
        }
      </section>
      {
        (errors.influency_city || touched.influency_city === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
          <div className='text-red-warning mb-2 px-1 text-sm'>{errors.influency_city}</div>
          :
          <p className='mb-4'></p>
      }
    </article>
  )

}

export default PartnersCompanyData