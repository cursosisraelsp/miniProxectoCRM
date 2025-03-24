const path = require("path");

const paxinaHome = (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/views/home.html"));
};

module.exports = paxinaHome;
