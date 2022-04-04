import React from 'react'
import './_CategoryItem.scss'
import itemimg from './../../../assets/image18.png'
import { AiOutlineStar } from 'react-icons/ai'
import Comments from './../../../assets/icons/Comments'
import LikeIcon from '../../../assets/icons/LikeIcon'
import CompareIcon from '../../../assets/icons/CompareIcon'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const CategoryItem = () => {
  return (
    <li className='category-item'>
      <div className="category-item__image">
        <span className="category-item__label label-new">
          Новинка
        </span>
        <span className="category-item__label label-hit">
          Хит продаж
        </span>
        <img className='category-item__image--img' src={itemimg} alt="itemimage" />
      </div>

      <span className="category-item__itemCategory">Сигвеи</span>

      <h4 className="category-item__title">Гироскутер Smart BalanceГироскутер Smart BalanceГироскутер Smart Balance</h4>

      <div className="category-item__row">
        <span className="category-item__rating">
          {[...new Array(5)].map((item,index) => <AiOutlineStar key={index} />)}
        </span>

        <span className="category-item__comments">
          <Comments className='category-item__comments--icon'/>
          <span className='category-item__comments--count'>(17)</span>
        </span>
      </div>

      <div className="category-item__price">
        <div className="category-item__priceContainer">
          <span className="category-item__price__discountPrice">5400 ₽</span>
          <span className="category-item__price__oldPrice">4990 ₽</span>
          <span className="category-item__price__discount">
            <span>20%</span>
            <span>— 1 000 ₽</span>
          </span>
        </div>

        <ul className="category-item__buttonsList">
          <li className="category-item__buttonsList--btn btn-wish">
            <LikeIcon liked={false} />
          </li>
          <li className="category-item__buttonsList--btn btn-wish">
            <CompareIcon compared={true} />
          </li>
        </ul>
      </div>

        <button className='category-item__buyButton'>
          Добавить в корзину
          <AiOutlineShoppingCart />
        </button>
    </li>
  )
}

export default CategoryItem