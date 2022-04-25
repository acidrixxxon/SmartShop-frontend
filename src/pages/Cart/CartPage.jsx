import React from 'react'
import OrderSteps from '../../components/common/CartOrderSteps/OrderSteps'
import TotalPrice from '../../components/common/CartTotalPrice/TotalPrice'
import Container from '../../components/common/Container/Container'
import './_CartPage.scss'
import { useSelector } from 'react-redux'

const CartPage = () => {

  const { cart: { items }} = useSelector(state => state)

  if ( items.length === 0) {
      return (
        <Container>
          <h3 className="cart__noItems">Ваша корзина пуста!</h3>
        </Container>
      )
  }
  return (
    <div className='cart' id='cart'>
        <Container>
            <h4 className="cart__title">Оформление заказа</h4>
            <div className="cart__content">
                <OrderSteps />
                <TotalPrice />
            </div>
        </Container>
    </div>
  )
}

export default CartPage