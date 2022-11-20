import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";

import { GrSearch } from "react-icons/gr";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  Select,
  CustomNavlink,
  Toggle,
} from "./navigation.styles";
import { TiThMenu } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import FormInput from "../../components/form-input/form-input.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";


const Navigation = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  const {isCartOpen} = useContext(CartContext)

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

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
          <CustomNavlink hide hiddenDesktop>SEARCH</CustomNavlink>
          <Select hide>
            <option>ENG</option>
            <option>GEO</option>
          </Select>
          <CustomNavlink to="/auth">SIGN IN</CustomNavlink>
          <CartIcon hide />
          <CustomNavlink hide hiddenDesktop>CART</CustomNavlink>
        </NavLinks>
        <Toggle onClick={() => setToggle(!toggle)}>
          {!toggle ? <TiThMenu size={28} /> : <GrClose size={28} />}
        </Toggle>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
