import styled from "styled-components";
import Button from "../button/button.component";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CustButton = styled(Button)`
  position: fixed;
  top: 480px;
  width: 370px;
`;

export const CartDropdownContainer = styled.div`
  position: fixed;
  width: 380px;
  height: 440px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: inset 10px 0 100px 0 rgba(0, 0, 0, 0.3);
  top: 55px;
  right: 20px;
  z-index: 5;
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
  z-index: 50;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
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
