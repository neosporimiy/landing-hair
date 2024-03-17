import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link, Outlet } from 'react-router-dom';
import menu from '../../assets/menu.png'
import IGIcon from '../../assets/instagram.png'


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            
            <div className="desktopMenu">
                <Link to='/' className="desktopMenuListItem">Главная</Link>                
                <Link to='/catalog' className="desktopMenuListItem">Каталог</Link>
                <Link to='/contact' className="desktopMenuListItem">Контакт</Link>
                <Link to='/price' className="desktopMenuListItem">Прайс</Link>
            </div>
            <a href="https://www.instagram.com/studio.hair.lodz/" target="_blank"><img src={IGIcon} alt='Instagram' className='link' /></a>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link to='/' className="listItem" onClick={()=>setShowMenu(false)}>Главная</Link>                
                <Link to='/catalog' className="listItem" onClick={()=>setShowMenu(false)}>Каталог</Link>
                <Link to='/contact' className="listItem" onClick={()=>setShowMenu(false)}>Контакт</Link>
                <Link to='/price' className="listItem" onClick={()=>setShowMenu(false)}>Прайс</Link>
            </div>


        </nav>
    );
};

export default Navbar;