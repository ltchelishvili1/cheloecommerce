import styled from "styled-components";

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
      height: auto; 
  }

  img {
    width: 100%;
    min-height: 350px;
    object-fit: cover;
    margin-bottom: 5px;
    @media (max-width: 768px) {
      height: auto;
    }
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;

export const OutOfStock = styled.span`
  font-size: 30px;
  position: absolute;
  top: 175px;
  transform: translateY(-50%);
  pointer-events: none;
`;
