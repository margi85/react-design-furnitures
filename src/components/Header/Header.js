import './Header.css';

const Header = () => {
  return (
    <header id="site-header">
      <nav className="navbar">
        <section className="navbar-dashboard">
          <div className="first-bar">
            <a href="#">Furniture designs</a>
            <a className="button" href="#">My furniture</a>
            <a className="button" href="#">Add furniture</a>
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
