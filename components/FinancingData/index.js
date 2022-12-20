import {TOUCHED_STATES} from "helpers/states";
import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import dynamic from "next/dynamic";
import {getPaymentValue, updateChartData} from "helpers/financingHelpers";
import {VALUES_APR} from "helpers/texts";
import {optionsInitialValue} from "helpers/financingHelpers";

const Chart = dynamic(() => import ("react-apexcharts"), {ssr: false});

const referrerNameInitialValue = {
    value: "",
    touched: TOUCHED_STATES.NOT_TOUCHED
};

const nameEventInitialValue = {
    value: "",
    touched: TOUCHED_STATES.NOT_TOUCHED
};

const FinancingData = ({
    projectCost,
    setProjectCost,
    stateNumeroCuotas,
    setNumeroCuotas,
    statePorcentajeCuotaInicial,
    setPorcentajeCuotaInicial
}) => {
    const [options, setOptions] = useState(optionsInitialValue);
    const [projectCostSimulation, setProjectCostSimulation] = useState(null);
    const [projectWattsConsumed, setProjectWattsConsumed] = useState(null);
    const [projectValueInvoice, setprojectValueInvoice] = useState(null);
    const [irrValue, setirrValue] = useState(0.00);
    const [valuePayment, setValuePayment] = useState(0);

    useEffect(() => {
        const parameters = new URLSearchParams(window.location.search);
        const projectCostTEMP = parameters.get("ProjectCost");
        const wattsConsumed = parameters.get("Kwp");
        const invoiceValue = parameters.get("invoiceValue");
        projectCost = projectCostTEMP;
        setProjectCostSimulation(projectCostTEMP);
        setProjectWattsConsumed(wattsConsumed);
        setprojectValueInvoice(invoiceValue);
    }, []);

    const projectCostSimulationInt = 0;
    const valueAPR = VALUES_APR.riskProfile5; // Tasa efectiva anual del prestamo el perfil 5 es el de mayo riesgo y tiene un valor de 34% Efectivo anual
    const valueMD = (((1 + valueAPR / 100) ** (1 / 12) - 1) * 100).toFixed(2); // Tasa nominal mes vencido


    const valueInsurance = 60000;
    const valueFee = 9000;
    const valueKWP = projectWattsConsumed;
    const valueOthers = 3000;

    if (projectCostSimulation) 
        projectCostSimulationInt = parseInt(projectCostSimulation.split(".").join(""));
    


    const handleNumeroCuotasChange = (event) => { // setValuePayment(getPaymentValue(projectCostSimulationInt - (projectCostSimulationInt * statePorcentajeCuotaInicial.value) / 100, stateNumeroCuotas.value, VALUES_APR[4], valueInsurance, valueFee, valueKWP, valueOthers));
        setNumeroCuotas({value: event.target.value});
    };

    const handlePorcentajeCuotaInicialChange = (event) => { // setValuePayment(getPaymentValue(projectCostSimulationInt - (projectCostSimulationInt * statePorcentajeCuotaInicial.value) / 100, stateNumeroCuotas.value, VALUES_APR[4], valueInsurance, valueFee, valueKWP, valueOthers));
        setPorcentajeCuotaInicial({value: event.target.value});
    };

    useEffect(() => {
        setValuePayment(getPaymentValue(projectCostSimulationInt - (projectCostSimulationInt * statePorcentajeCuotaInicial.value) / 100, stateNumeroCuotas.value, VALUES_APR[4], valueInsurance, valueFee, valueKWP, valueOthers));
        updateChartData(options, setOptions, stateNumeroCuotas, projectValueInvoice, valuePayment, irrValue, setirrValue, projectCostSimulationInt * (statePorcentajeCuotaInicial.value / 100));

    }, [stateNumeroCuotas]);

    useEffect(() => {
        setValuePayment(getPaymentValue(projectCostSimulationInt - (projectCostSimulationInt * statePorcentajeCuotaInicial.value) / 100, stateNumeroCuotas.value, VALUES_APR[4], valueInsurance, valueFee, valueKWP, valueOthers));
        updateChartData(options, setOptions, stateNumeroCuotas, projectValueInvoice, valuePayment, irrValue, setirrValue, projectCostSimulationInt * (statePorcentajeCuotaInicial.value / 100));

    }, [statePorcentajeCuotaInicial]);

    useEffect(() => {
        updateChartData(options, setOptions, stateNumeroCuotas, projectValueInvoice, valuePayment, irrValue, setirrValue, projectCostSimulationInt * (statePorcentajeCuotaInicial.value / 100));
    }, [valuePayment]);

    useEffect(() => {
        setValuePayment(getPaymentValue(projectCostSimulationInt - (projectCostSimulationInt * statePorcentajeCuotaInicial.value) / 100, stateNumeroCuotas.value, VALUES_APR[4], valueInsurance, valueFee, valueKWP, valueOthers));
        updateChartData(options, setOptions, stateNumeroCuotas, projectValueInvoice, valuePayment, irrValue, setirrValue, projectCostSimulationInt * (statePorcentajeCuotaInicial.value / 100));
    }, [projectValueInvoice, projectWattsConsumed, projectCostSimulation]);

    return (
        <section>
            <section className="pl-4 flex-wrap md:border-t-gray w-[45%] float float-left">
                <div className="clearfix">
                    <span className="text-left float-left">Valor del proyecto:</span>
                    <span className="text-right float-right">
                        {
                        "$ " + Intl.NumberFormat("es-CO").format(projectCostSimulationInt)
                    } </span>
                </div>
                <div className="py-2 clearfix">
                    <span className="text-left">Número de cuotas:</span>
                    <span className="text-right float-right">
                        {
                        stateNumeroCuotas.value
                    } </span>
                </div>
                <div className="text-center clearfix">
                    <input className="slider" id="numerodecuotas" type="range" min="36" max="72"
                        value={
                            stateNumeroCuotas.value
                        }
                        onChange={handleNumeroCuotasChange}
                        step="12"/>
                </div>
                <div className="py-2 clearfix">
                    <span className="text-left float-left">
                        Valor de la cuota inicial ({
                        statePorcentajeCuotaInicial.value + "%"
                    }
                        ):
                    </span>
                    <span className="text-right float-right">
                        {
                        "$ " + Intl.NumberFormat("es-CO").format((projectCostSimulationInt * statePorcentajeCuotaInicial.value) / 100)
                    } </span>
                </div>
                <div className="text-center clearfix">
                    <input className="slider" id="porcentajecuotainicial" type="range" min="10" max="50"
                        value={
                            statePorcentajeCuotaInicial.value
                        }
                        onChange={handlePorcentajeCuotaInicialChange}
                        step="10"/>
                </div>
                <div className="py-2 clearfix">
                    <span className="text-left float-left">Valor financiación:</span>
                    <span className="text-right float-right">
                        {" $ "}
                        {
                        Intl.NumberFormat("es-CO").format(projectCostSimulationInt - (projectCostSimulationInt * statePorcentajeCuotaInicial.value) / 100)
                    } </span>
                </div>

            </section>
            <section className="pr-4 flex-wrap md:border-t-gray w-[45%] float float-right">
                {/*<p>
                    Tasa E.A.: {valueAPR + "%"} Tasa M.V.: {valueMD + "%"}
                </p>*/}
                <div className="clearfix">
                    <span className="text-left float-left">Valor cuota fija:</span>
                    <span className="text-right float-right">
                        {" $ "}
                        {
                        Intl.NumberFormat("es-CO").format(valuePayment.toFixed(0))
                    } </span>

                </div>
                <div className="clearfix">
                    <span className="text-left float-left">TIR:</span>
                    <span className="text-right float-right">
                        {
                        Intl.NumberFormat("es-CO").format((irrValue * 100).toFixed(2)) + " %"
                    } </span>
                </div>
            </section>
            <section>
                <div className="pr-8 md:border-t-gray float-right">
                    <div className="mixed-chart">
                        {
                        typeof window !== "undefined" && (
                            <Chart options={options}
                                series={
                                    options.series
                                }
                                width={800}
                                height={400}/>
                        )
                    } </div>
                </div>
            </section>
        </section>
    );
};

export default FinancingData;
