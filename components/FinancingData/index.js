import { ERROR_TEXTS, LABEL_TEXTS } from "../FinancingData/texts";
import { TOUCHED_STATES } from "helpers/states";
import {
  TYPES_FORM_FINANCING,
  TYPES_FORM_PARTNERS,
} from "actions/financingActions";
import {
  validateName,
  validateNameEvent,
} from "helpers/validationsFormPartners";
import { PROJECT_COST } from "helpers/texts";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  ComposedChart,
  Line,
  Area,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "0",
    uv: 712.452,
    pv: 2400,
  },
  {
    name: "1",
    uv: -3000,
    pv: 1398,
  },
  {
    name: "2",
    uv: -2000,
    pv: 9800,
  },
  {
    name: "3",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "4",
    uv: -1890,
    pv: 4800,
  },
  {
    name: "5",
    uv: 2390,
    pv: -3800,
  },
  {
    name: "6",
    uv: 3490,
    pv: 4300,
  },
];

const data2 = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

const referrerNameInitialValue = {
  value: "",
  touched: TOUCHED_STATES.NOT_TOUCHED,
};

const nameEventInitialValue = {
  value: "",
  touched: TOUCHED_STATES.NOT_TOUCHED,
};

const FinancingData = ({ setReferrerName, setNameEvent, dispatch }) => {
  const updateFormValues = (value, name) => {
    //* Update the values of the reducer
    if (name === "email") {
      dispatch({ type: TYPES_FORM_FINANCING.CHANGE_EMAIL, payload: value });
    }

    if (name === "phone_number") {
      dispatch({
        type: TYPES_FORM_FINANCING.CHANGE_PHONE_NUMBER,
        payload: value,
      });
    }

    if (name === "web_page") {
      dispatch({ type: TYPES_FORM_FINANCING.CHANGE_WEB_PAGE, payload: value });
    }

    if (name === "n") {
      dispatch({
        type: TYPES_FORM_FINANCING.CHANGE_NUMERO_CUOTAS,
        payload: value,
      });

      //* Depend of the value then save the initial state

      if (value === "Pauta") {
        setReferrerName(referrerNameInitialValue);
        setNameEvent(nameEventInitialValue);
      }

      if (value === "Acosol") {
        setReferrerName(referrerNameInitialValue);
        setNameEvent(nameEventInitialValue);
      }

      if (value === "Instalador referido") {
        setNameEvent(nameEventInitialValue);
      }

      if (value === "Evento") {
        setReferrerName(referrerNameInitialValue);
      }
    }

    if (name === "referrer_name") {
      let error = validateName(value);

      error
        ? setReferrerName({
            value,
            error,
            touched: TOUCHED_STATES.TOUCHED_FIRST_TIME,
          })
        : setReferrerName({
            value,
            touched: TOUCHED_STATES.TOUCHED_OK,
          });
    }

    if (name === "name_event") {
      let error = validateNameEvent(value);

      error
        ? setNameEvent({
            value,
            error,
            touched: TOUCHED_STATES.TOUCHED_FIRST_TIME,
          })
        : setNameEvent({
            value,
            touched: TOUCHED_STATES.TOUCHED_OK,
          });
    }
  };

  const [stateNumeroCuotas, setNumeroCuotas] = useState({
    value: 36,
  });

  const [statePorcentajeCuotaInicial, setPorcentajeCuotaInicial] = useState({
    value: 10,
  });

  const handleNumeroCuotasChange = (event) => {
    //console.log(event);
    setNumeroCuotas({ value: event.target.value });
  };

  const handlePorcentajeCuotaInicialChange = (event) => {
    //console.log(event);
    setPorcentajeCuotaInicial({
      value: event.target.value,
    });
  };

  //* Get the total cost of the project
  const getProjectCost = (selectedMethod, wattage) => {
    if (
      !(
        selectedMethod === METHODS_OF_SAVING.SOLAR ||
        selectedMethod === METHODS_OF_SAVING.SUPPORT_SOLAR
      )
    )
      return;
    if (wattage === null) return;

    let entireWattage = Math.ceil(wattage);

    //* Get the cost of the project
    const costProject = PROJECT_COST.filter(
      (costPertWattage) => costPertWattage.wattage === entireWattage
    );

    const cb = document.querySelector("#rural");
    //console.log(cb.checked);
    if (cb.checked) {
      return Math.ceil(costProject[0].value2 / 100000) * 100000;
    } else {
      return Math.ceil(costProject[0].value / 100000) * 100000;
    }
  };

  const [projectCostSimualtion, setProjectCost] = useState(null);

  useEffect(() => {
    const parameters = new URLSearchParams(window.location.search);
    const value = parameters.get("value");
    setProjectCost(value);
  });

  const projectCostSimualtionInt = 0;

  if (projectCostSimualtion) {
    projectCostSimualtionInt = parseInt(
      projectCostSimualtion.split(".").join("")
    );
  }

  const valueAPR = 34; //Tasa efectiva anual del prestamo
  const valueMD = (((1 + valueAPR / 100) ** (1 / 12) - 1) * 100).toFixed(2); //Tasa nominal mes vencido
  const valueInsurance = 60000;
  const valueFee = 9000;
  const valueKWP = 2.0508;
  const valueOthers = 3000;

  const getPaymentValue = (
    value,
    numberOfPayments,
    effectiveAnnualInterestRate
  ) => {
    var a = 0;

    const moduleNumberOfPayments = numberOfPayments / 12;
    // Tasa Interes Nominal
    var tin =
      ((((1 + effectiveAnnualInterestRate / 100) ** (30 / 360) - 1) *
        numberOfPayments) /
        moduleNumberOfPayments) *
      100;

    // Tipo de interés fraccionado (del periodo)
    var im = tin / (numberOfPayments / moduleNumberOfPayments) / 100;

    var im2 = (1 + im) ** -numberOfPayments;

    // Cuota Cap. + Int.
    a =
      (value * im) / (1 - im2) +
      valueFee * valueKWP +
      valueInsurance +
      valueOthers;
    return a;
  };

  return (
    <article className="flex flex-wrap gap-7 px-4 pt-5 md:border-t md:border-t-gray ">
      <div>
        <p>Valor del proyecto:</p>
        <p>{"$ " + projectCostSimualtion}</p>
        <p>Número de cuotas:</p>
        <input
          id="numerodecuotas"
          type="range"
          min="36"
          max="72"
          value={stateNumeroCuotas.value}
          onChange={handleNumeroCuotasChange}
          step="6"
        />
        <span className="badge m-2 text-bg-primary">
          {stateNumeroCuotas.value}
        </span>
        <p>Valor de la cuota inicial:</p>
        <div>
          <span>
            {"$ " +
              Intl.NumberFormat("es-CO").format(
                (projectCostSimualtionInt * statePorcentajeCuotaInicial.value) /
                  100
              )}
          </span>
        </div>
        <input
          className="slider"
          id="porcentajecuotainicial"
          type="range"
          min="10"
          max="50"
          value={statePorcentajeCuotaInicial.value}
          onChange={handlePorcentajeCuotaInicialChange}
          step="10"
        />
        <span className="badge m-2 text-bg-primary">
          {statePorcentajeCuotaInicial.value + "%"}
        </span>
        <p>
          Valor financiación:{" $ "}
          {Intl.NumberFormat("es-CO").format(
            projectCostSimualtionInt -
              (projectCostSimualtionInt * statePorcentajeCuotaInicial.value) /
                100
          )}
        </p>
        {/*<p>
          Tasa E.A.: {valueAPR + "%"} Tasa M.V.: {valueMD + "%"}
          </p>*/}
        <p>
          Valor cuota fija:{" $ "}
          {Intl.NumberFormat("es-CO").format(
            getPaymentValue(
              projectCostSimualtionInt -
                (projectCostSimualtionInt * statePorcentajeCuotaInicial.value) /
                  100,
              stateNumeroCuotas.value,
              valueAPR
            ).toFixed(0)
          )}
        </p>
        {/*<BarChart
          width={500}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend type="line" />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
          <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
        </BarChart>*/}
      </div>
    </article>
  );
};

export default FinancingData;
