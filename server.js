const express = require("express");
const path = require("path");
const {
  paxinaHome,
  paxinaNewProduct
} = require("./controladores/views");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Archivos estáticos
app.use(express.static(path.join(__dirname, "dist")));

// Rutas visibles
app.get("/home", paxinaHome);
app.get("/new_product", paxinaNewProduct);


app.listen(3000, () => {
  console.log("✅ Servidor funcionando en http://localhost:3000/home");
});
