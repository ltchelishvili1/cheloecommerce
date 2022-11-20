import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: fixed;
  width: 340px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 55px;
  right: 20px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
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
