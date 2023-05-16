import React from "react";
import PropTypes from "prop-types";

function DropdownItem({ label, labelClass, name, nameClass, onClick }) {
  return (
    <div className="p-2 text-[12px] flex cursor-pointer" onClick={onClick}>
      <div className={`${labelClass} text-[12px] font-medium`}>{label}</div>
      <i className={`${name} text-lg ${nameClass}`} />
    </div>
  );
}

DropdownItem.propTypes = {
  label: PropTypes.string,
  labelClass: PropTypes.string,
  name: PropTypes.string,
  nameClass: PropTypes.string,
  onClick: PropTypes.func,
};

DropdownItem.defaultProps = {
  label: "button",
  labelClass: "",
  name: "",
  nameClass: "",
  onClick: () => { console.log("clicked")},
};
export default DropdownItem;
