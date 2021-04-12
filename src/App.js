import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import EditFurnitureDetails from './components/EditFurnitureDetails/EditFurnitureDetails';
import FurnitureDetails from './components/FurnitureDetails/FurnitureDetails';
import CreateFurniture from './components/CreateFurniture/CreateFurniture';


function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/categories/:category" component={Categories} />
        <Route path="/furnitures/details/:furnitureId" exact component={FurnitureDetails}/>
        <Route path="/furnitures/details/:furnitureId/edit" component={EditFurnitureDetails}/>

        <Route path="/furniture/create" component={CreateFurniture}/>
  
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
