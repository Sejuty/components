import React from "react";
import PropTypes from "prop-types";
import "./button.css"

/**
 * Button for Klikit Cloud / Admin interactions
 */
const SCButton = ({ variant, size, action, className, rounded, ...props }) => {
  const btnChildren = (() => {
    if (props.children) {
      return props.children;
    } else if (props.label?.length) {
      return props.label;
    } else {
      return null;
    }
  })();

  const btnClasses = (() => {
    const classes = ["sc-btn", `sc-btn-${size}`, `sc-btn-${variant}`];

    if (className?.length) {
      classes.push(className);
    }

    if (rounded) {
      classes.push("sc-btn-rounded");
    }

    return classes.join(" ");
  })();

  const args = {
    ...props,
    className: btnClasses,
    onClick: action,
  };

  return (
    <button type="button" {...args}>
      {btnChildren}
    </button>
  );
};

SCButton.propTypes = {
  /**
   * Button click handler (Optional)
   */
  action: PropTypes.func,
  /**
   * Button CSS classes (Optional)
   */
  className: PropTypes.string,
  /**
   * Button enable/disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Button content (Optional)
   */
  label: PropTypes.string,
  /**
   * Is button rounded
   */
  rounded: PropTypes.bool,
  /**
   * Size of button that needs to be shown (Required)
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  /**
   * Type of button that needs to be shown (Required)
   */
  variant: PropTypes.oneOf([
    "primary",
    "primary-outline",
    "primary-clear",
    "secondary",
    "secondary-outline",
    "secondary-clear",
    "tertiary",
    "tertiary-outline",
    "tertiary-clear",
    "success",
    "success-outline",
    "success-clear",
    "warning",
    "warning-outline",
    "warning-clear",
    "danger",
    "danger-outline",
    "danger-clear",
  ]).isRequired,
};

SCButton.defaultProps = {
  action: () => {},
  variant: "primary",
  size: "md",
  className: "",
  disabled: false,
  rounded: false,
};

export default SCButton;
