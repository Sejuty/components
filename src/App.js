import "./App.css";
import Dropdown from "./components/dropdown/Dropdown";
import DropdownMenu from "./components/dropdown/DropdownMenu";
import DropdownToggle from "./components/dropdown/DropdownToggle";
import "./lib/css/allspark.min.css";
import DropdownItem from "./components/dropdown/DropdownItem";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Dropdown isOpen={false}>
        <DropdownToggle>
          <button>click</button>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem label="button 1"></DropdownItem>
          <DropdownItem label="button 2"></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default App;
