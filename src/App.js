import {Routes, Route} from 'react-router-dom'
import Checkout from './routes/checkout/checkout.component';

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';
import ProductCard from './routes/product-card/product-card.component';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/item/:itemId" element={<ProductCard/>}/>
        <Route path='/checkout' element={<Checkout />} />
      </Route>
      
    </Routes>
    </div>
  );
}

export default App;
