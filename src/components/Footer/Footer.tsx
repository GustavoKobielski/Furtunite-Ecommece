
import style from './Footer.module.css'
import LogoFuniro from '../../assets/Funiro..svg'

const Footer = () => {
  return (
    <div>
      <footer className={style.footer}>
        <img src={LogoFuniro} alt="" />
      </footer>
    </div>
  )
}

export default Footer;
