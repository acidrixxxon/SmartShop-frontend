import React from 'react'
import BannersContainer from './BannersContainer/BannersContainer'
import BannerItem from './BannerItem/BannerItem'
import bannerimg1 from './../../../assets/banner1.png'
import bannerimg2 from './../../../assets/banner2.png'

const Banners = () => {
  return (
    <BannersContainer>
        <BannerItem text='Скидки до 30% на сигвеи' img={bannerimg2} />
        <BannerItem text='Неделя смарт часов' img={bannerimg1} />
    </BannersContainer>
  )
}

export default Banners