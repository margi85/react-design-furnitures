import './Header.css';
import { Link } from 'react-router-dom';
import { logout } from '../../services/authService';
import { useEffect,  } from 'react';

const Header = ({
  isAuthenticated,
  email
}) => {
 
  function logoutHandler () {
    logout()
    .then(data => {
      localStorage.removeItem('user');
      window.location.replace('/')
    })
  };

  useEffect(() => {
    const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
    if (user) {
      const userToken = user['user-token'];
      const eMail = user['email']
    console.log(userToken, eMail);
    }   
  }, [isAuthenticated])
  
  return (
    <header id="site-header">
      <nav className="navbar">
        <section className="navbar-dashboard">
          <div className="first-bar">
            <Link className="furn-design-logo" to="/">Furniture designs</Link>
            <Link className="button" to="#">My furniture</Link>
            <Link className="button" to="/furniture/create">Add furniture</Link>
          </div>
          <div className="second-bar">
            <ul>
              <li>Welcome {email}!</li>
              <li><button type="button" onClick={logoutHandler}>Logout</button></li>
            </ul>
            <section className="navbar-anonymous">
              <ul>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </section>
          </div>
        </section>
      </nav>
      {/* <div className="bottom-header">fa</div> */}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
      </style>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
      </style>
    </header>
  )
};

export default Header;
