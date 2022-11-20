import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartTotal: 0,
  isCartOpen: false,
  toggleCart: () => {},
  cartItems: [],
  addProductToCart: () => {},
  deleteProductFromCart: () => {},
  clearProductFromCart: () => {}
});

const addToCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const deleteProduct = (cartItems, product) => {
  const existingProduct = cartItems.find((item) => item.id === product.id);

  if (existingProduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearProduct = (cartItems, product) => {
  const existingProduct = cartItems.find((item) => item.id === product.id);
  if (existingProduct) {
    return cartItems.filter((item) => item.id !== product.id);
  }
  return cartItems
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) =>
        total + cartItem.quantity * cartItem.prices[0].amount,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);


  const addProductToCart = (productToAdd) => {
    setCartItems(addToCart(cartItems, productToAdd));
  };

  const deleteProductFromCart = (product) => {
    setCartItems(deleteProduct(cartItems, product));
  };
  const clearProductFromCart = (product) => {
    setCartItems(clearProduct(cartItems, product));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const value = {
    isCartOpen,
    toggleCart,
    cartItems,
    addProductToCart,
    cartTotal,
    deleteProductFromCart,
    clearProductFromCart
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
