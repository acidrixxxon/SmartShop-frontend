import React from 'react'
import Category from '../../components/Category/Category'
import Container from '../../components/common/Container/Container'
import Slider from '../../components/common/Slider/Slider'
import './_Home.scss'

const Home = () => {
  return (
    <div id="home">
        <Container>
            <Slider />
            <Category name='Новинки' item={[]}/>   
        </Container>
    </div>
  )
}

export default Home