import '@testing-library/jest-dom'
import { initialValuesFormPartners, formPartnersReducer } from 'reducers/formPartnersReducer'
import { render, renderHook, fireEvent } from '@testing-library/react'
import { TYPES_FORM_PARTNERS } from 'actions/partnersActions'
import { useReducer } from 'react'
import { LABEL_TEXTS, ERROR_TEXTS } from './texts'
import PartnersCompanyData from '.'

describe('Tests for the component PartnersCompanyData', () => {

  let component
  let resultReducer

  beforeEach(() => {

    const { result } = renderHook(() => useReducer(formPartnersReducer, initialValuesFormPartners))
    const [state, dispatch] = result.current
    const { values, errors, touched } = state

    component = render(<PartnersCompanyData values={values} errors={errors} touched={touched} dispatch={dispatch} />)
    resultReducer = result

  })

  test('The error message for the input kw_installed is in the component, and the validation work', () => {

    const textToEvaluate = '95hc32'

    //* Get the input kw_installed
    const $inputKwInstalled = component.getByLabelText(LABEL_TEXTS.kw_installed)
    expect($inputKwInstalled).toBeVisible()

    //* Event change to update the values of the reducer
    fireEvent.change($inputKwInstalled, { target: { value: textToEvaluate } })

    //* Obtain the new values in the reducer
    const [state,] = resultReducer.current
    const { values, errors, touched } = state

    //* Re render the component to see the div text error
    component.rerender(<PartnersCompanyData values={values} errors={errors} touched={touched} />)

    //* Get the div text error if doesnt find the div error then the validation doesnt work
    const $divTextError = component.getByText(ERROR_TEXTS.kw_installed)

    //* Validate the value in the reducer and the div text error is visible in the component
    expect(values.kw_installed).toEqual(textToEvaluate)
    expect($divTextError).toBeVisible()

  })

  test('The error message for the input number_clients is in the component, and the validations work', () => {

    const textToEvaluate = '3334s4'

    //* Get the input number_client and evaluate if is visible
    const $inputNumberClients = component.getByLabelText(LABEL_TEXTS.number_clients)
    expect($inputNumberClients).toBeVisible()

    //* Event change to update the values of the reducers
    fireEvent.change($inputNumberClients, { target: { value: textToEvaluate } })

    //* Obtain the new values in the reducer
    const [state,] = resultReducer.current
    const { values, errors, touched } = state

    component.rerender(<PartnersCompanyData values={values} errors={errors} touched={touched} />)

    //* Get the div text error if doesnt find the div error then the validation doesnt work
    const $divTextError = component.getByText(ERROR_TEXTS.number_clients)
    
    //* Validate the value in the reducer and the div text error is visible in the component
    expect(values.number_of_clients).toEqual(textToEvaluate)
    expect($divTextError).toBeVisible()

  })

  test('The error messages of the dropdown list influeny city is in the component, and the validations work', () => { })

})