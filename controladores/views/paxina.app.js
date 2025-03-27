const path = require("path");

const paxinaApp = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/app.html"))
}

module.exports = paxinaApp