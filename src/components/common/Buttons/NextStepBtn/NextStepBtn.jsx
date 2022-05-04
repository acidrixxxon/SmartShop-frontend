import React from 'react'
import './_NextStepBtn.scss'

const NextStepBtn = ({ onClick }) => {
  return (
    <button className='cart__nextStep' onClick={onClick}>
        Далее
    </button>
  )
}

export default NextStepBtn