const express = require("express");
const path = require("path");
const {  paxinaLogueo, paxinaInvoices,paxinaTablasTable ,paxinanouser} = require("./controladores/views");

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

app.get("/logueo", (req, res) => {
    paxinaLogueo(req, res)
})
// GETTERS PáXINAS
app.get("/invoices",(req,res)=>{
    paxinaInvoices(req,res)
})
app.get("/no-user", (req, res) => {
    paxinanouser(req, res)
})
// GETTERS PáXINAS
app.get("/tablasTable",(req,res)=>{
    paxinaTablasTable(req,res)
})

//##########
//START SERVER
app.listen(3000, function () {
    console.log("Server running");
});