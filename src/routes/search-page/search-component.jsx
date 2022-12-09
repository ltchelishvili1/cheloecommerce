import React from "react";
import { useContext } from "react";
import FormInput from "../../components/form-input/form-input.component";
import { CategoriesContext } from "../../contexts/categories-context";
import {
  Form,
  Input,
  SearchCon,
  SearchItems,
  SearchPageContainer,
  SubmitButton,
} from "./search-styles";
import SearchDropdown from "../../components/search-dropdown/search-dropdown.component";
import SearchItem from "../../components/search-item/search-item.component";

const SearchPage = () => {
  const { isSearchOpen, setIsSearchOpen, search, setSearch, handleSearch } =
    useContext(CategoriesContext);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <SearchPageContainer>
      <Form>
        <Input type="search" onChange={handleChange} />
        <SubmitButton size={30} />
      </Form>
      <SearchItems>
      {handleSearch(search).map((product) => {
        console.log(product)
            return <SearchItem product={product} />;
          })}
          </SearchItems>
    </SearchPageContainer>
  );
};

export default SearchPage;
