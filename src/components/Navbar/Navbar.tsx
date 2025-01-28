
import style from './Navbar.module.css'
import logo from '../../assets/Logo.svg'

import Alert from '../../assets/Icons/mdi_account-alert-outline.svg'
import Search from '../../assets/Icons/akar-icons_search.svg'
import Hearth from '../../assets/Icons/akar-icons_heart.svg'
import Cart from '../../assets/Icons/ant-design_shopping-cart-outlined.svg'

const Navbar = () => {
  return (
    <div className={style.container}>
      <img src={logo} alt="" />

      <nav className={style.navbar}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className={style.icons}>
        <img src={Alert} alt="" />
        <img src={Search} />
        <img src={Hearth} />
        <img src={Cart} />

      </div>


    </div>

  )
}

export default Navbar;
