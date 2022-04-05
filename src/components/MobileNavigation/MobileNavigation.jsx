import React from 'react'
import './_MobileNavigation.scss'
import { AiOutlineHome,AiOutlineUnorderedList,AiOutlineShoppingCart,AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

const MobileNavigation = () => {
  return (
    <nav className="mobileNav">
        <ul className="mobileNav-list">
            <li className="mobileNav-item active">
                <AiOutlineHome className='mobileNav-item__icon'/>
                <span className="mobileNav-item__text">
                    Главная
                </span>
            </li>
            <li className="mobileNav-item">
                <AiOutlineUnorderedList className='mobileNav-item__icon'/>
                <span className="mobileNav-item__text">
                    Каталог
                </span>
            </li>
            <li className="mobileNav-item">
                <AiOutlineShoppingCart className='mobileNav-item__icon'/>
                <span className="mobileNav-item__text">
                    Корзина
                </span>
            </li>
            <li className="mobileNav-item">
                <AiOutlineSearch className='mobileNav-item__icon'/>
                <span className="mobileNav-item__text">
                    Поиск
                </span>
            </li>
            <li className="mobileNav-item">
                <BsThreeDots className='mobileNav-item__icon'/>
                <span className="mobileNav-item__text">
                    Еще
                </span>
            </li>
        </ul>
    </nav>
  )
}

export default MobileNavigation