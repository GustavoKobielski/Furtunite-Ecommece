const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 5000;

// Habilitar CORS
app.use(cors());

// Servir arquivos estáticos da pasta 'assets' (onde as imagens estão localizadas)
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Dados do JSON
const data = require("./data/products.json");

// Rota para pegar produtos e categorias
app.get("/data", (req, res) => {
  res.json({
    categories: data.categories,
    produtos: data.produtos,
  });
});

// Inicializando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
