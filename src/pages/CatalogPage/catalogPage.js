import React from 'react';
import './catalogPage.css'
import Catalog from '../../components/Catalog/catalog';
import { Helmet } from 'react-helmet';


const CatalogPage = () => {
    return (
        <div className='catalogPage'>
            <Helmet>
                <title>Волосы для наращивания по лучшим ценам в городе Лодзь</title>
                <meta name="description" content="Нужны волосы для наращивания? Ознакомься с каталогом и закажи славянские волосы по лучшим ценам!" />
            </Helmet>
            <h2 className='catalogPageTitle'>Товары</h2>
            <p className='centered-text'>Купить волосы в городе Лодзь для наращивания по лучшим ценам Вы можете именно здесь. Также возможна покупка волос под заказ. Выбирайте интересующие волосы и пишите мне в Instagram.</p>

            <Catalog/>
        </div>
    );
};

export default CatalogPage;