import styled from "styled-components";

import { Swiper } from "swiper/react";

export const SwiperCont = styled(Swiper)`
  position: relative;
  height: 300px;
  object-fit: cover;
`;

export const Img = styled.img`
  position: absolute;
  object-fit: cover;
  left: 100px;
`;

export const ImgCont = styled.div`
  position: absolute;
  left: 100px;
  width: 85%;
  height: 100%;

  @media (max-width: 728px) {
    left: 0px;
    width: 100%;
  }
`;

export const Tittle = styled.span`
  display: flex;
  
  justify-content: center;
  color: #fff;
  text-transform: uppercase;
  font-family: sans-serif;
`;
