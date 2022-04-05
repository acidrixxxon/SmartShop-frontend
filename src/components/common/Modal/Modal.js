import React from 'react'
import './_Modal.scss'

const Modal = ({ children,closeModal }) => {
  return (
    <div className='modal__layout' onClick={closeModal}>
        {children}
    </div>
  )
}

export default Modal