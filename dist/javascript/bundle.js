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
        console.log("this.endpoint ", endpoint);
        let datoServidor = await fetch(endpoint);
        this.datos = await datoServidor.json();
    }
    static async metodoPost(endpoint) {
        let datosEnvio = {
            dato1: "mariano",
            dato2: "pepito",
            dato3: 5
        };
        let obxetoEnvio = {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(datosEnvio)
        };
        let resposta = await fetch(endpoint, obxetoEnvio);
        this.datos = await resposta.json();
    }
    static get respostaServidor() {
        return this.datos;
    }
}
exports.Comunicacion = Comunicacion;


/***/ }),

/***/ "./src/comunicacion/funcion.crearUsuario.ts":
/*!**************************************************!*\
  !*** ./src/comunicacion/funcion.crearUsuario.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComunicacionCrearUsuario = void 0;
const ComunicacionCrearUsuario = async () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const contrasinal = document.getElementById("contrasinal").value;
    const datosEnvio = {
        nome,
        email,
        contrasinal
    };
    const obxetoEnvio = {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(datosEnvio)
    };
    const resposta = await fetch("/crear-usuario", obxetoEnvio);
    const respostaJson = await resposta.json();
    console.log("Resposta do servidor:", respostaJson);
};
exports.ComunicacionCrearUsuario = ComunicacionCrearUsuario;


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
exports.ComunicacionCrearUsuario = void 0;
const Comunicacion_1 = __webpack_require__(/*! ./clases/Comunicacion */ "./src/clases/Comunicacion.ts");
//import fondo from "./fondoBueno.png";
__webpack_require__(/*! ./css/main.css */ "./src/css/main.css"); // Temos que integrar o CSS para que webpack o compile
if (location.pathname == "/paxina-app") {
    const refBotonGET = document.querySelector("#solicitudeGET");
    const refBotonPOST = document.querySelector("#solicitudePOST");
    // INTRODUZCO DOUS BOTÓNS SIMULANDO 'EVENTOS' 
    // UN POST
    // UN GET 
    refBotonGET.addEventListener("click", async () => {
        let endpoint = "/recibo-datos-do-servidor";
        await Comunicacion_1.Comunicacion.metodoGet(endpoint);
        console.log(Comunicacion_1.Comunicacion.respostaServidor);
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    });
    refBotonPOST.addEventListener("click", async () => {
        let endpoint = "/envio-datos-o-servidor";
        await Comunicacion_1.Comunicacion.metodoPost(endpoint);
        console.log(Comunicacion_1.Comunicacion.respostaServidor);
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    });
}
var funcion_crearUsuario_1 = __webpack_require__(/*! ./comunicacion/funcion.crearUsuario */ "./src/comunicacion/funcion.crearUsuario.ts");
Object.defineProperty(exports, "ComunicacionCrearUsuario", ({ enumerable: true, get: function () { return funcion_crearUsuario_1.ComunicacionCrearUsuario; } }));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0L2J1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxZQUFZO0lBRXJCLE1BQU0sQ0FBQyxLQUFLLENBQVM7SUFFckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBZ0I7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxZQUFZLEdBQUcsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBZ0I7UUFPcEMsSUFBSSxVQUFVLEdBQWdCO1lBQzFCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRSxRQUFRO1lBQ2YsS0FBSyxFQUFFLENBQUM7U0FDWDtRQUVELElBQUksV0FBVyxHQUFHO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFDLGtCQUFrQjthQUNwQztZQUNELElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztTQUNsQztRQUNELElBQUksUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRXZDLENBQUM7SUFFRCxNQUFNLEtBQUssZ0JBQWdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUs7SUFDckIsQ0FBQztDQUNKO0FBdENELG9DQXNDQzs7Ozs7Ozs7Ozs7Ozs7QUN0Q00sTUFBTSx3QkFBd0IsR0FBRyxLQUFLLElBQUksRUFBRTtJQUMvQyxNQUFNLElBQUksR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBc0IsQ0FBQyxLQUFLLENBQUM7SUFDekUsTUFBTSxLQUFLLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXNCLENBQUMsS0FBSyxDQUFDO0lBQzNFLE1BQU0sV0FBVyxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFzQixDQUFDLEtBQUssQ0FBQztJQUV2RixNQUFNLFVBQVUsR0FBRztRQUNmLElBQUk7UUFDSixLQUFLO1FBQ0wsV0FBVztLQUNkLENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRztRQUNoQixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNMLGNBQWMsRUFBRSxrQkFBa0I7U0FDckM7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7S0FDbkMsQ0FBQztJQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVELE1BQU0sWUFBWSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQXRCWSxnQ0FBd0IsNEJBc0JwQzs7Ozs7Ozs7Ozs7O0FDdEJEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ0xBLHdHQUFxRDtBQUNyRCx1Q0FBdUM7QUFDdkMsZ0VBQXdCLENBQUMsc0RBQXNEO0FBRS9FLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUNyQyxNQUFNLFdBQVcsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hGLE1BQU0sWUFBWSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBRWpGLDhDQUE4QztJQUM5QyxVQUFVO0lBQ1YsVUFBVTtJQUdWLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDN0MsSUFBSSxRQUFRLEdBQUcsMkJBQTJCLENBQUM7UUFDM0MsTUFBTSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLGdCQUFnQixDQUFDO1FBQzFDLHlEQUF5RDtJQUM3RCxDQUFDLENBQUM7SUFDRixZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzlDLElBQUksUUFBUSxHQUFHLHlCQUF5QjtRQUN4QyxNQUFNLDJCQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDMUMseURBQXlEO0lBQzdELENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRCwwSUFBK0U7QUFBdEUseUpBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvLi9zcmMvY2xhc2VzL0NvbXVuaWNhY2lvbi50cyIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC8uL3NyYy9jb211bmljYWNpb24vZnVuY2lvbi5jcmVhclVzdWFyaW8udHMiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvLi9zcmMvY3NzL21haW4uY3NzP2MwOGUiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29tdW5pY2FjaW9ue1xuICAgIFxuICAgIHN0YXRpYyBkYXRvczogT2JqZWN0O1xuICAgIFxuICAgIHN0YXRpYyBhc3luYyBtZXRvZG9HZXQoZW5kcG9pbnQ6IHN0cmluZyl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5lbmRwb2ludCBcIixlbmRwb2ludClcbiAgICAgICAgbGV0IGRhdG9TZXJ2aWRvciA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcbiAgICAgICAgdGhpcy5kYXRvcyA9IGF3YWl0IGRhdG9TZXJ2aWRvci5qc29uKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIG1ldG9kb1Bvc3QoZW5kcG9pbnQ6IHN0cmluZyl7XG4gICAgICAgIHR5cGUgZGF0b3NPYnhldG8gPSB7XG4gICAgICAgICAgICBkYXRvMTogc3RyaW5nLFxuICAgICAgICAgICAgZGF0bzI6IHN0cmluZyxcbiAgICAgICAgICAgIGRhdG8zOiBudW1iZXJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGRhdG9zRW52aW86IGRhdG9zT2J4ZXRvID0ge1xuICAgICAgICAgICAgZGF0bzE6IFwibWFyaWFub1wiLFxuICAgICAgICAgICAgZGF0bzI6IFwicGVwaXRvXCIsXG4gICAgICAgICAgICBkYXRvMzogNVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxldCBvYnhldG9FbnZpbyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdG9zRW52aW8pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3Bvc3RhID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsb2J4ZXRvRW52aW8pO1xuICAgICAgICB0aGlzLmRhdG9zID0gYXdhaXQgcmVzcG9zdGEuanNvbigpO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCByZXNwb3N0YVNlcnZpZG9yKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdG9zXG4gICAgfVxufVxuXG4iLCJleHBvcnQgY29uc3QgQ29tdW5pY2FjaW9uQ3JlYXJVc3VhcmlvID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG5vbWUgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub21lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgY29uc3QgY29udHJhc2luYWwgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cmFzaW5hbFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcblxuICAgIGNvbnN0IGRhdG9zRW52aW8gPSB7XG4gICAgICAgIG5vbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBjb250cmFzaW5hbFxuICAgIH07XG5cbiAgICBjb25zdCBvYnhldG9FbnZpbyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdG9zRW52aW8pXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3Bvc3RhID0gYXdhaXQgZmV0Y2goXCIvY3JlYXItdXN1YXJpb1wiLCBvYnhldG9FbnZpbyk7XG4gICAgY29uc3QgcmVzcG9zdGFKc29uID0gYXdhaXQgcmVzcG9zdGEuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKFwiUmVzcG9zdGEgZG8gc2Vydmlkb3I6XCIsIHJlc3Bvc3RhSnNvbik7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgeyBDb211bmljYWNpb24gfSBmcm9tIFwiLi9jbGFzZXMvQ29tdW5pY2FjaW9uXCI7XG4vL2ltcG9ydCBmb25kbyBmcm9tIFwiLi9mb25kb0J1ZW5vLnBuZ1wiO1xuaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7IC8vIFRlbW9zIHF1ZSBpbnRlZ3JhciBvIENTUyBwYXJhIHF1ZSB3ZWJwYWNrIG8gY29tcGlsZVxuXG5pZiAobG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvcGF4aW5hLWFwcFwiKSB7XG4gICAgY29uc3QgcmVmQm90b25HRVQ6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzb2xpY2l0dWRlR0VUXCIpO1xuICAgIGNvbnN0IHJlZkJvdG9uUE9TVDogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NvbGljaXR1ZGVQT1NUXCIpXG5cbiAgICAvLyBJTlRST0RVWkNPIERPVVMgQk9Uw5NOUyBTSU1VTEFORE8gJ0VWRU5UT1MnIFxuICAgIC8vIFVOIFBPU1RcbiAgICAvLyBVTiBHRVQgXG5cblxuICAgIHJlZkJvdG9uR0VULmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBlbmRwb2ludCA9IFwiL3JlY2liby1kYXRvcy1kby1zZXJ2aWRvclwiO1xuICAgICAgICBhd2FpdCBDb211bmljYWNpb24ubWV0b2RvR2V0KGVuZHBvaW50KVxuICAgICAgICBjb25zb2xlLmxvZyhDb211bmljYWNpb24ucmVzcG9zdGFTZXJ2aWRvcilcbiAgICAgICAgLy8gVVRJTElaQVLDjUFNT1MgTyBEQVRPIFFVRSBDSEVHQSBETyBTRVJWSURPUiBQQVJBIFBJTlRBUlxuICAgIH0pXG4gICAgcmVmQm90b25QT1NULmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBlbmRwb2ludCA9IFwiL2VudmlvLWRhdG9zLW8tc2Vydmlkb3JcIlxuICAgICAgICBhd2FpdCBDb211bmljYWNpb24ubWV0b2RvUG9zdChlbmRwb2ludClcbiAgICAgICAgY29uc29sZS5sb2coQ29tdW5pY2FjaW9uLnJlc3Bvc3RhU2Vydmlkb3IpXG4gICAgICAgIC8vIFVUSUxJWkFSw41BTU9TIE8gREFUTyBRVUUgQ0hFR0EgRE8gU0VSVklET1IgUEFSQSBQSU5UQVJcbiAgICB9KVxufVxuXG5leHBvcnQgeyBDb211bmljYWNpb25DcmVhclVzdWFyaW8gfSBmcm9tIFwiLi9jb211bmljYWNpb24vZnVuY2lvbi5jcmVhclVzdWFyaW9cIjtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9