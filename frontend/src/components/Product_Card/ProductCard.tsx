import React, { useState, useContext } from "react";
import style from './ProductCard.module.css';
import { CartContext } from '../../App';

interface Product {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  BeforePrice?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Acessa a função addToCart do contexto
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = product.BeforePrice
    ? Math.round(((product.BeforePrice - product.price) / product.BeforePrice) * 100)
    : 0;

  return (
    <div
      className={style.containerProductCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={style.imageWrapper}>
        <img src={product.imageUrl} alt={product.name} /> {/* Usa product.imageUrl e product.name */}
        {discountPercentage > 0 && (
          <div className={style.discountStar}>
            -{discountPercentage}%
          </div>
        )}

        {/* Botão "Add to Cart" (aparece no hover) */}
        <div className={`${style.overlay} ${isHovered ? style.overlayVisible : ''}`}> {/* Conditional class */}
          <button
            className={style.addToCartButton}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className={style.contentInfos}>
        <h1>{product.name}</h1> {/* Usa product.name */}
        <p className={style.desc}>{product.description}</p> {/* Usa product.description */}

        <div className={style.priceContainer}>
          <p className={style.price}>R$ {product.price.toFixed(2)}</p> {/* Usa product.price */}
          {product.BeforePrice && (
            <p className={style.beforePrice}>R$ {product.BeforePrice.toFixed(2)}</p> /* Usa product.BeforePrice */
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
