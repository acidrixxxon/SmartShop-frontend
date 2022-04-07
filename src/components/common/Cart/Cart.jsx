import React from 'react'
import './_Cart.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Counter from '../Counter/Counter'
import { useSelector } from 'react-redux'

const Cart = () => {
  const { cart: { itemsCount } } = useSelector(state => state)

  return (
    <>
        <button  className="shopping-cart__btn">
          <AiOutlineShoppingCart class="shopping-cart__icon" />
          <Counter count={itemsCount}/>
        </button>
    </>
  )
}

export default Cart