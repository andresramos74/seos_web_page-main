(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{4136:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/partners",function(){return n(1509)}])},59:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo_seos_blanco.442330f9.png",height:60,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAS0lEQVR4nGOcNWdytjhLLo9pyK/VEpxMIn/+/vv4//9/FgYGBsY/f/78Y9ywrC7ry4elPCZhJzeqCwoK/fzz+w0TIxMbUNF/oKIvAA2MIBX6Kp51AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},8606:function(e,t,n){"use strict";n.d(t,{LS:function(){return r},Od:function(){return l},pQ:function(){return o},v2:function(){return s}});var a=["Antonio Nari\xf1o","Barrios Unidos","Bosa","Chapinero","Ciudad Bolivar","Engativa","Fontib\xf3n","Kennedy","La Candelaria","Los Martires","Puente Aranda","Rafael Uribe Uribe","San Cristobal","Santa Fe","Suba","Sumapaz","Teusaquillo","Tunjuelito","Usaquen","Usme"],r=function(e){var t=[];return e.forEach(function(e){t.find(function(t){return t===e.departamento})||t.push(e.departamento)}),{dataOfMunicipalities:e,departmentsInColombia:t}},o=function(e){var t;return null===(t=null==e?void 0:e.filter(function(e){var t;return"Cundinamarca"===e||"Bol\xedvar"===e||"Atl\xe1ntico"===e||"Tolima"===e||"Bogot\xe1 D.C."===e}))||void 0===t?void 0:t.map(function(e){return{id:e,value:e}})},s=function(e,t){var n;return null===(n=null==e?void 0:e.filter(function(e){return e.departamento===t}))||void 0===n?void 0:n.map(function(e){return{id:e.municipio,value:e.municipio}})},l=function(){return a.map(function(e){return{id:e,value:e}})}},9316:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var a={NOT_TOUCHED:"NOT_TOUCHED",TOUCHED_FIRST_TIME:"TOUCHED_FIRST_TIME",TOUCHED_OK:"TOUCHED_OK"}},7540:function(e,t,n){"use strict";n.d(t,{G:function(){return l}});var a=n(7568),r=n(655),o=n(8606),s=n(7294),l=function(){var e=(0,s.useState)(null),t=e[0],n=e[1],l=(0,s.useState)(null),i=l[0],c=l[1],u=(0,s.useState)(null),d=u[0],m=u[1];return(0,s.useEffect)(function(){var e;(e=(0,a.Z)(function(){var e,t,a,s,l,i,u,d;return(0,r.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch("https://www.datos.gov.co/resource/xdk5-pm3f.json")];case 1:return[4,(e=t.sent()).ok?e.json():Promise.reject("Not fetching")];case 2:return a=t.sent(),l=(s=(0,o.LS)(a)).dataOfMunicipalities,i=s.departmentsInColombia,c((0,o.pQ)(i)),n(l),[3,4];case 3:return d=t.sent(),console.log(d),[3,4];case 4:return[2]}})}),function(){return e.apply(this,arguments)})()},[]),{data:t,departments:i,municipalities:d,setMunicipalities:m}}},1509:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var a=n(7568),r=n(603),o=n(655),s=n(5893),l=n(7297),i=n(7283);function c(){var e=(0,l.Z)(["\n\n  mutation AddInstallerInfo($installer: InstallerInfo) {\n    addInstallerInfo(installer: $installer){\n      legalInfo{\n        nit\n      }\n    }\n  }\n"]);return c=function(){return e},e}var u=(0,i.Ps)(c()),d=n(1799),m=n(9396),_={CHANGE_COMPANY_NAME:"CHANGE_COMPANY_NAME",CHANGE_NIT:"CHANGE_NIT",CHANGE_DATE_OF_FUNDATION:"CHANGE_DATE_OF_FUNDATION",CHANGE_CITY_CONSTITUTION:"CHANGE_CITY_CONSTITUTION",CHANGE_KW_INSTALLED:"CHANGE_KW_INSTALLED",CHANGE_NUMBER_CLIENTES:"CHANGE_NUMBER_CLIENTES",CHANGE_ACOSOL_ASSOCIATE:"CHANGE_ACOSOL_ASSOCIATE",CHANGE_INFLUENCY_CITY:"CHANGE_INFLUENCY_CITY",CHANGE_EMAIL:"CHANGE_EMAIL",CHANGE_PHONE_NUMBER:"CHANGE_PHONE_NUMBER",CHANGE_WEB_PAGE:"CHANGE_WEB_PAGE",CHANGE_ORIGIN_LEAD:"CHANGE_ORIGIN_LEAD"},p=n(9316),b=function(e){var t;return(e.length<3||e.length>25||!/^[a-zA-Z0-9 ,.'-]+$/i.test(e))&&(t="El nombre de tu compa\xf1\xeda es erroneo"),t},f=function(e){var t,n=e.replaceAll(".","");return 9===n.length&&/^[0-9]*$/.test(n)||(t="El NIT de tu compa\xf1\xeda no es valido"),t},x=function(e){var t,n=e.split("-"),a=Number(n[2]),r=Number(n[1]),o=Number(n[0]),s=new Date,l=s.getFullYear(),i=s.getMonth()+1,c=s.getDate();return(0===e.length||o>l||o<1950)&&(t="La fecha de constituci\xf3n es erronea."),n[1]>i&&o===l&&(t="La fecha de constituci\xf3n es erronea."),a>c&&o===l&&r===i&&(t="La fecha de constituci\xf3n es erronea."),t},h=function(e,t){var n;return 0!==e.length&&t.find(function(t){return t.value===e})||(n="La ciudad de constituci\xf3n es erronea."),n},v=function(e){var t;return(0===e.length||e.length>7||e.length<1||!/^[0-9]*$/.test(e))&&(t="El n\xfamero de kw instalados es incorrecto"),t},N=function(e){var t;return(0===e.length||e.length<1||e.length>4||!/^[0-9]*$/.test(e))&&(t="El n\xfamero de clientes que ingresaste es erroneo."),t},g=function(e){var t;return(e.length>25||e.length<3||!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g.test(e))&&(t="El email no es correcto"),t},y=function(e){var t,n=/^[0-9]*$/;return(7!==e.length||!n.test(e))&&(t="N\xfamero de tel\xe9fono invalido",10===e.length&&n.test(e)&&(t=void 0)),t},E=function(e){var t;return(email.length>25||email.length<3||!/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(e))&&(t="La direcci\xf3n introducida es incorrecta"),t},C=function(e){var t;return/^[a-z ,.'-]+$/i.test(e)&&["Acosol","Instalador referido","Pauta","Evento"].find(function(t){return t===e})||(t="Selecci\xf3n incorrecta"),t},T=function(e){var t;return(e.length>30||!/^[a-z ,.'-]+$/i.test(e))&&(t="Introduce un nombre correcto"),t},j=function(e){var t;return(e.length>10||!/^[a-z0-9 ,.'-]+$/i.test(e))&&(t="Nombre del evento invalido"),t},w=function(e){for(var t,n=e.replaceAll(".",""),a=[],r=0;r<e.length;r++)a.push(Number(n.charAt(r)));return t=41*a[0],t+=37*a[1],t+=29*a[2],t+=23*a[3],t+=19*a[4],t+=17*a[5],t+=13*a[6],t+=7*a[7],t+=3*a[8],((t%=11)>=2?11-t:t).toString()},O=function(e){var t="",n=e.replaceAll(".",""),a=n.length/3;if(e.length<3)return e;for(var r=0;r<a;r++)t+=n.substring(3*r,(r+1)*3)+".";return t.substring(0,t.length-1)},A=function(e){return e.map(function(e){return{id:"".concat(e.municipio," - ").concat(e.departamento),value:"".concat(e.municipio," - ").concat(e.departamento)}})},I={values:{company_name:"",nit:{value:"",verificationDigit:""},date:"",city_constitution:"",kw_installed:"",number_of_clients:"",acosol_associate:!1,influency_city:"",email:"",phone_number:"",web_page:"",origin_lead:""},errors:{},touched:{company_name:p.z.NOT_TOUCHED,nit:p.z.NOT_TOUCHED,date:p.z.NOT_TOUCHED,city_constitution:p.z.NOT_TOUCHED,kw_installed:p.z.NOT_TOUCHED,number_of_clients:p.z.NOT_TOUCHED,acosol_associate:p.z.NOT_TOUCHED,influency_city:p.z.NOT_TOUCHED,email:p.z.NOT_TOUCHED,phone_number:p.z.NOT_TOUCHED,web_page:p.z.NOT_TOUCHED,origin_lead:p.z.NOT_TOUCHED}};function Z(e,t){switch(t.type){case _.CHANGE_COMPANY_NAME:var n=b(t.payload);return!n&&e.errors.company_name&&delete e.errors.company_name,n?{values:(0,m.Z)((0,d.Z)({},e.values),{company_name:t.payload}),errors:(0,m.Z)((0,d.Z)({},e.errors),{company_name:n}),touched:(0,m.Z)((0,d.Z)({},e.touched),{company_name:p.z.TOUCHED_FIRST_TIME})}:{values:(0,m.Z)((0,d.Z)({},e.values),{company_name:t.payload}),errors:(0,d.Z)({},e.errors),touched:(0,m.Z)((0,d.Z)({},e.touched),{company_name:p.z.TOUCHED_OK})};case _.CHANGE_NIT:var a,r=f(t.payload),o=O(t.payload);return!r&&e.errors.nit&&delete e.errors.nit,r||(a=w(t.payload)),r?{values:(0,m.Z)((0,d.Z)({},e.values),{nit:{value:o,verificationDigit:""}}),errors:(0,m.Z)((0,d.Z)({},e.errors),{nit:r}),touched:(0,m.Z)((0,d.Z)({},e.touched),{nit:p.z.TOUCHED_FIRST_TIME})}:{values:(0,m.Z)((0,d.Z)({},e.values),{nit:{value:o,verificationDigit:a}}),errors:(0,d.Z)({},e.errors),touched:(0,m.Z)((0,d.Z)({},e.touched),{nit:p.z.TOUCHED_OK})};case _.CHANGE_DATE_OF_FUNDATION:var s=x(t.payload);return!s&&e.errors.date&&delete e.errors.date,s?{values:(0,m.Z)((0,d.Z)({},e.values),{date:t.payload}),errors:(0,m.Z)((0,d.Z)({},e.errors),{date:s}),touched:(0,m.Z)((0,d.Z)({},e.touched),{date:p.z.TOUCHED_FIRST_TIME})}:{values:(0,m.Z)((0,d.Z)({},e.values),{date:t.payload}),errors:(0,d.Z)({},e.errors),touched:(0,m.Z)((0,d.Z)({},e.touched),{date:p.z.TOUCHED_OK})};case _.CHANGE_CITY_CONSTITUTION:var l=t.payload,i=l.value,c=h(i,l.arrayCities);return!c&&e.errors.city_constitution&&delete e.errors.city_constitution,c?{values:(0,m.Z)((0,d.Z)({},e.values),{city_constitution:i}),errors:(0,m.Z)((0,d.Z)({},e.errors),{city_constitution:c}),touched:(0,m.Z)((0,d.Z)({},e.touched),{city_constitution:p.z.TOUCHED_FIRST_TIME})}:{values:(0,m.Z)((0,d.Z)({},e.values),{city_constitution:i}),errors:(0,d.Z)({},e.errors),touched:(0,m.Z)((0,d.Z)({},e.touched),{city_constitution:p.z.TOUCHED_OK})};case _.CHANGE_KW_INSTALLED:var u=v(t.payload);return!u&&e.errors.kw_installed&&delete e.errors.kw_installed,u?{values:(0,m.Z)((0,d.Z)({},e.values),{kw_installed:t.payload}),errors:(0,m.Z)((0,d.Z)({},e.errors),{kw_installed:u}),touched:(0,m.Z)((0,d.Z)({},e.touched),{kw_installed:p.z.TOUCHED_FIRST_TIME})}:{values:(0,m.Z)((0,d.Z)({},e.values),{kw_installed:t.payload}),errors:(0,d.Z)({},e.errors),touched:(0,m.Z)((0,d.Z)({},e.touched),{kw_installed:p.z.TOUCHED_OK})};case _.CHANGE_NUMBER_CLIENTES:var T=N(t.payload);return!T&&e.errors.number_of_clients&&delete e.errors.number_of_clients,T?{values:(0,m.Z)((0,d.Z)({},e.values),{number_of_clients:t.payload}),errors:(0,m.Z)((0,d.Z)({},e.errors),{number_of_clients:T}),touched:(0,m.Z)((0,d.Z)({},e.touched),{number_of_clients:p.z.TOUCHED_FIRST_TIME})}:{values:(0,m.Z)((0,d.Z)({},e.values),{number_of_clients:t.payload}),errors:(0,d.Z)({},e.errors),touched:(0,m.Z)((0,d.Z)({},e.touched),{number_of_clients:p.z.TOUCHED_OK})};case _.CHANGE_ACOSOL_ASSOCIATE:var j=e.values.acosol_associate;return(0,m.Z)((0,d.Z)({},e),{values:(0,m.Z)((0,d.Z)({},e.values),{acosol_associate:!j})});case _.CHANGE_INFLUENCY_CITY:var A=t.payload,I=A.value,Z=h(I,A.arrayCities);return!Z&&e.errors.influency_city&&delete e.errors.influency_city,Z?{values:(0,m.Z)((0,d.Z)({},e.values),{influency_city:I}),errors:(0,m.Z)((0,d.Z)({},e.errors),{influency_city:Z}),touched:(0,m.Z)((0,d.Z)({},e.touched),{influency_city:p.z.TOUCHED_FIRST_TIME})}:{values:(0,m.Z)((0,d.Z)({},e.values),{influency_city:I}),errors:(0,d.Z)({},e.errors),touched:(0,m.Z)((0,d.Z)({},e.touched),{influency_city:p.z.TOUCHED_OK})};case _.CHANGE_EMAIL:var H=g(t.payload);return!H&&e.errors.email&&delete e.errors.email,H?{values:(0,m.Z)((0,d.Z)({},e.values),{email:t.payload}),errors:(0,m.Z)((0,d.Z)({},e.errors),{email:H}),touched:(0,m.Z)((0,d.Z)({},e.touched),{email:p.z.TOUCHED_FIRST_TIME})}:{values:(0,m.Z)((0,d.Z)({},e.values),{email:t.payload}),errors:(0,d.Z)({},e.errors),touched:(0,m.Z)((0,d.Z)({},e.touched),{email:p.z.TOUCHED_OK})};case _.CHANGE_PHONE_NUMBER:var S=y(t.payload);return!S&&e.errors.phone_number&&delete e.errors.phone_number,S?{values:(0,m.Z)((0,d.Z)({},e.values),{phone_number:t.payload}),errors:(0,m.Z)((0,d.Z)({},e.errors),{phone_number:S}),touched:(0,m.Z)((0,d.Z)({},e.touched),{phone_number:p.z.TOUCHED_FIRST_TIME})}:{values:(0,m.Z)((0,d.Z)({},e.values),{phone_number:t.payload}),errors:(0,d.Z)({},e.errors),touched:(0,m.Z)((0,d.Z)({},e.touched),{phone_number:p.z.TOUCHED_OK})};case _.CHANGE_WEB_PAGE:var D=E(t.payload);return!D&&e.errors.web_page&&delete e.errors.web_page,D?{values:(0,m.Z)((0,d.Z)({},e.values),{web_page:t.payload}),errors:(0,m.Z)((0,d.Z)({},e.errors),{web_page:D}),touched:(0,m.Z)((0,d.Z)({},e.touched),{web_page:p.z.TOUCHED_FIRST_TIME})}:{values:(0,m.Z)((0,d.Z)({},e.values),{web_page:t.payload}),errors:(0,d.Z)({},e.errors),touched:(0,m.Z)((0,d.Z)({},e.touched),{web_page:p.z.TOUCHED_OK})};case _.CHANGE_ORIGIN_LEAD:var z=C(t.payload);return!z&&e.errors.origin_lead&&delete e.errors.origin_lead,z?{values:(0,m.Z)((0,d.Z)({},e.values),{origin_lead:t.payload}),errors:(0,m.Z)((0,d.Z)({},e.errors),{origin_lead:z}),touched:(0,m.Z)((0,d.Z)({},e.touched),{origin_lead:p.z.TOUCHED_FIRST_TIME})}:{values:(0,m.Z)((0,d.Z)({},e.values),{origin_lead:t.payload}),errors:(0,d.Z)({},e.errors),touched:(0,m.Z)((0,d.Z)({},e.touched),{origin_lead:p.z.TOUCHED_OK})}}}var H=n(1068),S=n(7294),D=n(5675),z=n.n(D),U=n(59),L={kw_installed:"Kw instalados:",number_clients:"N\xfamero de clientes:",influency_city:"Ciudad de influencia:"},F=n(7540),k=n(4640),G=function(e){var t=e.values,n=e.errors,a=e.touched,r=e.dispatch,o=(0,F.G)(),l=o.data,i=(o.departments,o.municipalities),c=o.setMunicipalities;(0,S.useEffect)(function(){if(null!==l){var e=A(l);c(e)}},[l]);var u=function(e,t){"kw_installed"===t&&r({type:_.CHANGE_KW_INSTALLED,payload:e}),"number_of_clients"===t&&r({type:_.CHANGE_NUMBER_CLIENTES,payload:e}),"checkbox_acosol"===t&&r({type:_.CHANGE_ACOSOL_ASSOCIATE}),"influency_city"===t&&r({type:_.CHANGE_INFLUENCY_CITY,payload:{value:e,arrayCities:i}})},d=function(e,t){var n;u(e.target.value,t)},m=function(e){var t=e.target.parentNode,n=t.querySelector("span"),a=t.querySelector("input");n.classList.add("content-name"),n.classList.add("transition"),n.classList.remove("content"),a.focus()},b=function(e){var t=e.target.parentNode,n=e.target,a=t.querySelector("input");n.classList.add("content-name"),n.classList.add("transition"),n.classList.remove("content"),a.focus()},f=function(e,t){var n=e.target.parentNode.querySelector("span"),a=e.target.value;0===e.target.value.length&&(n.classList.remove("content-name"),n.classList.remove("transition"),n.classList.add("content"),n.style.color=""),0!==e.target.value.length&&(n.style.color="black"),u(a,t)},x=function(e,t){e.target.classList.contains("react-datalist-input__listbox-option")&&u(e.target.getAttribute("aria-label"),t)},h=function(e,t){u(e.target.value,t)},v=function(e){var t=e.target.parentNode.querySelector("label"),n=e.target;t.classList.add("content-name"),t.classList.add("transition"),t.classList.remove("content"),n.focus()},N=function(e){var t=e.target.parentNode.querySelector("label");0===e.target.value.length&&(t.classList.remove("content-name"),t.classList.remove("transition"),t.classList.add("content"),t.style.color=""),0!==e.target.value.length&&(t.style.color="black")};return(0,s.jsxs)("article",{className:"px-3 py-4 md:w-2/4 w-full border-b border-b-gray md:border-b-0",children:[(0,s.jsx)("h1",{className:"font-semibold",children:"Informaci\xf3n de tu compa\xf1\xeda:"}),(0,s.jsx)("section",{className:"relative h-8 mt-7",children:(0,s.jsxs)("label",{id:"kw_installed",children:[(0,s.jsx)("span",{className:"content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full",onClick:m,children:L.kw_installed}),(0,s.jsx)("input",{name:"kw_installed",className:"w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1",onFocus:m,onBlur:function(e){return f(e,"kw_installed")},onChange:function(e){return d(e,"kw_installed")},value:t.kw_installed,"aria-labelledby":"kw_installed"})]})}),n.kw_installed||a.kw_installed===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"text-red-warning mb-8 px-1 text-sm",children:n.kw_installed}):(0,s.jsx)("p",{className:"mb-8"}),(0,s.jsx)("section",{className:"relative h-8 mt-4",children:(0,s.jsxs)("label",{id:"number_of_clients",children:[(0,s.jsx)("span",{className:"content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full",onClick:m,children:L.number_clients}),(0,s.jsx)("input",{name:"number_of_clients",className:"w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1",onFocus:m,onBlur:function(e){return f(e,"number_of_clients")},onChange:function(e){return d(e,"number_of_clients")},value:t.number_of_clients,"aria-labelledby":"number_of_clients"})]})}),n.number_of_clients||a.number_of_clients===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"text-red-warning mb-8 px-1 text-sm",children:n.number_of_clients}):(0,s.jsx)("p",{className:"mb-8"}),(0,s.jsxs)("section",{className:"h-min mt-4 mb-6",children:[(0,s.jsxs)("label",{id:"checkbox_acosol",children:["Asociado Acosol: ",(0,s.jsx)("input",{type:"checkbox",name:"checkbox_acosol",onChange:function(e){return u("",e.target.name)},form:"{}"})]}),(0,s.jsx)("p",{className:"text-gray text-xs",children:"Si eres asociado a Acosol entonces marca la casilla"})]}),(0,s.jsx)("section",{children:i&&(0,s.jsx)(k.ZP,{label:"Ciudad de influencia:",onSelect:function(e){return r({type:_.CHANGE_INFLUENCY_CITY,payload:{value:e.value,arrayCities:i}})},onChange:function(e){return d(e,"influency_city")},onBlur:function(e){return h(e,"influency_city")},onClick:function(e){return x(e,"influency_city")},inputProps:{className:"outline-none w-full border border-gray focus:border-seos-blue-light rounded-[3px] p-1 pl-1","aria-labelledby":"influency_city",onFocus:v,onBlur:N},labelProps:{className:"content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full",id:"influency_city",onClick:b},items:i})}),n.influency_city||a.influency_city===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"text-red-warning mb-2 px-1 text-sm",children:n.influency_city}):(0,s.jsx)("p",{className:"mb-4"})]})},M={email:"Direcci\xf3n de correo electronic\xf3",phone_number:"Introduce tu n\xfamero de tel\xe9fono",web_page:"Introduce la direcci\xf3n de tu p\xe1gina web",origin_lead:"\xbfC\xf3mo te enteraste de nosotros?",referrer_name:"\xbfQuien te referencio?",name_event:"Nombre del evento:"},R={email:"Email no valido",phone_number:"N\xfamero de tel\xe9fono invalido",web_page:"La direcci\xf3n introducida es incorrecta",origin_lead:"Selecci\xf3n incorrecta",referrer_name:"Nombre de referido incorrecto",name_event:"Nombre de evento incorrecto"},B={value:"",touched:p.z.NOT_TOUCHED},P={value:"",touched:p.z.NOT_TOUCHED},K=function(e){var t=e.values,n=e.errors,a=e.touched,r=e.referrerName,o=e.nameEvent,l=e.setReferrerName,i=e.setNameEvent,c=e.dispatch,u=function(e,t){if("email"===t&&c({type:_.CHANGE_EMAIL,payload:e}),"phone_number"===t&&c({type:_.CHANGE_PHONE_NUMBER,payload:e}),"web_page"===t&&c({type:_.CHANGE_WEB_PAGE,payload:e}),"origin_lead"===t&&(c({type:_.CHANGE_ORIGIN_LEAD,payload:e}),"Pauta"===e&&(l(B),i(P)),"Acosol"===e&&(l(B),i(P)),"Instalador referido"===e&&i(P),"Evento"===e&&l(B)),"referrer_name"===t){var n=T(e);n?l({value:e,error:n,touched:p.z.TOUCHED_FIRST_TIME}):l({value:e,touched:p.z.TOUCHED_OK})}if("name_event"===t){var a=j(e);a?i({value:e,error:a,touched:p.z.TOUCHED_FIRST_TIME}):i({value:e,touched:p.z.TOUCHED_OK})}},d=function(e){var t;u(e.target.value,e.target.name)},m=function(e){var t=e.target.parentNode,n=t.querySelector("span"),a=t.querySelector("input");n.classList.add("content-name"),n.classList.add("transition"),n.classList.remove("content"),a.focus()},b=function(e){var t=e.target.parentNode.querySelector("span"),n=e.target.name,a=e.target.value;0===e.target.value.length&&(t.classList.remove("content-name"),t.classList.remove("transition"),t.classList.add("content"),t.style.color=""),0!==e.target.value.length&&(t.style.color="black"),u(a,n)};return(0,s.jsxs)("article",{className:"flex flex-wrap gap-7 px-4 pt-5 md:border-t md:border-t-gray",children:[(0,s.jsx)("h1",{className:"basis-full font-semibold",children:"Informaci\xf3n de contacto:"}),(0,s.jsxs)("section",{className:"relative grow h-8 min-w-[300px] md:mb-0 ".concat(n.email&&"mb-6"),children:[(0,s.jsxs)("label",{id:"email",children:[(0,s.jsx)("span",{className:"content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full",onClick:m,children:M.email}),(0,s.jsx)("input",{name:"email",className:"w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1",onFocus:m,onBlur:b,onChange:d,value:t.email,"aria-labelledby":"email"})]}),n.email||a.email===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"text-red-warning px-1 text-sm",children:R.email}):(0,s.jsx)("p",{className:""})]}),(0,s.jsxs)("section",{className:"relative grow h-8 min-w-[300px] md:mb-0 ".concat(n.email&&"mb-6"),children:[(0,s.jsxs)("label",{id:"phone_number",children:[(0,s.jsx)("span",{className:"content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full",onClick:m,children:M.phone_number}),(0,s.jsx)("input",{name:"phone_number",className:"w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1",onFocus:m,onBlur:b,onChange:d,value:t.phone_number,"aria-labelledby":"phone_number"})]}),n.phone_number||a.phone_number===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"text-red-warning px-1 text-sm",children:R.phone_number}):(0,s.jsx)("p",{className:""})]}),(0,s.jsxs)("section",{className:"relative grow basis-full h-8 min-w-[300px] md:mt-6 ".concat(n.email&&"mb-6"," md:mb-1"),children:[(0,s.jsxs)("label",{id:"web_page",children:[(0,s.jsx)("span",{className:"content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full",onClick:m,children:M.web_page}),(0,s.jsx)("input",{name:"web_page",className:"w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1",onFocus:m,onBlur:b,onChange:d,value:t.web_page,"aria-labelledby":"web_page"})]}),n.web_page||a.web_page===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"text-red-warning mb-8 px-1 text-sm",children:R.web_page}):(0,s.jsx)("p",{className:"mb-6"})]}),(0,s.jsxs)("section",{className:"relative grow h-8 mt-5 min-w-[300px]",children:[(0,s.jsxs)("label",{id:"origin_lead",children:[(0,s.jsx)("span",{className:"content-name absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full",children:M.origin_lead}),(0,s.jsxs)("select",{name:"origin_lead",className:"w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1",onChange:d,"aria-labelledby":"origin_lead",children:[(0,s.jsx)("option",{value:""}),(0,s.jsx)("option",{value:"Acosol",children:"Acosol"}),(0,s.jsx)("option",{value:"Instalador referido",children:"Instalador referido"}),(0,s.jsx)("option",{value:"Pauta",children:"Pauta"}),(0,s.jsx)("option",{value:"Evento",children:"Evento"})]})]}),n.origin_lead||a.origin_lead===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"text-red-warning mb-8 px-1 text-sm",children:n.origin_lead}):(0,s.jsx)("p",{className:"mb-6"})]}),"Instalador referido"===t.origin_lead&&(0,s.jsxs)("section",{className:"relative grow h-8 mt-5 min-w-[300px]",children:[(0,s.jsxs)("label",{id:"referrer_name",children:[(0,s.jsx)("span",{className:"content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full",onClick:m,children:M.referrer_name}),(0,s.jsx)("input",{name:"referrer_name",className:"w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1",onFocus:m,onBlur:b,onChange:d,value:r.value,"aria-labelledby":"referrer_name"})]}),r.error||r.touched===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"text-red-warning mb-8 px-1 text-sm",children:R.referrer_name}):(0,s.jsx)("p",{className:"mb-6"})]}),"Evento"===t.origin_lead&&(0,s.jsxs)("section",{className:"relative grow h-8 mt-5 min-w-[300px]",children:[(0,s.jsxs)("label",{id:"name_event",children:[(0,s.jsx)("span",{className:"content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full",onClick:m,children:M.name_event}),(0,s.jsx)("input",{name:"name_event",className:"w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1",onFocus:m,onBlur:b,onChange:d,value:o.value,"aria-labelledby":"name_event"})]}),o.error||o.touched===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"text-red-warning mb-8 px-1 text-sm",children:R.name_event}):(0,s.jsx)("p",{className:"mb-6"})]})]})},Y=n(357),q=n.n(Y),$=function(e){e.setStageForm;var t=e.values,n=e.errors,a=e.touched,r=e.dispatch,o=(0,F.G)(),l=o.data,i=o.departments,c=o.municipalities,u=o.setMunicipalities,d=(0,S.useState)(p.z.NOT_TOUCHED),m=d[0],b=d[1],f=(0,S.useState)(function(){var e=new Date;return"".concat(e.getFullYear().toString(),"-").concat((e.getMonth()+1).toString(),"-").concat(e.getDate().toString())}),x=f[0];f[1],(0,S.useEffect)(function(){if(null!==l){var e=A(l);u(e)}},[i,l]);var h=function(e,t){"company_name"===t&&r({type:_.CHANGE_COMPANY_NAME,payload:e}),"nit"===t&&r({type:_.CHANGE_NIT,payload:e}),"date"===t&&r({type:_.CHANGE_DATE_OF_FUNDATION,payload:e}),"city_constitution"===t&&r({type:_.CHANGE_CITY_CONSTITUTION,payload:{value:e,arrayCities:c}})},v=function(e,t){var n;h(e.target.value,t)},N=function(e){"date"===e.getAttribute("id")&&(0,S.startTransition)(function(){b(p.z.TOUCHED_FIRST_TIME)})},g=function(e){var t=e.target.parentNode,n=t.querySelector("span"),a=t.querySelector("input");n.classList.add("content-name"),n.classList.add("transition"),n.classList.remove("content"),N(t),a.focus()},y=function(e){var t=e.target.parentNode,n=e.target,a=t.querySelector("input");n.classList.add("content-name"),n.classList.add("transition"),n.classList.remove("content"),a.focus()},E=function(e,t){var n=e.target.parentNode.querySelector("span");e.target.name;var a=e.target.value;0===e.target.value.length&&(n.classList.remove("content-name"),n.classList.remove("transition"),n.classList.add("content"),n.style.color=""),0!==e.target.value.length&&(n.style.color="black"),h(a,t)},C=function(e){var t=e.target.name;h(e.target.value,t)},T=function(e,t){e.target.classList.contains("react-datalist-input__listbox-option")&&h(e.target.getAttribute("aria-label"),t)},j=function(e,t){h(e.target.value,t)},w=function(e){var t=e.target.parentNode.querySelector("label"),n=e.target;t.classList.add("content-name"),t.classList.add("transition"),t.classList.remove("content"),n.focus()},O=function(e){var t=e.target.parentNode.querySelector("label");0===e.target.value.length&&(t.classList.remove("content-name"),t.classList.remove("transition"),t.classList.add("content"),t.style.color=""),0!==e.target.value.length&&(t.style.color="black")};return(0,s.jsxs)("article",{className:"jsx-43b6ba7740622cee px-3 py-4 md:w-2/4 w-full border-b border-b-gray md:border-r md:border-r-gray md:border-b-0",children:[(0,s.jsx)("h1",{className:"jsx-43b6ba7740622cee font-semibold",children:"Informaci\xf3n legal:"}),(0,s.jsx)("section",{className:"jsx-43b6ba7740622cee relative h-8 mt-7",children:(0,s.jsxs)("label",{id:"company_name",className:"jsx-43b6ba7740622cee",children:[(0,s.jsx)("span",{onClick:g,className:"jsx-43b6ba7740622cee content absolute transition duration-300 bottom-0 z-10 p-1 pl-2 w-full",children:"Nombre de tu compa\xf1\xeda:"}),(0,s.jsx)("input",{name:"company_name",onFocus:g,onBlur:function(e){return E(e,"company_name")},onChange:function(e){return v(e,"company_name")},value:t.company_name,"aria-labelledby":"company_name",className:"jsx-43b6ba7740622cee w-full bottom-0 outline-none border border-gray focus:border-seos-blue-light rounded-[4px] p-1 pl-1"})]})}),n.company_name||a.company_name===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"jsx-43b6ba7740622cee text-red-warning mb-8 px-1 text-sm",children:n.company_name}):(0,s.jsx)("p",{className:"jsx-43b6ba7740622cee mb-8"}),(0,s.jsxs)("section",{className:"jsx-43b6ba7740622cee relative flex h-8",children:[(0,s.jsxs)("label",{id:"nit",className:"jsx-43b6ba7740622cee w-[85%]",children:[(0,s.jsx)("span",{onClick:g,className:"jsx-43b6ba7740622cee content absolute transition duration-300 bottom-0 z-10 p-1 pl-2",children:"NIT de tu compa\xf1\xeda:"}),(0,s.jsx)("input",{name:"nit",onFocus:g,onBlur:function(e){return E(e,"nit")},onChange:function(e){return v(e,"nit")},value:t.nit.value,"aria-labelledby":"nit",className:"jsx-43b6ba7740622cee outline-none w-full border border-gray focus:border-seos-blue-light rounded-[3px] p-1 pl-1"})]}),(0,s.jsx)("p",{className:"jsx-43b6ba7740622cee mx-auto leading-[2.3rem]",children:" - "}),(0,s.jsx)("input",{type:"text",value:t.nit.verificationDigit,disabled:!0,className:"jsx-43b6ba7740622cee outline-none w-[10%] rounded-[3px] p-1 border bg-gray text-center"})]}),n.nit||a.nit===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"jsx-43b6ba7740622cee text-red-warning mb-8 px-1 text-sm",children:n.nit}):(0,s.jsx)("p",{className:"jsx-43b6ba7740622cee mb-8"}),(0,s.jsx)("section",{className:"jsx-43b6ba7740622cee relative h-8 mt-4",children:(0,s.jsxs)("label",{id:"date",className:"jsx-43b6ba7740622cee",children:[(0,s.jsx)("span",{onClick:g,className:"jsx-43b6ba7740622cee content text-black absolute w-full transition duration-300 bottom-0 z-10 p-1 pl-2",children:"Fecha de constituci\xf3n:"}),(0,s.jsx)("input",{type:"date",name:"date",min:"1950-01-01",max:x,onBlur:C,onFocus:g,onChange:function(e){return v(e,"date")},value:t.year,"aria-labelledby":"date",className:"jsx-43b6ba7740622cee "+"outline-none w-full h-8 border text-black ".concat(m===p.z.NOT_TOUCHED?"text-opacity-0":"text-opacity-100"," border-gray focus:border-seos-blue-light rounded-[3px] p-1 pl-1")})]})}),n.date||a.date===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"jsx-43b6ba7740622cee text-red-warning mb-8 px-1 pt-[0.25px] text-sm",children:n.date}):(0,s.jsx)("p",{className:"jsx-43b6ba7740622cee mb-8"}),(0,s.jsx)("section",{className:"jsx-43b6ba7740622cee",children:c&&(0,s.jsx)(k.ZP,{label:"Ciudad de constituci\xf3n:",onSelect:function(e){return r({type:_.CHANGE_CITY_CONSTITUTION,payload:{value:e.id,arrayCities:c}})},onChange:function(e){return v(e,"city_constitution")},onBlur:function(e){return j(e,"city_constitution")},onClick:function(e){return T(e,"city_constitution")},inputProps:{className:"outline-none w-full border border-gray focus:border-seos-blue-light rounded-[3px] p-1 pl-1","aria-labelledby":"city_constitution",onFocus:w,onBlur:O},labelProps:{className:"content absolute transition duration-100 bottom-0 z-10 p-1 pl-2 w-full",id:"city_constitution",onClick:y},items:c})}),n.city_constitution||a.city_constitution===p.z.TOUCHED_FIRST_TIME?(0,s.jsx)("div",{className:"jsx-43b6ba7740622cee text-red-warning mb-2 px-1 text-sm",children:n.city_constitution}):(0,s.jsx)("p",{className:"jsx-43b6ba7740622cee mb-4"}),(0,s.jsx)(q(),{id:"43b6ba7740622cee",children:""})]})},W={value:"",touched:p.z.NOT_TOUCHED},Q={value:"",touched:p.z.NOT_TOUCHED},J=function(){var e=(0,S.useReducer)(Z,I),t=e[0],n=e[1],l=t.values,i=t.errors,c=t.touched,d=(0,S.useState)(W),m=d[0],_=d[1],p=(0,S.useState)(Q),b=p[0],f=p[1],x=(0,S.useState)(null),h=x[0],v=x[1],N=(0,S.useState)(!1),g=N[0],y=N[1],E=(0,r.Z)((0,H.D)(u),2),C=E[0],T=E[1];T.loading;var j,w,O=T.data,A=T.error,D=(j=(0,a.Z)(function(e){var t,n,a,r,s,l,i,c,u,d;return(0,o.__generator)(this,function(o){switch(o.label){case 0:return t=JSON.parse(JSON.stringify(e)),n="".concat(t.nit.value,"-").concat(t.nit.verificationDigit),r=Number((a=t.date.split("-"))[2]),s=Number(a[1]),l=Number(a[0]),i=new Date(l,s-1,r),t.ttl=Math.round(Date.now()/1e3)+300,t.nit=n,t.date=i.getTime(),t.kw_installed=Number(e.kw_installed),t.number_of_clients=Number(e.number_of_clients),[4,fetch("https://api.ipify.org/?format=json")];case 1:return[4,o.sent().json()];case 2:return d=o.sent(),t.ip=d.ip,[2,t]}})}),function(e){return j.apply(this,arguments)}),L=(w=(0,a.Z)(function(e){var t,n,a;return(0,o.__generator)(this,function(t){switch(t.label){case 0:if(e.preventDefault(),v(null),l.referrerFrom=l.origin_lead,"Evento"===l.origin_lead&&(l.referrerFrom=b.value),"Instalador referido"===l.origin_lead&&(l.referrerFrom=m.value),0!==Object.getOwnPropertyNames(i).length)return v("Tienes errores en el formulario"),[2];if(Object.entries(l).some(function(e){if("acosol_associate"!==e[0]&&"web_page"!==e[0]&&""===e[1])return!0}))return v("Los campos no pueden estar vacios"),[2];if(!1===g)return v("Debes aceptar los t\xe9rminos y condiciones"),[2];t.label=1;case 1:return t.trys.push([1,4,,5]),[4,D(l)];case 2:return[4,C({variables:{installer:t.sent()}})];case 3:return t.sent(),[3,5];case 4:return a=t.sent(),console.log(a),[3,5];case 5:return[2]}})}),function(e){return w.apply(this,arguments)}),F=function(){y(!g)};return O?(0,s.jsxs)("section",{className:"font-['Poppins'] overflow-x-hidden flex flex-col h-screen w-screen",children:[(0,s.jsx)("header",{className:"sticky top-0 w-full bg-seos-blue-dark",children:(0,s.jsx)("div",{className:"relative w-52 h-20 mx-auto",children:(0,s.jsx)(z(),{src:U.Z,alt:"Logo seos",unoptimized:!0,layout:"fill",objectFit:"contain",priority:!0})})}),(0,s.jsx)("article",{className:"grow flex items-center",children:(0,s.jsx)("p",{className:"w-2/4 h-min py-7 px-4 m-auto text-center font-semibold rounded-md bg-slay-bg",children:"Gracias por registrarte"})})]}):A?(0,s.jsxs)("section",{className:"font-['Poppins'] overflow-x-hidden flex flex-col h-screen w-screen",children:[(0,s.jsx)("header",{className:"sticky top-0 w-full bg-seos-blue-dark",children:(0,s.jsx)("div",{className:"relative w-52 h-20 mx-auto",children:(0,s.jsx)(z(),{src:U.Z,alt:"Logo seos",unoptimized:!0,layout:"fill",objectFit:"contain",priority:!0})})}),(0,s.jsx)("article",{className:"grow flex items-center",children:(0,s.jsx)("p",{className:"w-2/4 h-min py-7 px-4 m-auto text-center font-semibold bg-slay-bg",children:"Hemos encontrado un usuario con el mismo n\xfamero de NIT, por favor verifica tus datos, si tu problema persiste por favor contacta soporte t\xe9cnico"})})]}):(0,s.jsxs)("section",{className:"flex flex-col font-['Poppins'] w-full overflow-x-hidden",children:[(0,s.jsx)("header",{className:"sticky top-0 w-full bg-seos-blue-dark",children:(0,s.jsx)("div",{className:"relative w-52 h-20 mx-auto",children:(0,s.jsx)(z(),{src:U.Z,alt:"Logo seos",unoptimized:!0,layout:"fill",objectFit:"contain",priority:!0})})}),(0,s.jsxs)("form",{className:"flex flex-col pb-4 m-auto mt-8 mb-32 w-full border border-gray sm:w-4/5 md:w-[680px] lg:w-[750px] h-min rounded-md",onSubmit:L,children:[(0,s.jsx)("p",{className:"px-3 py-2 border-b border-b-gray text-lg font-semibold",children:"Afiliaci\xf3n al club"}),(0,s.jsxs)("div",{className:"flex flex-wrap",children:[(0,s.jsx)($,{values:l,errors:i,touched:c,dispatch:n}),(0,s.jsx)(G,{values:l,errors:i,touched:c,dispatch:n})]}),(0,s.jsx)(K,{values:l,errors:i,touched:c,referrerName:m,nameEvent:b,setReferrerName:_,setNameEvent:f,dispatch:n}),(0,s.jsxs)("article",{className:"mt-4 px-4 py-2",children:[(0,s.jsxs)("label",{htmlFor:"",className:"",children:[(0,s.jsx)("a",{className:"text-seos-blue-light hover:underline cursor-pointer",children:"Aceptar t\xe9rminos y condiciones:"})," ",(0,s.jsx)("input",{type:"checkbox",onChange:F})]}),(0,s.jsxs)("section",{className:"w-full my-2 mt-4",children:[h&&(0,s.jsx)("p",{children:h}),(0,s.jsx)("button",{className:"flex mx-auto mt-2 px-4 h-8 leading-8 bg-seos-blue-light text-white hover:bg-seos-blue-dark rounded-md",onClick:L,children:"Registrarme"})]})]})]})]})}}},function(e){e.O(0,[675,190,478,774,888,179],function(){return e(e.s=4136)}),_N_E=e.O()}]);