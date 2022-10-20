const localitiesInBogota = ['Antonio Nariño', 'Barrios Unidos', 'Bosa', 'Chapinero', 'Ciudad Bolivar', 'Engativa', 'Fontibón',
  'Kennedy', 'La Candelaria', 'Los Martires', 'Puente Aranda', 'Rafael Uribe Uribe', 'San Cristobal', 'Santa Fe', 'Suba', 'Sumapaz',
  'Teusaquillo', 'Tunjuelito', 'Usaquen', 'Usme']

const validateInvoiceValue = (invoice_value) => {

  const invoiceValueWithout$ = invoice_value.substring(2, invoice_value.length)
  const invoiceWithoutPoints = invoiceValueWithout$.replaceAll('.','')

  let regex = /^[0-9]*$/
  let error

  // *
  if ((invoiceWithoutPoints.length >= 0 && invoiceWithoutPoints.length < 5) || invoiceWithoutPoints.length > 10
    || !regex.test(invoiceWithoutPoints)) {
    error = "Por favor introduce una cifra válida, sin puntos ni caracteres especiales"
  }

  return error
}

const validateStratum = (stratum) => {
  let error = undefined
  let regex = /^[0-9]*$/

  if ((stratum.length === 0 || stratum.length > 2) || !regex.test(stratum) || Number(stratum) < 1 || Number(stratum) > 6) {
    error = "Por favor introduce un único número del 1 al 6 según corresponda"
  }

  return error
}

const validateHoursWhithoutElectricity = (hours_without_electricity) => {

  let error = undefined
  let regex = /^[0-9]*$/

  if ((hours_without_electricity.length === 0 || hours_without_electricity.length > 3)
    || !regex.test(hours_without_electricity)
    || Number(hours_without_electricity) === 0) {
    error = "Introduce un número según las horas que no tenga servicio durante el día"
  }

  return error

}

const validateDepartment = (department, departmentsInColombia) => {
  let error = undefined

  // *Validate if the typeof department is a string, validate if the attribute value of the tag section in the HTML was not changed
  if (!(typeof department === "string") ||
    !departmentsInColombia?.find(departmentInArray => departmentInArray.value === department)) {

    error = "Selecciona un departamento válido"
  }

  return error
}

const validateMunicipality = (municipality, arrayMunicipalities) => {

  let error = undefined

  // *Validate if the typeof municipality is a string, validate if the attribute value of the tag section in the HTML was not changed
  if (!(typeof municipality === "string") || !arrayMunicipalities.find(municipalityInArray => municipalityInArray.value === municipality)) {
    error = "Selecciona un municipio válildo"
  }

  return error

}

const validateLocality = (locality, arrayLocality) => {

  let error = undefined

  if (!(typeof locality === "string") || !arrayLocality.find(localityInArray => localityInArray.value === locality)) {
    error = "La localidad es erronea"
  }

  return error

}

export {
  validateInvoiceValue,
  validateStratum,
  validateHoursWhithoutElectricity,
  validateDepartment,
  validateMunicipality,
  validateLocality
}