import styled from "styled-components";
import { GrSearch } from "react-icons/gr";
import SearchItem from "../../components/search-item/search-item.component";

export const SearchPageContainer = styled.div`
  padding-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  height: 40px;
  width: 300px;
  border: 0.3px solid #33333343;
`;

export const SubmitButton = styled(GrSearch)`
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #33333343;
`;
export const SearchCon = styled.div``;


export const SearchItems = styled.div`
  width: 80%;
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
