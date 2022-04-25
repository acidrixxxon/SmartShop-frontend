import React from 'react'
import Category from '../../components/Category/Category'
import Banners from '../../components/common/Banners/Banners'
import Container from '../../components/common/Container/Container'
import News from '../../components/common/News/News'
import Slider from '../../components/common/Slider/Slider'
import './_Home.scss'
import { useDispatch } from 'react-redux'
import { getProducts } from './../../redux/productSlice/productActions.js'

const Home = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <div id="home">
        <Container>
            <Slider />
            <Category name='Новинки' item={[]} />
            <Category name='Хиты продаж' item={[]} />   
            <Banners />
            <Category name='Сигвеи' item={[]} />
            <Category name='Моноколеса' item={[]} />   
            <Banners />
            <Category name='Электровелосипеды' items={[]} />
            <News />
        </Container>
    </div>
  )
}

export default Home