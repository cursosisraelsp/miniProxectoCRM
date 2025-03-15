const path = require("path");

const paxinaCustomers = (req,res)=>{
    res.sendFile(path.join(__dirname,"../../dist/views/customers.html"))
}

module.exports = paxinaCustomers