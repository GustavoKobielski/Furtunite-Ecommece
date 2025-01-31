// Importando o express
const express = require("express");
const app = express();
const port = 5000; // Defina a porta que você vai rodar o servidor

// Rota simples para testar
app.get("/", (req, res) => {
  res.send("Servidor está funcionando!");
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
