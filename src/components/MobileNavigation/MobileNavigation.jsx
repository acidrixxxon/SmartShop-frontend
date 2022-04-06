import React from 'react'
import './_MobileNavigation.scss'
import { AiOutlineHome,AiOutlineUnorderedList,AiOutlineShoppingCart,AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import CatalogSubmenu from './CatalogSubmenu/CatalogSubmenu'
import ReactPortal from './../common/ReactPortal/ReactPortal'

const MobileNavigation = () => {
    const [ catalogVisibility,setCatalogVisibility ] = React.useState(false)

    const openCatalog = () => setCatalogVisibility(true)
    const closeCatalog = () => setCatalogVisibility(false)

    return (
        <nav className="mobileNav">
            <ul className="mobileNav-list">
                <li className="mobileNav-item active">
                    <AiOutlineHome className='mobileNav-item__icon'/>
                    <span className="mobileNav-item__text">
                        Главная
                    </span>
                </li>
                <li className={catalogVisibility ? 'mobileNav-item active' : "mobileNav-item"} onClick={openCatalog}>
                    <AiOutlineUnorderedList className='mobileNav-item__icon'/>
                    <span className="mobileNav-item__text">
                        Каталог
                    </span>
                    <ReactPortal wrapperId='root'>
                        <CatalogSubmenu isOpen={catalogVisibility} closeCatalog={closeCatalog} />
                    </ReactPortal>
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