import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
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
              <li>Welcome, Mate!</li>
              <li><a href="#">Logout</a></li>
            </ul>
            <section className="navbar-anonymous">
              <ul>
                <li><a href="#">Register</a></li>
                <li><a href="#">Login</a></li>
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
