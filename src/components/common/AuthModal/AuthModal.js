import React from 'react'
import { Auth } from '../../../utils/constants'
import './_AuthModal.scss' 
import { AiOutlineClose } from 'react-icons/ai'
import LoginForm from '../Forms/LoginForm/LoginForm'
import RegisterForm from '../Forms/RegisterForm/RegisterForm'

const AuthModal = ({ closeModal }) => {
    const [ status,setStatus ] = React.useState(Auth.LOGIN)

    const toRegister = () => setStatus(Auth.REGISTER)
    const toLogin = () => setStatus(Auth.LOGIN)
    return (
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
            <div className='modal__head'>
                <h4 className='modal__head--title'>
                    {status === Auth.LOGIN ? 'Вход' : 'Регистрация'}
                </h4>

                <AiOutlineClose className='modal__head--icon' onClick={closeModal}/>
            </div>

            <div className='modal__body'>
                { status === Auth.LOGIN ? (<LoginForm toRegister={toRegister} />) : <RegisterForm toLogin={toLogin} />}
            </div>
        </div>
    )
}

export default AuthModal