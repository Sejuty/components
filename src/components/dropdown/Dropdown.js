import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import DropdownMenu from "./DropdownMenu";
import "./dropdown.css";

const Dropdown = ({ isOpen, trigger, shadow, children }) => {
  
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        closeDropdownMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const [open, setOpen] = useState(isOpen);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setOpen(false);
    }
  };

  const closeDropdownMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const dropdownFirstChildStyle = `dropdown-position ${
    open ? "visible" : ""
  } dropdown-shadow-${shadow}`;

  return (
    <div className="dropdown-button-position">
      <div
        role="presentation"
        className="dropdown-button"
        ref={dropdownRef}
        onClick={toggleDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children[0]}
      </div>
      <div className={dropdownFirstChildStyle}>
        <DropdownMenu children={children[1]} open={open} />
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.array,
  isDisable: PropTypes.bool,
  trigger: PropTypes.oneOf(["hover", "click"]),
  shadow: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
};

Dropdown.defaultProps = {
  isOpen: false,
  children: null,
  isDisable: false,
  trigger: "click",
  shadow: "md",
};

export default Dropdown;
