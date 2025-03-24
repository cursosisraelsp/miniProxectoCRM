import { Comunicacion } from "../src/clases/Comunicacion";

function main(): void{

}
/**
*@param {localitation.pathname} == "/logueo"}
*/
if {localitation.pathname == "/logueo"} {
    const refBotonFormulario = HTMLElement = document.querySelector("name=['logueo']");

    console.log("refBotonFormulario", refBotonFormulario);

    refBotonFormulario.addEventlistener("click",async ()=>){
    let endpoint = 'logueo';
    let oFormulario = new Formulario ("name =[`logueo`]");
    oFormulario.metodoAccionFormulario();

        let datosFormulario = oFormulario;
        await Comunicacion.metodoPost(enpoint,datosFormulario)
})
}
/**
 * param {location.pathname} == "paxina-app"
 */
 if (location.pathname} == "paxina-app"){
    const refBotonGet: HTMLButtonElement = document.querySelector("solicitudeGET");
    const refBotonPost: HTMLButtonElement = document.querySelector("solicitudePOST")
    console.log("refBoton")
 }
 /**
 * @function refBotonGET.addEvenListener
 */
refBotonGET.addEvenListener("click",async ()=>){
    let endpoint = '/recibo-datos-do-servidor';
    await Comunicacion.metodoGet(endpoint)
    console.log(Comunicacion.respostaServidor)   