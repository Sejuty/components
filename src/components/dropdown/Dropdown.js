import React, { useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ isOpen, children }) => {
  const [open, setOpen] = useState(isOpen);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };

  const dropdownVisibility = `absolute mt-1 p-2 right-0 w-[120px] bg-white @apply shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] rounded-[4px]
  ${open ? "visible" : "hidden"} `;

  return (
    <div className="relative w-fit">
      <div
        className="flex items-center justify-between cursor-pointer w-fit"
        onClick={(event) => {
          toggleDropdown(event);
        }}
      >
        {children[0]}
      </div>
      <div className={dropdownVisibility}>{children[1]}</div>
    </div>
  );
};

Dropdown.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.array,
};

Dropdown.defaultProps = {
  open: false,
  children: null,
};

export default Dropdown;
