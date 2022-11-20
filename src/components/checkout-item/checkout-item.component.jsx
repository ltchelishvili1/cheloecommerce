import { useContext } from 'react';

import {CartContext} from '../../contexts/cart-context'

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';



const CheckoutItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  const {addProductToCart, deleteProductFromCart, clearProductFromCart} = useContext(CartContext)

  const quantityIncreaseHandler = () => {
    addProductToCart(cartItem)
  }

  const deleteItemHandler = () => {
    deleteProductFromCart(cartItem)
  }

  const clearProductFromCartHandler = () => {
    clearProductFromCart(cartItem)
  }
  

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={cartItem.gallery[0]} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={deleteItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={quantityIncreaseHandler}  >&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {(cartItem.prices[0].amount * quantity).toFixed(2)}</BaseSpan>
      <RemoveButton  onClick={clearProductFromCartHandler} >&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
