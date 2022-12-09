import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import { CategoriesContext } from "../../contexts/categories-context";
import Backdrop from "../backdrop/Backdrop";


import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  customButton,
  CustButton,
} from "./cart-dropdown.styles";
const CartDropdown = () => {
  const { cartItems, isCartOpen, toggleCart } = useContext(CartContext);
  const {setIsSearchOpen} = useContext(CategoriesContext)
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
    toggleCart();
    
  };

  const handleClick = () => {
    setIsSearchOpen(false)
    toggleCart()
  }

  return (
    <>
      {isCartOpen && <Backdrop onClick={handleClick} />}
      <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} product={item} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <CustButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CustButton>
      </CartDropdownContainer>
    </>
  );
};

export default CartDropdown;
