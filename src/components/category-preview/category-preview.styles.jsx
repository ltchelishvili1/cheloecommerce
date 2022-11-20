import styled from "styled-components";

export const PreviewCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1rem;
  @media (max-width: 928px) {
    grid-template-columns: 1fr 1fr ;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }
`;
