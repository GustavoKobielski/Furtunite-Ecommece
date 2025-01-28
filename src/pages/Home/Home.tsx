import CategoryCard from '../../components/category_card/Category';
import style from './Home.module.css'

import imageCardCategory1 from '../../assets/Home/CardCategory/Mask Group.svg'
import ProductCard from '../../components/Product_Card/ProductCard';

interface Category {
  name: string;
  imageUrl: string;
}

interface Product {
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  BeforePrice?: number;
}

const Home = () => {

  const categories: Category[] = [
    { name: "Dinning", imageUrl: imageCardCategory1 },
    { name: "Living", imageUrl: imageCardCategory1 },
    { name: "Bedroom", imageUrl: imageCardCategory1 },
  ];

  const products: Product[] = [
    { name: "Product 1", description: "algoo", price: 10.99, BeforePrice: 30, imageUrl: imageCardCategory1 },
    { name: "Product 2", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 3", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 4", description: "algoo", price: 40.99, BeforePrice: 80, imageUrl: imageCardCategory1 },
    { name: "Product 5", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 6", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 7", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },
    { name: "Product 8", description: "algoo", price: 40.99, imageUrl: imageCardCategory1 },

  ];

  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.info_pop}>

          <div className={style.content}>
            <h2 className={style.subtitle}>New Arrival</h2>
            <h1 className={style.title}>Discover Our New Collection</h1>
            <p className={style.text}>Lorem Ipsum Dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <a className={style.buy_now}>Buy now</a>
          </div>
        </div>
      </div>

      <div className={style.browse}>
        <h1 className={style.title}>Browse The Range</h1>
        <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className={style.wrapper_browse}>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </div>

      <div className={style.our_products}>
          <h1 className={style.title}>Our Products</h1>

          <div className={style.wrapper_products}>
            {products.map((category, index) => (
              <ProductCard key={index}
              imageUrl={category.imageUrl}
              name={category.name}
              description={category.description}
              price={category.price}
              BeforePrice={category.BeforePrice}
              />
            ))}
          </div>

          <a href='#' className={style.show_more}>Show More</a>
      </div>

    </main>

  )
}

export default Home;
