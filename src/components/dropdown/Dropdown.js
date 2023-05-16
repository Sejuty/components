import React, { useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ children, isOpen }) => {
  const [open, setOpen] = useState(isOpen);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div
      className="relative ml-[120px] w-fit cursor-pointer"
      onClick={toggleDropdown}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.33325 7.99992C7.33325 8.17673 7.40349 8.3463 7.52851 8.47132C7.65354 8.59635 7.82311 8.66659 7.99992 8.66659C8.17673 8.66659 8.3463 8.59635 8.47132 8.47132C8.59635 8.3463 8.66659 8.17673 8.66659 7.99992C8.66659 7.82311 8.59635 7.65354 8.47132 7.52851C8.3463 7.40349 8.17673 7.33325 7.99992 7.33325C7.82311 7.33325 7.65354 7.40349 7.52851 7.52851C7.40349 7.65354 7.33325 7.82311 7.33325 7.99992Z"
          stroke="#262626"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.33325 12.6667C7.33325 12.8435 7.40349 13.013 7.52851 13.1381C7.65354 13.2631 7.82311 13.3333 7.99992 13.3333C8.17673 13.3333 8.3463 13.2631 8.47132 13.1381C8.59635 13.013 8.66659 12.8435 8.66659 12.6667C8.66659 12.4899 8.59635 12.3203 8.47132 12.1953C8.3463 12.0702 8.17673 12 7.99992 12C7.82311 12 7.65354 12.0702 7.52851 12.1953C7.40349 12.3203 7.33325 12.4899 7.33325 12.6667Z"
          stroke="#262626"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.33325 3.33341C7.33325 3.51023 7.40349 3.67979 7.52851 3.80482C7.65354 3.92984 7.82311 4.00008 7.99992 4.00008C8.17673 4.00008 8.3463 3.92984 8.47132 3.80482C8.59635 3.67979 8.66659 3.51023 8.66659 3.33341C8.66659 3.1566 8.59635 2.98703 8.47132 2.86201C8.3463 2.73699 8.17673 2.66675 7.99992 2.66675C7.82311 2.66675 7.65354 2.73699 7.52851 2.86201C7.40349 2.98703 7.33325 3.1566 7.33325 3.33341Z"
          stroke="#262626"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      {open && (
        <div className="absolute mt-1 p-2 right-0 w-[120px] bg-white @apply shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] rounded-[4px]">
          {children}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element,
};

Dropdown.defaultProps = {
  isOpen: false,
  children: null,
};

export default Dropdown;
