const generateVerificationDigit = (nit) => {

  let number
  let verificationDigit
  let nitWithoutPoint = nit.replaceAll('.', '')
  const numberOfNit = []

  for (let i = 0; i < nit.length; i++) {
    numberOfNit.push(Number(nitWithoutPoint.charAt(i)))
  }

  number = numberOfNit[0] * 41
  number += numberOfNit[1] * 37
  number += numberOfNit[2] * 29
  number += numberOfNit[3] * 23
  number += numberOfNit[4] * 19
  number += numberOfNit[5] * 17
  number += numberOfNit[6] * 13
  number += numberOfNit[7] * 7
  number += numberOfNit[8] * 3

  number = number % 11

  if (number >= 2) {
    verificationDigit = 11 - number
  } else {
    verificationDigit = number
  }

  return verificationDigit.toString()

}

const formatNit = (nit) => {

  let formatNit = ''

  //* Replace all points to nothing to obtain only the numbers of the nit and then apply the format
  let nitWithoutPoint = nit.replaceAll('.', '')
  //* Repeat the for nitLenght times
  let nitLength = nitWithoutPoint.length / 3

  //* If the length of the nit is less than 3 then only return the numbers
  if (nit.length < 3) return nit


  for (let i = 0; i < nitLength; i++) {
    //* Take three by three values of the nit and put a point
    formatNit += nitWithoutPoint.substring(i * 3, (i + 1) * 3) + "."
  }

  //* return and took the nit without the last point
  return formatNit.substring(0, formatNit.length - 1)

}

const generateValidYears = () => {

  const year = new Date().getFullYear()
  const arrayYears = [];

  for (let i = 1950; i <= year; i++) {
    arrayYears.push({
      id: i.toString(),
      value: i.toString()
    })
  }

  return arrayYears

}

const generateMunicipalities = (dataColombia) => dataColombia.map(data => {
  return {
    id: `${data.municipio} - ${data.departamento}`,
    value: `${data.municipio} - ${data.departamento}`
  }
})



export { generateVerificationDigit, formatNit, generateValidYears, generateMunicipalities }