import styled, {css} from 'styled-components'

export const CartIconCont = styled.div`
    cursor: pointer;
    ${({ hide }) =>
    hide &&
    css`
      @media (max-width: 728px) {
        display: none;
      }
    `};
`
