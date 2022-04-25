import Navigation from './components/common/Navigation/Navigation';
import Header from './components/Header/Header';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import Home from './pages/Home/Home';
import NotFound from './components/common/NotFound/NotFound'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import { Routes,Route } from 'react-router-dom'
import './_base.scss';
import CatalogPage from './pages/Catalog/CatalogPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import CartPage from './pages/Cart/CartPage';

function App() {
  return (
    <div className="App" id="App" onClick={(e) => e.stopPropagation()}>
      <Header />
      <Navigation />
      <MobileNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product/:id" element={<ProductDetails />} exact/>
        <Route path="/catalog" element={<CatalogPage />} exact />
        <Route path="/category/:id" element={<CategoryPage />} /> exact />
        <Route path="/cart" element={<CartPage />} exact />
      </Routes>
    </div>
  );
}

export default App;
