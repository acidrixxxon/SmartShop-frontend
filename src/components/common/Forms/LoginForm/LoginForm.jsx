import React from 'react'
import './_LoginForm.scss'
import { AiOutlineLock,AiOutlineEyeInvisible,AiOutlineEye } from 'react-icons/ai'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { login } from './../../../../redux/userSlice/userActions'

const LoginForm = ({ toRegister }) => {
    const [ showPassword,setShowPassword ] = React.useState(false)

    const toggleShowPassword = () => setShowPassword(!showPassword)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Не корректный email').required('Введите email'),
            password: Yup.string().min(2,'Пароль должен быть больше 2 символов').required('Введите пароль')
        }),
        onSubmit: (values) => {
            dispatch(login(values))
        }
    })

    return (
        <form className='form login-form' onSubmit={formik.handleSubmit}>
            {formik.errors.email ? <span className='form-error'>{formik.errors.email}</span> : null}
            <label className='form-field__label' htmlFor='email'>
                Эл. почта 
            </label>
            <input 
                type="text" 
                className='form-field__input' 
                id="email" 
                name="email" 
                placeholder='Ваш Email...'
                value={formik.values.email}
                onChange={formik.handleChange}/>

            {formik.errors.password ? <span className='form-error'>{formik.errors.password}</span> : null}    
            <label className='form-field__label' htmlFor='password'>
                Пароль
            </label>
            <div className="form-field__password">
                <AiOutlineLock className='form-field__password--lockIcon' />
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    className='form-field__input password-input' 
                    id="password" 
                    name="password" 
                    placeholder='Введите пароль'
                    value={formik.values.password}
                    onChange={formik.handleChange}/>
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

            <button className="form-button__signin" type='submit'>
                Войти
            </button>

            <span className='form-link__register' onClick={toRegister}>Зарегестрироваться</span>
        </form>
    )
}

export default LoginForm