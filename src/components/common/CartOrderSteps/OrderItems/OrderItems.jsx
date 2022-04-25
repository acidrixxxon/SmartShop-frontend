import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { goToNextStep } from '../../../../redux/cartSlice/cartActions'
import { cartActiveStep } from '../../../../utils/constants'
import OrderItem from './OrderItem/OrderItem'
import './_OrderItems.scss'

const OrderItems = () => {
    const [ isActive,setActive ] = React.useState(true)
    const { cart: { items,activeStep }} = useSelector(state => state)

    const dispatch = useDispatch()

    return (
        <>
            {activeStep === cartActiveStep.ORDER_ITEMS ? 
                <>
                    <div className='cart__orderItems'>
                        <h4 className='cart__orderItems-title step-title'>Ваш заказ</h4>

                        <ul className="cart__orderItems-list">
                            {items.map(item => <OrderItem item={item} />)}
                        </ul>
                    </div>

                    <button className='cart__nextStepButton' onClick={() => dispatch(goToNextStep(cartActiveStep.OBTAINING_METHOD))}>Далее</button>
                </>
                :
                <div className='cart__orderItems'>
                    <h4 className='cart__orderItems-title step-title'>Ваш заказ</h4>

                    <div className="cart__orderItems-row">
                        <ul className="cart__orderItems-listShort">
                            {items.map(item => {
                                return (
                                    <li className='cart__orderItems-item'>
                                        <img src={item.img[0]} alt="itemimage" />
                                    </li>
                                )
                            })}
                        </ul>

                        <button className='cart__changeOrder-btn' onClick={() => dispatch(goToNextStep(cartActiveStep.ORDER_ITEMS))}>Изменить</button>
                    </div>
                </div>
            }
        </>
    )
}

export default OrderItems