const path = require("path");

const paxinaGrid = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/grid.html"))
}

module.exports = paxinaGrid