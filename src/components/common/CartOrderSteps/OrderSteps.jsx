import React from 'react'
import ObtainingMethod from './ObtainingMethod/ObtainingMethod'
import OrderItems from './OrderItems/OrderItems'
import './_OrderSteps.scss'


const OrderSteps = () => {

    return (
        <div className='cart__orderSteps'>
            <OrderItems />
            <ObtainingMethod />
        </div>
    )
}

export default OrderSteps