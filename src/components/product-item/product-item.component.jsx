import React, {useContext} from "react";

import {CartContext} from '../../contexts/cart-context'
import Attributes from "../attributes/attributes-component";
import {
  Brand,
  Category,
  CustButton,
  InStock,
  MainCont,
  Name,
  Price,
} from "./product-item.styles";
import Button from '../button/button.component'



const ProductItem = ({ product }) => {
  const {addProductToCart} = useContext(CartContext)

  const addToCartHandler = () => {
    addProductToCart(product)
  }

  return (
    <MainCont>
      <Name>{product.name.toLocaleUpperCase()}</Name>
      <Brand> {product.brand.toLocaleUpperCase()}</Brand>
      <Category>{product.category.toLocaleUpperCase()}</Category>
      <Attributes attributes={product.attributes} />
      <InStock>{product.inStock ? "AVAIALABLE" : "NOT AVAIALABLE"}</InStock>
      <Price>{product.prices[0].amount.toFixed(2)}</Price>
      <CustButton buttonType="google-sign-in" onClick= {addToCartHandler}>Add To Cart</CustButton>
    </MainCont>
  );
};

export default ProductItem;
