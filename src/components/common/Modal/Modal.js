import React from 'react'
import './_Modal.scss'
import { motion } from 'framer-motion'

const Modal = ({ children,closeModal }) => {

  const backdropVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }
  return (
      <motion.div variants={backdropVariants} initial="hidden" animate="visible" exit="exit" className='modal__layout' onClick={closeModal}>
        {children}
      </motion.div>
  )
}

export default Modal