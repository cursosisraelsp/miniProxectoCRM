/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clases/Comunicacion.ts":
/*!************************************!*\
  !*** ./src/clases/Comunicacion.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


/**
 * @author Pepito Gutierrez
 * @class Comunicacion
 * @method metodoGet método que temos que utilizar para un GET
 * @method metodoPost métodos que temos que utilizar para un POST
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Comunicacion = void 0;
class Comunicacion {
    static datos;
    /**
     * @method metodoGet que fai un GET
     * @param endpoint será un endpoint de tipo texto
     */
    static async metodoGet(endpoint) {
        console.log("this.endpoint ", endpoint);
        let datoServidor = await fetch(endpoint);
        this.datos = await datoServidor.json();
    }
    /**
     * @method metodoPost é estático que fai un POST
     * @param endpoint  será un endpoint de tipo texto
     */
    static async metodoPost(endpoint, datos) {
        let resposta = await fetch(endpoint, datos); //  Son os datos que enviamos co endpoint
        this.datos = await resposta.json(); //  En resposta é que me está a enviar o Server
        console.log("estou en Comuniccion ", this.datos);
    }
    /**
     * @method respostaServidor que devolve os datos
     * @returns devolve datos
     */
    static get respostaServidor() {
        return this.datos;
    }
}
exports.Comunicacion = Comunicacion;


/***/ }),

/***/ "./src/clases/Formulario.ts":
/*!**********************************!*\
  !*** ./src/clases/Formulario.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Formulario = void 0;
/**
 * @class Formulario esta clase, realizará a montaxe dos datos do formulario para a saída para o `fetch`
 * @public metodoAccionFormulario este método contén os métodos que accionan todo o proceso
 * @example
 * // Accións dende o
 * public metodoAccionFormulario(){
        this.metodoRefFormulario();         // 1º Seleciono o Formulario mediante o selector introducido no constructor
        this.metodoDatosFormulario();       // 2º Obteño os datos do Formulario e os paso a variable 'this.datosFormulario'
        this.metodoDatosObxetoEnvio();      // 3º Preparo os datos para enviar mediante '.entries()' e 'fromEntries'
        this.metodoPreparandoObxetoEnvio(); // 4º Preparo o OBXETO A ENVIAR
    }
 * @example
 * let oFormulario = new Formulario("#form-logueo");
 * let datosFormulario = oFormulario.DatosTransformadosEnObxeto;
 *
 * @constructor introducimos unha referencia que pasamos por texto
 * @returns os datos do formulario a través do método 'get' DatosTransformadosEnObxeto
 */
class Formulario {
    refSelectorFormulario;
    refFormulario;
    datosFormulario;
    datosFormTransformadosObxeto;
    obxetoEnvio;
    constructor(selector) {
        this.refSelectorFormulario = selector;
    }
    metodoAccionFormulario() {
        this.metodoRefFormulario(); // 1º Seleciono o Formulario mediante o selector introducido no constructor    
        this.metodoDatosFormulario(); // 2º Obteño os datos do Formulario e os paso a variable 'this.datosFormulario'
        this.metodoDatosObxetoEnvio(); // 3º Preparo os datos para enviar mediante '.entries()' e 'fromEntries'
        this.metodoPreparandoObxetoEnvio(); // 4º Preparo o OBXETO A ENVIAR
    }
    metodoRefFormulario() {
        this.refFormulario = document.querySelector(this.refSelectorFormulario); // 1º Selecciono o FORMULARIO mediante A REFERENCIA
    }
    metodoDatosFormulario() {
        this.datosFormulario = new FormData(this.refFormulario);
    }
    metodoDatosObxetoEnvio() {
        let datosFormArrayArrays = this.datosFormulario.entries(); //[[clave1,valor1],[clave2,valor2]]
        this.datosFormTransformadosObxeto = Object.fromEntries(datosFormArrayArrays); // {clave1: valor1,clave2,valor2}
    }
    metodoPreparandoObxetoEnvio() {
        let datos = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(this.datosFormTransformadosObxeto)
        };
        this.obxetoEnvio = datos;
    }
    get DatosEnviados() {
        return this.obxetoEnvio;
    }
}
exports.Formulario = Formulario;


/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * @import {Comunicacion} from "./clases/Comunicacion"
 */
const Comunicacion_1 = __webpack_require__(/*! ./clases/Comunicacion */ "./src/clases/Comunicacion.ts");
const Formulario_1 = __webpack_require__(/*! ./clases/Formulario */ "./src/clases/Formulario.ts");
//import fondo from "./fondoBueno.png";
__webpack_require__(/*! ./css/main.css */ "./src/css/main.css"); // Temos que integrar o CSS para que webpack o compile
/**
 * @function main función que realiza a carga de todo o programa
 * contén diferentes estructuras if, as cales fan que determinen
 * o endpoint que vai ler
 */
function main() {
    // location.pathname localizo o 'endpoint'
    if (location.pathname == "/") {
        console.log("estou en inicio");
    }
    /**
     * @param {location.pathname} == "/logueo"
     */
    if (location.pathname == "/logueo") {
        const refBotonFormulario = document.querySelector("#envio2"); // selecciono o botón de envío do formulario
        console.log("refBotonFormulario", refBotonFormulario);
        refBotonFormulario.addEventListener("click", async (e) => {
            e.preventDefault();
            let oFormulario = new Formulario_1.Formulario("#form-logueo");
            oFormulario.metodoAccionFormulario();
            let datosFormulario = oFormulario.DatosEnviados;
            await Comunicacion_1.Comunicacion.metodoPost("/logueandome", datosFormulario);
            const resposta = Comunicacion_1.Comunicacion.respostaServidor;
            console.log("resposta do servidor:", resposta);
            if (resposta?.resposta === "o envío foi correcto") {
                window.location.href = "/home";
            }
            else {
                alert("Usuario incorrecto.Non podes acceder.");
            }
        });
    }
    if (location.pathname == "/invoices") {
        console.log("estou en invoice");
    }
    if (location.pathname == "/recibo-datos-do-servidor") {
        console.log("estou document.querySelector");
        console.log("document.querySelector ", document.body);
    }
}
if (location.pathname === "/formulario-producto-adrian") {
    const boton = document.querySelector("#envio-produto-adrian");
    boton.addEventListener("click", async (e) => {
        e.preventDefault();
        const oFormulario = new Formulario_1.Formulario("#form-adrian");
        oFormulario.metodoAccionFormulario();
        const datosFormulario = oFormulario.DatosEnviados;
        await Comunicacion_1.Comunicacion.metodoPost("/envio-datos-o-servidor", datosFormulario);
        const resposta = Comunicacion_1.Comunicacion.respostaServidor;
        const divResposta = document.getElementById("resposta");
        divResposta.innerText = resposta?.mensaxe || "sen resposta do servidor";
    });
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0L2J1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHOzs7QUFFSCxNQUFhLFlBQVk7SUFFckIsTUFBTSxDQUFDLEtBQUssQ0FBUztJQUNyQjs7O09BR0c7SUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFnQjtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLFFBQVEsQ0FBQztRQUN0QyxJQUFJLFlBQVksR0FBRyxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFDRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFnQixFQUFDLEtBQVM7UUFDOUMsSUFBSSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMseUNBQXlDO1FBQ3JGLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBUywrQ0FBK0M7UUFDM0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BELENBQUM7SUFDRDs7O09BR0c7SUFDSCxNQUFNLEtBQUssZ0JBQWdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckIsQ0FBQztDQUNKO0FBNUJELG9DQTRCQzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0gsTUFBYSxVQUFVO0lBRVgscUJBQXFCLENBQVM7SUFDOUIsYUFBYSxDQUFPO0lBQ3BCLGVBQWUsQ0FBVztJQUMxQiw0QkFBNEIsQ0FBSztJQUNqQyxXQUFXLENBQW9CO0lBRXZDLFlBQVksUUFBZTtRQUN2QixJQUFJLENBQUMscUJBQXFCLEdBQUcsUUFBUSxDQUFDO0lBQzFDLENBQUM7SUFFTSxzQkFBc0I7UUFDekIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBUywrRUFBK0U7UUFDbkgsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBTywrRUFBK0U7UUFDbkgsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsQ0FBTSx3RUFBd0U7UUFDNUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUMsQ0FBQywrQkFBK0I7SUFDdkUsQ0FBQztJQUNPLG1CQUFtQjtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBRSxtREFBbUQ7SUFDakksQ0FBQztJQUVPLHFCQUFxQjtRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0QsQ0FBQztJQUVPLHNCQUFzQjtRQUMxQixJQUFJLG9CQUFvQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsb0NBQW1DO1FBQzdGLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxpQ0FBaUM7SUFDbkgsQ0FBQztJQUNPLDJCQUEyQjtRQUMvQixJQUFJLEtBQUssR0FBd0I7WUFDN0IsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFDLGtCQUFrQjthQUNwQztZQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztTQUMxRDtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSztJQUM1QixDQUFDO0lBQ0QsSUFBSSxhQUFhO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7Q0FFSjtBQTVDRCxnQ0E0Q0M7Ozs7Ozs7Ozs7OztBQ2pFRDs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BOztHQUVHO0FBQ0gsd0dBQXFEO0FBQ3JELGtHQUFpRDtBQUNqRCx1Q0FBdUM7QUFDdkMsZ0VBQXdCLENBQUMsc0RBQXNEO0FBRS9FOzs7O0dBSUc7QUFDSCxTQUFTLElBQUk7SUFFYiwwQ0FBMEM7SUFDMUMsSUFBRyxRQUFRLENBQUMsUUFBUSxJQUFJLEdBQUcsRUFBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUNEOztPQUVHO0lBQ0gsSUFBRyxRQUFRLENBQUMsUUFBUSxJQUFJLFNBQVMsRUFBQyxDQUFDO1FBQy9CLE1BQU0sa0JBQWtCLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsNkNBQTRDO1FBQzdILE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUVyRCxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFO1lBQ25ELENBQUMsQ0FBQyxjQUFjLEVBQUU7WUFDbEIsSUFBSSxXQUFXLEdBQUcsSUFBSSx1QkFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQ3JDLElBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDaEQsTUFBTSwyQkFBWSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUMsZUFBZSxDQUFDLENBQUM7WUFDOUQsTUFBTSxRQUFRLEdBQU8sMkJBQVksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLElBQUksUUFBUSxFQUFFLFFBQVEsS0FBSyxzQkFBc0IsRUFBRSxDQUFDO2dCQUNoRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRSxPQUFPLENBQUM7WUFDbEMsQ0FBQztpQkFBSyxDQUFDO2dCQUNILEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBQ25ELENBQUM7UUFDTCxDQUFDLENBQUM7SUFDTixDQUFDO0lBR0QsSUFBRyxRQUFRLENBQUMsUUFBUSxJQUFJLFdBQVcsRUFBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUcsUUFBUSxDQUFDLFFBQVEsSUFBSSwyQkFBMkIsRUFBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3hELENBQUM7QUFDRCxDQUFDO0FBQ0QsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLDZCQUE2QixFQUFFLENBQUM7SUFDdEQsTUFBTSxLQUFLLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUVqRixLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMxQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFbkIsTUFBTSxXQUFXLEdBQUcsSUFBSSx1QkFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25ELFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBRXJDLE1BQU0sZUFBZSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFFbEQsTUFBTSwyQkFBWSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUUxRSxNQUFNLFFBQVEsR0FBTywyQkFBWSxDQUFDLGdCQUFnQixDQUFDO1FBQ25ELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQUUsT0FBTyxJQUFHLDBCQUEwQjtJQUN4RSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFHSCxJQUFJLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC8uL3NyYy9jbGFzZXMvQ29tdW5pY2FjaW9uLnRzIiwid2VicGFjazovL2NvbnR5cGVzY3JpcHQwLy4vc3JjL2NsYXNlcy9Gb3JtdWxhcmlvLnRzIiwid2VicGFjazovL2NvbnR5cGVzY3JpcHQwLy4vc3JjL2Nzcy9tYWluLmNzcz9jMDhlIiwid2VicGFjazovL2NvbnR5cGVzY3JpcHQwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbnR5cGVzY3JpcHQwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBhdXRob3IgUGVwaXRvIEd1dGllcnJlelxyXG4gKiBAY2xhc3MgQ29tdW5pY2FjaW9uXHJcbiAqIEBtZXRob2QgbWV0b2RvR2V0IG3DqXRvZG8gcXVlIHRlbW9zIHF1ZSB1dGlsaXphciBwYXJhIHVuIEdFVFxyXG4gKiBAbWV0aG9kIG1ldG9kb1Bvc3QgbcOpdG9kb3MgcXVlIHRlbW9zIHF1ZSB1dGlsaXphciBwYXJhIHVuIFBPU1RcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tdW5pY2FjaW9ue1xyXG4gICAgXHJcbiAgICBzdGF0aWMgZGF0b3M6IE9iamVjdDtcclxuICAgIC8qKlxyXG4gICAgICogQG1ldGhvZCBtZXRvZG9HZXQgcXVlIGZhaSB1biBHRVRcclxuICAgICAqIEBwYXJhbSBlbmRwb2ludCBzZXLDoSB1biBlbmRwb2ludCBkZSB0aXBvIHRleHRvXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBtZXRvZG9HZXQoZW5kcG9pbnQ6IHN0cmluZyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmVuZHBvaW50IFwiLGVuZHBvaW50KVxyXG4gICAgICAgIGxldCBkYXRvU2Vydmlkb3IgPSBhd2FpdCBmZXRjaChlbmRwb2ludCk7XHJcbiAgICAgICAgdGhpcy5kYXRvcyA9IGF3YWl0IGRhdG9TZXJ2aWRvci5qc29uKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEBtZXRob2QgbWV0b2RvUG9zdCDDqSBlc3TDoXRpY28gcXVlIGZhaSB1biBQT1NUXHJcbiAgICAgKiBAcGFyYW0gZW5kcG9pbnQgIHNlcsOhIHVuIGVuZHBvaW50IGRlIHRpcG8gdGV4dG9cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIG1ldG9kb1Bvc3QoZW5kcG9pbnQ6IHN0cmluZyxkYXRvczphbnkpe1xyXG4gICAgICAgIGxldCByZXNwb3N0YSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LGRhdG9zKTsgLy8gIFNvbiBvcyBkYXRvcyBxdWUgZW52aWFtb3MgY28gZW5kcG9pbnRcclxuICAgICAgICB0aGlzLmRhdG9zID0gYXdhaXQgcmVzcG9zdGEuanNvbigpOyAgICAgICAgIC8vICBFbiByZXNwb3N0YSDDqSBxdWUgbWUgZXN0w6EgYSBlbnZpYXIgbyBTZXJ2ZXJcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVzdG91IGVuIENvbXVuaWNjaW9uIFwiLCB0aGlzLmRhdG9zKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAbWV0aG9kIHJlc3Bvc3RhU2Vydmlkb3IgcXVlIGRldm9sdmUgb3MgZGF0b3NcclxuICAgICAqIEByZXR1cm5zIGRldm9sdmUgZGF0b3NcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldCByZXNwb3N0YVNlcnZpZG9yKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0b3NcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVGlwb0RhdG9zRm9ybUVudmlvIH0gZnJvbSBcIi4uL3RpcG9zL1RpcG9EYXRvc0Zvcm1FbnZpby5qc1wiO1xyXG5pbXBvcnQgeyBUaXBvRGF0b3NGb3JtdWxhcmlvIH0gZnJvbSBcIi4uL3RpcG9zL1RpcG9EYXRvc0Zvcm11bGFyaW8uanNcIjtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3MgRm9ybXVsYXJpbyBlc3RhIGNsYXNlLCByZWFsaXphcsOhIGEgbW9udGF4ZSBkb3MgZGF0b3MgZG8gZm9ybXVsYXJpbyBwYXJhIGEgc2HDrWRhIHBhcmEgbyBgZmV0Y2hgXHJcbiAqIEBwdWJsaWMgbWV0b2RvQWNjaW9uRm9ybXVsYXJpbyBlc3RlIG3DqXRvZG8gY29udMOpbiBvcyBtw6l0b2RvcyBxdWUgYWNjaW9uYW4gdG9kbyBvIHByb2Nlc29cclxuICogQGV4YW1wbGVcclxuICogLy8gQWNjacOzbnMgZGVuZGUgbyBcclxuICogcHVibGljIG1ldG9kb0FjY2lvbkZvcm11bGFyaW8oKXsgIFxyXG4gICAgICAgIHRoaXMubWV0b2RvUmVmRm9ybXVsYXJpbygpOyAgICAgICAgIC8vIDHCuiBTZWxlY2lvbm8gbyBGb3JtdWxhcmlvIG1lZGlhbnRlIG8gc2VsZWN0b3IgaW50cm9kdWNpZG8gbm8gY29uc3RydWN0b3IgICAgXHJcbiAgICAgICAgdGhpcy5tZXRvZG9EYXRvc0Zvcm11bGFyaW8oKTsgICAgICAgLy8gMsK6IE9idGXDsW8gb3MgZGF0b3MgZG8gRm9ybXVsYXJpbyBlIG9zIHBhc28gYSB2YXJpYWJsZSAndGhpcy5kYXRvc0Zvcm11bGFyaW8nXHJcbiAgICAgICAgdGhpcy5tZXRvZG9EYXRvc09ieGV0b0VudmlvKCk7ICAgICAgLy8gM8K6IFByZXBhcm8gb3MgZGF0b3MgcGFyYSBlbnZpYXIgbWVkaWFudGUgJy5lbnRyaWVzKCknIGUgJ2Zyb21FbnRyaWVzJ1xyXG4gICAgICAgIHRoaXMubWV0b2RvUHJlcGFyYW5kb09ieGV0b0VudmlvKCk7IC8vIDTCuiBQcmVwYXJvIG8gT0JYRVRPIEEgRU5WSUFSXHJcbiAgICB9XHJcbiAqIEBleGFtcGxlXHJcbiAqIGxldCBvRm9ybXVsYXJpbyA9IG5ldyBGb3JtdWxhcmlvKFwiI2Zvcm0tbG9ndWVvXCIpO1xyXG4gKiBsZXQgZGF0b3NGb3JtdWxhcmlvID0gb0Zvcm11bGFyaW8uRGF0b3NUcmFuc2Zvcm1hZG9zRW5PYnhldG87XHJcbiAqIFxyXG4gKiBAY29uc3RydWN0b3IgaW50cm9kdWNpbW9zIHVuaGEgcmVmZXJlbmNpYSBxdWUgcGFzYW1vcyBwb3IgdGV4dG9cclxuICogQHJldHVybnMgb3MgZGF0b3MgZG8gZm9ybXVsYXJpbyBhIHRyYXbDqXMgZG8gbcOpdG9kbyAnZ2V0JyBEYXRvc1RyYW5zZm9ybWFkb3NFbk9ieGV0b1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvcm11bGFyaW97XHJcblxyXG4gICAgcHJpdmF0ZSByZWZTZWxlY3RvckZvcm11bGFyaW86IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVmRm9ybXVsYXJpbyA6IGFueTtcclxuICAgIHByaXZhdGUgZGF0b3NGb3JtdWxhcmlvOiBGb3JtRGF0YTtcclxuICAgIHByaXZhdGUgZGF0b3NGb3JtVHJhbnNmb3JtYWRvc09ieGV0bzphbnk7XHJcbiAgICBwcml2YXRlIG9ieGV0b0VudmlvOiBUaXBvRGF0b3NGb3JtRW52aW9cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RvcjpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMucmVmU2VsZWN0b3JGb3JtdWxhcmlvID0gc2VsZWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ldG9kb0FjY2lvbkZvcm11bGFyaW8oKXsgIFxyXG4gICAgICAgIHRoaXMubWV0b2RvUmVmRm9ybXVsYXJpbygpOyAgICAgICAgIC8vIDHCuiBTZWxlY2lvbm8gbyBGb3JtdWxhcmlvIG1lZGlhbnRlIG8gc2VsZWN0b3IgaW50cm9kdWNpZG8gbm8gY29uc3RydWN0b3IgICAgXHJcbiAgICAgICAgdGhpcy5tZXRvZG9EYXRvc0Zvcm11bGFyaW8oKTsgICAgICAgLy8gMsK6IE9idGXDsW8gb3MgZGF0b3MgZG8gRm9ybXVsYXJpbyBlIG9zIHBhc28gYSB2YXJpYWJsZSAndGhpcy5kYXRvc0Zvcm11bGFyaW8nXHJcbiAgICAgICAgdGhpcy5tZXRvZG9EYXRvc09ieGV0b0VudmlvKCk7ICAgICAgLy8gM8K6IFByZXBhcm8gb3MgZGF0b3MgcGFyYSBlbnZpYXIgbWVkaWFudGUgJy5lbnRyaWVzKCknIGUgJ2Zyb21FbnRyaWVzJ1xyXG4gICAgICAgIHRoaXMubWV0b2RvUHJlcGFyYW5kb09ieGV0b0VudmlvKCk7IC8vIDTCuiBQcmVwYXJvIG8gT0JYRVRPIEEgRU5WSUFSXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG1ldG9kb1JlZkZvcm11bGFyaW8oKXtcclxuICAgICAgICB0aGlzLnJlZkZvcm11bGFyaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucmVmU2VsZWN0b3JGb3JtdWxhcmlvKTsgIC8vIDHCuiBTZWxlY2Npb25vIG8gRk9STVVMQVJJTyBtZWRpYW50ZSBBIFJFRkVSRU5DSUFcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1ldG9kb0RhdG9zRm9ybXVsYXJpbygpe1xyXG4gICAgICAgIHRoaXMuZGF0b3NGb3JtdWxhcmlvID0gbmV3IEZvcm1EYXRhKHRoaXMucmVmRm9ybXVsYXJpbylcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1ldG9kb0RhdG9zT2J4ZXRvRW52aW8oKXtcclxuICAgICAgICBsZXQgZGF0b3NGb3JtQXJyYXlBcnJheXMgPSB0aGlzLmRhdG9zRm9ybXVsYXJpby5lbnRyaWVzKCk7Ly9bW2NsYXZlMSx2YWxvcjFdLFtjbGF2ZTIsdmFsb3IyXV1cclxuICAgICAgICB0aGlzLmRhdG9zRm9ybVRyYW5zZm9ybWFkb3NPYnhldG8gPSBPYmplY3QuZnJvbUVudHJpZXMoZGF0b3NGb3JtQXJyYXlBcnJheXMpOyAvLyB7Y2xhdmUxOiB2YWxvcjEsY2xhdmUyLHZhbG9yMn1cclxuICAgIH1cclxuICAgIHByaXZhdGUgbWV0b2RvUHJlcGFyYW5kb09ieGV0b0VudmlvKCl7XHJcbiAgICAgICAgbGV0IGRhdG9zIDogVGlwb0RhdG9zRm9ybUVudmlvID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdG9zRm9ybVRyYW5zZm9ybWFkb3NPYnhldG8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub2J4ZXRvRW52aW8gPSBkYXRvc1xyXG4gICAgfVxyXG4gICAgZ2V0IERhdG9zRW52aWFkb3MoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYnhldG9FbnZpbztcclxuICAgIH1cclxuXHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXHJcbiAqIEBpbXBvcnQge0NvbXVuaWNhY2lvbn0gZnJvbSBcIi4vY2xhc2VzL0NvbXVuaWNhY2lvblwiXHJcbiAqL1xyXG5pbXBvcnQgeyBDb211bmljYWNpb24gfSBmcm9tIFwiLi9jbGFzZXMvQ29tdW5pY2FjaW9uXCI7XHJcbmltcG9ydCB7IEZvcm11bGFyaW8gfSBmcm9tIFwiLi9jbGFzZXMvRm9ybXVsYXJpb1wiO1xyXG4vL2ltcG9ydCBmb25kbyBmcm9tIFwiLi9mb25kb0J1ZW5vLnBuZ1wiO1xyXG5pbXBvcnQgJy4vY3NzL21haW4uY3NzJzsgLy8gVGVtb3MgcXVlIGludGVncmFyIG8gQ1NTIHBhcmEgcXVlIHdlYnBhY2sgbyBjb21waWxlXHJcblxyXG4vKipcclxuICogQGZ1bmN0aW9uIG1haW4gZnVuY2nDs24gcXVlIHJlYWxpemEgYSBjYXJnYSBkZSB0b2RvIG8gcHJvZ3JhbWFcclxuICogY29udMOpbiBkaWZlcmVudGVzIGVzdHJ1Y3R1cmFzIGlmLCBhcyBjYWxlcyBmYW4gcXVlIGRldGVybWluZW5cclxuICogbyBlbmRwb2ludCBxdWUgdmFpIGxlclxyXG4gKi9cclxuZnVuY3Rpb24gbWFpbigpOnZvaWR7XHJcbiAgICBcclxuLy8gbG9jYXRpb24ucGF0aG5hbWUgbG9jYWxpem8gbyAnZW5kcG9pbnQnXHJcbmlmKGxvY2F0aW9uLnBhdGhuYW1lID09IFwiL1wiKXtcclxuICAgIGNvbnNvbGUubG9nKFwiZXN0b3UgZW4gaW5pY2lvXCIpXHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSB7bG9jYXRpb24ucGF0aG5hbWV9ID09IFwiL2xvZ3Vlb1wiXHJcbiAqL1xyXG5pZihsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9sb2d1ZW9cIil7XHJcbiAgICBjb25zdCByZWZCb3RvbkZvcm11bGFyaW8gOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW52aW8yXCIpOy8vIHNlbGVjY2lvbm8gbyBib3TDs24gZGUgZW52w61vIGRvIGZvcm11bGFyaW9cclxuICAgIGNvbnNvbGUubG9nKFwicmVmQm90b25Gb3JtdWxhcmlvXCIscmVmQm90b25Gb3JtdWxhcmlvKTtcclxuXHJcbiAgICByZWZCb3RvbkZvcm11bGFyaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYXN5bmMgKGUpPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgbGV0IG9Gb3JtdWxhcmlvID0gbmV3IEZvcm11bGFyaW8oXCIjZm9ybS1sb2d1ZW9cIik7XHJcbiAgICAgICAgb0Zvcm11bGFyaW8ubWV0b2RvQWNjaW9uRm9ybXVsYXJpbygpO1xyXG4gICAgICAgIGxldCBkYXRvc0Zvcm11bGFyaW8gPSBvRm9ybXVsYXJpby5EYXRvc0VudmlhZG9zO1xyXG4gICAgICAgIGF3YWl0IENvbXVuaWNhY2lvbi5tZXRvZG9Qb3N0KFwiL2xvZ3VlYW5kb21lXCIsZGF0b3NGb3JtdWxhcmlvKTtcclxuICAgICAgICBjb25zdCByZXNwb3N0YTphbnkgPSBDb211bmljYWNpb24ucmVzcG9zdGFTZXJ2aWRvcjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3Bvc3RhIGRvIHNlcnZpZG9yOlwiLCByZXNwb3N0YSk7XHJcbiAgICAgICAgaWYgKHJlc3Bvc3RhPy5yZXNwb3N0YSA9PT0gXCJvIGVudsOtbyBmb2kgY29ycmVjdG9cIikge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9XCIvaG9tZVwiO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgYWxlcnQoXCJVc3VhcmlvIGluY29ycmVjdG8uTm9uIHBvZGVzIGFjY2VkZXIuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5pZihsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9pbnZvaWNlc1wiKXtcclxuICAgIGNvbnNvbGUubG9nKFwiZXN0b3UgZW4gaW52b2ljZVwiKVxyXG59XHJcbmlmKGxvY2F0aW9uLnBhdGhuYW1lID09IFwiL3JlY2liby1kYXRvcy1kby1zZXJ2aWRvclwiKXtcclxuICAgIGNvbnNvbGUubG9nKFwiZXN0b3UgZG9jdW1lbnQucXVlcnlTZWxlY3RvclwiKVxyXG4gICAgY29uc29sZS5sb2coXCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yIFwiLGRvY3VtZW50LmJvZHkpXHJcbn1cclxufVxyXG5pZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2Zvcm11bGFyaW8tcHJvZHVjdG8tYWRyaWFuXCIpIHtcclxuICAgIGNvbnN0IGJvdG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW52aW8tcHJvZHV0by1hZHJpYW5cIik7XHJcbiAgXHJcbiAgICBib3Rvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgICBjb25zdCBvRm9ybXVsYXJpbyA9IG5ldyBGb3JtdWxhcmlvKFwiI2Zvcm0tYWRyaWFuXCIpO1xyXG4gICAgICBvRm9ybXVsYXJpby5tZXRvZG9BY2Npb25Gb3JtdWxhcmlvKCk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGRhdG9zRm9ybXVsYXJpbyA9IG9Gb3JtdWxhcmlvLkRhdG9zRW52aWFkb3M7XHJcbiAgXHJcbiAgICAgIGF3YWl0IENvbXVuaWNhY2lvbi5tZXRvZG9Qb3N0KFwiL2VudmlvLWRhdG9zLW8tc2Vydmlkb3JcIiwgZGF0b3NGb3JtdWxhcmlvKTtcclxuICBcclxuICAgICAgY29uc3QgcmVzcG9zdGE6YW55ID0gQ29tdW5pY2FjaW9uLnJlc3Bvc3RhU2Vydmlkb3I7XHJcbiAgICAgIGNvbnN0IGRpdlJlc3Bvc3RhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNwb3N0YVwiKTtcclxuICAgICAgZGl2UmVzcG9zdGEuaW5uZXJUZXh0ID0gcmVzcG9zdGE/Lm1lbnNheGUgfHxcInNlbiByZXNwb3N0YSBkbyBzZXJ2aWRvclwiXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcblxyXG5tYWluKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=