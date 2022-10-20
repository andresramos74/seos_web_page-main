import '@testing-library/jest-dom'
import { generateVerificationDigit } from 'helpers/formPartnersHelpers'
import { initialValuesFormPartners, formPartnersReducer } from 'reducers/formPartnersReducer'
import { render, fireEvent, renderHook, waitFor } from '@testing-library/react'
import PartnersLegalData from '.'
import React, { useReducer } from 'react'

describe('Testing the component PartnersLegalData', () => {

  let component
  let resultReducer

  beforeEach(() => {

    //* Call the hook useReducer 
    const { result } = renderHook(() => useReducer(formPartnersReducer, initialValuesFormPartners))
    const [state, dispatch] = result.current
    const { values, errors, touched } = state

    //* Render the component with props
    component = render(<PartnersLegalData values={values} errors={errors} touched={touched} dispatch={dispatch} />)
    resultReducer = result

  })

  /* test('Check if the styles of the span its ok', () => {

    const $spanCompanyName = component.getByText('Nombre de tu compañía:')
    const $spanNit = component.getByText('Introduce el número de NIT de tu compañía:')

    fireEvent.click($spanCompanyName)
    expect($spanCompanyName).toHaveClass('content-name')
    expect($spanNit).toHaveClass('content')
    expect($spanYear).toHaveClass('content')

    component.debug()

    fireEvent.click($spanNit)
    expect($spanNit).toHaveClass('content-name')

  })
 */

  test('test to see if the error message of the input company_name is in the component and in the reducer', async () => {

    const textToEvaluate = 'compañía para evaluar 365 días y horas y semanas y meses'

    //* Obtain the input company_name from the component
    const $inputCompanyName = component.getByLabelText('Nombre de tu compañía:')
    expect($inputCompanyName).toBeVisible()

    //* Event change to update the value of the input
    fireEvent.change($inputCompanyName, { target: { value: textToEvaluate } })

    //* Get the new values of the reducer with result.current
    const [state, dispatch] = resultReducer.current
    const { values, errors, touched } = state

    //* It´s necessary to rerender the component to update the value in the input and if has error
    component.rerender(<PartnersLegalData values={values} errors={errors} touched={touched} dispatch={dispatch} />)

    //* Get the div with the error
    const $divTextError = component.getByText('El nombre de tu compañía es erroneo')

    //* Evaluate if the value is in the values of the reducer
    expect(state.values.company_name).toEqual(textToEvaluate)
    expect($inputCompanyName.value).toEqual(textToEvaluate)
    expect($divTextError).toBeVisible()

  })

  test('the nit number is correcty formatted and the verification digit is generated correctly', () => {

    const textToEvaluate = '901115116'


    const $inputNit = component.getByLabelText('NIT de tu compañía:')
    expect($inputNit).toBeVisible()

    fireEvent.change($inputNit, { target: { value: textToEvaluate } })

    //* Get the new values of the reducer with result.current, the dispatch function is triggered when use the fireEvent
    const [state, dispatch] = resultReducer.current
    const { values, errors, touched } = state

    //* It´s necessary to rerender the component to update the value in the input and if has error
    component.rerender(<PartnersLegalData values={values} errors={errors} touched={touched} dispatch={dispatch} />)

    const verificationDigit = generateVerificationDigit(textToEvaluate)

    expect(state.values.nit.value).toEqual('901.115.116')
    expect($inputNit.value).toEqual('901.115.116')
    expect(state.values.nit.verificationDigit).toEqual(verificationDigit)

  })

  test('test to see if the error message of the input input_nit is in the component and in the reducer', () => {

    const textToEvaluate = '99988877766'


    const $inputNit = component.getByLabelText('NIT de tu compañía:')
    expect($inputNit).toBeVisible()

    fireEvent.change($inputNit, { target: { value: textToEvaluate } })

    //* Get the new values of the reducer with result.current
    const [state, dispatch] = resultReducer.current
    const { values, errors, touched } = state

    //* It´s necessary to rerender the component to update the value in the input and if has error
    component.rerender(<PartnersLegalData values={values} errors={errors} touched={touched} dispatch={dispatch} />)

    const $divTextError = component.getByText('El NIT de tu compañía no es valido')

    expect(values.nit.value).toEqual('999.888.777.66')
    expect($inputNit.value).toEqual('999.888.777.66')
    expect($divTextError).toBeVisible()

  })

  /* test('the error message of the dropdown list to the years is in the component and in the reducer', () => {

    const yearToEvaluate = '202'

    const $inputYear = component.getByLabelText('Año de constitución:')
    expect($inputYear).toBeVisible()

    fireEvent.change($inputYear, { target: { value: yearToEvaluate } })

    //* Get the new values of the reducer with result.current
    const [state, dispatch] = resultReducer.current
    const { values, errors, touched } = state

    //* It´s necessary to rerender the component to update the value in the input and if has error
    component.rerender(<PartnersLegalData values={values} errors={errors} touched={touched} dispatch={dispatch} />)

    const $divTextError = component.getByText('El año es erroneo.')

    expect($inputYear.value).toEqual(yearToEvaluate)
    expect(values.year).toEqual(yearToEvaluate)
    expect($divTextError).toBeVisible()

  }) */


  /* test('can select a year in the dropdown list of the years', () => {

    const yearToEvaluate = '2022'

    const $inputYear = component.getByLabelText('Año de constitución:')
    expect($inputYear).toBeVisible()

    fireEvent.click($inputYear)

    fireEvent.change($inputYear, { target: { value: yearToEvaluate } })

    //* Get the new values of the reducer with result.current
    const [state, dispatch] = resultReducer.current
    const { values, errors, touched } = state

    //* It´s necessary to rerender the component to update the value in the input and if has error
    component.rerender(<PartnersLegalData values={values} errors={errors} touched={touched} dispatch={dispatch} />)

    const $year = component.getByText(yearToEvaluate)
    expect($year).toBeVisible()
    fireEvent.click($year)

    expect($inputYear.value).toEqual(yearToEvaluate)
    expect(state.values.year).toEqual(yearToEvaluate)

  }) */

  /* test('the error message of the dropdown list to the city is in the component and in the reducer', () => {

    const cityToEvaluate = 'Bogo'

    const $inputCity = component.getByLabelText('Ciudad de constitución:')
    expect($inputCity).toBeVisible()

    fireEvent.change($inputCity, { target: { value: cityToEvaluate } })
    
    //* Get the new values of the reducer with result.current
    const [state, dispatch] = resultReducer.current
    const { values, errors, touched } = state

    //* It´s necessary to rerender the component to update the value in the input and if has error
    component.rerender(<PartnersLegalData values={values} errors={errors} touched={touched} dispatch={dispatch} />)

    const $divTextError = component.getByText('La ciudad de constitución es erronea.')

    expect($inputCity.value).toEqual(cityToEvaluate)
    expect(values.city_constitution).toEqual(cityToEvaluate)
    expect($divTextError).toBeVisible()

  }) */

  /* test('can select a city in the dropdown list of the years', async () => {

    const cityToEvaluate = 'Bogotá D.C.'
    let $inputCity

    jest.spyOn(React, 'useEffect').mockImplementation((f) => f())
    expect($inputCity).toBeVisible()

    component.debug($inputCity)
    
    fireEvent.click($inputCity)
    fireEvent.change($inputCity, { target: { value: cityToEvaluate } })

    //* Get the new values of the reducer with result.current
    const [state, dispatch] = resultReducer.current
    const { values, errors, touched } = state

    //* It´s necessary to rerender the component to update the value in the input and if has error
    component.rerender(<PartnersLegalData values={values} errors={errors} touched={touched} dispatch={dispatch} />)

    const $city = component.getByText(cityToEvaluate)
    expect($city).toBeVisible()
    fireEvent.click($year)

    expect($inputCity.value).toEqual(cityToEvaluate)
    expect(values.city_constitution).toEqual(cityToEvaluate)

  }) */

})