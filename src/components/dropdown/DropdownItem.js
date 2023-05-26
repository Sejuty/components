import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function DropdownItem({ onDropdownItemClick, isDisable, ...props }) {
  
  const handleClick = () => {
    onDropdownItemClick();
  };

  const dropdownItemClassName = `p-1 text-xs flex items-center gap-x-1 cursor-pointer ${
    isDisable ? "pointer-events-none opacity-50 text-gray-300" : ""
  }`;

  return (
    <div
      role="presentation"
      className={dropdownItemClassName}
      onClick={handleClick}
    >
      <div>{props.children}</div>
    </div>
  );
}

DropdownItem.propTypes = {
  onDropdownItemClick: PropTypes.func,
  isDisable: PropTypes.bool,
  trigger: PropTypes.oneOf(["hover", "click"]),
};

DropdownItem.defaultProps = {
  onDropdownItemClick: () => {},
  isDisable: false,
  trigger: "click",
};
export default DropdownItem;
