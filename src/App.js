import Navigation from './components/common/Navigation/Navigation';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './_base.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
