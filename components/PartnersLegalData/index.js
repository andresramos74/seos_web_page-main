import { TYPES_FORM_PARTNERS } from "actions/partnersActions"
import { generateMunicipalities, generateValidYears } from "helpers/formPartnersHelpers"
import { TOUCHED_STATES } from "helpers/states"
import { useColombia } from "hooks/useColombia"
import { useEffect, useState, startTransition } from "react"
import DatalistInput from "react-datalist-input"

const PartnersLegalData = ({ setStageForm, values, errors, touched, dispatch }) => {

  const { data, departments, municipalities, setMunicipalities } = useColombia()
  const [spanActive, setSpanActive] = useState(TOUCHED_STATES.NOT_TOUCHED)
  const [actualDate, setActualDate] = useState(() => {
    const date = new Date()

    return `${date.getFullYear().toString()}-${(date.getMonth() + 1).toString()}-${date.getDate().toString()}`
  })

  useEffect(() => {

    // ! When the component is render for the first time data is null, for this reason when is null return
    if (data === null) return

    const cities = generateMunicipalities(data)
    setMunicipalities(cities)

  }, [departments, data])

  //* Use the function updateFormValues to update the values of the reducer depend of the input that the user type
  const updateFormValues = (value, name) => {

    if (name === 'company_name') {
      dispatch({ type: TYPES_FORM_PARTNERS.CHANGE_COMPANY_NAME, payload: value })
    }

    if (name === 'nit') {
      dispatch({ type: TYPES_FORM_PARTNERS.CHANGE_NIT, payload: value })
    }

    if (name === 'date') {
      dispatch({ type: TYPES_FORM_PARTNERS.CHANGE_DATE_OF_FUNDATION, payload: value })
    }

    if (name === 'city_constitution') {
      dispatch({
        type: TYPES_FORM_PARTNERS.CHANGE_CITY_CONSTITUTION, payload: {
          value,
          arrayCities: municipalities
        }
      })
    }
  }

  const handleChange = (event, fieldName) => {

    const value = event.target.value
    const name = fieldName

    updateFormValues(value, name)

  }

  const showTextDate = ($labelParent) => {

    if ($labelParent.getAttribute('id') === 'date') {
      startTransition(() => {
        setSpanActive(TOUCHED_STATES.TOUCHED_FIRST_TIME)
      })
    }

  }

  const changeClassSpan = (event) => {

    const $labelParent = event.target.parentNode
    const $span = $labelParent.querySelector('span')
    const $input = $labelParent.querySelector('input')

    //* Add and delete css classes to generate the efect of the label
    $span.classList.add('content-name')
    $span.classList.add('transition')
    $span.classList.remove('content')

    //* This function allows to pass the opacity of the input date to 
    showTextDate($labelParent)

    $input.focus()
  }



  const changeClassLabel = (event) => {

    const $sectionParent = event.target.parentNode
    const $label = event.target
    const $input = $sectionParent.querySelector('input')

    //* Add and delete css classes to generate the efect of the label
    $label.classList.add('content-name')
    $label.classList.add('transition')
    $label.classList.remove('content')

    $input.focus()

  }

  const handleBlurInput = (event, fieldName) => {

    const $labelParent = event.target.parentNode
    const $span = $labelParent.querySelector('span')

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

    updateFormValues(value, fieldName)

  }

  const handleBlurInputDate = (event) => {
    const name = event.target.name
    const value = event.target.value

    updateFormValues(value, name)

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
    <article className='px-3 py-4 md:w-2/4 w-full border-b border-b-gray md:border-r md:border-r-gray md:border-b-0'>
      <h1 className='font-semibold'>Información legal:</h1>
      <section className='relative h-8 mt-7' >
        <label id="company_name">
          <span
            className='content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full'
            onClick={changeClassSpan}
          >Nombre de tu compañía:</span>
          <input
            name="company_name"
            className='w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1'
            onFocus={changeClassSpan}
            onBlur={(e) => handleBlurInput(e, "company_name")}
            onChange={(e) => handleChange(e, "company_name")}
            value={values.company_name}
            aria-labelledby='company_name'
          />
        </label>
      </section >
      {
        (errors.company_name || touched.company_name === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
          <div className='text-red-warning mb-8 px-1 text-sm'>{errors.company_name}</div>
          :
          <p className='mb-8'></p>
      }
      <section className='relative flex h-8' >
        <label id="nit" className="w-[85%]">
          <span
            className='content absolute transition duration-300 bottom-0 z-10 p-1 pl-2'
            onClick={changeClassSpan}
          >NIT de tu compañía:</span>
          <input
            name="nit"
            className='outline-none w-full border border-gray focus:border-seos-blue-light rounded-[3px] p-1 pl-1'
            onFocus={changeClassSpan}
            onBlur={(e) => handleBlurInput(e, "nit")}
            onChange={(e) => handleChange(e, "nit")}
            value={values.nit.value}

            aria-labelledby='nit'
          />
        </label>
        <p className='mx-auto leading-[2.3rem]'> - </p>
        <input
          type="text"
          className="outline-none w-[10%] rounded-[3px] p-1 border bg-gray text-center"
          value={values.nit.verificationDigit}
          disabled
        />
      </section >
      {
        (errors.nit || touched.nit === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
          <div className='text-red-warning mb-8 px-1 text-sm'>{errors.nit}</div>
          :
          <p className='mb-8'></p>
      }
      <section className='relative h-8 mt-4'>
        <label id='date'>
          <span
            className='content text-black absolute w-full transition duration-300 bottom-0 z-10 p-1 pl-2'
            onClick={changeClassSpan}
          >Fecha de constitución:</span>
          <input
            type="date"
            name="date"
            className={`outline-none w-full h-8 border text-black ${spanActive === TOUCHED_STATES.NOT_TOUCHED ? "text-opacity-0" : "text-opacity-100"} border-gray focus:border-seos-blue-light rounded-[3px] p-1 pl-1`}
            min="1950-01-01"
            max={actualDate}
            onBlur={handleBlurInputDate}
            onFocus={changeClassSpan}
            onChange={(e) => handleChange(e, "date")}
            value={values.year}
            aria-labelledby='date'
          />
        </label>
      </section>
      {
        (errors.date || touched.date === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
          <div className='text-red-warning mb-8 px-1 pt-[0.25px] text-sm'>{errors.date}</div>
          :
          <p className='mb-8'></p>
      }
      <section>
        {
          municipalities &&
          <DatalistInput
            label="Ciudad de constitución:"
            onSelect={(selectedItem) => dispatch({
              type: TYPES_FORM_PARTNERS.CHANGE_CITY_CONSTITUTION,
              payload: { value: selectedItem.id, arrayCities: municipalities }
            })}
            onChange={(e) => handleChange(e, 'city_constitution')}
            onBlur={(e) => handleBlurDataList(e, 'city_constitution')}
            onClick={(e) => handleClickDataListOption(e, 'city_constitution')}
            inputProps={{
              className: 'outline-none w-full border border-gray focus:border-seos-blue-light rounded-[3px] p-1 pl-1',
              "aria-labelledby": "city_constitution",
              onFocus: focusInputChangeLabel,
              onBlur: blurInputChangeLabel
            }}
            labelProps={{
              className: 'content absolute transition duration-100 bottom-0 z-10 p-1 pl-2 w-full',
              id: "city_constitution",
              onClick: changeClassLabel,
              
            }}
            items={municipalities}
          />
        }
      </section>
      {
        (errors.city_constitution || touched.city_constitution === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
          <div className='text-red-warning mb-2 px-1 text-sm'>{errors.city_constitution}</div>
          :
          <p className='mb-4'></p>
      }
      <style jsx>{
        `     


        `
      }</style>
    </article>
  )

}

export default PartnersLegalData