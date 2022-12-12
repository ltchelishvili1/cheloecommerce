import React, { Fragment, useContext, useEffect } from "react";
import { CategoriesContext } from "../../contexts/categories-context";

import { CategoryContainer, Cont, Title } from "./categories.styles";
import CategoryPreview from "../category-preview/category-preview.component";

const Categories = () => {
  const { categoriesMap , setSearch } = useContext(CategoriesContext);
  
  const handleClick = () => {
    setSearch("")
  }

  return (
    <Cont >
      {Object.keys(categoriesMap).map((category) => (
        <CategoryContainer  key={category}>
          <Title to={`category=${category}`} onClick={handleClick}>{category.toLocaleUpperCase()}</Title>
            <CategoryPreview 
              key={category}
              products={categoriesMap[category]}
            />
        </CategoryContainer>
      ))}
    </Cont>
  );
};

export default Categories;
