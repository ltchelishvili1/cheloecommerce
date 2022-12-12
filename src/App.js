import { useContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import Category from './components/category/category.component';
import { CategoriesContext } from './contexts/categories-context';
import Checkout from './routes/checkout/checkout.component';

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';
import ProductCard from './routes/product-card/product-card.component';
import SearchPage from './routes/search-page/search-component';




function App() {

const {categoriesMap} = useContext(CategoriesContext)
  return (
    <div>
     <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/item/:itemId" element={<ProductCard/>}/>
        <Route path='/checkout' element={<Checkout />} />
        {Object.keys(categoriesMap).map((category,index)=>
         <Route key={index} path={`/category=${category}`} element={<Category category={category} products={categoriesMap[category]} />} />
        )}
        <Route path='/search' element={<SearchPage />} />
      
      </Route>
      
    </Routes>
    </div>
  );
}

export default App;
