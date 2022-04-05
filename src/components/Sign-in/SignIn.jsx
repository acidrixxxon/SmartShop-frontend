import React from 'react'
import { Auth } from '../../utils/constants'
import AuthModal from '../common/AuthModal/AuthModal'
import Modal from '../common/Modal/Modal'
import './_SignIn.scss'


const SignIn = () => {
  const [ isOpen,setIsOpen ] = React.useState(false)

  const toggleAuthModal = () => setIsOpen(!isOpen)
  const closeModal = () => setIsOpen(false)

  return (
    <>
        <button class="signIn--btn" onClick={toggleAuthModal}>Войти</button>
        {isOpen && (
          <Modal closeModal={closeModal}>
            <AuthModal closeModal={closeModal} />
          </Modal>
        )}
    </>
  )
}

export default SignIn