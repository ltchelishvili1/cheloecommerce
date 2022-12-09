import { createContext, useState, useEffect } from "react";
import { DUMMYCATEGORIES } from "./dummy";
import { gql, useQuery } from '@apollo/client';
export const CategoriesContext = createContext({
  categoriesMap: {},
  handleSearch: () => {},
  search: "",
  setSearch: () => {},
  isSearchOpen: false,
  setIsSearchOpen: () => {},
});




const setSearchResult = (categoriesMap, searchField) => {
  const resultArray =
    categoriesMap["all"] &&
    categoriesMap["all"].filter((categoryItem) => {
      return categoryItem.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
  return resultArray;
};



    const COLLECTIONS = gql`
  query cat {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;




export const CategoriesProvider = ({ children }) => {
  const { loading, error, data } = useQuery(COLLECTIONS);
  console.log(data)
 // graphQL endpoint for now I use dummy data
  const [categoriesMap, setCategoriesMap] = useState({});
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
      const { categories } = DUMMYCATEGORIES;
      const collectionsMap = categories.reduce((acc, collection) => {
        const { name, products } = collection;
        acc[name.toLowerCase()] = products;
        return acc;
      }, {});
      setCategoriesMap(collectionsMap);
  }, []);

  const handleSearch = (searchField) => {
    return setSearchResult(categoriesMap, searchField);
  };

  const value = {
    categoriesMap,
    handleSearch,
    search,
    setSearch,
    isSearchOpen,
    setIsSearchOpen,
  };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
