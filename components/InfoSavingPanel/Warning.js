import { METHODS_OF_SAVING, WARNINGS } from "helpers/texts"

const Warning = ({ selectedMethod }) => {

  return (
    <ul className='list-disc list-inside mt-4'>
      {
        selectedMethod === METHODS_OF_SAVING.SOLAR &&
        WARNINGS.SOLAR.map((warning) => (
          <li key={warning}>{warning}</li>
        ))
      }
      {
        selectedMethod === METHODS_OF_SAVING.SYSTEM_SUPPORT &&
        WARNINGS.SYSTEM_SUPPORT.map((warning)=>(
          <li key={warning}>{warning}</li>
        ))
      }
      {
        selectedMethod === METHODS_OF_SAVING.SUPPORT_SOLAR &&
        WARNINGS.SUPPORT_SOLAR.map((warning)=>(
          <li key={warning}>{warning}</li>
        ))
      }
    </ul>
  )

}

export default Warning