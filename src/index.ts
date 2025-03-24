
import { Comunicacion } from "./clases/Comunicacion";
//import fondo from "./fondoBueno.png";
import './css/main.css'; // Temos que integrar o CSS para que webpack o compile

if (location.pathname === "/paxina-app") {
    const refBotonGET: HTMLButtonElement | null = document.querySelector("#solicitudeGET");
    const refBotonPOST: HTMLButtonElement | null = document.querySelector("#solicitudePOST");

    if (refBotonGET && refBotonPOST) {
        // INTRODUZCO DOUS BOTÓNS SIMULANDO 'EVENTOS' 
        // UN POST
        // UN GET 

        refBotonGET.addEventListener("click", async () => {
            try {
                let endpoint = "/recibo-datos-do-servidor";
                await Comunicacion.metodoGet(endpoint);
                console.log(Comunicacion.respostaServidor);
                // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
            } catch (error) {
                console.error("Error en la solicitud GET:", error);
            }
        });

        refBotonPOST.addEventListener("click", async () => {
            try {
                let endpoint = "/envio-datos-o-servidor";
                await Comunicacion.metodoPost(endpoint);
                console.log(Comunicacion.respostaServidor);
                // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
            } catch (error) {
                console.error("Error en la solicitud POST:", error);
            }
        });
    } else {
        console.error("Los botones no fueron encontrados en el DOM");
    }
}