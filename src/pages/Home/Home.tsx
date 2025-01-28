import style from './Home.module.css'


const Home = () => {
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

    </main>

  )
}

export default Home;
