import React from 'react'
import './_TotalPrice.scss'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useFinishedCart from '../../../utils/FinishedCartHook'
import { toast } from 'react-toastify'
import { openAuthModal } from './../../../redux/viewSlice/viewActions'
import { API_URL} from './../../../utils/settings'
import axios from 'axios'
import { finishOrder } from '../../../redux/cartSlice/cartSlice'

const TotalPrice = () => {
  const [ disabled ] = useFinishedCart()
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { cart: { items,itemsCount,data },user: { user,accessToken } } = useSelector(state => state)

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


  const createOrderHandler = async () => {
    
    if (!user || !accessToken) {
      dispatch(openAuthModal())
      return toast.error('Авторизируйтесь!')
    }

    const totalOrder = {
      items,
      itemsCount,
      totalPrice,
      obtaining: data.obtaining,
      payment: data.payment,
      client: data.client
    }

    const res = await axios.post(`${API_URL}/order/create`,totalOrder)

    if (res.status === 200 && res.data.success === true) {
      navigate(`/order/${res.data.order._id}`)
      dispatch(finishOrder())
    }
  }

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

        <button className={disabled ? "cart__submit btn--disabled" : "cart__submit"} disabled={disabled} onClick={createOrderHandler}>
          Оформить заказ
        </button>
      </div>
    </>
  )
}

export default TotalPrice