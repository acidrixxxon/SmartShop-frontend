import React from 'react'
import './_Counter.scss'

const Counter = ({ count }) => {
  return (
    <span className="counter">{count}</span>
  )
}

export default Counter