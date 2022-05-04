import React from 'react'
import './_PaymentMethod.scss'
import { IoMdArrowDropdown  } from 'react-icons/io'
import { paymentVariants } from '../../../../utils/data'
import { useDispatch, useSelector } from 'react-redux'
import { cartActiveStep } from './../../../../utils/constants'
import NextStepBtn from './../../Buttons/NextStepBtn/NextStepBtn'
import ChangeBtn from './../../Buttons/ChangeBtn/ChangeBtn'
import { goToNextStep } from '../../../../redux/cartSlice/cartActions'


const PaymentMethod = () => {
  const [ method,setMethod ] = React.useState(paymentVariants.CASH)
  const [ dropdown,setDropdown ] = React.useState(false)
  const [ finished,setFinished ] = React.useState(false)

  const dispatch = useDispatch()
  const { cart: { activeStep }} = useSelector(state => state)
  
  const toggleDropdown = () => setDropdown(state => !state)
  const changeMethodHandler = (method) => {
    setDropdown(false)
    setMethod(method)
  }

  const nextStepHandler = () => {
    setFinished(true)
    dispatch(goToNextStep(paymentVariants.CLIENT_INFO))
  }

  const changeHandler = () => {
    setFinished(false)
    dispatch(goToNextStep(cartActiveStep.PAYMENT_VARIANT))
}
  return (
    <>
      <div className='payment'>
        {activeStep === cartActiveStep.PAYMENT_VARIANT ? 
          <>
            <h4 className="payment__title step-title">Способ оплаты</h4>

            <div className="payment__select">
              <button className="payment__button" onClick={toggleDropdown}>
                <span>{method.title}</span>
                <IoMdArrowDropdown />
              </button>

              {dropdown &&
                <ul className="payment__dropdown">
                  {Object.keys(paymentVariants).map(item => {
                    return (
                      <li className='payment__dropdown-item' onClick={() => changeMethodHandler(paymentVariants[item])}>{paymentVariants[item].title}</li>
                    )
                  })}
                </ul>}
            </div>
          </> :
          !finished &&<h4 className="payment__title not-active step-title">Способ оплаты</h4>
          }
        {finished && (
          <>
            <h4 className="payment__title step-title">Способ оплаты </h4>
            <div className="row">
              <span className="payment__variant">
                {method.title}
              </span>

              <ChangeBtn onClick={changeHandler}/>
            </div>
          </>
        )}
      </div>
      {activeStep === cartActiveStep.PAYMENT_VARIANT && <NextStepBtn onClick={nextStepHandler}/> }
    </>
  )
}

export default PaymentMethod