import React from 'react'
import './_ChangeBtn.scss'

const ChangeBtn = ({ onClick }) => {
  return (
    <button className='cart__change' onClick={onClick}>
        Изменить
    </button>
  )
}

export default ChangeBtn