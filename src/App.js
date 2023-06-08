import Dropdown from "./components/dropdown/Dropdown";
import DropdownMenu from "./components/dropdown/DropdownMenu";
import DropdownToggle from "./components/dropdown/DropdownToggle";
import "./lib/css/allspark.min.css";
import DropdownItem from "./components/dropdown/DropdownItem";

import BranchesNearYou from "./components/branches/BranchesNearYou";

function App() {
  const a=()=>{
    console.log("a")
  }
  return (
    <div className="App">
     <BranchesNearYou/>
    </div>
  );
}

export default App;
