import React, { Component } from 'react';
import logo from '../../images/logo.png';
import Styles from './Header.scss';
import Nav from '../Nav/Nav';

class Header extends Component {
  render() {
    return (
      <header className={ Styles.header } role='navigation'>
        <img className={ Styles.logo } src={ logo } alt='logo' />
        <Nav />
      </header>
    );
  }
}

export default Header;
