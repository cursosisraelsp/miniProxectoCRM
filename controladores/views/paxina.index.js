const path = require("path");

const paxinaIndex = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/index.html"))
}

module.exports = paxinaIndex