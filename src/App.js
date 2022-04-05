import Navigation from './components/common/Navigation/Navigation';
import Header from './components/Header/Header';
import MobileNavigation from './components/MobileNavigation/MobileNavigation';
import Home from './pages/Home/Home';
import './_base.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MobileNavigation />
      <Home />
    </div>
  );
}

export default App;
