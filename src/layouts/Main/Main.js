import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <div className="main">
    Hello
    <hr />
    {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
};

Main.defaultProps = {
  children: []
};

export default Main;
