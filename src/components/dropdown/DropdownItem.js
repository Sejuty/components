import React from "react";
import PropTypes from "prop-types";
import "./dropdown.css"

function DropdownItem({ onDropdownItemClick, isDisable, ...props }) {
  const handleClick = () => {
    onDropdownItemClick();
  };

  const dropdownItemsStyle = `dropdown-item ${
    isDisable ? "dropdown-item-disabled" : ""
  }`;

  return (
    <div
      role="presentation"
      className={dropdownItemsStyle}
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
