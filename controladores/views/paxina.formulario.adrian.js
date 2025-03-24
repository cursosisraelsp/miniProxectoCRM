const path = require("path");

function paxinaFormularioProductoAdrian(req,res) {
    res.sendFile(path.join(__dirname,"../../dist/views/formulario-producto-adrian.html"));
}
module.exports = paxinaFormularioProductoAdrian