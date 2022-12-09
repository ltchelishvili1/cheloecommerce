import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled(Link)`
  font-size: 2rem;
`;


export const Cont = styled.div`
 padding: 0 5rem;
 @media (max-width: 768px) {
    padding: 0;
    
  }
 
`

export const CategoryContainer = styled.div`
  padding: 2rem 0;
`