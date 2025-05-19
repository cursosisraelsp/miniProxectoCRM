/**
 * @fileoverview Funciones de comunicación para el CRM
 * @author Angel
 */

/**
 * Realiza una petición GET al servidor con datos de prueba
 * @async
 * @returns {Promise<void>}
 */
export const comunicacionGET = async () =>{
    /**
     * @typedef {Object} datosObxeto
     * @property {string} dato1 - Primer dato de prueba
     * @property {string} dato2 - Segundo dato de prueba
     * @property {number} dato3 - Tercer dato de prueba
     */
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
    let resposta = await fetch("/envio-datos-test",obxetoEnvio);
    let respostaJson = await resposta.json()
    console.log("isto ven do servidor",respostaJson)
}