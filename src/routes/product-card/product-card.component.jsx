import { gql, useQuery } from "@apollo/client";
import React from "react";
import * as ReactDOMServer from "react-dom/server";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories-context";
import {
  CustomSwiper,
  CustomSwiperSlide,
  Image,
  MainContainer,
  MainImage,
} from "./product-card.styles";
import "./slider.css";
import ProductItem from "../../components/product-item/product-item.component";
import { DUMMYCATEGORIES } from "../../contexts/dummy";
import { useEffect } from "react";
import { useCallback } from "react";
/* GRAPHQL ENDPOINT 
const query = gql`
  # Write your query or mutation here
  query cat($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;

*/

const ProductCard = () => {
  const { itemId } = useParams();

  /* GRAPHQL ENPOINT const { loading, error, data } = useQuery(query, {
    variables: { id: itemId },
  });
*/
  let product = DUMMYCATEGORIES.categories[0].products.filter(
    (prod) => prod.id === itemId
  )[0];

  return (
    <MainContainer>
      <CustomSwiper
        spaceBetween={10}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '">' +
              ReactDOMServer.renderToStaticMarkup(
                <Image src={product.gallery[index]} />
              ) +
              "</span>"
            );
          },
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper temp1"
      >
        {product.gallery.map((img, index) => (
          <CustomSwiperSlide>
            <MainImage src={product.gallery[index]} />
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
      <ProductItem product={product} />
    </MainContainer>
  );
};

export default ProductCard;
