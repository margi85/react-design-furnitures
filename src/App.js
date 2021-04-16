import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Categories from './components/Categories/Categories';
import EditFurnitureDetails from './components/EditFurnitureDetails/EditFurnitureDetails';
import FurnitureDetails from './components/FurnitureDetails/FurnitureDetails';
import CreateFurniture from './components/CreateFurniture/CreateFurniture';
import Register from './components/Register/Register';
import { useEffect, useState } from 'react';
import MyFurnitures from './components/MyFurnitures/MyFurnitures';
import CustomErrorBoundery from './components/CustomErrorBoundery/CustomErrorBoundery';

function App() {
  const [loggedUser, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem('user') 
    && JSON.parse(localStorage.getItem('user'));

    if (loggedUser) {
      setUser(loggedUser)
      console.log('Logged In');
    } else {
      setUser(null)
      console.log('Logged Out');
    }
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(loggedUser),
    email: loggedUser && loggedUser.email 
  };

  return (
    <div className="container">
      <Header {...authInfo} />
      {/* <h1>{loggedUser?.email}</h1> */}

      <CustomErrorBoundery>
      <Switch>
        <Route path="/" exact render={props => <Categories {...props} {...authInfo} />} />
        <Route path="/categories/:category" render={props => <Categories {...props} {...authInfo} />} />
        <Route path="/furnitures/details/:furnitureId" exact render={props => <FurnitureDetails {...props} {...authInfo} />}/>
        <Route path="/furnitures/details/:furnitureId/edit" render={props => <EditFurnitureDetails {...props} {...authInfo} />}/>
        <Route path="/login" render={props => <Login {...props} {...authInfo} />}/>
        <Route path="/register" render={props => <Register {...props} />}/>
        <Route path="/my-furnitures" render={props => <MyFurnitures {...props} {...authInfo} />}/>

        <Route path="/furniture/create" render={props => <CreateFurniture {...props} {...authInfo} />}/>
  
      </Switch>
      </CustomErrorBoundery>
      <Footer />
    </div>
  );
}

export default App;
