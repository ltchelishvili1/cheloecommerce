import styled, { css } from "styled-components";
import Button from "../button/button.component";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CustButton = styled(InvertedButton)`
background: white;
  box-shadow: inset 10px 0 100px 0 rgb(0 0 0 / 20%);
  position: fixed;
  top: 335px;
  width: 223px;

  &:hover{
    background-color: #010101;
    box-shadow: inset 10px 0 100px 0 rgb(0 0 0 / 30%); 
  }
`;

export const SearchDropdownContainer = styled.div`
  position: fixed;
  width: 240px;
  height: 290px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: inset 10px 0 100px 0 rgba(0, 0, 0, 0.3);

  ${({ mobile }) =>
    mobile &&
    css`
     top: ${mobile.top};
     right: ${mobile.right}
    `};

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
  z-index: 40;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const SearchItems = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  overflow: hiddenscroll;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;
