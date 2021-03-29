import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import FurnitureDetails from './components/FurnitureDetails/FurnitureDetails';

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/categories/:category" component={Categories} />
        <Route path="/furnitures/details/:furnitureId" component={FurnitureDetails}/>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
