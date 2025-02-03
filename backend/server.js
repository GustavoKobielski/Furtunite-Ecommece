const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Habilitar CORS
app.use(cors());

app.use("/assets", express.static(path.join(__dirname, "assets")));

const data = require("./data/products.json");

const getPaginatedProducts = (page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return data.produtos.slice(startIndex, endIndex);
};

app.get("/data", (req, res) => {
  res.json({
    categories: data.categories,
    produtos: data.produtos,
  });
});

app.get("/products", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 16;

  const paginatedProducts = getPaginatedProducts(page, limit);

  res.json({
    produtos: paginatedProducts,
    total: data.produtos.length,
  });
});

// Inicializando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
