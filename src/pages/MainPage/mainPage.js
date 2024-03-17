import React from 'react';
import Intro from '../../components/Intro/intro';
import Skills from '../../components/Skills/skills';
import Works from '../../components/Works/works';
import Footer from '../../components/Footer/footer.js';
import { Helmet } from 'react-helmet';


const MainPage = () => {
    return (
        <div>
            <Helmet>
                <title>Кератин волос, кератиновое выпрямление, ботокс для волос, восстановление и реконструкция волос, капсульное наращивание в городе Лодзь.</title>
                <meta name="description" content="Добро пожаловать на сайт мастера по реконструкции и модификации волос! Предлагаю высококачественные услуги кератинового выпрямления волос, ботокса для волос и профессионального капсульного наращивания. Преобразите свои волосы и наслаждайтесь шикарным результатом." />
            </Helmet>
            <Intro />
            <Skills />
            <Works />
            <Footer />

        </div>
    );
};

export default MainPage;