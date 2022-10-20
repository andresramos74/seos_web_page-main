import '@testing-library/jest-dom'
import { act, fireEvent, render, renderHook } from '@testing-library/react'
import { formSavingReducer, initialStateFormSaving } from 'reducers/formSavingReducer'
import { TYPES_FORM_SAVING } from 'actions/formSavingActions'
import { useReducer } from 'react'
import FormSaving from '.'

describe('Tests for the saving form', () => {

  let component
  let resultReducer  

  beforeEach(() => {
    component = render(<FormSaving />)
    const { result } = renderHook(() => useReducer(formSavingReducer, initialStateFormSaving))

    resultReducer = result

  })

  test('Capture the correct input', () => {

    const textToEvaluate = '1234d'
    const [, dispatch] = resultReducer.current
    const inputInvoiceValue = component.getByLabelText('Valor de tu factura:')
    
    fireEvent.change(inputInvoiceValue, { target: { value: textToEvaluate } })

    act(() => {
      dispatch({ type: TYPES_FORM_SAVING.CHANGE_INVOICE_VALUE, payload: textToEvaluate })
    })

    const [state,] = resultReducer.current

    expect(state.values.invoice_value).toEqual(textToEvaluate)
    expect(component.getByText('Por favor introduce una cifra válida, sin puntos ni caracteres especiales')).toBeInTheDocument()

  })

})