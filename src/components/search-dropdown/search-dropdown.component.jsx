import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart-context";
import { CategoriesContext } from "../../contexts/categories-context";
import Backdrop from "../backdrop/Backdrop";
import SearchItem from "../search-item/search-item.component";

import {
  CustButton,
  SearchDropdownContainer,
  SearchItems,
} from "./search-dropdown-styles";
const CartDropdown = (props) => {

  const { search, handleSearch, isSearchOpen, setIsSearchOpen } =
    useContext(CategoriesContext);
  const navigate = useNavigate();
  const seeMoreHandler = () => {
    navigate("/category=all");
    setIsSearchOpen(false)
  };

  const handleClick = () => {
    setIsSearchOpen(false)
  };

  return (
    <>
      {isSearchOpen && <Backdrop transparent onClick={handleClick} />}
      <SearchDropdownContainer >
        <SearchItems>
          {handleSearch(search).map((product) => {
            return <SearchItem product={product} />;
          })}
        </SearchItems>
      {!props.positions &&   <CustButton onClick={seeMoreHandler}>See More</CustButton>}
      </SearchDropdownContainer>
    </>
  );
};

export default CartDropdown;
