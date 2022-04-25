import React from 'react'
import { useSelector } from 'react-redux'
import AuthModal from '../common/AuthModal/AuthModal'
import Modal from '../common/Modal/Modal'
import ReactPortal from '../common/ReactPortal/ReactPortal'
import './_SignIn.scss'
import  { BiUserCircle } from 'react-icons/bi'
import { AnimatePresence,motion } from 'framer-motion'


const SignIn = () => {
  const [ isOpen,setIsOpen ] = React.useState(false)
  const [ submenu,setSubmenu ] = React.useState(false)

  const toggleAuthModal = () => setIsOpen(!isOpen)
  const closeModal = () => setIsOpen(false)


  const { user: { user,accessToken } } = useSelector(state => state )

  if (Object.keys(user).length === 0 && accessToken === null) return (
    <>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} class="signIn--btn" onClick={toggleAuthModal}>Войти</motion.button>
        
        <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
          {isOpen && (
            <ReactPortal wrapperId='App'>
              <Modal closeModal={closeModal}>
                <AuthModal closeModal={closeModal} />
              </Modal>
            </ReactPortal>
          )}
        </AnimatePresence>
    </>
  )

  return (
    <>
      <button className='userProfile__icon' onClick={() => setSubmenu(!submenu)}>
        <BiUserCircle />
      </button>
      {submenu && (
        <ul className="userProfile-submenu">
          <li className="userProfile-item">
            Общие сведения
          </li>
          <li className="userProfile-item">
            Личные данные
          </li>
          <li className="userProfile-item">
            История покупок
          </li>
          <li className="userProfile-item">
            Выйти
          </li>
        </ul>)}
    </>
  )
}

export default SignIn