import React from 'react'
import './_BannersContainer.scss'

const BannersContainer = ({ children }) => {
  return (
    <div className='banners-container'>
        { children }
    </div>
  )
}

export default BannersContainer