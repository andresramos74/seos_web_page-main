import { useModal } from 'hooks/useModal'
import { startTransition } from 'react'
import Modal from 'components/ModalInformation'
import Image from 'next/image'

const InformationCard = ({ typeOfSaving, urlImage, setGoToForm, openModal, setSelectedMethod }) => {



  // * This handle Click change to the form
  const handleClick = () => {
    // * Use the start transition to assign a normal priority in the renderized
    setSelectedMethod(typeOfSaving)
    startTransition(() => {
      setGoToForm(true)
    })
  }

  // * This function avoid that the FormSaving panel be render when the client click in the option "Más información"
  const noStartTransition = (e) => {
    e.stopPropagation()
  }

  return (
    <section className="flex flex-col">
      <div className="relative w-80 h-80 mt-4 mx-4 rounded-md sm:mb-4" onClick={handleClick}>
        <Image
          src={urlImage}
          alt="Imagen de pruebita"
          layout='fill'
          objectFit='cover'
          priority={true}
          
        />
        <p className="absolute w-full top-[47%] text-center z-0 text-[#f8c301] text-lg font-bold">
          {typeOfSaving}
        </p>
        <div className="div_info hidden sm:flex transition-opacity duration-300 absolute w-full h-full bg-black bg-opacity-60 opacity-0 rounded-md hover:opacity-100 z-10 cursor-pointer">
          <div onClick={noStartTransition} className="h-8 w-auto mx-auto mt-auto mb-4 text-white">
            <button
              onClick={openModal}
              className='hover:underline text-seos-blue-light'
            >
              Mas información
            </button>
          </div>
        </div>

      </div>
      <div className="w-auto h-8 mx-auto mt-2 md:hidden">
        <button
          onClick={openModal}
          className="hover:underline text-blue-500 cursor-pointer"
        >
          Más información
        </button>
      </div>
    </section>
  )

}

export default InformationCard