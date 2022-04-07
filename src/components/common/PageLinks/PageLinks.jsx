import React from 'react'
import { BiRightArrow } from 'react-icons/bi'
import './_PageLinks.scss'

const PageLinks = ({ category,itemname}) => {
  return (
    <div className="page-links">
        <span className="page-links__link main-link">
            Главная  
            <BiRightArrow className='page-links__arrow'/>
        </span>
        <span className="page-links__link main-link">
            {category}
            <BiRightArrow className='page-links__arrow'/>
        </span>
        {itemname !== '' ? <span className="page-links__link item-link">
            {itemname}
        </span> : null}
    </div>
  )
}

export default PageLinks