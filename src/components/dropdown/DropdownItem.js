import React from 'react';
import PropTypes from 'prop-types';

function DropdownItem({ label, labelClass, iconName, iconNameClass, onClick }) {
  return (
    <div
      role="presentation"
      className="p-1 text-xs flex items-center gap-x-1 cursor-pointer"
      onClick={onClick}
    >
      <i className={`${iconName} text-xs ${iconNameClass}`} />
      <div className={`${labelClass} text-xs font-medium whitespace-nowrap`}>{label}</div>
    </div>
  );
}

DropdownItem.propTypes = {
  label: PropTypes.string,
  labelClass: PropTypes.string,
  iconName: PropTypes.string,
  iconNameClass: PropTypes.string,
  onClick: PropTypes.func,
};

DropdownItem.defaultProps = {
  label: '',
  labelClass: '',
  iconName: '',
  iconNameClass: '',
  onClick: () => {},
};
export default DropdownItem;
