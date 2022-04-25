import React from 'react'
import './_OrderItem.scss'
import { AiOutlineMinus,AiOutlinePlus } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { addQty, minQty, removeFromCart } from '../../../../../redux/cartSlice/cartActions'
import { useDispatch } from 'react-redux'

const OrderItem = ({ item }) => {
    const dispatch = useDispatch()
    
    const addQtyHandler = () => dispatch(addQty(item._id))
    const minusQtyHandler = () => dispatch(minQty(item._id))

    return (
        <li className="cart__orderItem">
            <div className="cart__orderItem__image">
                <img src={item.img[0]} alt="itemimage" />
            </div>

            <h4 className="cart__orderItem__title">
                {item.title}
            </h4>

            <div className="cart__orderItem__qty">
                <AiOutlineMinus className={item.qty === 1 ? 'disabled' : ''} onClick={minusQtyHandler} />
                <input type="text" value={item.qty} />
                <AiOutlinePlus onClick={addQtyHandler}/>
            </div>

            <div className="cart__orderItem__price">
                {item.discount > 0 ? (
                    <>
                        <span className='cart__orderItem__oldPrice'>{item.price} ₴</span>
                        <span className="cart__orderItem__actualPrice">{Math.ceil(item.price - ((item.price / 100 ) * item.discount))} ₴</span>
                    </>
                ) : (
                    <span className='cart__orderItem__actualPrice'>{item.price} ₴</span>
                )}
            </div>

            <button className='cart__orderItem__remove' onClick={() => dispatch(removeFromCart(item._id))}>
                <BsTrash />
            </button>
        </li>
    )
}

export default OrderItem