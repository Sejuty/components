import React from "react";
import "../../lib/css/allspark.min.css";
import { SCInput } from "../../lib/index.cjs.js";

function ModofierGroups() {
  return (
    <div className="m-4">
      <div>
        <div className="text-[14px] font-medium">Modifier Group Name</div>
        <SCInput
          type="text"
          inputClass="border"
          placeholder="Catagory 1"
        ></SCInput>
      </div>
      <div>
        <div className="text-[14px] font-medium">Modifier Rules</div>
        <div className="text-[14px] text-gray-400">
          lorem ipsum dolor sit amet
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <SCInput type="text" inputClass="border" placeholder="_"></SCInput>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <SCInput type="text" inputClass="border" placeholder="_"></SCInput>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <SCInput type="text" inputClass="border" placeholder="_"></SCInput>
      </div>
    </div>
  );
}

export default ModofierGroups;
