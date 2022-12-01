import {useState} from "react";
import banner_img from "public/banner_prueba.jpg";
import BannerSection from "components/BannerSection";
import Footer from "components/Footer";
import Head from "next/head";
import Header from "components/Header";
import InfoSavingPanel from "components/InfoSavingPanel";
import LayoutPage from "components/LayoutPage";
import SavingPanel from "components/SavingPanel";


const Saving = () => {
    const [goToForm, setGoToForm] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState(null);

    return (
        <section className="overflow-x-hidden">
            <Head>
                <title>SEOS Energy | Ahorro</title>
                <meta name="description" content="SEOS Energy es una compañía enfocada a....."/>
            </Head>

            <BannerSection src={banner_img}
                position={"75% 25%"}/>

            <article className="px-12 py-6">
                <InfoSavingPanel goToForm={goToForm}
                    setGoToForm={setGoToForm}
                    setSelectedMethod={setSelectedMethod}/>
                <SavingPanel goToForm={goToForm}
                    setGoToForm={setGoToForm}
                    selectedMethod={selectedMethod}/>
            </article>
            <style jsx>
                {`
        .banner_img {
          background-image: url("/banner_prueba.jpg");
        }
      `}</style>
        </section>
    );
};

Saving.getLayout = (page) => {
    return (
        <LayoutPage>
            <Header/> {page}
            <Footer/>
        </LayoutPage>
    );
};

export default Saving;
