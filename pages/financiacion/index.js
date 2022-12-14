import { ADD_INSTALLER_DATA } from "graphql/mutations/addInstaller";
import {
  financingReducer,
  initialValuesFinancing,
} from "reducers/financingReducer";
import { TOUCHED_STATES } from "helpers/states";
import { useMutation } from "@apollo/client";
import { useState, useReducer } from "react";
import Image from "next/image";
import logoSeos from "public/logo_seos_blanco.png";
import FinancingData from "components/FinancingData";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Head from "next/head";

const referrerNameInitialValue = {
  value: "",
  touched: TOUCHED_STATES.NOT_TOUCHED,
};

const nameEventInitialValue = {
  value: "",
  touched: TOUCHED_STATES.NOT_TOUCHED,
};

const Financing = () => {
  const [state, dispatch] = useReducer(
    financingReducer,
    initialValuesFinancing
  );
  const { values, errors, touched } = state;

  //* State to save the referrer name
  const [referrerName, setReferrerName] = useState(referrerNameInitialValue);
  //* State to save the name of the event in that the INSTALLER learned about SEOS
  const [nameEvent, setNameEvent] = useState(nameEventInitialValue);
  //* Error in the form (blank spaces, errors, etc)
  const [errorForm, setErrorForm] = useState(null);
  //* State to save if the INSTALLER accept the terms
  const [acceptTerms, setAcceptTerms] = useState(false);

  //* Use mutation
  const [sendData, result] = useMutation(ADD_INSTALLER_DATA);
  const { loading, data, error } = result;

  const formatObjectToSend = async (values) => {
    //* Create a new object with all values of the form
    let newValues = JSON.parse(JSON.stringify(values));

    //* Link the nit value and the verificationDigit
    let nit = `${newValues.nit.value}-${newValues.nit.verificationDigit}`;

    //* Format of the date that the input give YYYY/MM/DD
    let partsOfTheDate = newValues.date.split("-");

    const day = Number(partsOfTheDate[2]);
    const month = Number(partsOfTheDate[1]);
    const year = Number(partsOfTheDate[0]);

    //* Create the date of the date of constitution
    let dateConstitution = new Date(year, month - 1, day);

    // * Convert the miliseconds to seconds, its necessary because the ttl field is a timestamp in seconds
    newValues.ttl = Math.round(Date.now() / 1000) + 300;
    newValues.nit = nit;
    //* Get the timestamp of the date of constitution
    newValues.date = dateConstitution.getTime();
    //* Parse the values to number
    newValues.kw_installed = Number(values.kw_installed);
    newValues.number_of_clients = Number(values.number_of_clients);

    //* Capture the ip of the device that fill the form
    const ip = await fetch("https://api.ipify.org/?format=json");
    const okip = await ip.json();
    const res = okip;

    newValues.ip = res.ip;

    return newValues;
  };

  const handleSubmit = (event) => {
    window.location.href =
      "http://localhost:3000/financiacion?value=" + projectCost;
  };

  return (
    <section className="flex flex-col font-['Poppins'] w-full overflow-x-hidden">
      <header className="sticky top-0 w-full bg-seos-blue-dark">
        <Head>
          <title>SEOS Energy | Financiaci??n</title>
          <meta
            name="description"
            content="SEOS Energy es una compa????a enfocada a....."
          />
        </Head>
        <div className="relative w-52 h-20 mx-auto">
          <Image
            src={logoSeos}
            alt={"Logo seos"}
            unoptimized={true}
            layout="fill"
            objectFit="contain"
            priority={true}
          />
        </div>
      </header>
      <br></br>
      <form
        className="flex flex-col pt-2 pb-2 m-auto mt-8 mb-32 w-full border border-gray sm:w-4/5 md:w-[680px] lg:w-[850px] h-min rounded-md"
        onSubmit={handleSubmit}
      >
        <p className="px-3 py-2 border-b border-b-gray text-lg font-semibold">
          Simulador de financiaci??n
        </p>
        <FinancingData
          values={values}
          errors={errors}
          touched={touched}
          referrerName={referrerName}
          nameEvent={nameEvent}
          setReferrerName={setReferrerName}
          setNameEvent={setNameEvent}
          dispatch={dispatch}
        />
        <p className="text-justify py-2 m-3">
          Estos valores son de referencia y podr??n variar con base en la visita
          t??cnica que se realizar?? como parte del proyecto.{" "}
        </p>
        <div class="text-center">
          <input
            type="submit"
            className="transition w-min m-auto px-2 py-1 bg-seos-blue-light rounded-md text-white cursor-pointer hover:bg-seos-blue-dark"
            value="Cont??ctanos"
            form="{}"
            onClick={handleSubmit}
          />

          {/*<input
            type="submit"
            className="transition w-min m-auto px-2 py-1 bg-seos-blue-light rounded-md text-white cursor-pointer hover:bg-seos-blue-dark"
            value="Y si lo financio?"
            form="{}"
            onClick={handleSubmit4}
        />*/}
        </div>
      </form>
    </section>
  );
};

export default Financing;
