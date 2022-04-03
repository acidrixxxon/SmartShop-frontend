import React from 'react'
import Container from '../Container/Container'
import './_Navigation.scss'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navigation = () => {
    const [ showSubmenu,setShowSubmenu ] = React.useState(false)

    const toggleSubmenu = () => setShowSubmenu(!showSubmenu)
    return (
        <nav className='navigation'>
            <Container>
                <ul className='navigation__list'>
                    <li className={showSubmenu === true ? "navigation__item main-menu active" : "navigation__item main-menu" } onClick={toggleSubmenu}>
                        <GiHamburgerMenu className="navigation__item--icon" />
                        Каталог товаров
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