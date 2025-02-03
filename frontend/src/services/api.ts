import axios from "axios";

// Configurando a URL base da API
const api = axios.create({
  baseURL: "http://localhost:5000", // URL do seu backend
});

// Função para buscar produtos e categorias com paginação
export const fetchProductsAndCategories = async (page: number, limit: number) => {
  try {
    const response = await api.get("/products", {
      params: {
        page,  // Página atual
        limit, // Limite de produtos por página
      },
    });
    return response.data; // Retorna os dados no formato { categorias, produtos, total }
  } catch (error) {
    console.error("Erro ao buscar produtos e categorias:", error);
    throw error;
  }
};

// Função para buscar produtos e categorias
export const fetchAll = async () => {
  try {
    const response = await api.get("/data"); // Requisição para a rota '/data'
    return response.data; // Retorna os dados no formato { categories, produtos }
  } catch (error) {
    console.error("Erro ao buscar produtos e categorias:", error);
    throw error;
  }
};
