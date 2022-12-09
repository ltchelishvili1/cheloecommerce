import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../contexts/cart-context";
import { CategoriesContext } from "../../contexts/categories-context";
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

const ProductItem = ({ product }) => {
  const { attributes } = product;
  const [atts, setAtts] = useState(
    attributes.reduce(function (result, item, index) {
      result[item.name] = item.items[0].value;
      return result;
    }, {})
  );
  const { addProductToCart, currencyIndex } = useContext(CartContext);

  const addToCartHandler = () => {
    addProductToCart(product, atts);
  };

  const handleChange = (val, name, items, item) => {
    setAtts({
      ...atts,
      [name]: val,
    });
  };

  return (
    <MainCont>
      <Name>{product.name.toLocaleUpperCase()}</Name>
      <Brand> {product.brand.toLocaleUpperCase()}</Brand>
      <Category>{product.category.toLocaleUpperCase()}</Category>
      <Attributes product={product} handleChange={handleChange} atts={atts} />
      <InStock>{product.inStock ? "AVAIALABLE" : "NOT AVAIALABLE"}</InStock>
      <Price>
        {product.prices[currencyIndex].amount}
        <span> {product.prices[currencyIndex].currency.symbol}</span>
      </Price>
      <CustButton buttonType="google-sign-in" onClick={addToCartHandler}>
        Add To Cart
      </CustButton>
    </MainCont>
  );
};

export default ProductItem;
