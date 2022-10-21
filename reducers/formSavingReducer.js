import { TYPES_FORM_SAVING } from 'actions/formSavingActions'
import { TOUCHED_STATES } from 'helpers/states'
import {
  validateDepartment,
  validateHoursWhithoutElectricity,
  validateInvoiceValue,
  validateLocality,
  validateMunicipality,
  validateStratum
} from 'helpers/validationsForms';

export const initialStateFormSaving = {
  values: {
    invoice_value: '',
    stratum: '',
    department: '',
    municipality: '',
    locality: '',
    hours_without_electricity: '',
    rural: null
  },
  errors: {},
  touched: {
    invoice_value: TOUCHED_STATES.NOT_TOUCHED,
    stratum: TOUCHED_STATES.NOT_TOUCHED,
    department: TOUCHED_STATES.NOT_TOUCHED,
    municipality: TOUCHED_STATES.NOT_TOUCHED,
    locality: TOUCHED_STATES.NOT_TOUCHED,
    hours_without_electricity: TOUCHED_STATES.NOT_TOUCHED,
  }
}

export function formSavingReducer(state, action) {

  switch (action.type) {
    case (TYPES_FORM_SAVING.CHANGE_INVOICE_VALUE): {

      const value = action.payload
      
      let error = validateInvoiceValue(value.substring(0, value.length - 3))

      if (!error && state.errors.invoice_value) {
        delete state.errors.invoice_value
      }

      return error ? {
        ...state,
        values: { ...state.values, invoice_value: value.substring(0, value.length - 3) },
        errors: { ...state.errors, invoice_value: error },
        touched: { ...state.touched, invoice_value: TOUCHED_STATES.TOUCHED_FIRST_TIME }

      } : {
        ...state,
        values: { ...state.values, invoice_value: value.substring(0, value.length - 3) },
        errors: { ...state.errors },
        touched: { ...state.touched, invoice_value: TOUCHED_STATES.TOUCHED_OK }

      }

    }
    case (TYPES_FORM_SAVING.CHANGE_STRATUM): {
      let error = validateStratum(action.payload)

      if (!error && state.errors.stratum) {
        delete state.errors.stratum
      }

      return error ? {
        ...state,
        values: { ...state.values, stratum: action.payload },
        errors: { ...state.errors, stratum: error },
        touched: { ...state.touched, stratum: TOUCHED_STATES.TOUCHED_FIRST_TIME }

      } : {
        ...state,
        values: { ...state.values, stratum: action.payload },
        errors: { ...state.errors },
        touched: { ...state.touched, stratum: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    case (TYPES_FORM_SAVING.CHANGE_HOURS_WITHOUT_ENERGY): {
      let error = validateHoursWhithoutElectricity(action.payload)

      //* Delete the error for hours without electricity, before check if no error ocurred and if the value has errors
      if (!error && state.errors.hours_without_electricity) {
        delete state.errors.hours_without_electricity
      }

      return error ? {
        ...state,
        values: { ...state.values, hours_without_electricity: action.payload },
        errors: { ...state.errors, hours_without_electricity: error },
        touched: { ...state.touched, hours_without_electricity: TOUCHED_STATES.TOUCHED_FIRST_TIME }

      } : {
        ...state,
        values: { ...state.values, hours_without_electricity: action.payload },
        errors: { ...state.errors },
        touched: { ...state.touched, hours_without_electricity: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    case (TYPES_FORM_SAVING.CHANGE_DEPARTMENT): {
      

      const { value, departments } = action.payload
      let error = validateDepartment(value, departments)

      if (!error && state.errors.department) {
        delete state.errors.department
      }

      if (error && state.errors.municipality) {
        delete state.errors.municipality
      }

      if (error && state.errors.locality) {
        delete state.errors.locality
      }

      return error ? {
        ...state,
        values: { ...state.values, department: value },
        errors: { ...state.errors, department: error },
        touched: { 
          ...state.touched, 
          department: TOUCHED_STATES.TOUCHED_FIRST_TIME, 
          municipality: TOUCHED_STATES.NOT_TOUCHED,
          locality: TOUCHED_STATES.NOT_TOUCHED
        }

      } : {
        ...state,
        values: { ...state.values, department: value },
        errors: { ...state.errors },
        touched: { ...state.touched, department: TOUCHED_STATES.TOUCHED_OK }
      }

    }
    case (TYPES_FORM_SAVING.CHANGE_MUNICIPALITY): {
      
      const { value, municipalities } = action.payload
      let error = validateMunicipality(value, municipalities)

      if (!error && state.errors.municipality) {
        delete state.errors.municipality
      }

      return error ? {
        ...state,
        values: { ...state.values, municipality: value },
        errors: { ...state.errors, municipality: error },
        touched: { ...state.touched, municipality: TOUCHED_STATES.TOUCHED_FIRST_TIME }

      } : {
        ...state,
        values: { ...state.values, municipality: value },
        errors: { ...state.errors },
        touched: { ...state.touched, municipality: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    case (TYPES_FORM_SAVING.CHANGE_LOCALITY): {
      const { value, localities } = action.payload
      let error = validateLocality(value, localities)

      if (!error && state.errors.locality) {
        delete state.errors.locality
      }

      return error ? {
        ...state,
        values: { ...state.values, locality: value },
        errors: { ...state.errors, locality: error },
        touched: { ...state.touched, locality: TOUCHED_STATES.TOUCHED_FIRST_TIME }

      } : {
        ...state,
        values: { ...state.values, locality: value },
        errors: { ...state.errors },
        touched: { ...state.touched, locality: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    case (TYPES_FORM_SAVING.CHANGE_RURAL): {

      let value = null

      if(state.values.rural !== action.payload){
        value = true
      }

      return {
        ...state,
        values: { ...state.values, rural: value },
      }

    }
    default:
      break;
  }
}
