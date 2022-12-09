import { Fragment, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { GrSearch } from "react-icons/gr";
import {
  NavigationContainer,
  NavLinks,
  LogoContainer,
  Select,
  CustomNavlink,
  Toggle,
  Option,
} from "./navigation.styles";
import { TiThMenu } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import FormInput from "../../components/form-input/form-input.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

import { CategoriesContext } from "../../contexts/categories-context";
import { useEffect } from "react";
import SearchDropdown from "../../components/search-dropdown/search-dropdown.component";
import { gql, useQuery } from "@apollo/client";

/* GRAPHQL ENDPOINT 
const CURRENCIES = gql`
  query cat {
    currencies {
      label
      symbol
    }
  }
`;

*/
const Navigation = () => {
  // GRAPTHQL ENDPOINT const { loading, error, data } = useQuery(CURRENCIES);
  const navigate = useNavigate()
  const data = {
    currencies: [
      { label: "USD", symbol: "$" },
      { label: "GBP", symbol: "£" },
      { label: "AUD", symbol: "A$" },
      { label: "JPY", symbol: "¥" },
      { label: "RUB", symbol: "₽" },
    ],
  };
  const [toggle, setToggle] = useState(false);
  const { isSearchOpen, setIsSearchOpen, search, setSearch } =
    useContext(CategoriesContext);
  const { isCartOpen, toggleCart, setCurrencyIndex } = useContext(CartContext);
  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleCurrencySelect = (e) => {
    setCurrencyIndex(e.target.value);
  };

  const toggleMenu = () => {
    setToggle(!toggle)
    setIsSearchOpen(false)
  }
 
  useEffect(() => {
    if (search) {
      setIsSearchOpen(true);
    } else {
      setIsSearchOpen(false);
    }
 
  }, [search]);

  return (
    <>
      <NavigationContainer toggle={toggle}>
        <LogoContainer to="/">
          <span className="logo">LSHOP</span>
        </LogoContainer>
        <NavLinks toggle={toggle}>
          <FormInput
            label="SEARCH"
            type="search"
            onChange={handleChange}
            name="search"
            value={search}
            symbol={
              <GrSearch
                style={{ zoom: "1.2", opacity: ".5", cursor: "pointer" }}
              />
            }
            mobhide
          />
          <CustomNavlink hiddendesktop="true" to= "/" onClick={toggleMenu}>HOME</CustomNavlink>
          <CustomNavlink hiddendesktop="true" to= "/search" onClick={toggleMenu}>SEARCH</CustomNavlink>
          {isSearchOpen && <SearchDropdown search={search} />}
          <Select hide={"hide"} onChange={handleCurrencySelect}>
            {data &&
              data.currencies.map((cur, index) => (
                <Option value={index}>{cur.label}</Option>
              ))}
          </Select>
          <CustomNavlink to="/auth">SIGN IN</CustomNavlink>
          <CartIcon />
          <CustomNavlink hiddendesktop="true" onClick={toggleMenu} to="/checkout">CART</CustomNavlink>
        </NavLinks>
        <Toggle onClick={toggleMenu}>
          {!toggle ? <TiThMenu size={28} /> : <GrClose size={28} />}
        </Toggle>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
