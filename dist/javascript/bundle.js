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
            let respostaServidor = await Comunicacion_1.Comunicacion.metodoPost("/logueo", datosFormulario);
            location.href = "/invoices";
        });
    }
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hGLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVztRQUMvQixDQUFDLENBQUM7SUFFTixDQUFDO0FBRUwsQ0FBQztBQUNHLElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvLi9zcmMvY2xhc2VzL0NvbXVuaWNhY2lvbi50cyIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC8uL3NyYy9jbGFzZXMvRm9ybXVsYXJpby50cyIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC8uL3NyYy9jc3MvbWFpbi5jc3M/YzA4ZSIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbnR5cGVzY3JpcHQwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb211bmljYWNpb24ge1xuICAgIHN0YXRpYyBkYXRvczogYW55O1xuXG4gICAgc3RhdGljIGFzeW5jIG1ldG9kb0dldChlbmRwb2ludDogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzcHVlc3RhID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQpO1xuICAgICAgICAgICAgdGhpcy5kYXRvcyA9IGF3YWl0IHJlc3B1ZXN0YS5qc29uKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZW4gR0VUOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgbWV0b2RvUG9zdChlbmRwb2ludDogc3RyaW5nLCBkYXRvczogYW55KSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJFbnZpYW5kbyBkYXRvcyBhOlwiLCBlbmRwb2ludCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0b3MgZW52aWFkb3M6XCIsIGRhdG9zKTtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBsZXQgcmVzcG9zdGEgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwgZGF0b3MpO1xuICAgICAgICAgICAgdGhpcy5kYXRvcyA9IGF3YWl0IHJlc3Bvc3RhLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzcHVlc3RhIGRlbCBzZXJ2aWRvcjogXCIsIHRoaXMuZGF0b3MpXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFsbG8gZW4gZWwgaW5pY2lvIGRlIHNlc2nDs25cIiwgZXJyb3IpO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgcmVzcG9zdGFTZXJ2aWRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0b3M7XG4gICAgfVxufSIsImltcG9ydCB7IFRpcG9EYXRvRm9ybUVudmlvIH0gZnJvbSBcIi4uL3RpcG9zL1RpcG9EYXRvRm9ybUVudmlvXCI7XHJcbmltcG9ydCB7IFRpcG9EYXRvRm9ybXVsYXJpbyB9IGZyb20gXCIuLi90aXBvcy9UaXBvRGF0b0Zvcm11bGFyaW9cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybXVsYXJpb3tcclxuXHJcbiAgICBwcml2YXRlIHJlZlNlbGVjdG9yRm9ybXVsYXJpbzogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWZGb3JtdWxhcmlvIDogYW55O1xyXG4gICAgcHJpdmF0ZSBkYXRvc0Zvcm11bGFyaW86IEZvcm1EYXRhO1xyXG4gICAgcHJpdmF0ZSBkYXRvc0Zvcm1UcmFuc2Zvcm1hZG9zT2J4ZXRvOmFueTtcclxuICAgIHByaXZhdGUgb2J4ZXRvRW52aW86IFRpcG9EYXRvRm9ybUVudmlvXHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3I6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnJlZlNlbGVjdG9yRm9ybXVsYXJpbyA9IHNlbGVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtZXRvZG9BY2Npb25Gb3JtdWxhcmlvKCl7ICBcclxuICAgICAgICB0aGlzLm1ldG9kb1JlZkZvcm11bGFyaW8oKTsgICAgICAgICAvLyAxwrogU2VsZWNpb25vIG8gRm9ybXVsYXJpbyBtZWRpYW50ZSBvIHNlbGVjdG9yIGludHJvZHVjaWRvIG5vIGNvbnN0cnVjdG9yICAgIFxyXG4gICAgICAgIHRoaXMubWV0b2RvRGF0b3NGb3JtdWxhcmlvKCk7ICAgICAgIC8vIDLCuiBPYnRlw7FvIG9zIGRhdG9zIGRvIEZvcm11bGFyaW8gZSBvcyBwYXNvIGEgdmFyaWFibGUgJ3RoaXMuZGF0b3NGb3JtdWxhcmlvJ1xyXG4gICAgICAgIHRoaXMubWV0b2RvRGF0b3NPYnhldG9FbnZpbygpOyAgICAgIC8vIDPCuiBQcmVwYXJvIG9zIGRhdG9zIHBhcmEgZW52aWFyIG1lZGlhbnRlICcuZW50cmllcygpJyBlICdmcm9tRW50cmllcydcclxuICAgICAgICB0aGlzLm1ldG9kb1ByZXBhcmFuZG9PYnhldG9FbnZpbygpOyAvLyA0wrogUHJlcGFybyBvIE9CWEVUTyBBIEVOVklBUlxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBtZXRvZG9SZWZGb3JtdWxhcmlvKCl7XHJcbiAgICAgICAgdGhpcy5yZWZGb3JtdWxhcmlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnJlZlNlbGVjdG9yRm9ybXVsYXJpbyk7ICAvLyAxwrogU2VsZWNjaW9ubyBvIEZPUk1VTEFSSU8gbWVkaWFudGUgQSBSRUZFUkVOQ0lBXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtZXRvZG9EYXRvc0Zvcm11bGFyaW8oKXtcclxuICAgICAgICB0aGlzLmRhdG9zRm9ybXVsYXJpbyA9IG5ldyBGb3JtRGF0YSh0aGlzLnJlZkZvcm11bGFyaW8pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtZXRvZG9EYXRvc09ieGV0b0VudmlvKCl7XHJcbiAgICAgICAgbGV0IGRhdG9zRm9ybUFycmF5QXJyYXlzID0gdGhpcy5kYXRvc0Zvcm11bGFyaW8uZW50cmllcygpOy8vW1tjbGF2ZTEsdmFsb3IxXSxbY2xhdmUyLHZhbG9yMl1dXHJcbiAgICAgICAgdGhpcy5kYXRvc0Zvcm1UcmFuc2Zvcm1hZG9zT2J4ZXRvID0gT2JqZWN0LmZyb21FbnRyaWVzKGRhdG9zRm9ybUFycmF5QXJyYXlzKTsgLy8ge2NsYXZlMTogdmFsb3IxLGNsYXZlMix2YWxvcjJ9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG1ldG9kb1ByZXBhcmFuZG9PYnhldG9FbnZpbygpe1xyXG4gICAgICAgIGxldCBkYXRvcyA6IFRpcG9EYXRvRm9ybUVudmlvID0ge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdG9zRm9ybVRyYW5zZm9ybWFkb3NPYnhldG8pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub2J4ZXRvRW52aW8gPSBkYXRvc1xyXG4gICAgfVxyXG5cclxuICAgIC8vcGFyYSBpbXByaW1pciBsb3MgZGF0b3NcclxuICAgIGdldCBEYXRvc0VudmlhZG9zKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2J4ZXRvRW52aW87XHJcbiAgICB9XHJcblxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IHsgQ29tdW5pY2FjaW9uIH0gZnJvbSBcIi4vY2xhc2VzL0NvbXVuaWNhY2lvblwiO1xuaW1wb3J0IHsgRm9ybXVsYXJpbyB9IGZyb20gXCIuL2NsYXNlcy9Gb3JtdWxhcmlvXCI7XG5cbmltcG9ydCAnLi9jc3MvbWFpbi5jc3MnOyBcblxuZnVuY3Rpb24gbWFpbigpOiB2b2lkIHtcblxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZSA9PSBcIi9cIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVzdG95IGVuIGVsIGluaWNpb1wiKTtcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG9ndWVvXCIpIHtcbiAgICAgICAgY29uc3QgcmVmQm90b25FbnZpbzogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VudmlvXCIpO1xuXG4gICAgICAgIHJlZkJvdG9uRW52aW8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYXN5bmMgKGUpPT57XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGxldCBvRm9ybXVsYXJpbyA9IG5ldyBGb3JtdWxhcmlvKFwiI2Zvcm0tbG9ndWVvXCIpO1xuICAgICAgICAgICAgb0Zvcm11bGFyaW8ubWV0b2RvQWNjaW9uRm9ybXVsYXJpbygpO1xuICAgICAgICAgICAgbGV0IGRhdG9zRm9ybXVsYXJpbyA9IG9Gb3JtdWxhcmlvLkRhdG9zRW52aWFkb3M7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCByZXNwb3N0YVNlcnZpZG9yID0gYXdhaXQgQ29tdW5pY2FjaW9uLm1ldG9kb1Bvc3QoXCIvbG9ndWVvXCIsZGF0b3NGb3JtdWxhcmlvKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBcIi9pbnZvaWNlc1wiXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxufVxuICAgIG1haW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=