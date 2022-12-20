import {TOUCHED_STATES} from "helpers/states";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import logoSeos from "public/logo_seos_blanco.png";
import FinancingData from "components/FinancingData";
import Head from "next/head";

const financiacion = () => {
    const [projectCost, setProjectCost] = useState(null);
    const [selectedMethod, setselectedMethod] = useState(null);
    const [socioeconomicStatus, setsocioeconomicStatus] = useState(null);
    const [invoiceValue, setinvoiceValue] = useState(null);
    const [wattsConsumed, setwattsConsumed] = useState(null);
    const [stateNumeroCuotas, setNumeroCuotas] = useState({value: 36});
    const [statePorcentajeCuotaInicial, setPorcentajeCuotaInicial] = useState({value: 10});
    // const [stateNumeroCuotas, setstateNumeroCuotas] = useState(null);
    // const [statePorcentajeCuotaInicial, setstatePorcentajeCuotaInicial] = useState(null);

    const handleSubmit = (e) => {
        window.location.href = `https://api.whatsapp.com/send?phone=573103865380&text=Estoy interesado en un ${selectedMethod} para una residencia estrato ${socioeconomicStatus}. Mi consumo de energía eléctrica es de aproximadamente $ ${
            Intl.NumberFormat("es-CO").format(invoiceValue)
        } (${wattsConsumed}Kwp). Con base en esta información el proyecto se estima en $ ${
            Intl.NumberFormat("es-CO").format(projectCost)
        }, financiado a ${
            stateNumeroCuotas.value
        } cuotas con cuota inicial del ${
            statePorcentajeCuotaInicial.value
        }% del valor del proyecto. Estoy interesado en obtener una cotización en firme para este proyecto.`;
    };

    useEffect(() => {
        const parameters = new URLSearchParams(window.location.search);
        setselectedMethod(parameters.get("Method"));
        setsocioeconomicStatus(parameters.get("SEStatus"));
        setinvoiceValue(parameters.get("invoiceValue"));
        setwattsConsumed(parameters.get("Kwp"));
        setProjectCost(parameters.get("ProjectCost"));
    }, [stateNumeroCuotas, statePorcentajeCuotaInicial]);

    return (

        <article className="flex flex-col fAont-['Poppins'] w-full overflow-x-hidden">
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
                    setProjectCost={setProjectCost}
                    stateNumeroCuotas={stateNumeroCuotas}
                    setNumeroCuotas={setNumeroCuotas}
                    statePorcentajeCuotaInicial={statePorcentajeCuotaInicial}
                    setPorcentajeCuotaInicial={setPorcentajeCuotaInicial}/>
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
