import React from 'react'
import './_ClientInfo.scss'
import { useDispatch, useSelector } from 'react-redux'
import { cartActiveStep } from '../../../../utils/constants'
import NextStepBtn from '../../Buttons/NextStepBtn/NextStepBtn'
import ChangeBtn from '../../Buttons/ChangeBtn/ChangeBtn'
import { goToNextStep } from '../../../../redux/cartSlice/cartActions'

const ClientInfo = () => {
    const [ finished,setFinished ] = React.useState(false)
    const [ clientData,setClientData ] = React.useState({
        firstName: '',
        secondName: '',
        phone: '',
        email: '',
        notcallback: false
    })

    const dispatch = useDispatch()
    const { cart: { activeStep }} = useSelector(state => state)

    const fieldsHandler = (e) => {
        setClientData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const nextStepHandler = () => {
        setFinished(true)
        dispatch(goToNextStep())
        dispatch(setClientData(clientData))
    }

    const changeHandler = () => {
        setFinished(false)
        dispatch(goToNextStep(cartActiveStep.CLIENT_INFO))
    }
    return (
        <>
            <div className='clientInfo step-container'>
                { activeStep === cartActiveStep.CLIENT_INFO ? (
                    <>
                            <h4 className="clientInfo__title step-title">Получатель</h4>

                            <div className="clientInfo__form">
                                <div className="row">
                                    <div className="clientInfo__field">
                                        <span className="clientInfo__field-label">
                                            Имя
                                        </span>
                                        <input 
                                            onChange={fieldsHandler}
                                            type="text" 
                                            name="firstName" 
                                            value={clientData.firstName} 
                                            className="clientInfo__field-input" 
                                            placeholder='Например, Вадим'/>
                                    </div>

                                    <div className="clientInfo__field">
                                        <span className="clientInfo__field-label">
                                            Фамилия
                                        </span>
                                        <input 
                                            onChange={fieldsHandler}
                                            type="text" 
                                            name="secondName" 
                                            value={clientData.secondName} 
                                            className="clientInfo__field-input" 
                                            placeholder='Например, Иванов'/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="clientInfo__field">
                                        <span className="clientInfo__field-label">
                                            Номер телефона
                                        </span>
                                        <input 
                                            onChange={fieldsHandler}
                                            type="text" 
                                            name="phone"
                                            value={clientData.phone}
                                            className="clientInfo__field-input" 
                                            placeholder='(0__)-___-__-__'/>
                                    </div>

                                    <div className="clientInfo__field">
                                        <span className="clientInfo__field-label">
                                            Эл. почта
                                        </span>
                                        <input 
                                            onChange={fieldsHandler}
                                            type="text" 
                                            name="email"
                                            value={clientData.email}
                                            className="clientInfo__field-input" 
                                            placeholder='Например, alexmalahoff5@gmail.com'/>
                                    </div>
                                </div>

                                <div className="callback">
                                    <input 
                                        type="checkbox" 
                                        onChange={() => setClientData(state => ({...state,notcallback: !state.notcallback}))} 
                                        value={clientData.notcallback} 
                                        name="notcallback" />
                                    <span>Не перезванивать мне для подтверждения заказа</span>
                                </div>
                            </div>
                    </>
                ) : (
                    !finished && <h4 className="clientInfo__title not-active step-title">Получатель</h4>
                )}

                {finished && (
                    <>
                        <h4 className="clientInfo__title step-title">Получатель</h4>

                        <div className="clientInfo__row">
                            <div className="clientInfo__data">
                                <span className="clientInfo__data-name">{clientData.firstName} {clientData.secondName}</span>
                                <span className="clientInfo__data-phone">{clientData.phone}</span>
                                <span className="clientInfo__data-email">{clientData.email}</span>
                            </div>
                            <ChangeBtn onClick={changeHandler}/>
                        </div>
                    </>
                )}
            </div>

            {!finished && activeStep === cartActiveStep.CLIENT_INFO ? <NextStepBtn onClick={nextStepHandler}/> : ''}
        </>
    )
}

export default ClientInfo