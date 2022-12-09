import {Link} from 'react-router-dom'
import styled from "styled-components";


export const Container = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #c6c6c65d;
  padding: 1rem 0;
  opacity: .7;
  &:hover {
    opacity: 1.1;
  }
`;

export const Image = styled.img`
  width: 40%;
  height: 100px;
  border-radius: 3px;
`;

export const Name = styled.h1`
  font-size: 1rem;
  padding-left: 0.5rem;
`;
