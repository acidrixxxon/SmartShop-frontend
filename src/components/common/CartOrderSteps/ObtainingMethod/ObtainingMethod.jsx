import React from 'react'
import { cartActiveStep, obtainingMethods } from '../../../../utils/constants'
import './_ObtainingMethod.scss'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { goToNextStep, setObtainingData } from '../../../../redux/cartSlice/cartActions'
import NextStepBtn from './../../../../components/common/Buttons/NextStepBtn/NextStepBtn'
import ChangeBtn from './../../../../components/common/Buttons/ChangeBtn/ChangeBtn'
import { shops } from '../../../../utils/data'
import { toast } from 'react-toastify'

const ObtainingMethod = () => {
    const [ method,setMethod ] = React.useState(obtainingMethods.DELIVERY)
    const [ cityDropdown,setCityDropdown ] = React.useState(false)
    const [ finished,setFinished ] = React.useState(false)
    const [ deliveryInfo,setDeliveryInfo ] = React.useState({
        address: '',
        comments: '',
        city: 'Киев'
    })
    const [ shop,setShop ] = React.useState(0)

    const { cart: { activeStep }} = useSelector(state => state)

    const dispatch = useDispatch()

    const nextStepHandler = () => {
        if (method === obtainingMethods.DELIVERY && deliveryInfo.address === '') {
            return toast.error('Вы не указали адрес')
        } 

        setFinished(true)
        dispatch(goToNextStep(cartActiveStep.PAYMENT_VARIANT))
        if ( method === obtainingMethods.DELIVERY) {
            dispatch(setObtainingData({
                ...deliveryInfo,
                type: 'delivery'
            }))
        } else {
            dispatch(setObtainingData({
                ...shops[shop],
                type: 'pickup'
            }))
        }
    }

    const changeHandler = () => {
        setFinished(false)
        dispatch(goToNextStep(cartActiveStep.OBTAINING_METHOD))
    }

    const fieldsHandler = (e) => {
        setDeliveryInfo(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
            { activeStep === cartActiveStep.OBTAINING_METHOD ?
                <>
                    <div className='obtMethod'>
                    <h4 className="obtMethod-title step-title">Метод получения</h4>

                    <div className="obtMethod-type">
                        <button 
                            onClick={() => setMethod(obtainingMethods.DELIVERY)}
                            className={ method === obtainingMethods.DELIVERY ? 'obtMethod-type__variant active' : 'obtMethod-type__variant'}>
                                <input type='radio' checked={method === obtainingMethods.DELIVERY} />
                                Доставка
                        </button>

                        <button 
                            onClick={() => setMethod(obtainingMethods.PICKUP)}
                            className={ method === obtainingMethods.PICKUP ? 'obtMethod-type__variant active' :'obtMethod-type__variant'}>
                                <input type='radio' checked={method === obtainingMethods.PICKUP} />
                                Самовывоз
                        </button>
                    </div>

                    { method === obtainingMethods.DELIVERY &&
                        <div className="obtMethod-details">
                            <div className="row">
                                <div className="obtMethod-field city" onClick={() => setCityDropdown(!cityDropdown)}>
                                    <span className="obtMethod-field__label">
                                        Ваш город
                                    </span>
                                    <span className="obtMethod-field__selected">
                                        {deliveryInfo.city} <IoMdArrowDropdown />
                                    </span>

                                    {cityDropdown &&
                                        <ul className="obtMethod-field__list">
                                            <li className="obtMethod-field__list-item" onClick={() => setDeliveryInfo(state => ({...state,city: 'Киев'}))}>Киев</li>
                                            <li className="obtMethod-field__list-item" onClick={() => setDeliveryInfo(state => ({...state,city: 'Харьков'}))}>Харьков</li>
                                            <li className="obtMethod-field__list-item" onClick={() => setDeliveryInfo(state => ({...state,city: 'Днепр'}))}>Днепр</li>
                                        </ul>
                                    }
                                </div>

                                <div className="obtMethod-field">
                                    <span className="obtMethod-field__label">
                                        Улица/Дом
                                    </span>
                                    <input type="text" className='obtMethod-field__input' onChange={fieldsHandler} name='address'  value={deliveryInfo.address} />
                                </div>
                            </div>

                            <div className="obtMethod-field comments">
                                <span className="obtMethod-field__label">
                                    Комментарии для курьера
                                </span>
                                <input type="text" className="obtMethod-field__input" onChange={fieldsHandler} name='comments' value={deliveryInfo.comments} />
                            </div>
                        </div>
                    }

                    { method === obtainingMethods.PICKUP &&
                        <ul className="obtMethod-shops">
                            {shops.map(item => {
                                return (
                                    <li className="obtMethod-shopsItem"> 
                                        <input type="radio" checked={shop === item.id} onClick={() => setShop(item.id)} />
                                        <div className="obtMethod-shopsItem__details">
                                            <span className="obtMethod-shopsItem__address">
                                                {item.address}
                                            </span>
                                            <span className="obtMethod-shopsItem__shedule">
                                                {item.time}
                                            </span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                    </div> 
                    
                    <NextStepBtn onClick={nextStepHandler} />
                </>
                :
                ( finished ? 
                    (
                        <div className="obtMethod">
                            <h4 className="obtMethod-title step-title">
                                Cпособ получения
                            </h4>

                            {
                                method === obtainingMethods.PICKUP ? (
                                    <div className="row">
                                        <div className="obtMethod-details">
                                            <span className="obtMethod-method">Самовывоз из:</span>

                                            <div className="obtMethod-shopDetails">
                                                <span className="obtMethod-shopDetails__address">
                                                    {shops[shop].address}
                                                </span>
                                                <span className="obtMethod-shopDetails__shedule">
                                                    {shops[shop].time}
                                                </span>
                                            </div>
                                        </div>

                                        <ChangeBtn onClick={changeHandler} />
                                    </div>
                                ) : (
                                    <div className="row">
                                        <div className="obtMethod-details">
                                            <span className='obtMethod-method'>Доставка:</span>
                                            <div className="obtMethod-shopDetails">
                                                <span className="obtMethod-shopDetails__address">
                                                    {deliveryInfo.city}, {deliveryInfo.address}
                                                </span>
                                                <span className="obtMethod-shopDetails__shedule">
                                                    {deliveryInfo.comments}
                                                </span> 
                                            </div>
                                        </div>

                                        <ChangeBtn onClick={changeHandler}/>
                                    </div>
                                )
                            }
                        </div>
                    )
                    :
                    (<div className='obtMethod-notActive'>
                        <h4 className="obtMethod-title step-title">Метод доставки</h4>
                    </div>)
                 )
            }
        </>
    )
}

export default ObtainingMethod