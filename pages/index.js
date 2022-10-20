import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SEOS Energy | Inicio</title>
        <meta name="description" content="SEOS Energy es una compañía enfocada a....." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-red-500">
        Hola por favor ve a: localhost:3000/partners
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
