import { useEffect, startTransition } from 'react'

const ModalInformation = ({ children, closeModal, savingMethod, setGoToForm, setSelectedMethod }) => {

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    return () => document.documentElement.style.overflow = ''
  }, [])

  // * Stop the propagation when the client click inside the modal
  const noCloseModal = (e) => {
    e.stopPropagation()
  }

  // * Open modal warnings
  const handleClick = (e) => {

    //* Set the selected method to create the form correctly
    setSelectedMethod(savingMethod)

    // * Pass to the component FormSaving
    startTransition(() => {
      closeModal()
      setGoToForm(true)
    })
  }

  return (
    <article className="modal-inf flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-gray bg-opacity-80 z-50"
      onClick={closeModal}
    >
      <div className="relative w-[90%] md:w-[60%] lg:w-[45%] h-min m-auto bg-white rounded-md overflow-y-hidden" onClick={noCloseModal}>
        <div className="sticky top-0 w-full h-min bg-seos-blue-dark z-10">
          <p className="text-xl px-6 py-2 text-white">{savingMethod}.</p>
          <button
            className='absolute top-[9px] right-2'
            onClick={closeModal}
          >
            ❌
          </button>
        </div>

        <div className="px-6 py-4">
          {children}
        </div>
        <button
          onClick={handleClick}
          className='w-full h-12 sticky bottom-0 border-t-[1px] border-t-seos-blue-light hover:bg-seos-blue-light'
        >
          Elegire esta opción
        </button>
      </div>
    </article>
  )

}

export default ModalInformation