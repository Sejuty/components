import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ isOpen, children, isDisable }) => {
  const [open, setOpen] = useState(isOpen);

  const toggleDropdown = e => {
    e.stopPropagation();
    if(isDisable){
      setOpen(false)
    }
    setOpen(!open);
  };

  const dropdownClassName = `relative ${isDisable?"pointer-events-none opacity-50 text-gray-300": ""}`
  console.log(isDisable , dropdownClassName)

  const dropdownFirstChildrenClassName = `action-dropdown absolute mt-1 p-1 right-0 bg-white rounded-sm
  ${open ? 'visible' : 'hidden'}`;

  return (
    <div className={dropdownClassName}>
      <div
        role="presentation"
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        {children[0]}
      </div>
      <div className={dropdownFirstChildrenClassName}>{children[1]}</div>
    </div>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.array,
  isDisable : PropTypes.bool
};

Dropdown.defaultProps = {
  isOpen: false,
  children: null,
  isDisable : false
};

export default Dropdown;

