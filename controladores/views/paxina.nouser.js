const path = require("path");

const paxinanouser = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/no-user.html"))
}

module.exports = paxinanouser