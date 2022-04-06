import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './_CatalogSubmenu.scss'
import Sugway from './../../../assets/icons/Sugway'
import Electrosamokat from './../../../assets/icons/Electrosamokat'
import Accessories from './../../../assets/icons/Accessories'
import Monowheel from './../../../assets/icons/Monowheel'
import Electricscooter from './../../../assets/icons/Electricscooter'
import Smarttoys from './../../../assets/icons/Smarttoys'
import Smartwatch from './../../../assets/icons/Smartwatch'
import Electriccar from './../../../assets/icons/Electriccar'
import Electricbike from './../../../assets/icons/Electricbike'

const CatalogSubmenu = ({ isOpen,closeCatalog }) => {

  return (
    <div className={isOpen ? 'catalogSubmenu-overlay active' :'catalogSubmenu-overlay'}>
        <div className="catalogSubmenu-content" onClick={(e) => e.stopPropagation()}>
            <div className="catalogSubmenu-head">
                <h4 className="catalogSubmenu-head__title">Каталог</h4>
                <AiOutlineClose className='catalogSubmenu-head__closeIcon' onClick={closeCatalog}/>
            </div>

            <div className="catalogSubmenu-body">
                <ul className="catalogSubmenu-body__list">
                    <li className="catalogSubmenu-body__list__item">
                        <span className="catalogSubmenu-body__list__item--icon">
                            <Sugway />
                        </span>

                        <span className="catalogSubmenu-body__list__item--text">
                            Гироскутеры
                        </span>
                    </li>

                    <li className="catalogSubmenu-body__list__item">
                        <span className="catalogSubmenu-body__list__item--icon">
                            <Sugway />
                        </span>

                        <span className="catalogSubmenu-body__list__item--text">
                            Электросамокаты
                        </span>
                    </li>

                    <li className="catalogSubmenu-body__list__item">
                        <span className="catalogSubmenu-body__list__item--icon">
                            <Sugway />
                        </span>

                        <span className="catalogSubmenu-body__list__item--text">
                            Гироскутеры
                        </span>
                    </li>

                    <li className="catalogSubmenu-body__list__item">
                        <span className="catalogSubmenu-body__list__item--icon">
                            <Sugway />
                        </span>

                        <span className="catalogSubmenu-body__list__item--text">
                            Гироскутеры
                        </span>
                    </li>

                    <li className="catalogSubmenu-body__list__item">
                        <span className="catalogSubmenu-body__list__item--icon">
                            <Sugway />
                        </span>

                        <span className="catalogSubmenu-body__list__item--text">
                            Гироскутеры
                        </span>
                    </li>

                    <li className="catalogSubmenu-body__list__item">
                        <span className="catalogSubmenu-body__list__item--icon">
                            <Sugway />
                        </span>

                        <span className="catalogSubmenu-body__list__item--text">
                            Гироскутеры
                        </span>
                    </li>

                    <li className="catalogSubmenu-body__list__item">
                        <span className="catalogSubmenu-body__list__item--icon">
                            <Sugway />
                        </span>

                        <span className="catalogSubmenu-body__list__item--text">
                            Гироскутеры
                        </span>
                    </li>

                    <li className="catalogSubmenu-body__list__item">
                        <span className="catalogSubmenu-body__list__item--icon">
                            <Sugway />
                        </span>

                        <span className="catalogSubmenu-body__list__item--text">
                            Гироскутеры
                        </span>
                    </li>

                    <li className="catalogSubmenu-body__list__item">
                        <span className="catalogSubmenu-body__list__item--icon">
                            <Sugway />
                        </span>

                        <span className="catalogSubmenu-body__list__item--text">
                            Гироскутеры
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CatalogSubmenu