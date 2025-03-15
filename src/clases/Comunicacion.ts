export class Comunicacion{
    
    static datos: Object;
    
    static async metodoGet(endpoint: string){
        console.log("this.endpoint ",endpoint)
        let datoServidor = await fetch(endpoint);
        this.datos = await datoServidor.json();
    }

    static async metodoPost(endpoint: string){
        type datosObxeto = {
            dato1: string,
            dato2: string,
            dato3: number
        }
        
        let datosEnvio: datosObxeto = {
            dato1: "mariano",
            dato2: "pepito",
            dato3: 5
        }
    
        let obxetoEnvio = {
            method: 'post',
            headers: {
                "Content-type":"application/json"
            },
            body:JSON.stringify(datosEnvio)
        }
        let resposta = await fetch(endpoint,obxetoEnvio);
        this.datos = await resposta.json();

    }

    static get respostaServidor(){
        return this.datos
    }
}

