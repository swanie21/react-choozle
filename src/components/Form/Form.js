import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Form.scss';
import Button from '../Button/Button';

function Form (props) {
  return(
    <form className={ Styles.form }>
      <div className={ Styles.floatLabel }>
        <input
          className={ Styles.input }
          type='text'
          value={ props.firstName }
          name='firstName'
          id='firstName'
          onChange={ props.handleInput }
          placeholder="First Name"
        />
        <label htmlFor='firstName'>First Name</label>
      </div>
      <div className={ Styles.floatLabel }>
        <input
          className={ Styles.input }
          type='text'
          value={ props.lastName }
          name='lastName'
          id='lastName'
          onChange={ props.handleInput }
          placeholder="Last Name"
        />
        <label htmlFor='lastName'>Last Name</label>
      </div>
      <div className={ Styles.floatLabel }>
        <input
          className={ Styles.input }
          type='text'
          value={ props.email }
          name='email'
          id='email'
          onChange={ props.handleInput }
          placeholder="Email"
        />
        <label htmlFor='email'>Email</label>
      </div>
      <div className={ Styles.floatLabel }>
        <input
          className={ Styles.input }
          type='text'
          value={ props.phoneNumber }
          name='phoneNumber'
          id='phoneNumber'
          onChange={ props.handleInput }
          placeholder="Phone Number"
        />
        <label htmlFor='phoneNumber'>Phone Number</label>
      </div>
      <div className={ Styles.floatLabel }>
        <input
          className={ Styles.input }
          type='text'
          value={ props.company }
          name='company'
          id='company'
          onChange={ props.handleInput }
          placeholder="Company"
        />
        <label htmlFor='company'>Company</label>
      </div>
      <Button
        color={ 'red-solid' }
        label={ 'SCHEDULE A DEMO' }
        onClickFunc={ props.submitForm }
      />
    </form>
  );
}

Form.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  company: PropTypes.string,
  handleInput: PropTypes.func,
  submitForm: PropTypes.func,
};

export default Form;
