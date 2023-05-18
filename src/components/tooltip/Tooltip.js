import React, { useRef, useEffect } from "react";

function Tooltip({ message, children, position }) {
  const childrenRef = useRef(null);

  useEffect(() => {
    if (childrenRef.current) {
      const width = childrenRef.current.offsetWidth;
      const height = childrenRef.current.offsetHeight;
      console.log("Width of children:", width);
      console.log("Height of children:", height);
      //   console.log(childrenRef)
    }
  }, []);

  const tooltipOuterClass = `relative flex ${
    position === "left"
      ? ""
      : position === "right"
      ? ""
      : position === "top"
      ? "flex-col"
      : position === "bottom"
      ? "flex-col"
      : ""
  } items-center group`;

  const tooltipBoxOuterClass = `absolute ${
    position === "top"
      ? "bottom-0 mb-6 flex-col"
      : position === "bottom"
      ? "top-0 mt-6 flex-col-reverse"
      : position === "left"
      ? "right-0 flex mr-10"
      : position === "right"
      ? "left-0 flex-row-reverse ml-10"
      : ""
  } items-center hidden group-hover:flex`;

  const tooltipBoxClass = `relative ${
    position === "left" || "right" ? "flex-1" : ""
  } z-10 p-2 text-lg text-white bg-black shadow-lg`;

  const tooltipArrowPositionClass = `w-3 h-3 ${
    position === "top"
      ? "-mt-2"
      : position === "bottom"
      ? "-mb-2"
      : position === "left"
      ? "-ml-[7.3px]"
      : position === "right"
      ? "-mr-[8px]"
      : ""
  } rotate-45 bg-black`;

  console.log("tooltipOuterClass", tooltipOuterClass);
  console.log("tooltipBoxClass", tooltipBoxClass);
  console.log(tooltipArrowPositionClass);
  console.log(tooltipBoxOuterClass);
  return (
    <div>
      {/* top */}
      <div className="flex items-center justify-center w-screen h-screen">
        <div className={tooltipOuterClass}>
          <div ref={childrenRef}>{children}</div>
          <div className={tooltipBoxOuterClass}>
            <span className={tooltipBoxClass}>{message}</span>
            <div className={tooltipArrowPositionClass}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
