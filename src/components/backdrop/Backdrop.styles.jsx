import styled, { css } from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(.5px);
  z-index: 10;

  ${({ transparent }) =>
    transparent &&
    css`
     background: transparent;
     backdrop-filter: none;
     z-index: -4;
    `};
`;
