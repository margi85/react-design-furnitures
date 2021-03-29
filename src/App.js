import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/categories/:category" component={Categories} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
