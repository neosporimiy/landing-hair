import React from 'react';
import './skills.css';
import Keratin from '../../assets/keratin.png';
import Botoks from '../../assets/botoks.png';
import Narashivanie from '../../assets/narashivanie.png';
import Rekonstruktsia from '../../assets/rekonstruktsia.png';


const Skills = () => {
    return (
        <section id="skills">
            <span className='skillTitle'>Услуги</span>
            <span className='skillDesc'>Я предоставляю следующие виды услуг: выпрямление вьющихся волос кератином, восстановление ботоксом, тотальная реконструкция сильно поврежденных волос, капсульное наращивание Лодзь.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={Keratin} alt="Кератин волос" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2 className='skillBarTitle'>Кератиновое выпрямление волос</h2>
                        <p>Кератин - это не просто новомодное средство для волос, это состав, нацеленный на восстановление естественного белка, который придает волосам их привлекательность. Количество этого белка имеет огромное значение для общего состояния и управляемости волос, а также влияет на то, насколько они могут быть легко уложены.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Botoks} alt="Ботокс волос" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2 className='skillBarTitle'>Ботокс для восстановления волос</h2>
                        <p>Ботокс включает в себя различные питательные вещества, аминокислоты и прочие компоненты, которые помогают укрепить волосы и восстановить их структуру.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Rekonstruktsia} alt="Реконструкция волос" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2 className='skillBarTitle'>Тотальная реконструкция волос</h2>
                        <p>Тотальная реконструкция волос - это процедура, направленная на интенсивное восстановление и улучшение состояния волос, особенно если они сильно повреждены, пересушены, ломкие или безжизненные.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Narashivanie} alt="Наращивание волос капсулами" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2 className='skillBarTitle'>Капсульное горячее наращивание волос</h2>
                        <p>Наращивание волос - это процедура, при которой волосы добавляются к существующим волосам для увеличения их длины, объема или изменения текстуры. Это может быть сделано с целью достижения различных эффектов и стилей волос, а также для устранения проблем, связанных с редкими или слабыми волосами. </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;