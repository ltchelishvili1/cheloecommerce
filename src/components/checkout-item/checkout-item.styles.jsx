import styled from "styled-components";

import Attributes from "../attributes/attributes-component";
import { ValueCont } from "../attributes/attributes-styles";

export const CustAttributes = styled(Attributes)``;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 200px;
  border-bottom: 1px solid darkgrey;
  padding: 40px 0;
  font-size: 20px;
  align-items: center;

  @media (max-width: 728px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  max-width: 200px;
  padding-right: 30px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  @media (max-width: 728px) {
    width: 100%;
    margin: auto;
  }
`;

export const Name = styled.span`
  display: flex;
  flex-direction: column;
  padding-top: 1.2rem;
  max-height: 30px;
  @media (max-width: 728px) {
    padding: 0;
  }
`;

export const BaseSpan = styled.span`
  width: 19%;
  padding-top: 1.2rem;
  @media (max-width: 728px) {
    padding: 0.3rem 0;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  padding-left: 0.5rem;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  @media (max-width: 728px) {
    justify-content: space-between;
    margin: 0;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const AttName = styled.span`
  pointer-events: none;
  opacity: 0.5;
  float: left;
  font-size: 0.7rem;
  min-width: 120px;
`;

export const CustValueCont = styled(ValueCont)``;

export const AttributesContainer = styled(BaseSpan)`
  @media (max-width: 728px) {
    display: block;
  }
`;
