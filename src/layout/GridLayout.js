import { useState, useRef, useEffect } from "react";
import Grid from "../components/Grid";
import "./style.css";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const GridLayout = () => {
  const initialGrid = [{ name: "one" }, { name: "two" }, { name: "three" }];
  const [grid, setGrid] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const gridRef = useRef(null);
  const checkArrayLength = grid.length;
  const dropdown = [...new Array(checkArrayLength)].map(
    (_, idx) => idx === false
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(dropdown);
  useEffect(() => {
    setIsDropdownOpen([...dropdown]);
  }, [checkArrayLength]);

  const handleDropdownToggle = (index) => {
    setIsDropdownOpen(() => {
      const newState = { ...isDropdownOpen };
      newState[index] = !isDropdownOpen[index];
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setIsDropdownOpen(() => {
      const newState = { ...isDropdownOpen };
      newState[index] = false;
      return newState;
    });
  };

  const handleAddGrid = () => {
    if (grid.length < 8) {
      const newGrid = { name: "okk" };
      setGrid([newGrid, ...grid]);
    }
  };
  const handleDeleteGrid = (index) => {
    const newGrid = [...grid];
    newGrid.splice(index, 1);
    setGrid(newGrid);
  };
  return (
    <div className="relative flex m-4 rounded-lg">
      <div className="flex bg-gray-300 rounded-lg">
        {checkArrayLength === 0 ? null : checkArrayLength === 8 ? (
          <div
            ref={gridRef}
            className=" scroll-smooth pl-4 pr-4 bg-gray-300 cursor-pointer flex overflow-x-scroll space-x-4 my-4 w-fit max-w-[368px]"
            onScroll={(e)=>{
          
            }}
          >
            <Grid
              grid={grid}
              handleDeleteGrid={handleDeleteGrid}
              handleDropdownToggle={handleDropdownToggle}
              isDropdownOpen={isDropdownOpen}
              dropdown={dropdown}
              handleMouseLeave={handleMouseLeave}
              gridRef={gridRef}
              scrollLeft={scrollLeft}
            />
            
          </div>
        ) : (
          <div
            ref={gridRef}
            className="scroll-smooth container pl-4 bg-gray-300 cursor-pointer flex overflow-x-scroll space-x-4 my-4 w-fit max-w-[264px]"
            onScroll={(e)=>{
              setScrollLeft(gridRef.current.scrollLeft)
            }}
          >
            <Grid
              grid={grid}
              handleDeleteGrid={handleDeleteGrid}
              handleDropdownToggle={handleDropdownToggle}
              isDropdownOpen={isDropdownOpen}
              dropdown={dropdown}
              handleMouseLeave={handleMouseLeave}
              gridRef={gridRef}
              scrollLeft={scrollLeft}
            />
          </div>
        )}
        {checkArrayLength < 8 ? (
          <div className="bg-gray-300 h-[104px] w-[104px] flex justify-center items-center rounded-lg">
            <div
              onClick={handleAddGrid}
              className="cursor-pointer pt-[10px] text-4xl bg-white relative rounded-lg w-[72px] h-[72px]"
            >
              <MdOutlineAddPhotoAlternate className="text-gray-500 absolute top-4 right-4" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GridLayout;
