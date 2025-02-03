// CartPopup.tsx
import React, { useContext } from 'react';
import { CartContext } from '../../App';

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartPopup: React.FC<CartPopupProps> = ({ isOpen, onClose }) => {
  const { cart } = useContext(CartContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-end transition-opacity duration-300"> {/* Overlay covering the entire screen */}
      <div className="bg-white p-6 rounded-md shadow-lg overflow-y-auto max-h-[90vh] w-1/5 flex flex-col"> {/* Adjusted height and width */}
        <div className="flex justify-between items-center mb-12 pb-11 border-b border-solid border-[#D9D9D9]">
          <h2 className="text-4xl font-bold">Shopping Cart</h2>
          <button className="" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="flex-grow text-center text-2xl">O carrinho está vazio.</p>
        ) : (
          <ul className="space-y-2 flex-grow">
            {cart.map((item, index) => (
              <li key={index} className="border-b border-gray-200 pb-2 flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-28 h-28 mr-4 object-cover rounded-lg" />
                <div className="flex-grow">
                  <span className="text-2xl">{item.name}</span><br />
                  <div className='pt-3'>
                    <span className='text-xl pr-4 '>1 x</span>
                    <span className="text-[#B88E2F] text-xl">R$ {item.price.toFixed(2)}</span>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>

                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-8 px-10">
            <span className="text-2xl">Subtotal:</span>
            <span className="text-2xl font-semibold text-[#B88E2F]">R$ {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
          </div>
          <hr className='text-[#D9D9D9]' />
          <div className="flex justify-between mt-5 gap-3"> {/* Aligned buttons to the right */}
            <button className='border border-solid border-[#000000] rounded-3xl px-8 py-3'>Cart</button>
            <button className='border border-solid border-[#000000] rounded-3xl px-8 py-3'>Checkout</button>
            <button className='border border-solid border-[#000000] rounded-3xl px-8 py-3'>Comparison</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
