import React from 'react'
import { useSelector } from 'react-redux'
import GeneralDataComponent from './GeneralDataComponent/GeneralDataComponent'
import PersonalDataComponent from './PersonalDataComponent/PersonalDataComponent'
import MyOrdersComponent from './MyOrdersComponent/MyOrdersComponent'
import './_CabinetContent.scss'

const CabinetContent = () => {

  const { view: { cabinetActiveTab }} = useSelector(state => state)
  

  return (
    <div className='cabinet-content'>
      { cabinetActiveTab === 'GENERAL_DATA' && <GeneralDataComponent />}
      { cabinetActiveTab === 'PERSONAL_DATA' && <PersonalDataComponent />}
      { cabinetActiveTab === 'MY_ORDERS' && <MyOrdersComponent />}
    </div>
  )
}

export default CabinetContent