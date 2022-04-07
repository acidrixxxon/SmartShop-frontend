import Navigation from './components/common/Navigation/Navigation';
import Header from './components/Header/Header';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import './_base.scss';

function App() {
  return (
    <div className="App" id="App" onClick={(e) => e.stopPropagation()}>
      <Header />
      <Navigation />
      <MobileNavigation />
      <ProductDetails />
    </div>
  );
}

export default App;
