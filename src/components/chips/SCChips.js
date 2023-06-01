import React from "react";
import PropTypes from "prop-types";
import "./chips.css"

/**
 * Chips for Klikit Cloud / Admin interactions
 */
const SCChips = ({
  disabled,
  action,
  actionIcon,
  actionIconPosition,
  variant,
  size,
  ...props
}) => {
  const chipsChildren = (() => {
    if (props.children) {
      return props.children;
    } else if (props.label?.length) {
      let items = [props.label];
      const clickAction = action || (() => {});

      if (actionIcon) {
        const actIcon = <div className={actionIcon} onClick={clickAction} />;

        if (actionIconPosition === "left") {
          items = [actIcon, props.label];
        } else {
          items = [props.label, actIcon];
        }
      }

      return items;
    } else {
      return null;
    }
  })();

  const chipsClasses = (() => {
    const classes = ["sc-chips", `sc-chips-${size}`, `sc-chips-${variant}`];

    if (disabled) {
      classes.push("sc-chips-disabled");
    }

    return classes.join(" ");
  })();

  return <div className={chipsClasses}>{chipsChildren}</div>;
};

SCChips.propTypes = {
  /**
   * Chips click handler (Optional)
   */
  action: PropTypes.func,
  /**
   * Chips action icon click handler (Optional)
   */
  actionIcon: PropTypes.string,
  /**
   * Chips action icon click handler (Optional)
   */
  actionIconPosition: PropTypes.oneOf(["left", "right"]).isRequired,
  /**
   * Chips enable/disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Chips label
   */
  label: PropTypes.string,
  /**
   * Size of chips that needs to be shown (Required)
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]).isRequired,
  /**
   * Type of chips that needs to be shown (Required)
   */
  variant: PropTypes.oneOf([
    "primary",
    "primary-outline",
    "secondary",
    "secondary-outline",
    "tertiary",
    "tertiary-outline",
    "success",
    "success-outline",
    "warning",
    "warning-outline",
    "danger",
    "danger-outline",
  ]).isRequired,
};

SCChips.defaultProps = {
  action: () => {},
  actionIconPosition: "right",
  disabled: false,
  size: "md",
  variant: "primary",
};

export default SCChips;
