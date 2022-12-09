import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CartContext } from "../../contexts/cart-context";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal,currencyIndex } = useContext(CartContext);
  return (
    <CheckoutContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}
      <Total>
        {cartTotal.toFixed(2)}{console.log(cartItems)}
       {cartItems.length && <span>{ cartItems[0].prices[currencyIndex].currency.symbol}</span>}
      </Total>
    </CheckoutContainer>
  );
};

export default Checkout;
