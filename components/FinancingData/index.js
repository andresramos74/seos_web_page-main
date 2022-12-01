import {TOUCHED_STATES} from "helpers/states";
import React, {useState, useEffect, useReducer} from "react";
import "bootstrap/dist/css/bootstrap.css";
import dynamic from "next/dynamic";
import {getPaymentValue} from "helpers/financingHelpers";
import {VALUES_APR} from "helpers/texts";

const Chart = dynamic(() => import ("react-apexcharts"), {ssr: false});

const referrerNameInitialValue = {
    value: "",
    touched: TOUCHED_STATES.NOT_TOUCHED
};

const nameEventInitialValue = {
    value: "",
    touched: TOUCHED_STATES.NOT_TOUCHED
};

const FinancingData = ({options, setOptions}) => {
    var valuePayment = 0;
    const [projectCostSimulation, setProjectCostSimulation] = useState(null);
    const [projectWattsConsumed, setProjectWattsConsumed] = useState(null);
    const [projectValueInvoice, setprojectValueInvoice] = useState(null);

    useEffect(() => {
        const parameters = new URLSearchParams(window.location.search);
        const projectCostTEMP = parameters.get("value");
        const wattsConsumed = parameters.get("value2");
        const valueInvoice = parameters.get("value3")
        /*console.log("values 1, 2 and 3");
        console.log(projectCostTEMP);
        console.log(wattsConsumed);
        console.log(valueInvoice);*/
        setProjectCostSimulation(projectCostTEMP);
        setProjectWattsConsumed(wattsConsumed);
        setprojectValueInvoice(valueInvoice);
    });

    const projectCostSimualtionInt = 0;

    if (projectCostSimulation) {
        projectCostSimualtionInt = parseInt(projectCostSimulation.split(".").join(""));
    }

    const valueAPR = VALUES_APR.riskProfile5; // Tasa efectiva anual del prestamo el perfil 5 es el de mayo riesgo y tiene un valor de 34% Efectivo anual
    const valueMD = (((1 + valueAPR / 100) ** (1 / 12) - 1) * 100).toFixed(2); // Tasa nominal mes vencido
    const [stateNumeroCuotas, setNumeroCuotas] = useState({value: 36});
    const [statePorcentajeCuotaInicial, setPorcentajeCuotaInicial] = useState({value: 10});

    const valueInsurance = 60000;
    const valueFee = 9000;
    const valueKWP = 2.0508;
    const valueOthers = 3000;

    valuePayment = getPaymentValue(projectCostSimualtionInt - (projectCostSimualtionInt * statePorcentajeCuotaInicial.value) / 100, stateNumeroCuotas.value, VALUES_APR[4], valueInsurance, valueFee, valueKWP, valueOthers);

    const handleNumeroCuotasChange = (event) => {


        const newSeries = [];
        const yaxisValues = [];
        const index = 1;
        const xValue = 0,
            yValue = 0;
        const data = null;
        options.series.map((s) => {
            data = s.data.map(() => {
                if (index <= (stateNumeroCuotas.value / 12)) {
                    yValue = Math.floor(valuePayment); // Cuota SEOS
                } else {
                    yValue = Math.floor(0);
                };
                if (index > 20 && index < 41) { // Inversion ahorro
                    if ((index - 20) <= (stateNumeroCuotas.value / 12)) {
                        yValue = Math.floor((868 * (1 + 0.06270825591) ** (index - 20) * (projectValueInvoice / 868)) - valuePayment);
                    } else {
                        yValue = Math.floor(868 * (1 + 0.06270825591) ** (index - 20) * (projectValueInvoice / 868));
                    }
                };
                if (index >= 41) { // Factura electricidad
                    yValue = Math.floor(868 * (1 + 0.06270825591) ** (index - 40) * (projectValueInvoice / 868));
                };
                xValue = index++ % 20
                if (! xValue) {
                    xValue = 20
                }
                yaxisValues.push(yValue)
                return {x: xValue, y: yValue}
            })
            newSeries.push({name: s.name, type: s.type, data});
        })
        const newyaxis = [];
        newyaxis.push({
            show: true,
            min: Math.min(... yaxisValues),
            max: Math.max(... yaxisValues)
        })
        useEffect(() => {
            setNumeroCuotas({value: event.target.value});
            setOptions({series: newSeries, yaxis: newyaxis});
        })
    };

    const handlePorcentajeCuotaInicialChange = (event) => { // console.log(event);
        setPorcentajeCuotaInicial({value: event.target.value});
    };

    return (
        <section>
            <section className="pl-4 flex-wrap md:border-t-gray w-[45%] float-left">
                <div className="clearfix">
                    <span className="text-left float-left">Valor del proyecto:</span>
                    <span className="text-right float-right">
                        {
                        "$ " + Intl.NumberFormat("es-CO").format(projectCostSimualtionInt)
                    } </span>
                </div>
                <div className="py-2 clearfix">
                    <span className="text-left">Número de cuotas:</span>
                    <span className="text-right float-right">
                        {
                        stateNumeroCuotas.value
                    } </span>
                </div>
                <div className="text-center float-center clearfix">
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
                        "$ " + Intl.NumberFormat("es-CO").format((projectCostSimualtionInt * statePorcentajeCuotaInicial.value) / 100)
                    } </span>
                </div>
                <div className="text-center float-center clearfix">
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
                        Intl.NumberFormat("es-CO").format(projectCostSimualtionInt - (projectCostSimualtionInt * statePorcentajeCuotaInicial.value) / 100)
                    } </span>
                </div>
                {/*<p>
          Tasa E.A.: {valueAPR + "%"} Tasa M.V.: {valueMD + "%"}
          </p>*/}
                <div className="py-2 clearfix">
                    <span className="text-left float-left">Valor cuota fija:</span>
                    <span className="text-right float-right">
                        {" $ "}
                        {
                        Intl.NumberFormat("es-CO").format(valuePayment)
                    } </span>

                </div>
            </section>
            <section>
                <div className="pl-4 pt-1 md:border-t-gray float-left">
                    <div className="mixed-chart">
                        {
                        typeof window !== "undefined" && (
                            <Chart options={options}
                                series={
                                    options.series
                                }
                                width={430}
                                height={230}/>
                        )
                    } </div>
                </div>
            </section>
        </section>
    );
};

export default FinancingData;
