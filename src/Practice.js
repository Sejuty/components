import React,{useState} from "react";
import { SCTimepicker } from "./lib/index.cjs";
import "./lib/css/allspark.min.css";

function Practice() {
  const [start, setStart] = useState(400);

  const handleChange = (value) => {
    setStart(value);
  };

  return (
    <div>
      <SCTimepicker
        label="Start Time"
        value={start}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Practice;
