/**
 * @import {Comunicacion} from "./clases/Comunicacion"
 */
import { Comunicacion } from "./clases/Comunicacion";
import { Formulario } from "./clases/Formulario";
//import fondo from "./fondoBueno.png";
import './css/main.css'; // Temos que integrar o CSS para que webpack o compile

/**
 * @function main función que realiza a carga de todo o programa
 * contén diferentes estructuras if, as cales fan que determinen
 * o endpoint que vai ler
 */
function main():void{
    
// location.pathname localizo o 'endpoint'
if(location.pathname == "/"){
    console.log("estou en inicio")
}
/**
 * @param {location.pathname} == "/logueo"
 */
if(location.pathname == "/logueo"){
    const refBotonFormulario : HTMLButtonElement = document.querySelector("#envio2");// selecciono o botón de envío do formulario
    console.log("refBotonFormulario",refBotonFormulario);

    refBotonFormulario.addEventListener("click",async (e)=>{
        e.preventDefault()
        let oFormulario = new Formulario("#form-logueo");
        oFormulario.metodoAccionFormulario();
        let datosFormulario = oFormulario.DatosEnviados;
        await Comunicacion.metodoPost("/logueandome",datosFormulario)
    })
}


if(location.pathname == "/invoices"){
    console.log("estou en invoice")
}
if(location.pathname == "/recibo-datos-do-servidor"){
    console.log("estou document.querySelector")
    console.log("document.querySelector ",document.body)
}
}

main()