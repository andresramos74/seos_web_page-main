import { useEffect, startTransition } from 'react'

const ModalWarning = ({ children, closeModal, setGoToForm, setSelectedMethod, title }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = ''
  }, [])

  const handleClickButtonBackTo = () => {
    startTransition(() => {
      closeModal()
    })
  }

  const handleClickButtonUnderstand = () => {
    setSelectedMethod(title)
    startTransition(() => {
      //* Pass to the form saving
      setGoToForm(true)
      //* Close modal
      closeModal()
    })

  }

  // *
  const noCloseModal = (e) => {
    e.stopPropagation()
  }

  return (
    <article
      className='flex justify-center items-center fixed w-screen h-screen top-0 left-0 bg-gray bg-opacity-80 z-50'
      onClick={closeModal}
    >
      <div className='relative w-3/4 h-min bg-white rounded-md' onClick={noCloseModal}>
        <div className='w-full h-min bg-seos-blue-dark rounded-t-md'>
          <p className='w-full h-full py-4 text-lg text-white leading-6 px-4'>
            {title} - Advertencias
          </p>
          <span
            className='absolute top-2 right-2 cursor-pointer'
            onClick={closeModal}
          >
            ❌
          </span>
        </div>
        <div className='w-full h-min px-4 py-4'>
          {children}
        </div>
        <div className='flex w-full sm:w-3/4 h-9 mx-auto mb-4'>
          <button
            onClick={handleClickButtonBackTo}
            className='px-4 h-full w-32 mx-auto rounded-md bg-gray ring-0'
          >
            Volver
          </button>
          <button
            onClick={handleClickButtonUnderstand}
            className='px-4 h-full w-32 mx-auto rounded-md bg-gray ring-slate-600 focus:ring-0'
          >
            Entiendo
          </button>
        </div>
      </div>
    </article>
  )

}

export default ModalWarning