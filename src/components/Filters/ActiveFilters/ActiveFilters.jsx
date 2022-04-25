import React from 'react'
import './_ActiveFilters.scss'
import { AiOutlineClose } from 'react-icons/ai'

const ActiveFilters = () => {
  return (
    <div className='activeFilters'>
      <ul className="activeFilters-list">
        <li className="activeFilters-item">
          <span className="activeFilters-item__text">
            Подвеска есть
          </span>
          <span className="activeFilters-item__removeIcon">
            <AiOutlineClose />
          </span>
        </li>

        <li className="activeFilters-item">
          <span className="activeFilters-item__text">
            Цена: от 3 600 ₽ до 17 000 ₽
          </span>
          <span className="activeFilters-item__removeIcon">
            <AiOutlineClose />
          </span>
        </li>
      </ul>
    </div>
  )
}

export default ActiveFilters