import React from 'react';
import './works.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>Портфолио</h2>
            <span className='worksDesc'>Ниже представлены мои работы. Со всеми работами вы можете ознакомиться в Instagram.</span>
            <div className='worksImgs'>
                <img src={Portfolio1} alt='Кератин волос Лодзь' className='worksImg' />
                <img src={Portfolio2} alt='Кератиновое выпрямление Лодзь' className='worksImg' />
                <img src={Portfolio3} alt='Ботокс волос Лодзь' className='worksImg' />
                <img src={Portfolio4} alt='Наращивание волос Лодзь' className='worksImg' />
                <img src={Portfolio5} alt='Реконструкция волос Лодзь' className='worksImg' />
                <img src={Portfolio6} alt='Кератин для волос Лодзь' className='worksImg' />
            </div>
            <button className='workBtn' onClick={()=>window.open('https://www.instagram.com/studio.hair.lodz/', '_blank')}>Смотреть еще</button>

        </section>
    );
};

export default Works;