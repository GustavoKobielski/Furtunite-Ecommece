import React from "react";
import style from './Category.module.css'

interface CategoryCardProps {
  name: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, imageUrl}) => {
  return (
    <div className={style.categoryItem}>
      <img src={imageUrl} alt={name} className={style.categoryImage} />
      <h3>{name}</h3>
    </div>
  )
}

export default CategoryCard;
