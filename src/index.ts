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
        await Comunicacion.metodoPost("/logueandome",datosFormulario);
        const resposta:any = Comunicacion.respostaServidor;
        console.log("resposta do servidor:", resposta);
        if (resposta?.resposta === "o envío foi correcto") {
            window.location.href ="/home";
        } else{
            alert("Usuario incorrecto.Non podes acceder.");
        }
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
if (location.pathname === "/formulario-producto-adrian") {
    const boton: HTMLButtonElement = document.querySelector("#envio-produto-adrian");
  
    boton.addEventListener("click", async (e) => {
      e.preventDefault();
  
      const oFormulario = new Formulario("#form-adrian");
      oFormulario.metodoAccionFormulario();
  
      const datosFormulario = oFormulario.DatosEnviados;
  
      await Comunicacion.metodoPost("/envio-datos-o-servidor", datosFormulario);
  
      const resposta:any = Comunicacion.respostaServidor;
      const divResposta = document.getElementById("resposta");
      divResposta.innerText = resposta?.mensaxe ||"sen resposta do servidor"
    });
  }
  

main()