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

const FinancingData = () => {
    const [options, setOptions] = useState(optionsInitialValue);
    const [projectCostSimulation, setProjectCostSimulation] = useState(null);
    const [projectWattsConsumed, setProjectWattsConsumed] = useState(null);
    const [projectValueInvoice, setprojectValueInvoice] = useState(null);
    const [irrValue, setirrValue] = useState(0.00);
    const [valuePayment, setValuePayment] = useState(0);

    useEffect(() => {
        const parameters = new URLSearchParams(window.location.search);
        const projectCostTEMP = parameters.get("value");
        const wattsConsumed = parameters.get("value2");
        const valueInvoice = parameters.get("value3");

        setProjectCostSimulation(projectCostTEMP);
        setProjectWattsConsumed(wattsConsumed);
        setprojectValueInvoice(valueInvoice);

    }, []);

    const projectCostSimulationInt = 0;
    const valueAPR = VALUES_APR.riskProfile5; // Tasa efectiva anual del prestamo el perfil 5 es el de mayo riesgo y tiene un valor de 34% Efectivo anual
    const valueMD = (((1 + valueAPR / 100) ** (1 / 12) - 1) * 100).toFixed(2); // Tasa nominal mes vencido
    const [stateNumeroCuotas, setNumeroCuotas] = useState({value: 36});
    const [statePorcentajeCuotaInicial, setPorcentajeCuotaInicial] = useState({value: 10});

    const valueInsurance = 60000;
    const valueFee = 9000;
    const valueKWP = projectWattsConsumed;
    const valueOthers = 3000;
    const newSeries = [];
    const newyaxis = [];

    if (projectCostSimulation) {
        projectCostSimulationInt = parseInt(projectCostSimulation.split(".").join(""));
    }

    const handleNumeroCuotasChange = (event) => { // setValuePayment(getPaymentValue(projectCostSimulationInt - (projectCostSimulationInt * statePorcentajeCuotaInicial.value) / 100, stateNumeroCuotas.value, VALUES_APR[4], valueInsurance, valueFee, valueKWP, valueOthers));
        setNumeroCuotas({value: event.target.value});
    };

    const handlePorcentajeCuotaInicialChange = (event) => { // setValuePayment(getPaymentValue(projectCostSimulationInt - (projectCostSimulationInt * statePorcentajeCuotaInicial.value) / 100, stateNumeroCuotas.value, VALUES_APR[4], valueInsurance, valueFee, valueKWP, valueOthers));
        setPorcentajeCuotaInicial({value: event.target.value});
    };

    useEffect(() => {
        console.log("projectCostSimulationInt");
        console.log(projectCostSimulationInt);
        console.log("statePorcentajeCuotaInicial.value");
        console.log(statePorcentajeCuotaInicial.value);

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
                        step="6"/>
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
                {/*<div className="text-center">
                    <input type="submit" className="transition w-min m-auto px-2 py-1 bg-seos-blue-light rounded-md text-white cursor-pointer hover:bg-seos-blue-dark" value="Simular" form="{}"
                        onClick={handleSubmit}
                        newSeries={newSeries}
                        newyaxis={newyaxis}/>
                </div>*/} </section>
        </section>
    );
};

export default FinancingData;
