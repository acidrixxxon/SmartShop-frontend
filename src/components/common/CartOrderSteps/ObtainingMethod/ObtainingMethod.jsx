import React from 'react'
import { cartActiveStep, obtainingMethods } from '../../../../utils/constants'
import './_ObtainingMethod.scss'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useSelector } from 'react-redux'

const ObtainingMethod = () => {
    const [ method,setMethod ] = React.useState(obtainingMethods.DELIVERY)
    const [ cityDropdown,setCityDropdown ] = React.useState(false)
    const [ city,setCity ] = React.useState('Киев')

    const { cart: { activeStep }} = useSelector(state => state)

    return (
        <>
            { activeStep === cartActiveStep.OBTAINING_METHOD ?
                <div className='obtMethod'>
                    <h4 className="objMethod-title step-title">Метод получения</h4>

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
                                        {city} <IoMdArrowDropdown />
                                    </span>

                                    {cityDropdown &&
                                        <ul className="obtMethod-field__list">
                                            <li className="obtMethod-field__list-item" onClick={() => setCity('Киев')}>Киев</li>
                                            <li className="obtMethod-field__list-item" onClick={() => setCity('Харьков')}>Харьков</li>
                                            <li className="obtMethod-field__list-item" onClick={() => setCity('Днепр')}>Днепр</li>
                                        </ul>
                                    }
                                </div>

                                <div className="obtMethod-field">
                                    <span className="obtMethod-field__label">
                                        Улица/Дом
                                    </span>
                                    <input type="text" className='obtMethod-field__input'/>
                                </div>
                            </div>

                            <div className="obtMethod-field comments">
                                <span className="obtMethod-field__label">
                                    Комментарии для курьера
                                </span>
                                <input type="text" className="obtMethod-field__input" />
                            </div>
                        </div>
                    }

                    { method === obtainingMethods.PICKUP &&
                        <ul className="obtMethod-shops">
                            <li className="obtMethod-shopsItem">
                                <input type="radio" checked/>
                                <div className="obtMethod-shopsItem__details">
                                    <span className="obtMethod-shopsItem__address">
                                        г. Киев, ул. Соломенская, 7а
                                    </span>
                                    <span className="obtMethod-shopsItem__shedule">
                                        ПН-ВС 09:00 — 22:00
                                    </span>
                                </div>
                            </li>

                            <li className="obtMethod-shopsItem">
                                <input type="radio" />
                                <div className="obtMethod-shopsItem__details">
                                    <span className="obtMethod-shopsItem__address">
                                        г. Днепр, проспект Науки, 50
                                    </span>
                                    <span className="obtMethod-shopsItem__shedule">
                                        ПН-ВС 09:00 — 22:00
                                    </span>
                                </div>
                            </li>
                        </ul>
                    }
                </div> 
                :
                <div className='obtMethod-notActive'>
                    <h4 className="obtMethod-title">Метод доставки</h4>
                </div>
            }
        </>
    )
}

export default ObtainingMethod