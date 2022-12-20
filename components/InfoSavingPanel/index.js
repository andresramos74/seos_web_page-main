import {METHODS_OF_SAVING, MESSAGE_INFORMATION, TEXT_ESP} from 'helpers/texts'
import {useModal} from 'hooks/useModal'
import InformationCard from 'components/InformationCard'
import ModalInformation from 'components/ModalInformation'
import Cartagena from 'public/Cartagena.JPG'
import Respaldo from 'public/Respaldo.png'
import Hibrido from 'public/Hibrido.png'
import ModalWarning from 'components/ModalWarning'

const InfoSavingPanel = ({goToForm, setGoToForm, setSelectedMethod}) => {
    const {isOpenModal: isOpenModalSolar, openModal: openModalSolar, closeModal: closeModalSolar} = useModal(false)
    const {isOpenModal: isOpenModalSupportSystem, openModal: openModalSupportSystem, closeModal: closeModalSupportSystem} = useModal(false)
    const {isOpenModal: isOpenModalSolarAndSupport, openModal: openModalSolarAndSupport, closeModal: closeModalSolarAndSupport} = useModal(false)


    return (
        <article className={
            `transition ${
                goToForm && "-translate-x-full hidden"
            } font-[Poppins]`
        }>

            {/** 
       * Open the modal of information about saving methods
       */}
            {
            isOpenModalSolar && <ModalInformation closeModal={closeModalSolar}
                setGoToForm={setGoToForm}
                savingMethod={
                    METHODS_OF_SAVING.SOLAR
                }
                setSelectedMethod={setSelectedMethod}>
                {
                MESSAGE_INFORMATION.SOLAR
            } </ModalInformation>
        }
            {
            isOpenModalSupportSystem && <ModalInformation closeModal={closeModalSupportSystem}
                setGoToForm={setGoToForm}
                savingMethod={
                    METHODS_OF_SAVING.SYSTEM_SUPPORT
                }
                setSelectedMethod={setSelectedMethod}>
                {
                MESSAGE_INFORMATION.SYSTEM_SUPPORT
            } </ModalInformation>
        }
            {
            isOpenModalSolarAndSupport && <ModalInformation closeModal={closeModalSolarAndSupport}
                setGoToForm={setGoToForm}
                savingMethod={
                    METHODS_OF_SAVING.SUPPORT_SOLAR
                }
                setSelectedMethod={setSelectedMethod}>
                {
                MESSAGE_INFORMATION.SUPPORT_SOLAR
            } </ModalInformation>
        }
            {/*
          Section to the cards
        */}
            <p className="pt-4">
                {
                TEXT_ESP.AHORRO
            }</p>
            <section className="flex flex-wrap justify-center items-center pt-0">
                <InformationCard typeOfSaving={
                        METHODS_OF_SAVING.SOLAR
                    }
                    urlImage={Cartagena}
                    setGoToForm={setGoToForm}
                    openModal={openModalSolar}
                    setSelectedMethod={setSelectedMethod}/> {/*<InformationCard typeOfSaving={
                        METHODS_OF_SAVING.SYSTEM_SUPPORT
                    }
                    urlImage={Respaldo}
                    setGoToForm={setGoToForm}
                    openModal={openModalSupportSystem}
                    setSelectedMethod={setSelectedMethod}/>
                <InformationCard typeOfSaving={
                        METHODS_OF_SAVING.SUPPORT_SOLAR
                    }
                    urlImage={Hibrido}
                    setGoToForm={setGoToForm}
                    openModal={openModalSolarAndSupport}
                setSelectedMethod={setSelectedMethod}/>*/} </section>
        </article>
    )
}

export default InfoSavingPanel
