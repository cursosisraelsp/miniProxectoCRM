const express = require("express");
const path = require("path");
const { paxinaApp, paxinaNoUser, paxinaLogueo, paxinaInvoices, paxinaCesta, paxinaCustomers, paxinaGraficas } = require("./controladores/views");

const app = express();

// Paxinas
app.use(express.urlencoded({ extended: true }));
app.use(express.json());//para interpretación de los datos
// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "dist")));

//### POST


app.post("/logueo", (req, res) => {
    console.log("Intento de login:", req.body);
    const { nome, apelido } = req.body;

    if(nome == "" || apelido == "" || nome == undefined || apelido == undefined){
        res.json({ resposta: "Todos los campos deben ser rellenados" });
    }

    if (nome === "Israel" && apelido === "mariano") {
        return res.status(200).json({ resposta: "El envío de datos fue correcto" });
    }
    return res.json({ resposta: "El usuario no es correcto" });


});

// GETTERS PáXINAS

app.get("/home",(req,res)=>{
    paxinaHome(req,res)
})
app.get("/logueo", (req, res) => {
    paxinaLogueo(req, res)
})
// GETTERS PáXINAS
app.get("/invoices",(req,res)=>{
    paxinaInvoices(req,res)
})
app.get("/cesta",(req,res)=>{
    paxinaCesta(req,res)
})
app.get("/clientes",(req,res)=>{
    paxinaCustomers(req,res)
})
app.get("/graficas",(req,res)=>{
    paxinaGraficas(req,res)
})
app.get("/productos",(req,res)=>{
    paxinaNewProduct(req,res)
})
app.get("/axustes",(req,res)=>{
    paxinaAxustes(req,res)
})


//Un evento dende o cliente
app.post("/envio-datos-o-servidor", (req, res) => {
    //imprimir datos enviados por consola
    console.log(req.body, req.body.datosEnvio);
    res.send({ mensaxe: "datos enviados" })
})
//##########
//START SERVER
app.listen(3000, function () {
    console.log("Server running");
});