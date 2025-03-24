export class Comunicacion {
    console.log("this endopint", enpoint)
    let datoServidor = awit fetch(enpoint);
    this.dato = await (datoServidor.json();
}

static async metodoGet (enpoint: string){
    console.log("this.enpoint", endpoint)
    let datoservidor = await fetch (endpoint);
this.datos = await datoServidor.json();


/**
*@method metodoPost
*@parm enpoint
*/

static async metodoPost (enpoint: string,datos:any){
    let resposta = await fetch (endpoint,datos);
this.datos = await resposta.json();
console.log("estou en comunicacion", this.datos)
/**
*@method respostaServidor
*@returs enpoint
*/
static get respostaServidor() {
return this.datos
}
}
type datosObxeto = {
        dato1:string,
        dato2:string,
        dato3:number
    }
let datosEnvio = datosObxeto = {
    dato1 ="Mariano",
    dato2="pepito",
    dato3="5"
}
let obxetoEnvio = {
    method: 'Post',
    headers: {
        "Content-type":"application/json"
    },
    body:JSON.stringify(datosEnvio)
}
let resposta= await fetch (endpoint,obxetoEnvio);
this.datos = await resposta.json();
console.log("estou en comunicacion", this.datos)
}
/**
*@method respostaServidor
*@returns
*/