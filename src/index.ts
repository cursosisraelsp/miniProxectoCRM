
import { Comunicacion } from "./clases/Comunicacion";
import { Formulario } from "./clases/Formulario";
//import fondo from "./fondoBueno.png";
import './css/main.css'; // Temos que integrar o CSS para que webpack o compile

/*if(location.pathname == "/paxina-app"){
    const refBotonGET: HTMLButtonElement = document.querySelector("#solicitudeGET");
    const refBotonPOST: HTMLButtonElement = document.querySelector("#solicitudePOST")
    
    // INTRODUZCO DOUS BOTÓNS SIMULANDO 'EVENTOS' 
    // UN POST
    // UN GET 
    

    refBotonGET.addEventListener("click",async () =>{
        let endpoint = "/recibo-datos-do-servidor";
        await Comunicacion.metodoGet(endpoint)
        console.log(Comunicacion.respostaServidor)
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    })
    refBotonPOST.addEventListener("click",async ()=>{
        let endpoint = "/envio-datos-o-servidor"
        await Comunicacion.metodoPost(endpoint)
        console.log(Comunicacion.respostaServidor)
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    })
}
*/

function main():void{
    
    // location.pathname localizo o 'endpoint'
    if(location.pathname == "/"){
        console.log("estou en inicio")
    }
    /**
     * @param {location.pathname} == "/logueo", no meu caso "/"
     */
    if(location.pathname == "/"){
        const refBotonFormulario : HTMLButtonElement = document.querySelector("#login-button");// selecciono o botón de envío do formulario
        console.log("refBotonFormulario",refBotonFormulario);
    
        refBotonFormulario.addEventListener("click",async (e)=>{
            e.preventDefault()
            let oFormulario = new Formulario("#login-form");
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
