"use strict";
exports.id = 826;
exports.ids = [826];
exports.modules = {

/***/ 59:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo_seos_blanco.442330f9.png","height":60,"width":240,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGOcNWdytjhLLo9pyK/VEpxMIn/+/vv4//9/FgYGBsY/f/78Y9ywrC7ry4elPCZhJzeqCwoK/fzz+w0TIxMbUNF/oKIvAA2MIBX6Kp51AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":2});

/***/ }),

/***/ 8606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LS": () => (/* binding */ filterDepartments),
/* harmony export */   "Od": () => (/* binding */ mapLocalities),
/* harmony export */   "pQ": () => (/* binding */ mapDepartments),
/* harmony export */   "v2": () => (/* binding */ mapMunicipalities)
/* harmony export */ });
// * Don´t use SWR in this request because is not neccesary 
const localitiesInBogota = [
    "Antonio Nari\xf1o",
    "Barrios Unidos",
    "Bosa",
    "Chapinero",
    "Ciudad Bolivar",
    "Engativa",
    "Fontib\xf3n",
    "Kennedy",
    "La Candelaria",
    "Los Martires",
    "Puente Aranda",
    "Rafael Uribe Uribe",
    "San Cristobal",
    "Santa Fe",
    "Suba",
    "Sumapaz",
    "Teusaquillo",
    "Tunjuelito",
    "Usaquen",
    "Usme"
];
const isADepartmentWithCoverage = (department)=>{
    if (department === "Cundinamarca" || department === "Bol\xedvar" || department === "Atl\xe1ntico" || department === "Tolima" || department === "Bogot\xe1 D.C.") {
        return true;
    }
    return false;
};
const filterDepartments = (dataDepartments)=>{
    // * In the array stores only the names of the departments
    const departmentsInColombia = [];
    // * Element is the 0 to 100 array of the response of the request
    dataDepartments.forEach((department)=>{
        // *Searches if the department is in the array departmentsInColombia
        if (!departmentsInColombia.find((departmentInArray)=>departmentInArray === department.departamento)) {
            departmentsInColombia.push(department.departamento);
        }
    });
    return {
        dataOfMunicipalities: dataDepartments,
        departmentsInColombia
    };
};
const mapDepartments = (departments)=>departments?.filter((department)=>isADepartmentWithCoverage(department))?.map((department)=>{
        return {
            id: department,
            value: department
        };
    });
const mapMunicipalities = (dataColombia, department)=>dataColombia?.filter((municipality)=>municipality.departamento === department)?.map((municipality)=>{
        return {
            id: municipality.municipio,
            value: municipality.municipio
        };
    });
const mapLocalities = ()=>localitiesInBogota.map((locality)=>{
        return {
            id: locality,
            value: locality
        };
    });


/***/ }),

/***/ 9316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ TOUCHED_STATES)
/* harmony export */ });
/* unused harmony export STATES_FORM */
const TOUCHED_STATES = {
    NOT_TOUCHED: "NOT_TOUCHED",
    TOUCHED_FIRST_TIME: "TOUCHED_FIRST_TIME",
    TOUCHED_OK: "TOUCHED_OK"
};
const STATES_FORM = {
    FIRST_STAGE: 33,
    SECOND_STAGE: 66,
    THIRD_STAGE: 100
};


/***/ }),

/***/ 7540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useColombia)
/* harmony export */ });
/* harmony import */ var helpers_actions_with_departments_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8606);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useColombia = ()=>{
    /** *@const data all data of the municipalities and departments */ const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: departments , 1: setDepartments  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: municipalities , 1: setMunicipalities  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const getData = async ()=>{
            try {
                // * Generate the request of all data of the municipalities 
                const res = await fetch("https://www.datos.gov.co/resource/xdk5-pm3f.json");
                const json = res.ok ? res.json() : Promise.reject("Not fetching");
                const dataMunicipalities = await json;
                //* Filter and sort the data
                const { dataOfMunicipalities , departmentsInColombia  } = (0,helpers_actions_with_departments_data__WEBPACK_IMPORTED_MODULE_1__/* .filterDepartments */ .LS)(dataMunicipalities);
                const departmentsMap = (0,helpers_actions_with_departments_data__WEBPACK_IMPORTED_MODULE_1__/* .mapDepartments */ .pQ)(departmentsInColombia);
                setDepartments(departmentsMap);
                setData(dataOfMunicipalities);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    return {
        data,
        departments,
        municipalities,
        setMunicipalities
    };
};



/***/ })

};
;