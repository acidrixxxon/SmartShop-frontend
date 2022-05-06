import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { goToNextStep } from '../../../../redux/cartSlice/cartActions'
import { cartActiveStep } from '../../../../utils/constants'
import ChangeBtn from '../../Buttons/ChangeBtn/ChangeBtn'
import NextStepBtn from '../../Buttons/NextStepBtn/NextStepBtn'
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
                    <div className='cart__orderItems step-container'>
                        <h4 className='cart__orderItems-title step-title'>Ваш заказ</h4>

                        <ul className="cart__orderItems-list">
                            {items.map(item => <OrderItem item={item} />)}
                        </ul>
                    </div>

                    <NextStepBtn onClick={() => dispatch(goToNextStep(cartActiveStep.OBTAINING_METHOD))} />
                </>
                :
                <div className='cart__orderItems step-container'>
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

                        <ChangeBtn onClick={() => dispatch(goToNextStep(cartActiveStep.ORDER_ITEMS))} />
                    </div>
                </div>
            }
        </>
    )
}

export default OrderItems