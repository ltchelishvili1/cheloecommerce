import React from 'react'
import { Container, Image, Price, Quantity } from './cart-item.styles'

const CartItem = ({product}) => {
    console.log(product)
  return (
    <Container>
        <Image src ={`${product.gallery[0]}`} />
        <Quantity>{product.quantity}</Quantity>
        <Price> {(product.prices[0].amount * product.quantity).toFixed(2)}</Price>
    </Container>
  )
}

export default CartItem