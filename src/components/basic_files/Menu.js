import React from "react";
import { SCInput } from "../../lib/index.cjs";
import "../../lib/css/allspark.min.css";

function Menu() {
  return (
    <div className="m-4">
      <div className="text-[14px] font-medium">Menu Name</div>
      <SCInput
        type="email"
        inputClass="border"
        placeholder="olivia@untitledui.com"
      ></SCInput>
    </div>
  );
}

export default Menu;
