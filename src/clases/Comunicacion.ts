/**
 * @author Pepito Gutierrez
 * @class Comunicacion
 * @method metodoGet método que temos que utilizar para un GET
 * @method metodoPost métodos que temos que utilizar para un POST
 */

export class Comunicacion{
    
    static datos: Object;
    /**
     * @method metodoGet que fai un GET
     * @param endpoint será un endpoint de tipo texto
     */
    static async metodoGet(endpoint: string){
        console.log("this.endpoint ",endpoint)
        let datoServidor = await fetch(endpoint);
        this.datos = await datoServidor.json();
    }
    /**
     * @method metodoPost é estático que fai un POST
     * @param endpoint  será un endpoint de tipo texto
     */
    static async metodoPost(endpoint: string,datos:any){
        let resposta = await fetch(endpoint,datos); //  Son os datos que enviamos co endpoint
        this.datos = await resposta.json();         //  En resposta é que me está a enviar o Server
        console.log("estou en Comuniccion ", this.datos)
    }
    /**
     * @method respostaServidor que devolve os datos
     * @returns devolve datos
     */
    static get respostaServidor(){
        return this.datos
    }
}

