/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./apollo-client.js":
/*!**************************!*\
  !*** ./apollo-client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),\n    connectToDevTools: true,\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({\n        uri: \"https://i80os35q99.execute-api.us-east-1.amazonaws.com/dev/graphql\"\n    })\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcG9sbG8tY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRTtBQUVwRSxNQUFNRyxNQUFNLEdBQUcsSUFBSUgsd0RBQVksQ0FBQztJQUM5QkksS0FBSyxFQUFFLElBQUlILHlEQUFhLEVBQUU7SUFDMUJJLGlCQUFpQixFQUFFLElBQUk7SUFDdkJDLElBQUksRUFBRSxJQUFJSixvREFBUSxDQUFDO1FBQ2pCSyxHQUFHLEVBQUUsb0VBQW9FO0tBSTFFLENBQUM7Q0FDSCxDQUFDO0FBRUYsaUVBQWVKLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZW9zX3dlYl9wYWdlLy4vYXBvbGxvLWNsaWVudC5qcz8zY2U3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBIdHRwTGlua30gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgY29ubmVjdFRvRGV2VG9vbHM6IHRydWUsXG4gIGxpbms6IG5ldyBIdHRwTGluayh7XG4gICAgdXJpOiAnaHR0cHM6Ly9pODBvczM1cTk5LmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9ncmFwaHFsJ1xuICAgIC8vdXJpOiAnaHR0cHM6Ly8wczN0ejB2amZoLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2RlZmF1bHQvc2VydmVybGVzcy1zZW9zLWFwaS1kZXYtZ3JhcGhxbDInXG4gICAgLy91cmk6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvZGV2L2dyYXBocWwnXG4gICAgLyogVXNlIHRoaXMgdG8gZGV2ZWxvcG1lbnQgc3RhZ2UgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2Rldi9ncmFwaHFsJyAqL1xuICB9KSwgIFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50Il0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJIdHRwTGluayIsImNsaWVudCIsImNhY2hlIiwiY29ubmVjdFRvRGV2VG9vbHMiLCJsaW5rIiwidXJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./apollo-client.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-client */ \"./apollo-client.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const getLayout = Component.getLayout || ((page)=>page);\n    return getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: apollo_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/andresramos/Desktop/SEOSEnergy/SEOSEnergy_Code/seos_web_page-main/pages/_app.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/andresramos/Desktop/SEOSEnergy/SEOSEnergy_Code/seos_web_page-main/pages/_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDaUI7QUFDYjtBQUVsQyxTQUFTRSxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUV2QyxNQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0UsU0FBUyxJQUFLLEVBQUNDLElBQUksR0FBS0EsSUFBSTtJQUV4RCxPQUFPRCxTQUFTLGVBQ2QsOERBQUNMLDBEQUFjO1FBQUNDLE1BQU0sRUFBRUEscURBQU07a0JBQzVCLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2IsQ0FDbEI7QUFDSCxDQUFDO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZW9zX3dlYl9wYWdlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCBjbGllbnQgZnJvbSAnYXBvbGxvLWNsaWVudCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgY29uc3QgZ2V0TGF5b3V0ID0gQ29tcG9uZW50LmdldExheW91dCB8fCAoKHBhZ2UpID0+IHBhZ2UpXG4gIFxuICByZXR1cm4gZ2V0TGF5b3V0KFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIkFwb2xsb1Byb3ZpZGVyIiwiY2xpZW50IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRMYXlvdXQiLCJwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();