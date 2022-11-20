import React, { useContext } from 'react'
import Categories from '../../components/categories/categories.component'
import SliderComponent from '../../components/slider/slider.component'
import { CartContext } from '../../contexts/cart-context'
import { Container } from './home.styles'



const Home = () => {
  return (
    <Container>
      <SliderComponent/>
      <Categories/>
    </Container>
  )
}

export default Home