import React from 'react'
import { Auth } from '../../../utils/constants'
import './_AuthModal.scss' 
import { AiOutlineClose } from 'react-icons/ai'
import LoginForm from '../Forms/LoginForm/LoginForm'
import RegisterForm from '../Forms/RegisterForm/RegisterForm'
import { motion } from 'framer-motion'

const AuthModal = ({ closeModal }) => {
    const [ status,setStatus ] = React.useState(Auth.LOGIN)

    const toRegister = () => setStatus(Auth.REGISTER)
    const toLogin = () => setStatus(Auth.LOGIN)

    const variants = {
        hidden: {
            x: "-100vw",
            opacity: 0
        },
        visible: {
            x: "0",
            opacity: 1,
        },
        exit: {
            x: "100vw",
            opacity: 0
        }
    }

    return (
        <motion.div variants={variants} initial='hidden' animate='visible' exit='exit' className='modal__content' onClick={(e) => e.stopPropagation()}>
            <div className='modal__head'>
                <h4 className='modal__head--title'>
                    {status === Auth.LOGIN ? 'Вход' : 'Регистрация'}
                </h4>

                <AiOutlineClose className='modal__head--icon' onClick={closeModal}/>
            </div>

            <div className='modal__body'>
                { status === Auth.LOGIN ? (<LoginForm toRegister={toRegister} />) : <RegisterForm toLogin={toLogin} />}
            </div>
        </motion.div>
    )
}

export default AuthModal