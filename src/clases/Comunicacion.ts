export class Comunicacion {
    static datos: any;

    static async metodoGet(endpoint: string) {
        try {
            let respuesta = await fetch(endpoint);
            this.datos = await respuesta.json();
        } catch (error) {
            console.error("Error en GET:", error);
        }
    }

    static async metodoPost(endpoint: string, datos: any) {

        console.log("Enviando datos a:", endpoint);
        console.log("Datos enviados:", datos);

        try {

            let resposta = await fetch(endpoint, datos);
            this.datos = await resposta.json();
            console.log("Respuesta del servidor: ", this.datos)

        } catch (error) {
            console.log("Fallo en el inicio de sesión", error);
        }


    }

    static get respostaServidor() {
        return this.datos;
    }
}