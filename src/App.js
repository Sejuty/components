import Tooltip from "./components/tooltip/Tooltip";
import TimeSlot from "./components/time-slot/TimeSlot";
import Dropdown from "./components/dropdown/Dropdown";
import DropdownMenu from "./components/dropdown/DropdownMenu";
import DropdownToggle from "./components/dropdown/DropdownToggle";
import "./lib/css/allspark.min.css";
import DropdownItem from "./components/dropdown/DropdownItem";

function App() {

  const a=()=>{
    console.log("hello")
  }
  return (
    <div className="App">
    <div className="bg-secondary ">
    <Dropdown isOpen={false} shadow="lg">
        <DropdownToggle>
          <button className="bg-primary p-3 ">click</button>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className=""><button>hello 1</button></DropdownItem>
          <DropdownItem>hello 2</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    </div>
  );
}

export default App;
