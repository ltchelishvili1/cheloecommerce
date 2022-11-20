import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  position: fixed;
  background-color: #ffffff;
  height: 70px;
  width: 96%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  z-index: 40;
  ${({ toggle }) =>
    toggle &&
    css`
      @media (max-width: 728px) {
        width: 96%;
        height: 100vh;
        backdrop-filter: blur(10px);
        overflow: hidden;
        background: #ffffff9a;
      }
    `};
`;

export const LogoContainer = styled(Link)`
  padding-top: 1.5rem;
  width: 100px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 728px) {
    display: none;
    ${({ toggle }) =>
      toggle &&
      css`
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateX(-50px);
      `};
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  @media (max-width: 728px) {
    display: block;
  }
`;

export const CustomNavlink = styled(NavLink)`
  font-size: 14px;
  @media (max-width: 728px) {
    display: flex;
  }
  ${({ hide }) =>
    hide &&
    css`
      @media (max-width: 728px) {
        display: flex;
      }
    `};
    ${({ hiddenDesktop }) =>
    hiddenDesktop &&
    css`
    display: none;
      @media (max-width: 728px) {
        display: block;
      }
    `};
`;

export const Select = styled.select`
  margin-left: 2rem;
  background: none;
  border: none;
  ${({ hide }) =>
    hide &&
    css`
       @media (max-width: 728px) {
        display: none;
      }
    `};
`;

export const Toggle = styled.button`
  position: absolute;
  right: 0;
  opacity: 0.8;
  transform: translate(-100%, 50%);
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 728px) {
    display: block;
  }
`;

export const Close = styled(Toggle)`
  float: right;
`;

export const Mobile = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 50%;
  height: 35px;
  border: none;
  border-radius: 2px;
  background-color: #e4e4e4;
  transform: translateX(40%);
`;

export const MobileCont = styled.div`
  display: block;
`;
