import React from 'react';
import { Link } from 'react-router';

// Import can't be in conditional so use require.
if (process.env.WEBPACK) {
  require('./Header.css'); // eslint-disable-line global-require
}

const Header = props => (
  <div className="Header">
    <h1 className="Header-title">Tour of Heros</h1>
    <nav>
    
 <Link  activeClassName="active" to="/">Dashboard</Link>
 <Link activeClassName="active"  to="/heroes">Heroes</Link>

   </nav>
  </div>
);

export default Header;
