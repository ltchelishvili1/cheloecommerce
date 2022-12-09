import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories-context";
import { PreviewCont } from "../category-preview/category-preview.styles";
import PreviewCard from "../preview-product-card/preview-product-card.component";

const Category = (props) => {
  const navigate = useNavigate()
  const { category,  } = props;
 const {search, handleSearch , isSearchOpen} = useContext(CategoriesContext)



  return (
    <div style={{paddingTop:"5rem"}}>
     <h1>{category.toLocaleUpperCase()}</h1>
      <PreviewCont >
        {handleSearch(isSearchOpen ? "" : search).map((product) => {
          return (
            <div style={{ margin: "1rem 2rem" }} key={product.id}>
              <PreviewCard product={product} />
            </div>
          );
        })}
      </PreviewCont>
    </div>
  );
};

export default Category;
