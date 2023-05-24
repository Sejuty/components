import React from 'react';
import PropTypes from 'prop-types';

const DropdownToggle = ({ children }) => <div>{children}</div>;

DropdownToggle.propTypes = {
  children: PropTypes.element,
};

DropdownToggle.defaultProps = {
  children: null,
};
export default DropdownToggle;
