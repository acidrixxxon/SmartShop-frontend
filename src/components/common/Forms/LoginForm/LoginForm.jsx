import React from 'react'
import './_LoginForm.scss'
import { AiOutlineLock,AiOutlineEyeInvisible,AiOutlineEye } from 'react-icons/ai'

const LoginForm = () => {
    const [ showPassword,setShowPassword ] = React.useState(false)

    const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
        <form className='form login-form'>
            <label className='form-field__label' htmlFor='email'>
                Эл. почта или телефон
            </label>
            <input 
                type="text" 
                className='form-field__input' 
                id="email" 
                name="email" 
                placeholder='Ваш Email...'/>

            <label className='form-field__label' htmlFor='password'>
                Пароль
            </label>
            <div className="form-field__password">
                <AiOutlineLock className='form-field__password--lockIcon' />
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    className='form-field__input password-input' 
                    id="password" 
                    name="password" />
                {!showPassword ? 
                    <AiOutlineEyeInvisible className='form-field__password--eyeIcon' onClick={toggleShowPassword}/> : 
                    <AiOutlineEye className='form-field__password--eyeIcon' onClick={toggleShowPassword}/>
                }
            </div>

            <span className='form-link__forgotPassword'>
                Забыли пароль?
            </span>

            <span className='form-field__checkbox'>
                <input type="checkbox" className='form-field__checkbox--input' checked/>
                Запомнить меня
            </span>
        </form>
    )
}

export default LoginForm