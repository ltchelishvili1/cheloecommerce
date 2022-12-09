import styled from "styled-components";

export const PreviewCont = styled.div`
 background-color: #f8f8f8;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1rem;
  padding: 1rem;
  @media (max-width: 928px) {
    grid-template-columns: 1fr 1fr ;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0;
    padding: 0 .3rem;
    
    
  }
`;
