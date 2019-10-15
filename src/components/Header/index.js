import React from 'react';

import './styles.css';

const Header = () => (
  <header id="main-header">
    <a href="/" id="logo-header">
      KS
    </a>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
