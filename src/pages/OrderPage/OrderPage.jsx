import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import Container from './../../components/common/Container/Container'

const OrderPage = () => {

  const { user } = useSelector(state => state )
  const { id } = useParams()

  if (user.accessToken === null) {
    return <Navigate to="/" />
  }
  return (
    <Container>
      order page {id}
    </Container>
  )
}

export default OrderPage