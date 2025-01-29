import React from "react";
import style from './ProductCard.module.css'

interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  BeforePrice?:number;
}

const ProductCard: React.FC<ProductCardProps> = ({imageUrl, name, description, price, BeforePrice}) => {

  const discountPercentage = BeforePrice
    ? Math.round(((BeforePrice - price) / BeforePrice) * 100)
    : 0;  // Se não houver BeforePrice, o desconto é 0%

  return (
    <div className={style.containerProductCard}>
      <div className={style.imageWrapper}>
        <img src={imageUrl} alt="" />
        {discountPercentage > 0 && (
          <div className={style.discountStar}>
              -{discountPercentage}%
            </div>
          )}
      </div>
      <div className={style.contentInfos}>
        <h1>{name}</h1>
        <p className={style.desc}>{description}</p>

        <div className={style.priceContainer}>
          <p className={style.price}>R$ {price.toFixed(2)}</p>
          {BeforePrice && (
            <p className={style.beforePrice}>R$ {BeforePrice.toFixed(2)}</p>
          )}
        </div>
      </div>

    </div>
  )
}

export default ProductCard;
