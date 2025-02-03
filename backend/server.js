const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Habilitar CORS
app.use(cors());

app.use("/assets", express.static(path.join(__dirname, "assets")));

const data = require("./data/products.json");

// Função para paginar os produtos
const getPaginatedProducts = (page, limit) => {
  const startIndex = (page - 1) * limit; // Índice inicial
  const endIndex = page * limit; // Índice final
  return data.produtos.slice(startIndex, endIndex); // Retorna a fatia dos produtos
};

app.get("/data", (req, res) => {
  res.json({
    categories: data.categories,
    produtos: data.produtos,
  });
});

// Rota para pegar produtos com paginação e categorias
app.get("/products", (req, res) => {
  const page = parseInt(req.query.page) || 1; // Pega a página da query ou define como 1
  const limit = parseInt(req.query.limit) || 16; // Pega o limite de itens ou define como 16

  // Obtém os produtos paginados
  const paginatedProducts = getPaginatedProducts(page, limit);

  // Retorna os produtos paginados, categorias e o total de produtos
  res.json({
    produtos: paginatedProducts,
    total: data.produtos.length, // Retorna o total de produtos
  });
});

// Inicializando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
