
import { useState } from 'react';

import { Link } from 'react-router-dom';
import style from './Navbar.module.css'
import logo from '../../assets/Logo.svg'

import Alert from '../../assets/Icons/mdi_account-alert-outline.svg'
import Search from '../../assets/Icons/akar-icons_search.svg'
import Hearth from '../../assets/Icons/akar-icons_heart.svg'
import Cart from '../../assets/Icons/ant-design_shopping-cart-outlined.svg'

import CartPopup from '../Cart/Cart'

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar o popup

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={style.containerNavbar}>
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
        <img src={Cart} onClick={toggleCart} style={{ cursor: 'pointer' }}  />

      </div>

      {isCartOpen && <CartPopup isOpen={isCartOpen} onClose={toggleCart} />}
    </div>

  )
}

export default Navbar;
