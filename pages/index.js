import Head from 'next/head'
export default function Home() {
    return (
        <div>
            <Head>
                <title>SEOS Energy | Inicio</title>
                <meta name="description" content="SEOS Energy es una compañía enfocada a....."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                Hola
            </main>

        </div>
    )
}

Home.getLayout = (page) => {
    return (
        <> {page} </>
    )
}
