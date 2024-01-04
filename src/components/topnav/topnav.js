import React from 'react';
import './topnav.css';

function Topnav(){
  return(
    <div className="topnav" data-testid="Topnav">
    <nav>
        <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#login'>Login</a></li>
      </ul>
    </nav>
  </div>
  )
}

Topnav.propTypes = {};

Topnav.defaultProps = {};

export default Topnav;
