// @param company_name : String
const validateCompanyName = (company_name) => {

    let error
    let regex = /^[a-zA-Z0-9 ,.'-]+$/i
  
    //* If the length of the string is less than 3 or greatest than 25 or does not comply with the regex
    //* then generate the error
    if (company_name.length < 3 || company_name.length > 25 || !regex.test(company_name)) {
      error = 'El nombre de tu compañía es erroneo'
    }
  
    return error
  
  }
  
  // @param nit : String
  const validateNit = (nit) => {
  
    //* the value of the nit has point, 111.111.111
    //* Replace all points in the nit to nothing
    let nitWithoutPoint = nit.replaceAll('.', '')
  
    let error
    let regex = /^[0-9]*$/
  
    //* If the length of the nit is different of 9 or does not comply with the regex
    if (nitWithoutPoint.length !== 9 || !regex.test(nitWithoutPoint)) {
      error = 'El NIT de tu compañía no es valido'
    }
  
    return error
  
  }
  
  // @param input_date : String
  const validateDate = (input_date) => {
  
    let error
  
    //* Format of the input date YYYY-MM-DD
    let partsOfTheDate = input_date.split('-')
  
    const day = Number(partsOfTheDate[2])
    const month = Number(partsOfTheDate[1])
    const year = Number(partsOfTheDate[0])
  
    const date = new Date()
    const actualYear = date.getFullYear()
    const actualMonth = date.getMonth() + 1
    const actualDay = date.getDate()
  
    if (input_date.length === 0 || year > actualYear
      || year < 1950) {
      error = "La fecha de constitución es erronea."
    }
  
    if (partsOfTheDate[1] > actualMonth && year === actualYear) {
      error = "La fecha de constitución es erronea."
  
    }
  
    if (day > actualDay && year === actualYear && month === actualMonth) {
      error = "La fecha de constitución es erronea."
    }
  
    return error
  
  }
  
  // @param city : String
  const validateCity = (city, arrayMunicipalities) => {
  
    let error
    let regex = /^[0-9A-Za-z\s\-]+$/
  
    //* Search in the array that contains all cities in Colombia, also verify that the length is different of 0
    if (city.length === 0 ||
      !arrayMunicipalities.find(municipality => municipality.value === city)
     /*  !regex.test(city) */) {
      error = "La ciudad de constitución es erronea."
    }
  
    return error
  
  }
  
  // @param kw_installed : String
  const validateKwInstalled = (kw_installed) => {
  
    let error
    let regex = /^[0-9]*$/
  
    if (kw_installed.length === 0 || kw_installed.length > 7 || kw_installed.length < 1 || !regex.test(kw_installed)) {
      error = 'El número de kw instalados es incorrecto'
    }
  
    return error
  
  }
  
  // @param number_clients : String
  const validateNumberClients = (number_clients) => {
  
    let error
    let regex = /^[0-9]*$/
  
    if (number_clients.length === 0 || number_clients.length < 1 || number_clients.length > 4 || !regex.test(number_clients)) {
      error = 'El número de clientes que ingresaste es erroneo.'
    }
  
    return error
  }
  
  // @param email : String
  const validateEmail = (email) => {
  
    let error
    let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
  
    if (email.length > 25 || email.length < 3 || !regex.test(email)) {
      error = "El email no es correcto"
    }
  
    return error
  
  }
  
  // @param phone_number : String
  const validatePhoneNumber = (phone_number) => {
  
    let error
    let regex = /^[0-9]*$/
  
    if (phone_number.length !== 7 || !regex.test(phone_number)) {
  
      error = 'Número de teléfono invalido'
  
      if (phone_number.length === 10 && regex.test(phone_number)) {
        error = undefined
      }
    }
  
    return error
  
  }
  // @param web_page : String
  const validateWebPage = (web_page) => {
  
    let error
    let regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
  
  
    if (email.length > 25 || email.length < 3 || !regex.test(web_page)) {
  
      error = "La dirección introducida es incorrecta"
    }
  
    return error
  
  }
  
  // @origin_lead : String
  const validateLead = (numero_cuotas) => {
  
    let error
    let regex = /^[a-z ,.'-]+$/i
    let possibleOrigins = ["Acosol", "Instalador referido", "Pauta", "Evento"]
  
    if (!regex.test(numero_cuotas) || !possibleOrigins.find(origin => origin === numero_cuotas)) {
  
      error = "Selección incorrecta"
    }
  
    return error
  }
  
  // @name : String
  const validateName = (name) => {
  
    let error
    let regex = /^[a-z ,.'-]+$/i
  
    if (name.length > 30 || !regex.test(name)) {
      error = "Introduce un nombre correcto"
    }
  
    return error
  
  }
  
  // @param event : String
  const validateNameEvent = (event) => {
  
    let error
    let regex = /^[a-z0-9 ,.'-]+$/i
  
    if (event.length > 10 || !regex.test(event)) {
      error = 'Nombre del evento invalido'
    }
  
    return error
  
  }
  
  export {
    validateCompanyName,
    validateNit,
    validateDate,
    validateCity,
    validateKwInstalled,
    validateNumberClients,
    validateEmail,
    validatePhoneNumber,
    validateWebPage,
    validateLead,
    validateName,
    validateNameEvent
  }