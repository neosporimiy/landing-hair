import React from 'react';
import './catalogItem.css'

const CatalogItem = ({ image, name, desc, price, oldPrice }) => {
  return (
    <div className="catalogItem">
      <img src={image} alt={name} className="catalogItemImage" />
      <h3 className="catalogItemName">{name}</h3>
      <p className="catalogItemDesc">{desc}</p>
      <p className="catalogItemOldPrice">{oldPrice}</p>
      <p className="catalogItemPrice">{price}</p>


    </div>
  );
};

export default CatalogItem;