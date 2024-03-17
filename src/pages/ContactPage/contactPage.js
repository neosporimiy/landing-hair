import React from 'react';
import './contactPage.css'
import Contact from '../../components/Contact/contact';
import { Helmet } from 'react-helmet';


const ContactPage = () => {
    return (
        <div className='contactPage'>
            <Helmet>
                <title>Кератиновое выпрямление, ботокс для волос, восстановление и реконструкция волос, капсульное наращивание Лодзь</title>
                <meta name="description" content="Остались вопросы по моим услугам? Свяжись со мной и я отвечу на все твои вопросы по поводу кератинового выпрямления волос, ботокса для волос, профессионального капсульного наращивания."/>
            </Helmet>
            <Contact />
            <iframe className='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.720138235133!2d19.40806347628383!3d51.793000971879714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bcaa071f2de99%3A0xea0664d0786a400c!2zV2luY2VudGVnbyBQb2xhIDQyLzQ0LCA5MC0wMDEgxYHDs2TFug!5e0!3m2!1sru!2spl!4v1699040890073!5m2!1sru!2spl"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                >
            </iframe>
        </div>
    );
};

export default ContactPage;