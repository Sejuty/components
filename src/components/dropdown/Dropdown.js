import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ isOpen, children }) => {
  const [open, setOpen] = useState(isOpen);

  const toggleDropdown = e => {
    e.stopPropagation();
    setOpen(!open);
  };

  const dropdownClassName = `action-dropdown absolute mt-1 p-1 right-0 bg-white rounded-sm
  ${open ? 'visible' : 'hidden'}`;

  return (
    <div className="relative">
      <div
        role="presentation"
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        {children[0]}
      </div>
      <div className={dropdownClassName}>{children[1]}</div>
    </div>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.array,
};

Dropdown.defaultProps = {
  isOpen: false,
  children: null,
};

export default Dropdown;
