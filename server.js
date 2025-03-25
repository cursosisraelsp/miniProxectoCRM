const express = require("express");
const path = require("path");
const { paxinaAxustes,paxinaApp, paxinaNoUser, paxinaLogueo, paxinaInvoices, paxinaCesta, paxinaCustomers, paxinaGraficas } = require("./controladores/views");

const app = express();

// 🔥 Servir archivos estáticos correctamente desde `dist`
app.use(express.static(path.join(__dirname, "dist"), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith(".css")) {
            res.setHeader("Content-Type", "text/css"); // ✅ Fuerza el MIME correcto
        }
    }
}));

// Middleware para formularios
app.use(express.urlencoded({ extended: true }));

//### GETTERS
app.get("/recibo-datos-do-servidor", (req, res) => {
    res.send({
        mensaxe: {
            dato1: "Juanito",
            dato2: "pepito",
            dato3: 3
        }
    });
});

app.get("/logueo", (req, res) => {
    paxinaLogueo(req, res);
});
app.get("/axustes", (req, res) => {
    paxinaAxustes(req, res);
});
//### POST
app.post("/paxina-app", (req, res) => {
    console.log("📥 Recibo dato no servidor:", req.body);

    let condicion = req.body.nome2 === 'Israel' && req.body.apelido2 === 'mariano';

    condicion ? paxinaApp(req, res) : paxinaNoUser(req, res);
});
// Ruta para recibir datos do formulario de axustes
app.post("/axustes", (req, res) => {
    console.log("📩 Datos recibidos dende axustes:", req.body);
    res.json({ mensaxe: "Datos recibidos correctamente" });
});


//### GETTERS PáXINAS
app.get("/invoices", (req, res) => { paxinaInvoices(req, res); });
app.get("/cesta", (req, res) => { paxinaCesta(req, res); });
app.get("/clientes", (req, res) => { paxinaCustomers(req, res); });
app.get("/graficas", (req, res) => { paxinaGraficas(req, res); });

// Un evento dende o cliente
app.post("/envio-datos-o-servidor", (req, res) => {
    res.send({ mensaxe: "Datos enviados" });
});

//##########
// START SERVER
app.listen(3000, function () {
    console.log("✅ Server running en http://localhost:3000");
});
