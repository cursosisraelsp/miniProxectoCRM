const express = require("express");
const path = require("path");
const { paxinaApp, paxinaNoUser,paxinaLogueo, paxinaInvoices, paxinaCesta, paxinaCustomers, paxinaGraficas, paxinaNewProduct, paxinaHome, paxinaAxustes } = require("./controladores/views");

const app = express();

// USE
// É para interpretar datos do formulario
app.use(express.urlencoded({extended: true}));
// É para interpretar datos json 
app.use(express.json())

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "dist")));
//### GETTERS
/**
 * @function get 
 * @param endpoint '/recibo-datos-do-servidor'
 * @returns mensaxe obxeto
 *
 */
app.get("/recibo-datos-do-servidor",(req,res)=>{
    res.send({
        mensaxe:{
            dato1:"Juanito",
            dato2:"pepito",
            dato3:3
        }
    })
})
app.get("/logueo",(req,res)=>{
    paxinaLogueo(req,res)
})

//paxina no-user
app.get("/no-user",(req,res)=>{
    paxinaNoUser(req,res)
})

//### POST
app.post("/logueandome",(req,res)=>{
    
    console.log("recibo dato no server",req.body)

    let condicion = req.body.nome2 === 'Israel' && req.body.apelido2 === 'mariano';
    
    //condicion ? paxinaHome(req,res) : paxinaNoUser(req,res) 
    //condicion ?  paxinaHome(req,res): res.redirect("/no-user")
    condicion ? res.send({resposta:"o envío foi correcto"}) : res.send({resposta:"non é o usuario correcto"})

})
//home-emerxencia
app.get("/home",(req,res)=>{
    paxinaHome(req,res)
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
app.post("/envio-datos-o-servidor",(req,res)=>{
    console.log("req.body ",req.body,req.body.datosEnvio )
    res.send({mensaxe:"datos enviados"})
})
//##########
//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});
