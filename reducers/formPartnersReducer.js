import { TYPES_FORM_PARTNERS } from "actions/partnersActions";
import { TOUCHED_STATES } from "helpers/states";
import { validateCity, validateCompanyName, validateEmail, validateKwInstalled, validateLead, validateNit, validateNumberClients, validatePhoneNumber, validateWebPage, validateDate } from "helpers/validationsFormPartners";
import { formatNit, generateVerificationDigit } from 'helpers/formPartnersHelpers'

//* Initial values of the form partners, touched work when the user click in the input but not type
const initialValuesFormPartners = {
  values: {
    company_name: '',
    nit: {
      value: '',
      verificationDigit: ''
    },
    date: '',
    city_constitution: '',
    kw_installed: '',
    number_of_clients: '',
    acosol_associate: false,
    influency_city: '',
    email: '',
    phone_number: '',
    web_page: '',
    origin_lead: '',
  },
  errors: {},
  touched: {
    company_name: TOUCHED_STATES.NOT_TOUCHED,
    nit: TOUCHED_STATES.NOT_TOUCHED,
    date: TOUCHED_STATES.NOT_TOUCHED,
    city_constitution: TOUCHED_STATES.NOT_TOUCHED,
    kw_installed: TOUCHED_STATES.NOT_TOUCHED,
    number_of_clients: TOUCHED_STATES.NOT_TOUCHED,
    acosol_associate: TOUCHED_STATES.NOT_TOUCHED,
    influency_city: TOUCHED_STATES.NOT_TOUCHED,
    email: TOUCHED_STATES.NOT_TOUCHED,
    phone_number: TOUCHED_STATES.NOT_TOUCHED,
    web_page: TOUCHED_STATES.NOT_TOUCHED,
    origin_lead: TOUCHED_STATES.NOT_TOUCHED,
  }
}

function formPartnersReducer(state, action) {
  switch (action.type) {
    case (TYPES_FORM_PARTNERS.CHANGE_COMPANY_NAME): {

      //* When the action is to change the company name
      //* Validate if exist an error with the value

      let error = validateCompanyName(action.payload)

      //* If does not exist an error with the actual value and previous the state has an error in company name then delete the error
      if (!error && state.errors.company_name) {
        delete state.errors.company_name
      }

      return error ? {
        //* when does exist an error with the actual value of the company name
        //* all that the state has and update the next objects of the state
        values: { ...state.values, company_name: action.payload },
        errors: { ...state.errors, company_name: error },
        touched: { ...state.touched, company_name: TOUCHED_STATES.TOUCHED_FIRST_TIME }
      } : {
        //* when does not exist an error with the actual value of the company name
        values: { ...state.values, company_name: action.payload },
        errors: { ...state.errors },
        touched: { ...state.touched, company_name: TOUCHED_STATES.TOUCHED_OK }
      }

    }
    case (TYPES_FORM_PARTNERS.CHANGE_NIT): {

      //* Validate if does not exist an error with the actual value of the nit
      let error = validateNit(action.payload)
      let vfDigit
      //* Use this function to pass the value and then format - 111111 -> 111.111
      let formatNitValue = formatNit(action.payload)

      if (!error && state.errors.nit) {
        delete state.errors.nit
      }

      if (!error) {
        vfDigit = generateVerificationDigit(action.payload)
      }

      return error ? {
        values: {
          ...state.values, nit: {
            value: formatNitValue,
            verificationDigit: ''
          }
        },
        errors: { ...state.errors, nit: error },
        touched: { ...state.touched, nit: TOUCHED_STATES.TOUCHED_FIRST_TIME }
      } : {
        values: {
          ...state.values, nit: {
            value: formatNitValue,
            verificationDigit: vfDigit
          }
        },
        errors: { ...state.errors },
        touched: { ...state.touched, nit: TOUCHED_STATES.TOUCHED_OK }
      }

    }
    case (TYPES_FORM_PARTNERS.CHANGE_DATE_OF_FUNDATION): {
      let error = validateDate(action.payload)

      if (!error && state.errors.date) {
        delete state.errors.date
      }

      return error ? {
        values: { ...state.values, date: action.payload },
        errors: { ...state.errors, date: error },
        touched: { ...state.touched, date: TOUCHED_STATES.TOUCHED_FIRST_TIME }
      } : {
        values: { ...state.values, date: action.payload },
        errors: { ...state.errors },
        touched: { ...state.touched, date: TOUCHED_STATES.TOUCHED_OK }
      }

    }
    case (TYPES_FORM_PARTNERS.CHANGE_CITY_CONSTITUTION): {

      let { value, arrayCities } = action.payload
      let error = validateCity(value, arrayCities)

      if (!error && state.errors.city_constitution) {
        delete state.errors.city_constitution
      }

      return error ? {
        values: { ...state.values, city_constitution: value },
        errors: { ...state.errors, city_constitution: error },
        touched: { ...state.touched, city_constitution: TOUCHED_STATES.TOUCHED_FIRST_TIME }
      } : {
        values: { ...state.values, city_constitution: value },
        errors: { ...state.errors },
        touched: { ...state.touched, city_constitution: TOUCHED_STATES.TOUCHED_OK }
      }

    }
    case (TYPES_FORM_PARTNERS.CHANGE_KW_INSTALLED): {

      //* Validate that the value is number within a valid range
      let error = validateKwInstalled(action.payload)

      //* Delete the error if the value is correct
      if (!error && state.errors.kw_installed) {
        delete state.errors.kw_installed
      }

      //* Update the state
      return error ? {
        values: { ...state.values, kw_installed: action.payload },
        errors: { ...state.errors, kw_installed: error },
        touched: { ...state.touched, kw_installed: TOUCHED_STATES.TOUCHED_FIRST_TIME }
      } : {
        values: { ...state.values, kw_installed: action.payload },
        errors: { ...state.errors },
        touched: { ...state.touched, kw_installed: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    case (TYPES_FORM_PARTNERS.CHANGE_NUMBER_CLIENTES): {

      // * Validate that the value of the input number_clients is valid (only numbers allowed)
      let error = validateNumberClients(action.payload)

      // * Delete the previous errors
      if (!error && state.errors.number_of_clients) {
        delete state.errors.number_of_clients
      }

      //* Update state
      return error ? {
        values: { ...state.values, number_of_clients: action.payload },
        errors: { ...state.errors, number_of_clients: error },
        touched: { ...state.touched, number_of_clients: TOUCHED_STATES.TOUCHED_FIRST_TIME }
      } : {
        values: { ...state.values, number_of_clients: action.payload },
        errors: { ...state.errors },
        touched: { ...state.touched, number_of_clients: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    case (TYPES_FORM_PARTNERS.CHANGE_ACOSOL_ASSOCIATE): {

      //* Capture the value of the checkbox before change
      const valueBeforeChange = state.values.acosol_associate

      //* Update the value
      return {
        ...state,
        values: { ...state.values, acosol_associate: !valueBeforeChange }
      }

    }
    case (TYPES_FORM_PARTNERS.CHANGE_INFLUENCY_CITY): {

      //* Validate the value of the selected city
      let { value, arrayCities } = action.payload
      let error = validateCity(value, arrayCities)

      //* Delete the previous errors of the city field
      if (!error && state.errors.influency_city) {
        delete state.errors.influency_city
      }

      //* Update the state depending if exist an error
      return error ? {
        values: { ...state.values, influency_city: value },
        errors: { ...state.errors, influency_city: error },
        touched: { ...state.touched, influency_city: TOUCHED_STATES.TOUCHED_FIRST_TIME }
      } : {
        values: { ...state.values, influency_city: value },
        errors: { ...state.errors },
        touched: { ...state.touched, influency_city: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    case (TYPES_FORM_PARTNERS.CHANGE_EMAIL): {

      //* Validate the email
      let error = validateEmail(action.payload)

      //* Delete the previous error for the email
      if (!error && state.errors.email) {
        delete state.errors.email
      }

      //* Update the state
      return error ? {
        values: { ...state.values, email: action.payload },
        errors: { ...state.errors, email: error },
        touched: { ...state.touched, email: TOUCHED_STATES.TOUCHED_FIRST_TIME }
      } : {
        values: { ...state.values, email: action.payload },
        errors: { ...state.errors },
        touched: { ...state.touched, email: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    case (TYPES_FORM_PARTNERS.CHANGE_PHONE_NUMBER): {

      //* Validate the phone number
      let error = validatePhoneNumber(action.payload)

      //* Delete the previous phone number error
      if (!error && state.errors.phone_number) {
        delete state.errors.phone_number
      }

      //* Update the state
      return error ? {
        values: { ...state.values, phone_number: action.payload },
        errors: { ...state.errors, phone_number: error },
        touched: { ...state.touched, phone_number: TOUCHED_STATES.TOUCHED_FIRST_TIME }
      } : {
        values: { ...state.values, phone_number: action.payload },
        errors: { ...state.errors },
        touched: { ...state.touched, phone_number: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    case (TYPES_FORM_PARTNERS.CHANGE_WEB_PAGE): {

      //* Validate that the direction of the web page is correct
      let error = validateWebPage(action.payload)

      //* Delete the previous web page error when the input is correct
      if (!error && state.errors.web_page) {
        delete state.errors.web_page
      }

      //* Update the state
      return error ? {
        values: { ...state.values, web_page: action.payload },
        errors: { ...state.errors, web_page: error },
        touched: { ...state.touched, web_page: TOUCHED_STATES.TOUCHED_FIRST_TIME }
      } : {
        values: { ...state.values, web_page: action.payload },
        errors: { ...state.errors },
        touched: { ...state.touched, web_page: TOUCHED_STATES.TOUCHED_OK }
      }
    }
    case (TYPES_FORM_PARTNERS.CHANGE_ORIGIN_LEAD): {

      //* Validate the selection of the input
      let error = validateLead(action.payload)

      //* Delete the previous errors
      if (!error && state.errors.origin_lead) {
        delete state.errors.origin_lead
      }

      //* Update the state
      return error ? {
        values: { ...state.values, origin_lead: action.payload },
        errors: { ...state.errors, origin_lead: error },
        touched: { ...state.touched, origin_lead: TOUCHED_STATES.TOUCHED_FIRST_TIME }
      } : {
        values: { ...state.values, origin_lead: action.payload },
        errors: { ...state.errors },
        touched: { ...state.touched, origin_lead: TOUCHED_STATES.TOUCHED_OK }
      }

    }
    default:
      break
  }
}

export { initialValuesFormPartners, formPartnersReducer }