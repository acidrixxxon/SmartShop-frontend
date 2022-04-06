import React from 'react'
import AuthModal from '../common/AuthModal/AuthModal'
import Modal from '../common/Modal/Modal'
import ReactPortal from '../common/ReactPortal/ReactPortal'
import './_SignIn.scss'


const SignIn = () => {
  const [ isOpen,setIsOpen ] = React.useState(false)

  const toggleAuthModal = () => setIsOpen(!isOpen)
  const closeModal = () => setIsOpen(false)

  return (
    <>
        <button class="signIn--btn" onClick={toggleAuthModal}>Войти</button>
        {isOpen && (
          <ReactPortal wrapperId='App'>
            <Modal closeModal={closeModal}>
              <AuthModal closeModal={closeModal} />
            </Modal>
          </ReactPortal>
          )}
    </>
  )
}

export default SignIn