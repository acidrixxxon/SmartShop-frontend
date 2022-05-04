import React from 'react'
import ObtainingMethod from './ObtainingMethod/ObtainingMethod'
import OrderItems from './OrderItems/OrderItems'
import PaymentMethod from './PaymentMethod/PaymentMethod'
import './_OrderSteps.scss'


const OrderSteps = () => {

    return (
        <div className='cart__orderSteps'>
            <OrderItems />
            <ObtainingMethod />
            <PaymentMethod />
        </div>
    )
}

export default OrderSteps