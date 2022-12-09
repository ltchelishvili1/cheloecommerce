import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Image = styled.img`
  height: 70px;
  cursor: pointer;
  @media (max-width: 728px) {
        display: block;
       
      }
`;
export const MainImage = styled.img`
  max-height: 400px;
  cursor: pointer;
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomSwiper = styled(Swiper)`

  width: 50%;
  @media (max-width: 728px) {
        width: 100%;
      }
 
`;

export const MainContainer = styled.div`

  display: flex;
  @media (max-width: 728px) {
        display: block;
      }
`;
