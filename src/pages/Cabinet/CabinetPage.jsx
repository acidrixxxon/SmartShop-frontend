import React from 'react'
import './_CabinetPage.scss'
import Container from './../../components/common/Container/Container'
import CabinetMenu from '../../components/common/Cabinet/CabinetMenu/CabinetMenu'
import CabinetContent from '../../components/common/Cabinet/CabinetContent/CabinetContent'

const CabinetPage = () => {
  return (
    <div id="cabinet">
        <Container>
            <h4 className="page__title">Кабинет</h4>

            <div className="row">
                <CabinetMenu />
                <CabinetContent />  
            </div>
        </Container>
    </div>
  )
}

export default CabinetPage