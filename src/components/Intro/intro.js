import React from 'react';
import './intro.css'
import photo from '../../assets/image.jpg'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (        
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Привет,</span>
                <span className='introText'>Меня зовут <span className='introName'>Екатерина. </span>
                Я мастер кератинового выпрямления, ботокса, реконструкции и наращивания волос.</span>
                <p className='introPara'>Опыт работы 2 года. Более 300 довольных клиентов.</p>
                <Link to='/booking'>
                    <div className='btnBlock'>
                    <button className='btn' onClick={() => window.open('https://www.instagram.com/studio.hair.lodz/', '_blank')}>
                    <img src={btnImg} alt='Записаться' className='btnImg' />
                        Записаться
                    </button>
                    </div>
                </Link>  
            </div>
            <div className='photoBlock'><img src={photo} alt="Кератин, ботокс, наращивание волос" className="photo"></img></div>
        </section>
    );
};

export default Intro;