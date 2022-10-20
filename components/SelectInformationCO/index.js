import { useState, useEffect } from 'react'
import { filterDepartments, mapDepartments, mapMunicipalities, mapLocalities } from 'helpers/actions_with_departments_data'
import DatalistInput from 'react-datalist-input'
import { TOUCHED_STATES } from 'helpers/states'
import { TYPES_FORM_SAVING } from 'actions/formSavingActions'
import { useColombia } from 'hooks/useColombia'

// * Filter all departments and only left the departments with coverage, before map the departments to the values
// * to the DatalistInput component

const SelectInformationCO = ({ goToForm, values, errors, touched, dispatch }) => {

  //* Use the hook useColombia to obtain the departments of Colombia where SEOS can bring the service
  const {data, departments, municipalities, setMunicipalities} = useColombia()

  /*  useEffect(() => {
 
     $articleSection.current.querySelector('select').value = ""
     setmunicipalities(null)
 
   }, [goToForm]) */

  useEffect(() => {

    // * If exist any error with the department then doesnt get the municipalities
    if (errors.department || values.department === "Bogotá D.C." || values.department === "") {
      setMunicipalities(null)
      return
    }

    const municipalitiesOfDepartment = mapMunicipalities(data, values.department)
    setMunicipalities(municipalitiesOfDepartment)

  }, [errors.department, values.department])

  const updateSelectValues = (fieldName, value) => {

    const departmentsScope = departments
    const municipalitiesScope = municipalities
    const localitiesScope = mapLocalities()
    
    if (fieldName === "department") {
      dispatch({ type: TYPES_FORM_SAVING.CHANGE_DEPARTMENT, payload: { value, departments: departmentsScope } })
    }

    if (fieldName === "municipality") {
      dispatch({ type: TYPES_FORM_SAVING.CHANGE_MUNICIPALITY, payload: { value, municipalities: municipalitiesScope } })
    }

    if (fieldName === "locality") {
      dispatch({ type: TYPES_FORM_SAVING.CHANGE_LOCALITY, payload: { value, localities: localitiesScope } })
    }

  }

  const handleChange = (event, fieldName) => {
    
    event.target.name = fieldName
    const value = event.target.value

    updateSelectValues(fieldName, value)

    if (event.target.value === "Bogotá D.C.") {
      setMunicipalities(null)
    }

  }

  const handleClick = (event, fieldName) => {
    

    if (!event.target.classList.contains('react-datalist-input__listbox-option')) return

    const value = event.target.getAttribute("aria-label")

    updateSelectValues(fieldName, value)

  }

  const handleBlur = (event, fieldName) => {
    
    const value = event.target.value
    updateSelectValues(fieldName, value)

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
    <section>
      <article className='w-full'>
        {
          departments &&
          <DatalistInput
            label="Selecciona tu departamento"
            onSelect={(selectedItem) => dispatch({
              type: TYPES_FORM_SAVING.CHANGE_DEPARTMENT,
              payload: { value: selectedItem.value, departments: departments }
            })}
            onChange={(e) => handleChange(e, 'department')}
            onBlur={(e) => handleBlur(e, 'department')}
            onClick={(e) => handleClick(e, 'department')}
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
            items={departments}
          />
        }
      </article>
      {(errors.department || touched?.department === TOUCHED_STATES.TOUCHED_FIRST_TIME) ?
        <div className='text-red-warning mb-8' data-cy="error-department">{errors.department}</div>
        :
        <p className='mb-8'></p>
      }

      {municipalities &&
        <article className="w-full">
          {
            departments &&
            <DatalistInput
              label="Selecciona tu municipio"
              onSelect={(selectedItem) => dispatch({
                type: TYPES_FORM_SAVING.CHANGE_MUNICIPALITY,
                payload: { value: selectedItem.value, municipalities: municipalities }
              })}
              onChange={(e) => handleChange(e, 'municipality')}
              onBlur={(e) => handleBlur(e, 'municipality')}
              onClick={(e) => handleClick(e, 'municipality')}
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
        </article>
      }
      {(errors.municipality || (touched?.municipality === TOUCHED_STATES.TOUCHED_FIRST_TIME )) ?
        <div className='text-red-warning mb-4' data-cy="error-municipality">{errors.municipality}</div>
        :
        <p className='mb-4'></p>
      }
      {values.department === "Bogotá D.C." &&
        <article className="w-full">
          {
            departments &&
            <DatalistInput
              label="Selecciona tu localidad:"
              onSelect={(selectedItem) => {
                const localitiesScope = mapLocalities()

                dispatch({
                  type: TYPES_FORM_SAVING.CHANGE_LOCALITY,
                  payload: { value: selectedItem.value, localities: localitiesScope }
                })
              }}
              onChange={(e) => handleChange(e, 'locality')}
              onBlur={(e) => handleBlur(e, 'locality')}
              onClick={(e) => handleClick(e, 'locality')}
              inputProps={{
                className: 'outline-none w-full border focus:border-seos-blue-light rounded-[3px] p-1 pl-1'
              }}
              labelProps={{
                className: 'text-sm'
              }}
              items={mapLocalities()}
            />
          }
        </article>
      }
      {
        (values.department === "Bogotá D.C." && (errors.locality || touched?.locality === TOUCHED_STATES.TOUCHED_FIRST_TIME)) ?
          <div className='text-red-warning mb-4' data-cy="error-locality">{errors.locality}</div>
          :
          <p className='mb-4'></p>
      }
    </section>
  )
}

export default SelectInformationCO