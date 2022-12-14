import { useRouter } from 'next/router'
import { Image } from 'next/image'
import MessageAuthentication from 'components/MessageAuthentication'

const Authentication = () => {

  const router = useRouter()
  const { encryptedNit } = router.query

  return (
    <section className='relative w-screen h-screen flex justify-center items-center'>
      {/* <Image 

      /> */}
      <MessageAuthentication encryptedNit={encryptedNit} />
    </section>
  )

}

export default Authentication