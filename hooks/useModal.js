import { useState, startTransition } from 'react'

const useModal = (initialState = false) => {

  const [isOpenModal, setIsOpenModal] = useState(initialState)

  const openModal = () => {
    startTransition(()=>{
      setIsOpenModal(true)
    })
  }
  const closeModal = () => {
    startTransition(() => {
      setIsOpenModal(false)
    })
  }

  return {isOpenModal, openModal, closeModal }

}

export { useModal }