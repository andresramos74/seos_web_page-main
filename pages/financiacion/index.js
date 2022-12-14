import {TOUCHED_STATES} from "helpers/states";
import React, {useState} from "react";
import Image from "next/image";
import logoSeos from "public/logo_seos_blanco.png";
import FinancingData from "components/FinancingData";
import Head from "next/head";

const financiacion = () => {


    const [projectCost, setProjectCost] = useState(null);

    const handleSubmit = (event) => {
        window.location.href = "http://localhost:3000/financiacion?value=" + projectCost2;
    };

    return (

        <article className="flex flex-col font-['Poppins'] w-full overflow-x-hidden">
            <header className="sticky top-0 w-full bg-seos-blue-dark">
                <Head>
                    <title>SEOS Energy | Financiación</title>
                    <meta name="description" content="SEOS Energy es una compañía enfocada a....."/>
                </Head>
                <div className="relative w-52 h-20 mx-auto">
                    <Image src={logoSeos}
                        alt={"Logo seos"}
                        unoptimized={true}
                        layout="fill"
                        objectFit="contain"
                        priority={true}/>
                </div>
            </header>
            <br></br>
            <form className="flex flex-col pt-2 pb-2 m-auto mt-8 mb-32 w-full border border-gray sm:w-4/5 md:w-[680px] lg:w-[850px] h-min rounded-md"
                onSubmit={handleSubmit}>
                <p className="px-3 py-2 border-b border-b-gray text-lg font-semibold">
                    Simulador de financiación
                </p>
                <FinancingData projectCost={projectCost}
                    setProjectCost={setProjectCost}/>
                <p className="text-justify py-2 m-5">
                    Estos valores son de referencia y podrán variar con base en la visita técnica que se realizará como parte del proyecto.{" "} </p>
                <div className="text-center">
                    <input type="submit" className="transition w-min m-auto px-2 py-1 bg-seos-blue-light rounded-md text-white cursor-pointer hover:bg-seos-blue-dark" value="Contáctanos" form="{}"
                        onClick={handleSubmit}/>
                </div>
            </form>
        </article>
    );
};

export default financiacion;
