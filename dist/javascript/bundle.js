/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clases/Comunicacion.ts":
/*!************************************!*\
  !*** ./src/clases/Comunicacion.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Comunicacion = void 0;
class Comunicacion {
    static datos;
    static async metodoGet(endpoint) {
        try {
            let respuesta = await fetch(endpoint);
            this.datos = await respuesta.json();
        }
        catch (error) {
            console.error("Error en GET:", error);
        }
    }
    static async metodoPost(endpoint, datos) {
        console.log("Enviando datos a:", endpoint);
        console.log("Datos enviados:", datos);
        try {
            let resposta = await fetch(endpoint, datos);
            this.datos = await resposta.json();
            console.log("Respuesta del servidor: ", this.datos);
        }
        catch (error) {
            console.log("Fallo en el inicio de sesión", error);
        }
    }
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
    //para imprimir los datos
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
const Comunicacion_1 = __webpack_require__(/*! ./clases/Comunicacion */ "./src/clases/Comunicacion.ts");
const Formulario_1 = __webpack_require__(/*! ./clases/Formulario */ "./src/clases/Formulario.ts");
__webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
function main() {
    if (location.pathname == "/") {
        console.log("Estoy en el inicio");
    }
    if (location.pathname == "/logueo") {
        const refBotonEnvio = document.querySelector("#envio");
        refBotonEnvio.addEventListener("click", async (e) => {
            e.preventDefault();
            let oFormulario = new Formulario_1.Formulario("#form-logueo");
            oFormulario.metodoAccionFormulario();
            let datosFormulario = oFormulario.DatosEnviados;
            await Comunicacion_1.Comunicacion.metodoPost("/logueo", datosFormulario);
        });
    }
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUVMLENBQUM7QUFDRyxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnR5cGVzY3JpcHQwLy4vc3JjL2NsYXNlcy9Db211bmljYWNpb24udHMiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvLi9zcmMvY2xhc2VzL0Zvcm11bGFyaW8udHMiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvLi9zcmMvY3NzL21haW4uY3NzP2MwOGUiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29tdW5pY2FjaW9uIHtcbiAgICBzdGF0aWMgZGF0b3M6IGFueTtcblxuICAgIHN0YXRpYyBhc3luYyBtZXRvZG9HZXQoZW5kcG9pbnQ6IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IHJlc3B1ZXN0YSA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcbiAgICAgICAgICAgIHRoaXMuZGF0b3MgPSBhd2FpdCByZXNwdWVzdGEuanNvbigpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGVuIEdFVDpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIG1ldG9kb1Bvc3QoZW5kcG9pbnQ6IHN0cmluZywgZGF0b3M6IGFueSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRW52aWFuZG8gZGF0b3MgYTpcIiwgZW5kcG9pbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdG9zIGVudmlhZG9zOlwiLCBkYXRvcyk7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgbGV0IHJlc3Bvc3RhID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIGRhdG9zKTtcbiAgICAgICAgICAgIHRoaXMuZGF0b3MgPSBhd2FpdCByZXNwb3N0YS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3B1ZXN0YSBkZWwgc2Vydmlkb3I6IFwiLCB0aGlzLmRhdG9zKVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhbGxvIGVuIGVsIGluaWNpbyBkZSBzZXNpw7NuXCIsIGVycm9yKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IHJlc3Bvc3RhU2Vydmlkb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdG9zO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBUaXBvRGF0b0Zvcm1FbnZpbyB9IGZyb20gXCIuLi90aXBvcy9UaXBvRGF0b0Zvcm1FbnZpb1wiO1xyXG5pbXBvcnQgeyBUaXBvRGF0b0Zvcm11bGFyaW8gfSBmcm9tIFwiLi4vdGlwb3MvVGlwb0RhdG9Gb3JtdWxhcmlvXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm11bGFyaW97XHJcblxyXG4gICAgcHJpdmF0ZSByZWZTZWxlY3RvckZvcm11bGFyaW86IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVmRm9ybXVsYXJpbyA6IGFueTtcclxuICAgIHByaXZhdGUgZGF0b3NGb3JtdWxhcmlvOiBGb3JtRGF0YTtcclxuICAgIHByaXZhdGUgZGF0b3NGb3JtVHJhbnNmb3JtYWRvc09ieGV0bzphbnk7XHJcbiAgICBwcml2YXRlIG9ieGV0b0VudmlvOiBUaXBvRGF0b0Zvcm1FbnZpb1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5yZWZTZWxlY3RvckZvcm11bGFyaW8gPSBzZWxlY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWV0b2RvQWNjaW9uRm9ybXVsYXJpbygpeyAgXHJcbiAgICAgICAgdGhpcy5tZXRvZG9SZWZGb3JtdWxhcmlvKCk7ICAgICAgICAgLy8gMcK6IFNlbGVjaW9ubyBvIEZvcm11bGFyaW8gbWVkaWFudGUgbyBzZWxlY3RvciBpbnRyb2R1Y2lkbyBubyBjb25zdHJ1Y3RvciAgICBcclxuICAgICAgICB0aGlzLm1ldG9kb0RhdG9zRm9ybXVsYXJpbygpOyAgICAgICAvLyAywrogT2J0ZcOxbyBvcyBkYXRvcyBkbyBGb3JtdWxhcmlvIGUgb3MgcGFzbyBhIHZhcmlhYmxlICd0aGlzLmRhdG9zRm9ybXVsYXJpbydcclxuICAgICAgICB0aGlzLm1ldG9kb0RhdG9zT2J4ZXRvRW52aW8oKTsgICAgICAvLyAzwrogUHJlcGFybyBvcyBkYXRvcyBwYXJhIGVudmlhciBtZWRpYW50ZSAnLmVudHJpZXMoKScgZSAnZnJvbUVudHJpZXMnXHJcbiAgICAgICAgdGhpcy5tZXRvZG9QcmVwYXJhbmRvT2J4ZXRvRW52aW8oKTsgLy8gNMK6IFByZXBhcm8gbyBPQlhFVE8gQSBFTlZJQVJcclxuICAgIH1cclxuICAgIHByaXZhdGUgbWV0b2RvUmVmRm9ybXVsYXJpbygpe1xyXG4gICAgICAgIHRoaXMucmVmRm9ybXVsYXJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5yZWZTZWxlY3RvckZvcm11bGFyaW8pOyAgLy8gMcK6IFNlbGVjY2lvbm8gbyBGT1JNVUxBUklPIG1lZGlhbnRlIEEgUkVGRVJFTkNJQVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWV0b2RvRGF0b3NGb3JtdWxhcmlvKCl7XHJcbiAgICAgICAgdGhpcy5kYXRvc0Zvcm11bGFyaW8gPSBuZXcgRm9ybURhdGEodGhpcy5yZWZGb3JtdWxhcmlvKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWV0b2RvRGF0b3NPYnhldG9FbnZpbygpe1xyXG4gICAgICAgIGxldCBkYXRvc0Zvcm1BcnJheUFycmF5cyA9IHRoaXMuZGF0b3NGb3JtdWxhcmlvLmVudHJpZXMoKTsvL1tbY2xhdmUxLHZhbG9yMV0sW2NsYXZlMix2YWxvcjJdXVxyXG4gICAgICAgIHRoaXMuZGF0b3NGb3JtVHJhbnNmb3JtYWRvc09ieGV0byA9IE9iamVjdC5mcm9tRW50cmllcyhkYXRvc0Zvcm1BcnJheUFycmF5cyk7IC8vIHtjbGF2ZTE6IHZhbG9yMSxjbGF2ZTIsdmFsb3IyfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBtZXRvZG9QcmVwYXJhbmRvT2J4ZXRvRW52aW8oKXtcclxuICAgICAgICBsZXQgZGF0b3MgOiBUaXBvRGF0b0Zvcm1FbnZpbyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRvc0Zvcm1UcmFuc2Zvcm1hZG9zT2J4ZXRvKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9ieGV0b0VudmlvID0gZGF0b3NcclxuICAgIH1cclxuXHJcbiAgICAvL3BhcmEgaW1wcmltaXIgbG9zIGRhdG9zXHJcbiAgICBnZXQgRGF0b3NFbnZpYWRvcygpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9ieGV0b0VudmlvO1xyXG4gICAgfVxyXG5cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCB7IENvbXVuaWNhY2lvbiB9IGZyb20gXCIuL2NsYXNlcy9Db211bmljYWNpb25cIjtcbmltcG9ydCB7IEZvcm11bGFyaW8gfSBmcm9tIFwiLi9jbGFzZXMvRm9ybXVsYXJpb1wiO1xuXG5pbXBvcnQgJy4vY3NzL21haW4uY3NzJzsgXG5cbmZ1bmN0aW9uIG1haW4oKTogdm9pZCB7XG5cbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFc3RveSBlbiBlbCBpbmljaW9cIik7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvZ3Vlb1wiKSB7XG4gICAgICAgIGNvbnN0IHJlZkJvdG9uRW52aW86IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbnZpb1wiKTtcblxuICAgICAgICByZWZCb3RvbkVudmlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGFzeW5jIChlKT0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBsZXQgb0Zvcm11bGFyaW8gPSBuZXcgRm9ybXVsYXJpbyhcIiNmb3JtLWxvZ3Vlb1wiKTtcbiAgICAgICAgICAgIG9Gb3JtdWxhcmlvLm1ldG9kb0FjY2lvbkZvcm11bGFyaW8oKTtcbiAgICAgICAgICAgIGxldCBkYXRvc0Zvcm11bGFyaW8gPSBvRm9ybXVsYXJpby5EYXRvc0VudmlhZG9zO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhd2FpdCBDb211bmljYWNpb24ubWV0b2RvUG9zdChcIi9sb2d1ZW9cIixkYXRvc0Zvcm11bGFyaW8pXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxufVxuICAgIG1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=