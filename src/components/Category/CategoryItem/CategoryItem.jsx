import React from 'react'
import './_CategoryItem.scss'
import itemimg from './../../../assets/image18.png'
import { AiOutlineStar } from 'react-icons/ai'
import Comments from './../../../assets/icons/Comments'
import LikeIcon from '../../../assets/icons/LikeIcon'
import CompareIcon from '../../../assets/icons/CompareIcon'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsCartCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { addItemToCard,removeFromCart } from '../../../redux/cartSlice/cartActions'
import { useDispatch,useSelector } from 'react-redux'

const CategoryItem = ({ item }) => {
  const dispatch = useDispatch()
  const { cart: { items }} = useSelector(state => state)

  return (
    <li className='category-item'>
      <div className="">
      <div className="category-item__image">
        { item.new && (<span className="category-item__label label-new">
          Новинка
        </span>)}
        { item.hitOfSales && (<span className={item.new ? 'category-item__label label-hit' : 'category-item__label label-hit position-first'}>
          Хит продаж
        </span>)}
        <Link to={`/product/${item._id}`} className='category-item__link'>
          <img className='category-item__image--img' src={item.img[0]} alt="itemimage" />
        </Link>
      </div>

      <Link to={`/category/${item.category._id}`} className="category-item__itemCategory">{item.category.name}</Link>

      <Link to={`/product/${item._id}`} className="category-item__title">Гироскутер Smart BalanceГироскутер Smart BalanceГироскутер Smart Balance</Link>

      <div className="category-item__row">
        <span className="category-item__rating">
          {[...new Array(5)].map((item,index) => <AiOutlineStar key={index} />)}
        </span>

        <span className="category-item__comments">
          <Comments className='category-item__comments--icon'/>
          <span className='category-item__comments--count'>({item.comments.length})</span>
        </span>
      </div>
      </div>

      <div className="">
      <div className="category-item__price">
        <div className="category-item__priceContainer">
          {item.discount !== 0 ? (
            <>
              <span className="category-item__price__discountPrice">{item.price} ₴</span>
                <span className="category-item__price__oldPrice">{Math.ceil((item.price - ((item.price / 100) * item.discount)))} ₴</span>
                <span className="category-item__price__discount">
                  <span>{item.discount} %</span>
                  <span>— {Math.ceil((item.price / 100) * item.discount)} ₴</span>
              </span>
            </>
          ) : (
            <span className="category-item__price__oldPrice">{item.price} ₴</span>
          )}
        </div>

        <ul className="category-item__buttonsList">
          <li className="category-item__buttonsList--btn btn-wish added">
            <LikeIcon liked={false} />
          </li>
          <li className="category-item__buttonsList--btn btn-wish">
            <CompareIcon compared={true} />
          </li>
        </ul>
      </div>

        { items.find(itm => itm._id === item._id) === undefined ? 
          <button className='category-item__buyButton' onClick={() => dispatch(addItemToCard(item))}>
            Добавить в корзину
            <AiOutlineShoppingCart />
          </button>: (
          <button className='category-item__buyButton added--toCart' onClick={() => dispatch(removeFromCart(item.id))}>
            В корзине
            <BsCartCheck />
          </button>
        )}
      </div>

    </li>)
}

export default CategoryItem