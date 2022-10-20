// * Don´t use SWR in this request because is not neccesary 

const localitiesInBogota = ['Antonio Nariño', 'Barrios Unidos', 'Bosa', 'Chapinero', 'Ciudad Bolivar', 'Engativa', 'Fontibón',
  'Kennedy', 'La Candelaria', 'Los Martires', 'Puente Aranda', 'Rafael Uribe Uribe', 'San Cristobal', 'Santa Fe', 'Suba', 'Sumapaz',
  'Teusaquillo', 'Tunjuelito', 'Usaquen', 'Usme']


const isADepartmentWithCoverage = (department) => {
  if (department === "Cundinamarca" ||
    department === "Bolívar" ||
    department === "Atlántico" ||
    department === "Tolima" ||
    department === "Bogotá D.C.") {
    return true
  }
  return false
}


export const filterDepartments = (dataDepartments) => {

  // * In the array stores only the names of the departments
  const departmentsInColombia = []

  // * Element is the 0 to 100 array of the response of the request
  dataDepartments.forEach((department) => {

    // *Searches if the department is in the array departmentsInColombia
    if (!departmentsInColombia.find(departmentInArray => departmentInArray === department.departamento)) {
      departmentsInColombia.push(department.departamento)
    }
  })
  return { dataOfMunicipalities: dataDepartments, departmentsInColombia }
}

export const mapDepartments = (departments) => departments
  ?.filter(department => isADepartmentWithCoverage(department))
  ?.map(department => {
    return {
      id: department,
      value: department
    }
  })

export const mapMunicipalities = (dataColombia, department) => dataColombia
  ?.filter(municipality => municipality.departamento === department)
  ?.map(municipality => {
    return {
      id: municipality.municipio,
      value: municipality.municipio
    }
  })

export const mapLocalities = () => localitiesInBogota.map(locality => {
  return {
    id: locality,
    value: locality
  }
})