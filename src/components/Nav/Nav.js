import React from 'react';
import Styles from './Nav.scss';
import Button from '../Button/Button';

function Nav () {
  return (
    <nav className={ Styles.menu }>
      <div className={ Styles.menu__desktop }>
        <ul className={ Styles.menu__desktop_list }>
          <li className={ Styles.menu__desktop_list_item }>Why Choozle</li>
          <li className={ Styles.menu__desktop_list_item }>Features</li>
          <li className={ Styles.menu__desktop_list_item }>Pricing</li>
          <li className={ Styles.menu__desktop_list_item }>Resources</li>
          <li className={ Styles.menu__desktop_list_item }>Company</li>
          <li className={ Styles.menu__desktop_list_item }>Agencies</li>
        </ul>
        <Button
          color={ 'red' }
          label={ 'Login' }
        />
        <Button
          color={ 'green' }
          label={ 'Contact Us' }
        />
      </div>
      <div className={ Styles.menu__mobile }>
        <input className={ Styles.menu__mobile_input } id='hamburgerMenu' type='checkbox' value='true' />
        <label className={ Styles.menu__mobile_label } htmlFor='hamburgerMenu' value='true'>menu</label>
        <span className={ Styles.menu__mobile_span }></span>
        <span className={ Styles.menu__mobile_span }></span>
        <span className={ Styles.menu__mobile_span }></span>
        <ul className={ Styles.menu__mobile_list }>
          <li className={ Styles.menu__mobile_list_item }>Why Choozle</li>
          <li className={ Styles.menu__mobile_list_item }>Features</li>
          <li className={ Styles.menu__mobile_list_item }>Pricing</li>
          <li className={ Styles.menu__mobile_list_item }>Resources</li>
          <li className={ Styles.menu__mobile_list_item }>Company</li>
          <li className={ Styles.menu__mobile_list_item }>Agencies</li>
          <div className={ Styles.menu__mobile_buttons }>
            <Button
              color={ 'red' }
              label={ 'Login' }
            />
            <Button
              color={ 'green' }
              label={ 'Contact Us' }
            />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
