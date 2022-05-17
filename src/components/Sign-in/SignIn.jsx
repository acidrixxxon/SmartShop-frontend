import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import AuthModal from '../common/AuthModal/AuthModal'
import Modal from '../common/Modal/Modal'
import ReactPortal from '../common/ReactPortal/ReactPortal'
import './_SignIn.scss'
import  { BiUserCircle } from 'react-icons/bi'
import { AnimatePresence,motion } from 'framer-motion'
import { closeAuthModal, openAuthModal, setCabinetActiveTab } from '../../redux/viewSlice/viewActions'
import { user__logout } from '../../redux/userSlice/userSlice'
import { logout } from '../../redux/userSlice/userActions'


const SignIn = () => {
  const [ submenu,setSubmenu ] = React.useState(false)
  const { user: { user,accessToken },view: { authModalOpen } } = useSelector(state => state)

  const location = useLocation()
  const dispatch = useDispatch()

  React.useEffect(() => {
      setSubmenu(false)
  },[location])



  if (Object.keys(user).length === 0 && accessToken === null) return (
    <>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} class="signIn--btn" onClick={() => dispatch(openAuthModal())}>Войти</motion.button>
        
        <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
          {authModalOpen && (
            <ReactPortal wrapperId='App'>
              <Modal closeModal={() => dispatch(closeAuthModal())}>
                <AuthModal closeModal={() => dispatch(closeAuthModal())} />
              </Modal>
            </ReactPortal>
          )}
        </AnimatePresence>
    </>
  )

  const logoutUserHandler = () => {
    dispatch(logout())
    setSubmenu(false)
  }

  return (
    <>
      <button className='userProfile__icon' onClick={() => setSubmenu(!submenu)}>
        <BiUserCircle />
      </button>
      {submenu && (
        <ul className="userProfile-submenu">
          <li className="userProfile-item">
            <Link to='/cabinet' className='userProfile-item__link'>
              Общие сведения
            </Link>
          </li>
          <li className="userProfile-item">
            <Link to='/cabinet' className='userProfile-item__link' onClick={() => dispatch(setCabinetActiveTab('PERSONAL_DATA'))}>
              Личные данные
            </Link>
          </li>
          <li className="userProfile-item">
            История покупок
          </li>
          <li className="userProfile-item" onClick={logoutUserHandler}>
            Выйти
          </li>
        </ul>)}
    </>
  )
}

export default SignIn