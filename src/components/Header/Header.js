import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const loggedUser = localStorage.getItem('user') 
    && JSON.parse(localStorage.getItem('user'));
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
              <li>Welcome, {(loggedUser && loggedUser.email) || 'Mate'}!</li>
              <li><a href="#">Logout</a></li>
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
