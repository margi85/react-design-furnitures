import { NavLink } from 'react-router-dom';
import './CategoryNavigation.css';

const CategoryNavigation = () => {
  return (
    <nav className="navbar-categories">
      <ul>
        <li><NavLink activeClassName="nav-link-selected" to="/categories/All">All</NavLink></li>
        <li><NavLink activeClassName="nav-link-selected" to="/categories/Appartments">Appartments</NavLink></li>
        <li><NavLink activeClassName="nav-link-selected" to="/categories/Houses">Houses</NavLink></li>
        <li><NavLink activeClassName="nav-link-selected" to="/categories/Hotels">Hotels</NavLink></li>
        <li><NavLink activeClassName="nav-link-selected" to="/categories/Offices">Offices</NavLink></li>

      </ul>
    </nav>
  );
};

export default CategoryNavigation;
