import React from 'react'
import './_BannerItem.scss'

const BannerItem = ({ text,img }) => {
  return (
    <div className='banner-item'>
      <span className="banner-item__text">
        {text}
      </span>
      <img src={img} alt="bannerimg" />
    </div>
  )
}

export default BannerItem