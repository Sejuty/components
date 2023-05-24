import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "./tooltip.css";
function Tooltip({
  content,
  position,
  caret,
  trigger,
  timeout,
  variant,
  className,
  shadow,
  ...props
}) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const caretVisibility = caret ? "" : "hidden";
  const tooltipVisibility = isTooltipOpen ? "" : "hidden";

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setIsTooltipOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setIsTooltipOpen(false);
    }
  };

  const handleClick = () => {
    if (trigger === "click") {
      setIsTooltipOpen(!isTooltipOpen);
    }
  };

  useEffect(() => {
    let timer;
    if (isTooltipOpen && timeout) {
      timer = setTimeout(() => {
        setIsTooltipOpen(false);
      }, timeout);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isTooltipOpen, timeout]);

  const tooltipOuterClass = `tooltip-outer-class tooltip-outer-class-${position}`;
  const tooltipBoxOuterClass = `tooltip-box-outer-class tooltip-box-outer-class-${position} ${tooltipVisibility}`;
  const tooltipBoxClass = `tooltip-box-class tooltip-box-class-${position} bg-${variant} shadow-${shadow} `;
  const tooltipCaretPositionClass = `tooltip-caret-position-class tooltip-caret-position-class-${position} bg-${variant} ${caretVisibility} z-20`;

  return (
    <div className={`${className}`}>
      <div
        className={tooltipOuterClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div>{props.children}</div>
        <div className={tooltipBoxOuterClass}>
          <span className={tooltipBoxClass}>{content}</span>
          <div className={tooltipCaretPositionClass}></div>
        </div>
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  position: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number,
  ]).isRequired,
  caret: PropTypes.bool,
  trigger: PropTypes.oneOf(["click", "hover"]),
  timeout: PropTypes.number,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "danger",
    "warning",
    "clear",
  ]),
  className: PropTypes.string,
  shadow: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
};

Tooltip.defaultProps = {
  position: "top",
  content: "This is tooltip",
  caret: true,
  trigger: "hover",
  timeout: 3000,
  variant: "primary",
  className: "",
  shadow: "none",
};

export default Tooltip;
