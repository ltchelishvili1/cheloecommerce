import styled, { css } from "styled-components";

export const CartIconCont = styled.div`
  cursor: pointer;
  ${({ hide }) =>
    hide &&
    css`
      @media (max-width: 728px) {
        display: none;
      }
    `};
`;

export const CartitemNumber = styled.span`
  font-size: 12px;
  position: absolute;
  color: blue;
  background-color: white;
  top: 19px;
  right: 5px;
`;
