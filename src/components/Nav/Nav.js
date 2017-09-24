import React from 'react';
import Styles from './Nav.scss';
import Button from '../Button/Button';

function Header () {
  return (
    <nav className={ Styles.menu }>
      <ul className={ Styles.menu__list }>
        <li className={ Styles.menu__list_item }>Why Choozle</li>
        <li className={ Styles.menu__list_item }>Features</li>
        <li className={ Styles.menu__list_item }>Pricing</li>
        <li className={ Styles.menu__list_item }>Resources</li>
        <li className={ Styles.menu__list_item }>Company</li>
        <li className={ Styles.menu__list_item }>Agencies</li>
      </ul>
      <Button
        color={ 'red' }
        label={ 'Login' }
      />
      <Button
        color={ 'green' }
        label={ 'Contact Us' }
      />
    </nav>
  );
}

export default Header;
