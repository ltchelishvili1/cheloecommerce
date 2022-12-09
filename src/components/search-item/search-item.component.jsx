import React from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories-context";

import { Container, Image, Name } from "./search-item.styles";

const SearchItem = ({ product }) => {
  const {setIsSearchOpen,} = useContext(CategoriesContext)

  const handleClick = () => {
    setIsSearchOpen(false)
  }

  return (
   <>
   <Container to={`/item/${product.id}`} onClick = {handleClick}>
      <Image src={product.gallery[0]} alt={product.name} />
      <Name>{product.name}</Name>
    </Container>
   </>
  );
};

export default SearchItem;
