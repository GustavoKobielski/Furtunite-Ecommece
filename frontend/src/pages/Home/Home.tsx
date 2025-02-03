import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../../components/category_card/Category';
import ProductCard from '../../components/Product_Card/ProductCard';
import style from './Home.module.css';
import { fetchAll } from '../../services/api';

interface Category {
  name: string;
  imageUrl: string; // Caminho da imagem
}

interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  BeforePrice?: number;
}

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAll();
        setCategories(data.categories);
        setProducts(data.produtos);
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.info_pop}>
          <div className={style.content}>
            <h2 className={style.subtitle}>New Arrival</h2>
            <h1 className={style.title}>Discover Our New Collection</h1>
            <p className={style.text}>Lorem Ipsum Dolor sit amet, consectetur adipiscing elit.</p>
            <Link to="/shop" className={style.buy_now}>Buy now</Link>
          </div>
        </div>
      </div>

      <div className={style.browse}>
        <h1 className={style.title}>Browse The Range</h1>
        <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className={style.wrapper_browse}>
          {categories.map((category, index) => {
            // Concatena o URL para a imagem
            const imageUrl = `http://localhost:5000/assets/${category.imageUrl}`;
            return (
              <CategoryCard
                key={index}
                name={category.name}
                imageUrl={imageUrl} // Passa o URL correto da imagem
              />
            );
          })}
        </div>
      </div>

      <div className={style.our_products}>
        <h1 className={style.title}>Our Products</h1>

        <div className={style.wrapper_products}>
        {products.slice(0, 8).map((product, index) => {
          // Concatena o URL para a imagem
          const imageUrl = `http://localhost:5000/assets/${product.imageUrl}`;
          return (
            <ProductCard
              key={index}
              product={{
                imageUrl: imageUrl, // Passa o URL correto da imagem
                name: product.name,
                description: product.description,
                price: product.price,
                BeforePrice: product.BeforePrice,
              }}
            />
          );
        })}
      </div>


        <Link to="/shop" className={style.show_more}>Show More</Link>
      </div>
    </main>
  );
};

export default Home;
