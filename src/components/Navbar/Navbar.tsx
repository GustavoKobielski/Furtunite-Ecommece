
import { Link } from 'react-router-dom';
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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
