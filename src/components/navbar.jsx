import React from 'react';

const Navbar = ({ totalCounters }) => (
  <nav className="navbar navbar-light bg-light">
    <a href="#" className="nav-brand">
      Navbar{' '}
      <span className="badge badge-pill badge-secondary">{totalCounters}</span>
    </a>
  </nav>
);

export default Navbar;
