import styled, { css } from "styled-components";

export const AttContainer = styled.div`
  display: "flex";
  justify-content: flex-start;
`;

export const ValueCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  font-size: 0.7rem;
  cursor: pointer;
  border: 1px solid #9c9c9c;
  ${({ background }) =>
    background &&
    css`
      background-color: ${background};
    `};
`;

export const AttributeCont = styled.div`
  display: flex;
  align-items: center;
`;

export const Border = styled.div`
  margin: 0 0.4rem;
`;

export const Value = styled.span`
  max-width: 50px;
`;
