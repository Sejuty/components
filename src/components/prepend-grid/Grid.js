import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

function Grid({
  grid,
  handleDeleteGrid,
  handleDropdownToggle,
  isDropdownOpen,
  handleMouseLeave,
}) {
  const [startX, setStartX] = useState("");

  const dropDownPos = (e, index) => {
    const pos = e.pageX - 36;
    setStartX(pos);
    handleDropdownToggle(index);
  };
  const gridStyle = {
    left: `${startX}px`,
  };

  return grid.map((data, index) => {
    return (
      <div key={index}>
        <div
          onMouseLeave={() => handleMouseLeave(index)}
          className="w-[72px] h-[72px] bg-white rounded"
        >
          {index}
          <button
            onClick={(e) => {
              dropDownPos(e, index);
            }}
            className="focus:outline-none hover:bg-gray-100 rounded p-2 transition-colors duration-150 ease-in-out"
          >
            <HiDotsHorizontal
              className="h-3 w-3 text-gray-400"
              aria-hidden="true"
            />
          </button>
          {isDropdownOpen[index] && (
            <div
              style={gridStyle}
              className={`absolute z-30 mt-2 w-[100px] rounded shadow-lg bg-white divide-y divide-gray-100`}
            >
              <div className="py-1">
                <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left text-sm">
                  Make Default
                </button>
                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  Update
                </button>
                <button
                  onClick={() => handleDeleteGrid(index)}
                  className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 w-full text-left"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  });
}

export default Grid;
