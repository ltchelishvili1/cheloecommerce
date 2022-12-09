import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../contexts/cart-context";


import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  CustAttributes,
  Name,
  AttName,
  CustValueCont,
  AttributesContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const [newAtts, setNewAtts] = useState([]);
  const { attributes } = cartItem;
  const [atts, setAtts] = useState(
    attributes.reduce(function (result, item, index) {
      result[item.name] = cartItem[item.name];
      return result;
    }, {})
  );

  const { name, quantity } = cartItem;
  const {
    addProductToCart,
    deleteProductFromCart,
    clearProductFromCart,
    currencyIndex,
  } = useContext(CartContext);

  const quantityIncreaseHandler = () => {
    addProductToCart(cartItem, atts);
  };

  const deleteItemHandler = () => {
    deleteProductFromCart(cartItem);
  };

  const clearProductFromCartHandler = () => {
    clearProductFromCart(cartItem);
  };

  useEffect(() => {
    const newAtt = cartItem.attributes.map(
      (attrs) =>
        attrs.items
          .map((it) => {
            return { ...it, name: attrs.id };
          })
          .filter((attribute) => {
            return cartItem[attrs.name] === attribute.value;
          })[0]
    );
    setNewAtts(newAtt);
  }, []);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={cartItem.gallery[0]} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>
        <BaseSpan>Name:</BaseSpan>
        <Name>{name}</Name>
      </BaseSpan>
      <BaseSpan>
        <BaseSpan>Quantity:</BaseSpan>
        <Quantity>
          <Arrow onClick={deleteItemHandler}>&#10094;</Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={quantityIncreaseHandler}>&#10095;</Arrow>
        </Quantity>
      </BaseSpan>
      <BaseSpan>
        <BaseSpan> Price:</BaseSpan>
        <Name>
          {(cartItem.prices[currencyIndex].amount * quantity).toFixed(2) +
            cartItem.prices[currencyIndex].currency.symbol}
        </Name>
      </BaseSpan>
      <AttributesContainer>
        {cartItem.attributes &&
          newAtts.map((finalizedItem) => (
            <Value>
              <AttName>{finalizedItem.name}:</AttName>
              {finalizedItem.value.includes("#") ? (
                <CustValueCont
                  background={finalizedItem.value}
                  style={{ pointerEvents: "none", minWidth: "40px" }}
                ></CustValueCont>
              ) : (
                <CustValueCont
                  background={"#000000"}
                  style={{ pointerEvents: "none" }}
                >
                  <Value style={{ color: "white" }}>
                    {finalizedItem.value}
                  </Value>
                </CustValueCont>
              )}
            </Value>
          ))}
      </AttributesContainer>

      <RemoveButton onClick={clearProductFromCartHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
