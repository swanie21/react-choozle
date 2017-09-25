import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.scss';

function Button (props) {
  return (
    <button className={ Styles[props.color] } onClick={ props.onClickFunc }>
      <p className={ Styles.label }>{ props.label }</p>
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  onClickFunc: PropTypes.func,
};

export default Button;
