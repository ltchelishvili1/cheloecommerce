import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./contexts/categories-context";
import { CartProvider } from "./contexts/cart-context";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CategoriesProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </CategoriesProvider>
    </ApolloProvider>
  </React.StrictMode>
);
