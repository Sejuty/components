import React from "react";
import PropTypes from "prop-types";

const SelectionPlaceholder = ({
  imgSrc,
  imgHeight,
  imgWidth,
  label,
  position,
  children,
}) => {
  const isTitleOnTop = position === "top";
  const style = {
    height: `${imgHeight}`,
    width : `${imgWidth}`
  };

  return (
    <div className="flex flex-col items-center justify-center w-fit m-2">
      {isTitleOnTop && (
        <h2 className="font-medium text-[14px] text-black">{label}</h2>
      )}
      <img src={imgSrc} alt={label} style={style}/>
      {!isTitleOnTop && (
        <h2 className="text-[14px] font-medium text-black">{label}</h2>
      )}
      {children && (
        <div className="my-4">
          {children}
        </div>
      )}
    </div>
  );
};

SelectionPlaceholder.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgHeight: PropTypes.string,
  imgWidth: PropTypes.string,
  label: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom"]),
  children: PropTypes.element,
};

SelectionPlaceholder.defaultProps = {
  imgHeight: "144px",
  imgWidth: "144px",
  label: "",
  imgSrc:"",
  position: "bottom",
  children: null,
};

export default SelectionPlaceholder;
