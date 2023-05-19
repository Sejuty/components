import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
function Tooltip({ message, children, position, caret }) {
  const childrenRef = useRef(null);

  const [childrenWidth, setChildrenWidth] = useState(0);
  const [childrenHeight, setChildrenHeight] = useState(0);

  useEffect(() => {
    if (childrenRef.current) {
      const width = childrenRef.current.offsetWidth;
      const height = childrenRef.current.offsetHeight;
      setChildrenHeight(height);
      setChildrenWidth(width);
    }
  }, []);

  const leftStyle = { right: `${childrenWidth}px` };
  const rightSttyle = { left: `${childrenWidth}px` };
  const topStyle = { bottom: `${childrenHeight}px` };
  const bottomStyle = { top: `${childrenHeight}px` };

  const caretVisibility = caret ? "" : "hidden";

  const selectedStyle =
    position === "left"
      ? leftStyle
      : position === "right"
      ? rightSttyle
      : position === "top" ||
        position === "top-left" ||
        position === "top-right"
      ? topStyle
      : position === "bottom" ||
        position === "bottom-left" ||
        position === "bottom-right"
      ? bottomStyle
      : "";

  const tooltipOuterClass = `relative flex ${
    position === "left"
      ? ""
      : position === "right"
      ? ""
      : position === "top" ||
        position === "top-left" ||
        position === "top-right"
      ? "flex-col"
      : position === "bottom" ||
        position === "bottom-left" ||
        position === "bottom-right"
      ? "flex-col"
      : ""
  } items-center group`;

  const tooltipBoxOuterClass = `absolute ${
    position === "top" || position === "top-left" || position === "top-right"
      ? ` mb-1 flex-col`
      : position === "bottom" ||
        position === "bottom-left" ||
        position === "bottom-right"
      ? ` mt-1 flex-col-reverse`
      : position === "left"
      ? `flex mr-1`
      : position === "right"
      ? `flex-row-reverse ml-1`
      : ""
  } items-center hidden group-hover:flex`;

  const tooltipBoxClass = `relative ${
    position === "left" || position === "right"
      ? "flex-1"
      : position === "top-left" || position === "bottom-left"
      ? "right-[30px]"
      : position === "top-right" || position === "bottom-right"
      ? "left-[30px]"
      : ""
  } z-10 px-3 py-2 text-[12px] text-white bg-blue-700 w-[109px] shadow-lg rounded-[8px]`;

  const tooltipArrowPositionClass = `w-[12px] h-[12px] rounded-[1px] ${
    position === "top" || position === "top-left" || position === "top-right"
      ? "-mt-2"
      : position === "bottom" ||
        position === "bottom-left" ||
        position === "bottom-right"
      ? "-mb-2"
      : position === "left"
      ? "-ml-2"
      : position === "right"
      ? "-mr-2"
      : ""
  } rotate-45 bg-blue-700 ${caretVisibility}`;

  return (
    <div>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className={tooltipOuterClass}>
          <div ref={childrenRef}>{children}</div>
          <div className={tooltipBoxOuterClass} style={selectedStyle}>
            <span className={tooltipBoxClass}>{message}</span>
            <div className={tooltipArrowPositionClass}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  position :PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  message: PropTypes.string.isRequired,
  caret: PropTypes.bool,
};

Tooltip.defaultProps = {
  position : "top",
  children: null,
  message: "this is a tooltip",
  caret: true
};

export default Tooltip;
