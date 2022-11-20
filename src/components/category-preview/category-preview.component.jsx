import React, { Fragment } from "react";

import PreviewCard from "../preview-product-card/preview-product-card.component";
import { PreviewCont } from "./category-preview.styles";

const CategoryPreview = (props) => {
  const { products } = props;
  return (
    <PreviewCont >
      {products.map((product, index) => { 
          return index <=  2  && <div style={{margin: "1rem 2rem"}} key={product.id}>
            <PreviewCard product = {product} />
          </div>;
      })}
    </PreviewCont>
  );
};

export default CategoryPreview;
