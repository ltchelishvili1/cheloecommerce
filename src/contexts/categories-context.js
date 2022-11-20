import { createContext, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

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
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    if(data){
        const {categories} = data
        const collectionsMap = categories.reduce((acc,collection)=>{
            const {name, products } = collection
            acc[name.toLowerCase()] = products;
            return acc;
          }, {});
          setCategoriesMap(collectionsMap)
       }
   
  }, [data]);

  const value = { categoriesMap, loading };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
