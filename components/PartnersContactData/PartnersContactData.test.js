import '@testing-library/jest-dom'
import { initialValuesFormPartners, formPartnersReducer } from 'reducers/formPartnersReducer'
import { LABEL_TEXTS, ERROR_TEXTS } from './texts'
import { render, fireEvent, renderHook } from '@testing-library/react'
import { TYPES_FORM_PARTNERS } from 'actions/partnersActions'
import PartnersContactData from '.'
import userEvent from '@testing-library/user-event'
import { useReducer } from 'react'

describe('Tests for the component PartnersContactData', () => {

  let component
  let user
  let resultReducer

  beforeEach(() => {

    const { result } = renderHook(() => useReducer(formPartnersReducer, initialValuesFormPartners))
    const [state, dispatch] = result.current
    const { values, errors, touched } = state

    user = userEvent.setup()

    component = render(<PartnersContactData values={values} errors={errors} touched={touched} dispatch={dispatch} />)
    resultReducer = result

  })

  test('validate if the error message of the input email is visible and work correctly, and the validations work', () => {

    const emailsToEvaluate = ['hola@pi', 'hola@', 'hola', 'pit311@pit']

    //* Get the input of the email
    const $inputEmail = component.getByLabelText(LABEL_TEXTS.email)
    expect($inputEmail).toBeVisible()

    //* Validate the css class in the span
    const $spanText = component.getByText(LABEL_TEXTS.email)
    expect($spanText).toHaveClass('content')

    emailsToEvaluate.forEach(element => {

      //* Simulate typing 
      fireEvent.change($inputEmail, { target: { value: element } })

      //* Evaluate if css class change correctly
      //expect($spanText).toHaveClass('content-name')

      //* Get the updated values of the reducer
      const [state, dispatch] = resultReducer.current
      const { values, errors, touched } = state

      component.rerender(<PartnersContactData values={values} errors={errors} touched={touched} dispatch={dispatch}/>)

      //* Obtaint the div error
      const $divTextError = component.getByText(ERROR_TEXTS.email)

      expect(values.email).toEqual(element)
      expect($divTextError).toBeVisible()

    })

  })

  test('validate if the error message of the input phone number is visible and work correctly, and the validations work', () => {

    const phoneNumbersToEvaluate = ['235486s', '234', '545678de', 'dededee', '55555']

    //* Get the input of the phone number
    const $inputPhoneNumber = component.getByLabelText(LABEL_TEXTS.phone_number)
    expect($inputPhoneNumber).toBeVisible()

    //* Validate the css class of the span
    const $spanText = component.getByText(LABEL_TEXTS.phone_number)
    expect($spanText).toHaveClass('content')

    phoneNumbersToEvaluate.forEach(element => {

      //* Simulate typing
      fireEvent.change($inputPhoneNumber, { target: { value: element } })

      //* Evaluate if css class change correctly when type
      //expect($spanText).toHaveClass('content-name')

      //* Get the updated values of the reducer
      const [state, dispatch] = resultReducer.current
      const { values, errors, touched } = state

      component.rerender(<PartnersContactData values={values} errors={errors} touched={touched} dispatch={dispatch}/>)

      //* Obtain the div error
      const $divTextError = component.getByText(ERROR_TEXTS.phone_number)

      expect($divTextError).toBeVisible()
      expect(values.phone_number).toEqual(element)

    })

  })

  test('validate if the error message of the input web page is visible and work correctly, and the validations work', () => {

    const webPagesToEvaluate = ['.hola', '.adios', 'www.h']

    //* Get the input of the web page
    const $inputWebPage = component.getByLabelText(LABEL_TEXTS.web_page)
    expect($inputWebPage).toBeVisible()

    //* Validate the css class of the span
    const $spanText = component.getByText(LABEL_TEXTS.web_page)
    expect($spanText).toHaveClass('content')

    webPagesToEvaluate.forEach(element => {

      //* Simulate typing
      fireEvent.change($inputWebPage, { target: { value: element } })

      //* Evaluate if css class change correctly when type
      //expect($spanText).toHaveClass('content-name')

      //* Get the updated values of the reducer
      const [state, dispatch] = resultReducer.current
      const { values, errors, touched } = state

      component.rerender(<PartnersContactData values={values} errors={errors} touched={touched} dispatch={dispatch} />)

      //* Obtain the div error
      const $divTextError = component.getByText(ERROR_TEXTS.web_page)

      expect($divTextError).toBeVisible()
      expect(values.web_page).toEqual(element)

    })

  })

  /* test('validate if new inputs are visible when the select origin_lead', () => { 

  }) */

})