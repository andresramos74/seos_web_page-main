import Head from 'next/head'
import Image from 'next/image'
import logo from 'public/logo_seos_no_text.png' // Tell webpack this JS file uses this image

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEOS Energy | Inicio</title>
        <meta name="description" content="SEOS Energy es una compañía enfocada a....." />
        <link rel="icon" href="/favicon.ico" />        
      </Head>

      <main>
        Hola
        <img src='public/logo_seos_no_text.png' />
        <img src={logo} alt="Logo" />
      </main>

    </div>
  )
}

Home.getLayout = (page) => {
  return (
    <>
      {page}
    </>
  )
}
