import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;
export const Image = styled.img`
  width: 150px;
  height: 120px;
  border: 1px solid #bbbbbb33;
  border-radius: 13px;
`;

export const MiniCont = styled.div``;

export const AttCont = styled.div`
  display: flex;
  min-width: 130px;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const ValueCont = styled.div`
  color: white;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  margin: 0.4rem;
  height: 30px;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid #9c9c9c;
  ${({ background }) =>
    background &&
    css`
      background-color: ${background};
      order: 2;
    `};
`;

export const Quantity = styled.span`
  display: flex;
`;

export const Price = styled.span``;
