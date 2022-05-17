import React from 'react'
import './_PersonalDataComponent.scss'
import { useSelector } from 'react-redux'

const PersonalDataComponent = () => {
  const { user: { user }} = useSelector(state => state)

  const [ userData,setUserData ] = React.useState({
    username: user.username,
    address: user.address
  })

  const changeInputHandler = (e) => {
    setUserData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }
  console.log(userData)
  return (
    <div id='personalData'>
      <form className="personalData-form">
        <div className="row">

          <div className="personalData-field">
            <span className="personalData-label">
              Имя
            </span>
            <input 
              type="text" 
              className="personalData-input" 
              value={userData.username} 
              name="username" 
              onChange={changeInputHandler} />
          </div>

          <div className="personalData-field">
            <span className="personalData-label">
              Адрес
            </span>
            <input 
              type="text" 
              className="personalData-input" 
              value={userData.address}
              name="address"
              placeholder={user.address ? '' : 'Не указано'} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default PersonalDataComponent