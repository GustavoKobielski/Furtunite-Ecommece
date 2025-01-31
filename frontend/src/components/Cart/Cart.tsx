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
      <div className="bg-white p-6 rounded-md shadow-lg overflow-y-auto max-h-[90vh] w-96 flex flex-col"> {/* Adjusted height and width */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Carrinho de Compras</h2>
          <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-700 flex-grow text-center">O carrinho está vazio.</p>
        ) : (
          <ul className="space-y-2 flex-grow">
            {cart.map((item, index) => (
              <li key={index} className="border-b border-gray-200 pb-2 flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 mr-4 object-cover" />
                <div className="flex-grow">
                  <span className="font-medium">{item.name}</span><br />
                  <span className="text-gray-600">1 x R$ {item.price.toFixed(2)}</span>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m-2-2l2 2m-6 6a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Subtotal:</span>
            <span className="text-lg font-bold">R$ {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
          </div>
          <div className="flex space-x-2 justify-end"> {/* Aligned buttons to the right */}
            <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Continuar Comprando</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
