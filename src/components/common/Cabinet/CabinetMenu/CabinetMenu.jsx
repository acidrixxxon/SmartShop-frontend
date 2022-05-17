import React from 'react'
import { setCabinetActiveTab } from '../../../../redux/viewSlice/viewActions'
import './_CabinetMenu.scss'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './../../../../redux/userSlice/userActions'
import { useNavigate, useLocation } from 'react-router-dom'
import { set_cabinet_active_tab_toDefault } from '../../../../redux/viewSlice/viewSlice'

const CabinetMenu = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const { view: { cabinetActiveTab },user: { user,accessToken }} = useSelector(state => state)

    React.useEffect(() => {
      if (location.pathname !== '/cabinet') {
        dispatch(set_cabinet_active_tab_toDefault())
      }
    },[location])

    React.useEffect(() => {
      if ( accessToken === null || !user) {
        navigate('/', { replace: true})
      }
    },[user,accessToken])


    return (
      <div className='cabinet-menu'>
        <ul className="cabinet-menu__list">
          <li className={ cabinetActiveTab === 'GENERAL_DATA' ? 'cabinet-menu__item active' : 'cabinet-menu__item'} onClick={() => dispatch(setCabinetActiveTab('GENERAL_DATA'))}>Общие сведенья</li>
          <li className={ cabinetActiveTab === 'PERSONAL_DATA' ? 'cabinet-menu__item active' : 'cabinet-menu__item'} onClick={() => dispatch(setCabinetActiveTab('PERSONAL_DATA'))}>Личные данные</li>
          <li className={ cabinetActiveTab === 'MY_ORDERS' ? 'cabinet-menu__item active' : 'cabinet-menu__item'} onClick={() => dispatch(setCabinetActiveTab('MY_ORDERS'))}>Мои заказы</li>
          <li className="cabinet-menu__item" onClick={() => dispatch(logout())}>Выйти</li>
        </ul>
      </div>
    )
}

export default CabinetMenu