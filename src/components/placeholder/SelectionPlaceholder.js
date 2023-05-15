import React from "react";
import PropTypes from "prop-types";

const SelectionPlaceholder = ({
  imgSrc,
  imgHeight,
  imgWidth,
  label,
  isTitleOnTop,
  children,
}) => {
  const style = {
    height: `${imgHeight}`,
    width: `${imgWidth}`,
  };

  return (
    <div className="flex flex-col items-center justify-center w-fit m-2 gap-y-4">
      <div className={`flex  items-center justify-center ${isTitleOnTop ? "flex-col-reverse" : "flex-col"}`}>
        <img src={imgSrc} alt={label} style={style} />
        <h2 className="font-medium text-[14px] text-black">{label}</h2>
      </div>
      {children}
    </div>
  );
};

SelectionPlaceholder.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgHeight: PropTypes.string,
  imgWidth: PropTypes.string,
  label: PropTypes.string.isRequired,
  position: PropTypes.bool,
  children: PropTypes.element,
};

SelectionPlaceholder.defaultProps = {
  imgHeight: "144px",
  imgWidth: "144px",
  label: "",
  imgSrc: "",
  isTitleOnTop: false,
  children: null,
};

export default SelectionPlaceholder;
