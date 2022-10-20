import { useMutation } from "@apollo/client"
import Loader from "components/Loader"
import { DELETE_TTL } from "graphql/mutations/deleteTtl"
import { useEffect, useState } from "react"

const MessageAuthentication = ({ encryptedNit }) => {

  const [deleteTtl, result] = useMutation(DELETE_TTL)
  const { loading, data, error } = result
  useEffect(() => {
    if (!encryptedNit) return

    const delTtl = async () => {
      try{
        await deleteTtl({
          variables: {
            nit: encryptedNit
          }
        })
      }catch(e){
        console.log("Ocurrio un error:", e)
      }

    }

    delTtl()

  }, [encryptedNit])

  if (error) {

    return (
      <article className="flex w-full h-full sm:w-3/4 sm:h-64 items-center rounded-md border-1 bg-slay-bg">
        <div className='w-full h-min p-4'>
          <div className="w-5/6 h-3/4 m-auto">
            Tu información ya ha sido autenticada, sino fue asi comunicate con soporte en: <p className='text-seos-blue-light inline'>soporte.club@seosenergy.co.</p>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="flex w-full h-full sm:w-3/4 sm:h-64 items-center rounded-md border-1 bg-slay-bg">
      {
        loading &&
        <div className='w-min m-auto'>
          <Loader width={75} height={75} />
        </div>
      }
      {
        (data && !loading && !error) &&
        <div className='w-full h-min p-4'>
          <div className="w-5/6 h-3/4 m-auto">
            Gracias por verificar tu correo electrónico. En este momento estamos trabajando para poder revisar la información
            compartida y volver a comunicarnos contigo en algunos días. Gracias por la paciencia. Si tienes alguna pregunta adicional,
            no dudes en comunicarte con nosotros al correo electrónico <p className='text-seos-blue-light inline'>soporte.club@seosenergy.co.</p>
          </div>
        </div>
      }
    </article>
  )

}

export default MessageAuthentication