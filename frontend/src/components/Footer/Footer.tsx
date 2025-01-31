import LogoFuniro from '../../assets/Funiro..svg';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-24 p-4 border border-solid border-[#D9D9D9]">
      <div className="pl-24 pr-44 py-9 w-full flex justify-between">
        <div>
          <img className="mb-4" src={LogoFuniro} alt="Logo Funiro" />
          <div className='mt-14 text-[#9F9F9F] text-lg'>
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>
        </div>

        <div>
          <ul className='flex flex-col gap-11 text-2xl'>
            <li className='pb-12 text-[#9F9F9F]'>Links</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <ul className='flex flex-col gap-11 text-2xl'>
            <li className='text-2xl text-[#9F9F9F] pb-12'>Help</li>
            <li><Link to="/">Payment Options</Link></li>
            <li><Link to="/">Returns</Link></li>
            <li><Link to="/">Privacy Policies</Link></li>
          </ul>
        </div>

        <div>
          <ul className='flex flex-col gap-11 text-2xl'>
            <li className='text-[#9F9F9F] pb-12'>Newsletter</li>
            <li className='flex gap-8 text-2xl'>
              <div>
                <form action="" className='flex gap-8'>
                  <input className='border-b border-solid text-2xl' type="email" name="" id="" placeholder='Enter Your Email Address'/>
                  <button className="uppercase text-2xl border-b border-solid">
                    Subscribe
                  </button>
                </form>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div className='border-[#D9D9D9] border-t border-solid pl-24 pr-44 py-9 text-2xl'>
          <h2>2023 furino. All rights reverved</h2>
        </div>

    </footer>
  );
};

export default Footer;
