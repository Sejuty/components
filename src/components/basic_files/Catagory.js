import React from "react";
import { SCInput, SCSwitch } from "../../lib/index.cjs";
import "../../lib/css/allspark.min.css";

function Catagory() {
  const handleChange = (value) => {
    console.log(value);
  };
  return (
    <div className="m-4">
      <div>
        <div className="text-[14px] font-medium">Catagory Name</div>
        <SCInput
          type="text"
          inputClass="border"
          placeholder="Catagory 1"
        ></SCInput>
      </div>
      <div>
        <div className="text-[14px] font-medium">Sequence</div>
        <SCInput type="number" inputClass="border" placeholder="1"></SCInput>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[18px] font-medium">Alcoholic Beverage</p>
          <p className="text-gray-400 text-[14px]">
            lorem ipsum dolor sit amet
          </p>
        </div>
        <SCSwitch variant="success" size="xl" handleChange={handleChange} />
      </div>
    </div>
  );
}

export default Catagory;
