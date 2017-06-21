import React, { Component } from 'react';
import hamburger from '../images/hamburger.png';
import logo from '../images/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-wrap">
          <div className="logo"><a href="#" style={{ background: `url(${logo}) no-repeat center` }}></a></div>
          <ul className="right-items">
            <li><a href="#">212.555.5555</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#"><img src={hamburger} className="hamburger" alt="hamburger"/></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
