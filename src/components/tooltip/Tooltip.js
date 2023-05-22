import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
function Tooltip({
  content,
  position,
  caret,
  trigger,
  timeout,
  variant,
  ...props
}) {
  const childrenRef = useRef(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

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

  const caretVisibility = caret ? "" : "hidden";

  const tooltipOuterClass = `relative flex ${
    position === "left"
      ? ""
      : position === "right"
      ? ""
      : position === "top-left"
      ? "flex-col"
      : position === "bottom-left"
      ? "flex-col"
      : position === "bottom"
      ? "justify-center"
      : position === "top"
      ? "justify-center"
      : position === "top-right"
      ? "justify-end"
      : position === "bottom-right"
      ? "justify-end"
      : ""
  } group`;

  const tooltipBoxOuterClass = `absolute ${
    position === "top"
      ? ` mb-1 flex-col items-center`
      : position === "bottom"
      ? `mt-1 flex-col-reverse items-center `
      : position === "left"
      ? `flex mr-1 items-center `
      : position === "right"
      ? `flex-row-reverse ml-1 items-center`
      : position === "top-left"
      ? `mb-1 flex-col ml-2 mr-2`
      : position === "bottom-left"
      ? `flex-col-reverse mt-1 ml-2 `
      : position === "top-right"
      ? `mb-1 flex-col items-end mr-2`
      : position === "bottom-right"
      ? "mt-1 flex-col-reverse items-end mr-2"
      : ""
  } flex ${
    position === "top" || position === "top-right" || position === "top-left"
      ? "bottom-full"
      : position === "bottom" ||
        position === "bottom-right" ||
        position === "bottom-left"
      ? "top-full"
      : position === "left"
      ? "right-full"
      : position === "right"
      ? "left-full"
      : ""
  }`;

  const tooltipBoxClass = `relative ${
    position === "left" || position === "right" ? "flex-1" : ""
  } z-10 px-3 py-2 font-medium ${
    variant === "primary"
      ? "bg-[#6A13F4] text-[#FFFFFF]"
      : variant === "secondary"
      ? "bg-[#F0E7FE] text-[#6A13F4]"
      : variant === "tertiary"
      ? "bg-[#EBEBEB] text-[#000000]"
      : variant === "success"
      ? "bg-[#16B050] text-[#FFFFFF]"
      : variant === "danger"
      ? "bg-[#F43F5E] text-[#FFFFFF]"
      : variant === "warning"
      ? "bg-[#F3C318] text-[#FFFFFF]"
      : variant === "clear"
      ? "bg-white text-black"
      : ""
  } rounded-[8px] max-w-[200px] max-h-[200px] overflow-y-auto`;

  const tooltipArrowPositionClass = `w-[12px] h-[12px] rounded-[1px] ${
    position === "top"
      ? "-mt-2"
      : position === "bottom"
      ? "-mb-2"
      : position === "left"
      ? "-ml-2"
      : position === "right"
      ? "-mr-2"
      : position === "top-left"
      ? "ml-[10px] -mt-2"
      : position === "bottom-left"
      ? "-mb-2 ml-[10px]"
      : position === "top-right"
      ? "mr-[10px] -mt-2"
      : position === "bottom-right"
      ? "mr-[10px] -mb-2"
      : ""
  } rotate-45 ${
    variant === "primary"
      ? "bg-[#6A13F4]"
      : variant === "secondary"
      ? "bg-[#F0E7FE]"
      : variant === "tertiary"
      ? "bg-[#EBEBEB]"
      : variant === "success"
      ? "bg-[#16B050]"
      : variant === "danger"
      ? "bg-[#F43F5E]"
      : variant === "warning"
      ? "bg-[#F3C318]"
      : variant === "clear"
      ? "bg-white"
      : ""
  } ${caretVisibility}`;

  // console.log(tooltipOuterClass);
  // console.log(tooltipBoxOuterClass);
  // console.log(tooltipBoxClass);
  // console.log(tooltipArrowPositionClass);

  return (
    <div>
      <div className="">
        <div
          className={tooltipOuterClass}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <div ref={childrenRef}>{props.children}</div>
          <div className={tooltipBoxOuterClass}>
            <span className={tooltipBoxClass}>{content}</span>
            <div className={tooltipArrowPositionClass}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  position: PropTypes.string,
  content: PropTypes.string.isRequired,
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
  children: null,
  content: "",
  caret: true,
  trigger: "hover",
  timeout: 3000,
  variant: "primary",
};

export default Tooltip;

// Primary: Background #6A13F4, Color: #FFFFFF
// Secondary: Background #F0E7FE, Color: #6A13F4
// Tertiary: Background #EBEBEB, Color: #000000
// Success: Background #16B050, Color: #000000
// Danger: Background #F43F5E, Color: #000000
// Warning: Background #F3C318, Color: #000000
