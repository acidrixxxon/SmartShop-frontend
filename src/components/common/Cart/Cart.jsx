import React from 'react'
import './_Cart.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Counter from '../Counter/Counter'

const Cart = () => {
  return (
    <>
        <button  class="shopping-cart__btn">
          <AiOutlineShoppingCart class="shopping-cart__icon" />
          <Counter count={25}/>
        </button>
    </>
  )
}

export default Cart