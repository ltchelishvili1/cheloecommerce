import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { CategoriesContext } from "../../contexts/categories-context";

import {
  Arrow,
  AttCont,
  Container,
  Image,
  MiniCont,
  Price,
  Quantity,
  Value,
  ValueCont,
} from "./cart-item.styles";

const CartItem = ({ product }) => {
  const { attributes } = product;
  const [atts, setAtts] = useState(
    attributes.reduce(function (result, item, index) {
      result[item.name] = product[item.name];
      return result;
    }, {})
  );
  const { addProductToCart, deleteProductFromCart , currencyIndex } = useContext(CartContext);


  const quantityIncreaseHandler = () => {
    addProductToCart(product, atts);
  };

  const deleteItemHandler = () => {
    deleteProductFromCart(product, atts);
  };

  return (
    <Container>
      <Image src={`${product.gallery[0]}`} />
      <Quantity>
        <Arrow onClick={deleteItemHandler}>&#10094;</Arrow>
        <Value>{product.quantity}</Value>
        <Arrow onClick={quantityIncreaseHandler}>&#10095;</Arrow>
      </Quantity>
      <MiniCont>
        <AttCont>
         
          {Object.keys(atts).map((att) =>
            product[att].toLocaleLowerCase().includes("yes") ||
            product[att].toLocaleLowerCase().includes("no") ? null : product[
                att
              ].includes("#") ? (
              <ValueCont background={product[att]}>  {console.log(product[att])}</ValueCont>
            ) : (
              <ValueCont>{product[att]}</ValueCont>
            )
          )}
        </AttCont>
        <Price>
          {(product.prices[currencyIndex].amount * product.quantity).toFixed(2)}
          <span> {product.prices[currencyIndex].currency.symbol}</span>
        </Price>
      </MiniCont>
    </Container>
  );
};

export default CartItem;
