import React, { useRef } from "react";
import { SCButton } from "../../lib/index.cjs";
import "../../lib/css/allspark.min.css";
import "./fileInput.css";
import PropTypes from "prop-types";

function FileInput({
  label,
  filetype,
  multiple,
  isDisabled,
  isLabelPostionVertical,
  contentHint,
  isContenHintVertical,
  variant
}) {
  const lablePositionStyle = `${
    isLabelPostionVertical ? "sc-label-vertical" : "sc-label-horizontal"
  } m-[100px]`;

  const fileInputRef = useRef(null);
  const contentHintRef = useRef(null);

  const handleButtonClick = (e) => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const fileListLength = e.target.files.length;
    contentHintRef.current.innerHTML = `${fileListLength} ${
      fileListLength === 1 ? "file" : "files"
    } uploaded `;
  };

  return (
    <div className={lablePositionStyle}>
      <div>{label}</div>

      <div
        className={`content-hint-position ${
          isContenHintVertical
            ? "content-hint-position-vertical"
            : "content-hint-position-horizontal"
        }`}
      >
        <div onClick={handleButtonClick} className="text-center">
          <SCButton label="click me" variant={variant} size="xl"  disabled={isDisabled} />
        </div>

        <input
          type="file"
          id="file-input"
          filetype={filetype}
          multiple={multiple}
          disabled={isDisabled}
          ref={fileInputRef}
          onChange={handleFileChange}
          className="input-none"
        />
        <button
          onClick={handleButtonClick}
          className={`content-hint ${
            contentHint
              ? `${
                  isContenHintVertical
                    ? "content-hint-vertical"
                    : "content-hint-horizontal"
                }`
              : "hidden"
          }
          `}
          ref={contentHintRef}
          disabled={isDisabled}
        >
          {contentHint}
        </button>
      </div>
    </div>
  );
}

FileInput.propTypes = {
  label: PropTypes.string,
  filetype: PropTypes.string,
  multiple: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLabelPositionVertical: PropTypes.bool,
  contentHint: PropTypes.string,
  isContentHintVertical: PropTypes.bool,
};

FileInput.defaultProps = {
  filetype: "",
  multiple: false,
  isDisabled: false,
  isLabelPositionVertical: false,
  contentHint: "",
  isContentHintVertical: false,
};

export default FileInput;
