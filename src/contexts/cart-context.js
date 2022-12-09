import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({
  cartTotal: 0,
  isCartOpen: false,
  toggleCart: () => {},
  cartItems: [],
  setCartItems: () => {},
  addProductToCart: () => {},
  deleteProductFromCart: () => {},
  clearProductFromCart: () => {},
  currencyIndex: 0,
  setCurrencyIndex: () => {}
});
const addToCart = (cartItems, productToAdd, newProperties) => {
  let newProduct;
  if (!productToAdd.id.includes(JSON.stringify(newProperties))) {
    newProduct = {
      ...productToAdd,
      id: productToAdd.id + JSON.stringify(newProperties),
      ...newProperties,
    };
  } else {
    newProduct = {
      ...productToAdd,
      ...newProperties,
    };
  }
  let existingProduct = cartItems.find((item) => item.id === newProduct.id);

  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === newProduct.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...newProduct, quantity: 1 }];
};

const deleteProduct = (cartItems, product, newProperties) => {
  let existingProduct;
  if (newProperties) {
    existingProduct = cartItems.find((item) => item.id === product.id);
  }
  if (product.quantity === 1) {
      let newArr = cartItems.filter((cartItem) => cartItem.id !== product.id);

    return newArr  }

  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearProduct = (cartItems, product) => {
  const newArr = cartItems.filter((item) => {
    return item.id !== product.id;
  });
  return newArr;
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [currencyIndex,setCurrencyIndex] = useState(0)

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) =>
        total + cartItem.quantity * cartItem.prices[currencyIndex].amount,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems,currencyIndex]);

  const addProductToCart = (productToAdd, newProperties) => {
    setCartItems(addToCart(cartItems, productToAdd, newProperties));
    
  };

  const deleteProductFromCart = (product, newProperties) => {
    setCartItems(deleteProduct(cartItems, product, newProperties));
  };
  const clearProductFromCart = (product) => {
    setCartItems(clearProduct(cartItems, product));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const value = {
    isCartOpen,
    toggleCart,
    cartItems,
    addProductToCart,
    cartTotal,
    deleteProductFromCart,
    clearProductFromCart,
    setCartItems,
    currencyIndex,
    setCurrencyIndex
    
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
