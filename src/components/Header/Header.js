import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="site-header">
      <nav className="navbar">
        <section className="navbar-dashboard">
          <div className="first-bar">
            <Link to="/">Furniture designs</Link>
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
    </header>
  )
};

export default Header;
