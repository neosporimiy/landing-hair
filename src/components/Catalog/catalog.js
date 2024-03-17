import React from 'react';
import './catalog.css'
import CatalogItem from '../Catalog/CatalogItem/catalogItem';
import Product1 from '../../assets/products/product1.png'
import Product2 from '../../assets/products/product2.png'
import Product4 from '../../assets/products/product4.png'
import Product5 from '../../assets/products/product5.png'
import Product6 from '../../assets/products/product6.png'



const Catalog = () => {
  const items = [
    { id: 1, image: Product1, name: 'Некрашеные славянские LUX', desc:'Длина: 64 см, Вес: 108 г', price: '1600zł', oldPrice: '1800zł' },
    { id: 2, image: Product2, name: 'Славянские Premium легкая волна', desc:'Длина: 60 см, Вес: 80 г', price: '725zł', oldPrice: '800zł' },
    { id: 4, image: Product4, name: 'Cлавянские LUX', desc:'Длина: 50 см. Вес: 100 г.', price: '950zł', oldPrice: '1050zł' },
    { id: 5, image: Product5, name: 'Cлавянские LUX', desc:'Длина: 55 см, Вес: 114 г', price: '1230zł', oldPrice: '1350zł' },
    { id: 6, image: Product6, name: 'Некрашеные славянские LUX', desc:'Длина: 50 см, Вес: 108 г', price: '1500zł', oldPrice: '1700zł' },
  ];

  return (
    <div className="catalog">
      
      {items.map(item => (
        <CatalogItem
          key={item.id}
          image={item.image}
          name={item.name}
          desc={item.desc}
          price={item.price}
          oldPrice={item.oldPrice}
        />
      ))}
    </div>
  );
};

export default Catalog;
