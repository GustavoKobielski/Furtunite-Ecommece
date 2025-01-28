import CategoryCard from '../../components/category_card/Category';
import style from './Home.module.css'

import imageCardCategory1 from '../../assets/Home/CardCategory/Mask Group.svg'
import ProductCard from '../../components/Product_Card/ProductCard';

interface Category {
  name: string;
  imageUrl: string;
}

const Home = () => {

  const categories: Category[] = [
    { name: "Dinning", imageUrl: imageCardCategory1 },
    { name: "Living", imageUrl: imageCardCategory1 },
    { name: "Bedroom", imageUrl: imageCardCategory1 },
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
            <ProductCard imageUrl={imageCardCategory1} name='Syltherine' description='Stylish cafe chair' price={2500} BeforePrice={3500}/>
          </div>
      </div>

    </main>

  )
}

export default Home;
