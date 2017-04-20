import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    type={props.type}
    onClick={props.onClick}
  >
    {props.children
  }</button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  type: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: null,
  type: 'button',
  onClick: () => {}
};

export default Button;
