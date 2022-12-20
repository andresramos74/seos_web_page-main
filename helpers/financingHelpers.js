import React, {useState, useEffect} from "react";
import PROJECT_COST from "helpers/texts"

const generateVerificationDigit = (nit) => { // Revisar función ya que no funciona con cédulas de más de 9 digitos

    let number
    let verificationDigit
    let nitWithoutPoint = nit.replaceAll('.', '')
    const numberOfNit = []

    for (let i = 0; i < nit.length; i++) 
        numberOfNit.push(Number(nitWithoutPoint.charAt(i)))


    


    number = numberOfNit[0] * 41
    number += numberOfNit[1] * 37
    number += numberOfNit[2] * 29
    number += numberOfNit[3] * 23
    number += numberOfNit[4] * 19
    number += numberOfNit[5] * 17
    number += numberOfNit[6] * 13
    number += numberOfNit[7] * 7
    number += numberOfNit[8] * 3

    number = number % 11

    verificationDigit = (number >= 2) ? verificationDigit = 11 - number : number

    return verificationDigit.toString()

}

const formatNit = (nit) => {

    let formatNit = ''

    // * Replace all points to nothing to obtain only the numbers of the nit and then apply the format
    let nitWithoutPoint = nit.replaceAll('.', '')
    // * Repeat the for nitLenght times
    let nitLength = nitWithoutPoint.length / 3

    // * If the length of the nit is less than 3 then only return the numbers
    if (nit.length < 3) 
        return nit


    


    for (let i = 0; i < nitLength; i++) { // * Take three by three values of the nit and put a point
        formatNit += nitWithoutPoint.substring(i * 3, (i + 1) * 3) + "."
    }

    // * return and took the nit without the last point
    return formatNit.substring(0, formatNit.length - 1)
}

const generateValidYears = () => {

    const year = new Date().getFullYear()
    const arrayYears = [];

    for (let i = 1950; i <= year; i++) {
        arrayYears.push({id: i.toString(), value: i.toString()})
    }

    return arrayYears

}

const generateMunicipalities = (dataColombia) => dataColombia.map(data => {
    return {
            id: `${
            data.municipio
        } - ${
            data.departamento
        }`,
        value: `${
            data.municipio
        } - ${
            data.departamento
        }`
    }
})

const getPaymentValue = (valueOfCredit, numberOfPayments, effectiveAnnualInterestRate, valueInsurance, valueFee, valueKWP, valueOthers) => {

    const moduleNumberOfPayments = numberOfPayments / 12;
    // Tasa Interes Nominal
    var tin = ((((1 + effectiveAnnualInterestRate / 100) ** (30 / 360) - 1) * numberOfPayments) / moduleNumberOfPayments) * 100;

    // Tipo de interés fraccionado (del periodo)
    var im = tin / (numberOfPayments / moduleNumberOfPayments) / 100;

    var im2 = (1 + im) ** -numberOfPayments;
    // Cuota Cap. + Int.
    return(((valueOfCredit * im) / (1 - im2) + valueFee * valueKWP * 12 / 1350 + valueInsurance + valueOthers) * 1.0627); // ajustada

};

// * Get the total cost of the project
const getProjectCost = (selectedMethod, wattage) => {
    if (!(selectedMethod === METHODS_OF_SAVING.SOLAR || selectedMethod === METHODS_OF_SAVING.SUPPORT_SOLAR)) 
        return;
    


    if (wattage === null) 
        return;
    


    let entireWattage = Math.ceil(wattage);

    // * Get the cost of the project
    const costProject = PROJECT_COST.filter((costPertWattage) => costPertWattage.wattage === entireWattage);

    const cb = document.querySelector("#rural");
    // console.log(cb.checked);
    if (cb.checked) {
        return Math.ceil(costProject[0].value2 / 100000) * 100000;
    } else {
        return Math.ceil(costProject[0].value / 100000) * 100000;
    }
};

const optionsInitialValue = {
    chart: {
        id: "chartMain",
        locales: [
            {
                name: "ru"
            },
        ],
        defaultLocale: "ru",
        stacked: true
    },
    labels: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
    ],
    xaxis: {
        type: "text"
    },
    yaxis: [
        {
            labels: {
                formatter: function (value) {
                    return "$ " + Intl.NumberFormat("es-CO").format(value);
                }
            },
            show: true,
            min: -500000,
            max: 900000
        },
    ],
    markers: {
        size: 0,
        shape: "square",
        radius: 0
    },
    stroke: {
        width: [0, 0, 2]
    },
    colors: [
        "#008ffb", "#feb019", "#00e396"
    ],
    series: [
        {
            name: "Cuota SEOS",
            type: "column",
            data: [
                {
                    x: 1,
                    y: 700000
                },
                {
                    x: 2,
                    y: 700000
                },
                {
                    x: 3,
                    y: 700000
                },
                {
                    x: 4,
                    y: 0
                }, {
                    x: 5,
                    y: 0
                }, {
                    x: 6,
                    y: 0
                }, {
                    x: 7,
                    y: 0
                }, {
                    x: 8,
                    y: 0
                }, {
                    x: 9,
                    y: 0
                }, {
                    x: 10,
                    y: 0
                }, {
                    x: 11,
                    y: 0
                }, {
                    x: 12,
                    y: 0
                }, {
                    x: 13,
                    y: 0
                }, {
                    x: 14,
                    y: 0
                }, {
                    x: 15,
                    y: 0
                }, {
                    x: 16,
                    y: 0
                }, {
                    x: 17,
                    y: 0
                }, {
                    x: 18,
                    y: 0
                }, {
                    x: 19,
                    y: 0
                }, {
                    x: 20,
                    y: 0
                },
            ]
        }, {
            name: "Inversión/Ahorro",
            type: "column",
            data: [
                {
                    x: 1,
                    y: 250000 - 700000
                },
                {
                    x: 2,
                    y: 266250 - 700000
                },
                {
                    x: 3,
                    y: 283556 - 700000
                },
                {
                    x: 4,
                    y: 301987 - 0
                }, {
                    x: 5,
                    y: 321617 - 0
                }, {
                    x: 6,
                    y: 342522 - 0
                }, {
                    x: 7,
                    y: 364786 - 0
                }, {
                    x: 8,
                    y: 388497 - 0
                }, {
                    x: 9,
                    y: 413749 - 0
                }, {
                    x: 10,
                    y: 440643 - 0
                }, {
                    x: 11,
                    y: 469284 - 0
                }, {
                    x: 12,
                    y: 499788 - 0
                }, {
                    x: 13,
                    y: 532274 - 0
                }, {
                    x: 14,
                    y: 566872 - 0
                }, {
                    x: 15,
                    y: 603719 - 0
                }, {
                    x: 16,
                    y: 642960 - 0
                }, {
                    x: 17,
                    y: 684753 - 0
                }, {
                    x: 18,
                    y: 729262 - 0
                }, {
                    x: 19,
                    y: 776664 - 0
                }, {
                    x: 20,
                    y: 827147 - 0
                },
            ]
        }, {
            name: "Factura electricidad",
            type: "line",
            data: [
                {
                    x: 1,
                    y: 250000
                },
                {
                    x: 2,
                    y: 266250
                },
                {
                    x: 3,
                    y: 283556
                },
                {
                    x: 4,
                    y: 301987
                }, {
                    x: 5,
                    y: 321617
                }, {
                    x: 6,
                    y: 342522
                }, {
                    x: 7,
                    y: 364786
                }, {
                    x: 8,
                    y: 388497
                }, {
                    x: 9,
                    y: 413749
                }, {
                    x: 10,
                    y: 440643
                }, {
                    x: 11,
                    y: 469284
                }, {
                    x: 12,
                    y: 499788
                }, {
                    x: 13,
                    y: 532274
                }, {
                    x: 14,
                    y: 566872
                }, {
                    x: 15,
                    y: 603719
                }, {
                    x: 16,
                    y: 642960
                }, {
                    x: 17,
                    y: 684753
                }, {
                    x: 18,
                    y: 729262
                }, {
                    x: 19,
                    y: 776664
                }, {
                    x: 20,
                    y: 827147
                },
            ]
        },
    ]
};

const computeIRR = (cf, numOfFlows, projectInitialCost) => {
    const LOW_RATE = 0.01;
    const HIGH_RATE = 5.0;
    const MAX_ITERATION = 10000;
    const PRECISION_REQ = 0.00000001;
    const i = 0,
        j = 0;
    const m = 0.0;
    const oldValue = 0.00;
    const newValue = 0.00;
    const oldguessRate = LOW_RATE;
    const newguessRate = LOW_RATE;
    const guessRate = LOW_RATE;
    const lowGuessRate = LOW_RATE;
    const highGuessRate = HIGH_RATE;
    const npv = 0.0;
    const denom = 0.0;
    const cfTemp = [];
    cfTemp.push(...cf);
    cfTemp[0] = cf[0] - projectInitialCost;


    for (i = 0; i < MAX_ITERATION; i++) {
        npv = 0.00;
        for (j = 0; j < numOfFlows; j++) {
            denom = Math.pow((1 + guessRate), j);
            npv = npv + (cfTemp[j] / denom);
        }
        /* Stop checking once the required precision is achieved */
        if ((npv > 0) && (npv < PRECISION_REQ)) 
            break;
        


        if (oldValue == 0) 
            oldValue = npv;
         else 
            oldValue = newValue;
         newValue = npv;
        if (i > 0) {
            if (oldValue < newValue) {
                if (oldValue < 0 && newValue < 0) 
                    highGuessRate = newguessRate;
                 else 
                    lowGuessRate = newguessRate;
                


            } else {
                if (oldValue > 0 && newValue > 0) 
                    lowGuessRate = newguessRate;
                 else 
                    highGuessRate = newguessRate;
                


            }
        }
        oldguessRate = guessRate;
        guessRate = (lowGuessRate + highGuessRate) / 2;
        newguessRate = guessRate;
    }
    return guessRate;
};

// const updateChartData = (stateNumeroCuotas, projectValueInvoice, valuePayment, irrValue, setirrValue, projectInitialCost, newSeries, newyaxis) => {
const updateChartData = (options, setOptions, stateNumeroCuotas, projectValueInvoice, valuePayment, irrValue, setirrValue, projectInitialCost) => {
    const newSeries = [];
    const newyaxis = [];
    const yaxisValues = [];
    const cfValues = [];
    const index = 1;
    const xValue = 0,
        yValue = 0;
    const data = null;
    var flag = 0;
    optionsInitialValue.series.map((s) => {
        data = s.data.map(() => {

            if (index <= (stateNumeroCuotas.value / 12)) {
                yValue = Math.floor(valuePayment); // Cuota SEOS
                flag = 0;
            } else {
                if (index <= 21) {
                    if ((stateNumeroCuotas.value % 12) && ! flag) {
                        flag = 1;
                        yValue = Math.floor(valuePayment / 2);
                    } else {
                        yValue = Math.floor(0);
                    }
                }
            };
            if (index > 20 && index < 41) { // Inversion ahorro
                if ((index - 20) <= (stateNumeroCuotas.value / 12)) {
                    yValue = Math.floor((868 * (1 + 0.05989721558) ** (index - 20) * (projectValueInvoice / 868)) - valuePayment);
                    flag = 0;

                } else {
                    if ((stateNumeroCuotas.value % 12) && ! flag) {
                        flag++;
                        yValue = Math.floor(868 * (1 + 0.05989721558) ** (index - 20) * (projectValueInvoice / 868) - valuePayment / 2);
                    } else {
                        yValue = Math.floor(868 * (1 + 0.05989721558) ** (index - 20) * (projectValueInvoice / 868));
                    }
                } cfValues.push(yValue * 12)
            };
            if (index >= 41) { // Factura electricidad
                yValue = Math.floor(868 * (1 + 0.05989721558) ** (index - 40) * (projectValueInvoice / 868));
            };
            xValue = index++ % 20
            if (! xValue) {
                xValue = 20
            }
            yaxisValues.push(yValue)
            return {x: xValue, y: yValue}
        })
        flag = 0;
        newSeries.push({name: s.name, type: s.type, data});
    })
    newyaxis.push({
        labels: {
            formatter: function (value) {
                return "$ " + Intl.NumberFormat("es-CO").format(value);
            }
        },
        show: true,

        min: Math.round(Math.min(... yaxisValues) / 100000) * 110000,
        max: Math.round(Math.max(... yaxisValues) / 100000) * 110000
    })
    irrValue = computeIRR(cfValues, cfValues.length, projectInitialCost);
    setirrValue(irrValue);
    const optionsCreate = {
        chart: {
            id: "chartMain",
            locales: [
                {
                    name: "ru"
                },
            ],
            defaultLocale: "ru",
            stacked: true
        },
        labels: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
        ],
        xaxis: {
            type: "text"
        },
        yaxis: newyaxis,
        markers: {
            size: 0,
            shape: "square",
            radius: 0
        },
        stroke: {
            width: [0, 0, 2]
        },
        colors: [
            "#008ffb", "#feb019", "#00e396"
        ],
        series: newSeries
    };

    setOptions(optionsCreate);
}

export {
    generateVerificationDigit,
    formatNit,
    generateValidYears,
    generateMunicipalities,
    getPaymentValue,
    getProjectCost,
    optionsInitialValue,
    computeIRR,
    updateChartData
}
