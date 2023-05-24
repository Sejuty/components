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
  ...props
}) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const caretVisibility = caret ? "" : "hidden";

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

  return (
    <div
      className={`tooltip-outer-class tooltip-outer-class-${position}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div>{props.children}</div>
      {isTooltipOpen ? (
        <>
          <div
            className={`tooltip-box-outer-class tooltip-box-outer-class-${position}`}
          >
            <span
              className={`tooltip-box-class tooltip-box-class-${position} bg-${variant}`}
            >
              {content}
            </span>
            <div
              className={`tooltip-arrow-position-class tooltip-arrow-position-class-${position} bg-${variant} ${caretVisibility}`}
            ></div>
          </div>
        </>
      ) : null}
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
};

Tooltip.defaultProps = {
  position: "top",
  content: "This is tooltip",
  caret: true,
  trigger: "hover",
  timeout: 3000,
  variant: "primary",
};

export default Tooltip;
