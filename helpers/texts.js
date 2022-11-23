import { enc } from "crypto-js";

export const METHODS_OF_SAVING = {
  SOLAR: "Sistema de ahorro",
  SYSTEM_SUPPORT: "Sistema de respaldo",
  SUPPORT_SOLAR: "Sistema ahorro y respaldo",
};

export const WARNINGS = {
  SOLAR: [
    "Este sistema te va ahorrar hasta el 100% en el valor de tu factura.",
    "Este sistema solo puede estar instalado en un predio que ya tenga el servicio de energía tradicional.",
    "Ya que este sistema no tiene baterías no te podrá respaldar en el caso de una caída de la red eléctrica tradicional.",
  ],
  SYSTEM_SUPPORT: [
    "Este sistema puede darte respaldo para toda tu vivienda.",
    "Este no es un sistema de generación de energía solar, por lo que no genera un ahorro en tu factura.",
    "No se recomienda usar Luziol® para equipos de gran consumo energético. Esto podría afectar negativamente el tiempo de respaldo ofrecido.",
  ],
  SUPPORT_SOLAR: [
    "Este sistema cuenta con paneles para generar energía y ahorrar hasta un 100% en tu factura.",
    "El arreglo de baterías que lleva este sistema va a respaldar todo tu hogar en caso de un corte de energía.",
    "Este sistema solo puede estar instalado en un predio que ya tenga el servicio de energía tradicional.",
  ],
};

export const MESSAGE_INFORMATION = {
  SOLAR:
    "Un sistema solar te entrega la independencia energética que estabas buscando y te permite tomar el control de tu consumo de energía.",
  SYSTEM_SUPPORT:
    "El sistema de respaldo Luziol by Seos te mantendrá conectado durante cualquier pérdida de servicio eléctrico en tu hogar o negocio.",
  SUPPORT_SOLAR:
    "El sistema que garantiza energía en tu hogar, así no tengas servicio de las empresas de energía del país.",
};

export const TEXT_ESP = {
  AHORRO: "Escoge la solución que se ajusta a tu necesidad actual",
};

export const ERRORS_FORMS = {};

export const PRICE_KWH = [
  { department: "Bogotá D.C.", value: 690 },
  { department: "Atlántico", value: 706 },
  { department: "Bolívar", value: 727 },
  { department: "Tolima", value: 719 },
  { department: "Cundinamarca", value: 631.38 },
];

export const PROJECT_COST = [
  { wattage: 2, value: 18942466, value2: 19720466 },
  { wattage: 3, value: 23024999, value2: 23992002 },
  { wattage: 4, value: 27043533, value2: 28136533 },
  { wattage: 5, value: 29506944, value2: 30725943 },
  { wattage: 6, value: 33579677, value2: 34924676 },
  { wattage: 7, value: 38807789, value2: 40341791 },
  { wattage: 8, value: 39420000, value2: 41029597 },
  { wattage: 9, value: 44000000, value2: 45800000 },
  { wattage: 10, value: 51600000, value2: 53679996 },
  { wattage: 11, value: 58800000, value2: 61159994 },
  { wattage: 12, value: 65600000, value2: 68240000 },
  { wattage: 13, value: 72900000, value2: 75819996 },
  { wattage: 14, value: 80000000, value2: 83200000 },
];

export const VALUES_RADIATION = [
  { department: "Bogotá D.C.", value: 1350 },
  { department: "Atlántico", value: 1550 },
  { department: "Bolívar", value: 1500 },
  { department: "Tolima", value: 1475 },
  { department: "Cundinamarca", value: 1400 },
];

export const VALUES_LUZIOL = [];

export const VALUES_APR = { APR: 30 };
