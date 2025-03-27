const express = require("express");
const path = require("path");
const { paxinaInvoices, paxinaCustomers, paxinaGraficas, paxinaHome, paxinaNewinvoices, } = require("./controladores/views");
const { resolve } = require("url");

const app = express();

// USE
// Para interpretar datos do formulario
app.use(express.urlencoded({extended: true}))
// Para interpretar datos json
app.use(express.json());

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "dist")));

//### GETTERS
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
//### POST
/*app.post("/paxina-app",(req,res)=>{
    
    console.log("recibo dato no server",req.body)

    let condicion = req.body.nome2 === 'Israel' && req.body.apelido2 === 'mariano';
    
    condicion ? paxinaApp(req,res) : paxinaNoUser(req,res)

})*/

app.post("/logueandome",(req,res)=>{
    
    console.log("recibo dato no server",req.body)

    let condicion = req.body.login === 'Israel' && req.body.psw === 'mariano';
    
    //condicion ? paxinaHome(req,res) : paxinaNoUser(req,res) 
    //condicion ?  paxinaHome(req,res): res.redirect("/no-user")
    condicion ? res.send({resposta:"o envío foi correcto"}) : res.send({resposta:"non é o usuario correcto"})

})
// GETTERS PáXINAS
app.get("/invoices",(req,res)=>{
    paxinaInvoices(req,res)
})
/*app.get("/cesta",(req,res)=>{
    paxinaCesta(req,res)
})
app.get("/clientes",(req,res)=>{
    paxinaCustomers(req,res)
})*/
app.get("/customers",(req,res)=>{
    paxinaCustomers(req,res)
})

/*app.get("/graficas",(req,res)=>{
    paxinaGraficas(req,res)
})*/
/*app.get("/axustes",(req,res)=>{
    paxinaAxustes(req,res)
})
app.get("/productos",(req,res)=>{
    paxinaProductos(req,res)
})*/
app.get("/home",(req,res)=>{
    paxinaHome(req,res)
})

app.get("/newinvoices",(req,res)=>{
    paxinaNewinvoices(req,res)
})




//Un evento dende o cliente
app.post("/envio-datos-o-servidor",(req,res)=>{
    res.send({mensaxe:"datos enviados"})
})
//##########
//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});