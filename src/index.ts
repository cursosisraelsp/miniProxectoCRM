
import { Comunicacion } from "./clases/Comunicacion";
import { Formulario } from "./clases/Formulario";

import './css/main.css'; 

function main(): void {

    if (location.pathname == "/") {
        console.log("Estoy en el inicio");
    }

    if (location.pathname == "/logueo") {
        const refBotonEnvio: HTMLButtonElement = document.querySelector("#envio");

        refBotonEnvio.addEventListener("click",async (e)=>{
            e.preventDefault()
            let oFormulario = new Formulario("#form-logueo");
            oFormulario.metodoAccionFormulario();
            let datosFormulario = oFormulario.DatosEnviados;
            
            let respostaServidor = await Comunicacion.metodoPost("/logueo",datosFormulario);
            location.href = "/invoices"
        })
        
    }

}
    main();