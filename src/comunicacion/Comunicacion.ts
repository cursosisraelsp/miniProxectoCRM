export class Comunicacion {
    // Define datos como una propiedad estática
    static datos: any;

    static async metodoGet(endpoint: string) {
        console.log("this.endpoint", endpoint);
        let datoServidor = await fetch(endpoint);
        this.datos = await datoServidor.json();
    }

    /**
    * Method: metodoPost
    * @param endpoint
    * @param datos
    */
    static async metodoPost(endpoint: string, datos: any) {
        let resposta = await fetch(endpoint, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(datos)
        });
        this.datos = await resposta.json();
        console.log("estou en comunicacion", this.datos);
    }

    /**
    * Method: respostaServidor
    * @returns {any}
    */
    static get respostaServidor() {
        return this.datos;
    }
}

type datosObxeto = {
    dato1: string,
    dato2: string,
    dato3: number
}

let datosEnvio: datosObxeto = {
    dato1: "Mariano",
    dato2: "pepito",
    dato3: 5
};

let obxetoEnvio = {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(datosEnvio)
};

let endpoint = "your_endpoint_here"; // replace with your actual endpoint
Comunicacion.metodoPost(endpoint, obxetoEnvio).then(() => {
    console.log("estou en comunicacion", Comunicacion.respostaServidor);
});
