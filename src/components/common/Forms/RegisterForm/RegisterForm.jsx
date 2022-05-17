import React from 'react'
import { AiOutlineLock,AiOutlineEyeInvisible,AiOutlineEye } from 'react-icons/ai'
import './_RegisterForm.scss'

const RegisterForm = ({ toLogin }) => {
  const [ showPassword,setShowPassword ] = React.useState(false)

  const toggleShowPassword = () => setShowPassword(!showPassword)

    return (
      <form className='form login-form'>
        <label className='form-field__label' htmlFor='login'>
            Логин
        </label>
        <input 
            type="text" 
            className='form-field__input' 
            id="login" 
            name="login" 
            placeholder='Ваш логин'/>

        <label className='form-field__label' htmlFor='email'>
            Эл. почта
        </label>
        <input 
            type="text" 
            className='form-field__input' 
            id="email" 
            name="email" 
            placeholder='Ваш Email'/>


        <label className='form-field__label' htmlFor='phone'>
            Моб. телефон
        </label>
        <input 
            type="text" 
            className='form-field__input' 
            id="phone" 
            name="phone" 
            placeholder='Мобильный телефон'/>

        <label className='form-field__label' htmlFor='password'>
            Придумайте пароль
        </label>
        <div className="form-field__password">
            <AiOutlineLock className='form-field__password--lockIcon' />
            <input 
                type={showPassword ? 'text' : 'password'} 
                className='form-field__input password-input' 
                id="password" 
                name="password" 
                placeholder='Пароль...'/>
            {!showPassword ? 
                <AiOutlineEyeInvisible className='form-field__password--eyeIcon' onClick={toggleShowPassword}/> : 
                <AiOutlineEye className='form-field__password--eyeIcon' onClick={toggleShowPassword}/>
            }
        </div>

        <button className="form-button__signup">
            Зарегестрирован
        </button>

        <span className='form-link__login' onClick={toLogin}>Я уже зарегестрирован</span>
      </form>
    )
}

export default RegisterForm