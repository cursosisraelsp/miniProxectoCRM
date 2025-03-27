const path = require("path");

const paxinaTablasTable = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/tablasTable.html"))
}

module.exports = paxinaTablasTable