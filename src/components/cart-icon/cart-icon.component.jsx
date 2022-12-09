import React,{useContext} from "react";

import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../../contexts/cart-context";
import { CartIconCont, CartitemNumber } from "./cart-icon.styles";

const CartIcon = ({hide}) => {
  const { toggleCart, cartItems} = useContext(CartContext);
  return (
    <CartIconCont  onClick= {toggleCart} hide>
      <BsCart2 size={20} />
     <CartitemNumber>{cartItems.length}</CartitemNumber>
    </CartIconCont>
  );
};

export default CartIcon;
