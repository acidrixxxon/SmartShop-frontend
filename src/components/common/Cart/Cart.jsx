import React from 'react'
import './_Cart.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Counter from '../Counter/Counter'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart: { itemsCount } } = useSelector(state => state)

  return (
    <>
        <Link to="/cart" className="shopping-cart__btn">
          <AiOutlineShoppingCart class="shopping-cart__icon" />
          {itemsCount > 0 && <Counter count={itemsCount}/>}
        </Link>
    </>
  )
}

export default Cart