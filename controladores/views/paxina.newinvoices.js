const path = require("path");

const paxinaNewinvoices = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/newinvoices.html"))
}

module.exports = paxinaNewinvoices


