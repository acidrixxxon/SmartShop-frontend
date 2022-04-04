import React from 'react'
import Container from '../Container/Container'
import './_Navigation.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import Sugway from '../../../assets/icons/Sugway'
import Electrosamokat from './../../../assets/icons/Electrosamokat'
import Accessories from '../../../assets/icons/Accessories'
import Monowheel from '../../../assets/icons/Monowheel'
import Electricscooter from '../../../assets/icons/Electricscooter'
import Smarttoys from '../../../assets/icons/Smarttoys'
import Smartwatch from '../../../assets/icons/Smartwatch'
import Electriccar from '../../../assets/icons/Electriccar'
import Electricbike from '../../../assets/icons/Electricbike'


const Navigation = () => {
    const [ showMenu,setShowmenu ] = React.useState(false)

    const toggleMenu = () => setShowmenu(!showMenu)
    return (
        <nav className='navigation'>
            <Container>
                <ul className='navigation__list'>
                    <li className={showMenu === true ? "navigation__item main-menu active" : "navigation__item main-menu" } onClick={toggleMenu}>
                        <GiHamburgerMenu className="navigation__item--icon" />
                        Каталог товаров
                        <ul className={showMenu ? "navigation-submenu show" : 'navigation-submenu'}>
                            <li className="navigation-submenu__item">
                                <span className="navigation-submenu__item--icon">
                                    <Sugway />
                                </span>
                                <span className="navigation-submenu__item--text">
                                    Гироскутеры    
                                </span>
                            </li>
                            <li className="navigation-submenu__item">
                                <span className="navigation-submenu__item--icon">
                                    <Electrosamokat />
                                </span>
                                <span className="navigation-submenu__item--text">
                                    Электросамокаты   
                                </span>
                            </li>
                            <li className="navigation-submenu__item">
                                <span className="navigation-submenu__item--icon">
                                    <Monowheel />
                                </span>
                                <span className="navigation-submenu__item--text">
                                    Моноколеса    
                                </span>
                            </li>
                            <li className="navigation-submenu__item">
                                <span className="navigation-submenu__item--icon">
                                    <Electricscooter />
                                </span>
                                <span className="navigation-submenu__item--text">
                                   Электроскутеры 
                                </span>
                            </li>
                            <li className="navigation-submenu__item">
                                <span className="navigation-submenu__item--icon">
                                    <Accessories />
                                </span>
                                <span className="navigation-submenu__item--text">
                                    Аксессуары  
                                </span>
                            </li>
                            <li className="navigation-submenu__item">
                                <span className="navigation-submenu__item--icon">
                                    <Smarttoys />
                                </span>
                                <span className="navigation-submenu__item--text">
                                    Умные игрушки  
                                </span>
                            </li>
                            <li className="navigation-submenu__item">
                                <span className="navigation-submenu__item--icon">
                                    <Smartwatch />
                                </span>
                                <span className="navigation-submenu__item--text">
                                    Smart Watch  
                                </span>
                            </li>
                            <li className="navigation-submenu__item">
                                <span className="navigation-submenu__item--icon">
                                    <Electriccar />
                                </span>
                                <span className="navigation-submenu__item--text">
                                    Электромобили   
                                </span>
                            </li>
                            <li className="navigation-submenu__item">
                                <span className="navigation-submenu__item--icon">
                                    <Electricbike />
                                </span>
                                <span className="navigation-submenu__item--text">
                                    Электровелосипеды 
                                </span>
                            </li>
                        </ul>
                    </li>
                    <li className="navigation__item">
                        Акции
                    </li>
                    <li className="navigation__item">
                        О компании
                    </li>
                    <li className="navigation__item">
                    Контакты
                    </li>
                    <li className="navigation__item">
                        Сервис и гарантии
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navigation