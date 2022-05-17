import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivatRoute = (children) => {
    const { user: { user,accessToken } } = useSelector(state => state)

    // if (accessToken === null) {
    //     return <Navigate to='/' />
    // }
    return accessToken ? children : <Navigate to="/" />
}

export default PrivatRoute