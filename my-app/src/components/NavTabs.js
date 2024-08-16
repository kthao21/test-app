import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Body from '../pages/Body';

function NavTabs() {
    const [showBody, setShowBody] = useState(false);

    const handleLoginClick = () => {
        setShowBody(true);
        console.log('Login button clicked!');
    };

  return (
    <div>
          <header>
        <h2 className="logo">milestone</h2>
        <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button className="btnLogin-popup" onClick={handleLoginClick}>Login</button>
        </nav>
    </header>
    {showBody && <Body />}
    </div>
  );
}

export default NavTabs;