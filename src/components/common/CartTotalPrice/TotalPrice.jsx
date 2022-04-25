import React from 'react'
import './_TotalPrice.scss'
import { useSelector } from 'react-redux'

const TotalPrice = () => {
  const { cart: { items,itemsCount }} = useSelector(state => state)

  const totalPrice = items.map(item => {
    if (item.discount > 0) {
      if (item.qty > 1) {
        return item.qty * Math.ceil((item.price - (item.price / 100) * item.discount))
      } else {
        return Math.ceil(item.price - ((item.price / 100) * item.discount))
      }
    } else {
      if (item.count > 1) {
        return item.qty * item.price
      } else {
        return item.price
      }
    }
  }).reduce((prev,next) => prev + next,0)




  return (
    <>
      <div className='cart__totalPrice'>
        <h4 className="cart__totalPrice-title">Итого</h4>

        <div className="cart__totalPrice__row">
          <span className="row__left">
            {itemsCount} товара на сумму
          </span>
          <div className="row__right">
            {totalPrice} ₴
          </div>
        </div>

        <div className="cart__totalPrice__row">
          <span className="row__left">
            Стоимость доставки
          </span>

          <div className="row__right">
            бесплатно
          </div>
        </div>

        <div className="cart__totalPrice__row totals">
          <span className="row__left">
            К оплате
          </span>

          <span className="row__right">
            {totalPrice} ₴  
          </span>
        </div>

        <button className="cart__submit">
          Оформить заказ
        </button>
      </div>
    </>
  )
}

export default TotalPrice