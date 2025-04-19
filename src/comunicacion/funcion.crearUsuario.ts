export const ComunicacionCrearUsuario = async () => {
    const nome = (document.getElementById("nome") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contrasinal = (document.getElementById("contrasinal") as HTMLInputElement).value;

    const datosEnvio = {
        nome,
        email,
        contrasinal
    };

    const obxetoEnvio = {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(datosEnvio)
    };

    const resposta = await fetch("/crear-usuario", obxetoEnvio);
    const respostaJson = await resposta.json();
    console.log("Resposta do servidor:", respostaJson);
}
