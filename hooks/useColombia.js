import { filterDepartments, mapDepartments } from 'helpers/actions_with_departments_data'
import { useState, useEffect } from 'react'

const useColombia = () => {

  /** *@const data all data of the municipalities and departments */
  const [data, setData] = useState(null)
  const [departments, setDepartments] = useState(null)
  const [municipalities, setMunicipalities] = useState(null)

  useEffect(() => {

    const getData = async () => {

      try {

        // * Generate the request of all data of the municipalities 
        const res = await fetch('https://www.datos.gov.co/resource/xdk5-pm3f.json')
        const json = res.ok ? res.json() : Promise.reject('Not fetching')
        const dataMunicipalities = await json

        //* Filter and sort the data
        const { dataOfMunicipalities, departmentsInColombia } = filterDepartments(dataMunicipalities)
        const departmentsMap = mapDepartments(departmentsInColombia)

        setDepartments(departmentsMap)
        setData(dataOfMunicipalities)

      } catch (error) {
        console.log(error)
      }

    }

    getData()

  }, [])
  
  return { data, departments, municipalities, setMunicipalities }

}

export {useColombia}