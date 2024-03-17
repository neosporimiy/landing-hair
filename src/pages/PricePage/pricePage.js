import React from 'react';
import './pricePage.css';
import { Helmet } from 'react-helmet';
import KeratinBotoxPrice from '../../assets/price_keratyn_botox.jpg'
import Narashivanie from '../../assets/price_narashivanie.jpg'
import Reconstruction from '../../assets/price_reconstruktion.jpg'
import Vosstanovlenie from '../../assets/price_vosstanovlenie.jpg'

const PricePage = () => {
    

    return (
        <div className='pricePage'>
            <Helmet>
                <title>Цена на кератиновое выпрямление, ботокс волос, восстановление волос, реконструкция волос, капсульное наращивание</title>
                <meta name="description" content="Цены на услуги кератинового выпрямления волос, ботокса для волос и профессионального капсульного наращивания. Отличный результат за приятную цену." />
            </Helmet>
            <h2 className='pricePageTitle'>Цены</h2>
            <p className='centered-text'>Цена на кератин, ботокс волос, капсульное наращивание и реконструкцию волос является одной из лучших в городе Лодзь. Ниже представлен полный прайс, который зависит от длины волос и от процедуры. Также возможны небольшие доплаты за сложность работы.</p>

            <div className='priceList'>
            <img src={KeratinBotoxPrice} alt="Кератин волос цена Лодзь" className='priceImage' />
            <img src={Reconstruction} alt="Ботокс волос цена Лодзь" className='priceImage' />
            <img src={Vosstanovlenie} alt="Реконструкция волос цена Лодзь" className='priceImage' />
            <img src={Narashivanie} alt="Наращивание волос цена Лодзь" className='priceImage' />


            </div>
        </div>
    );
};

export default PricePage;
