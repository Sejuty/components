import "./App.css";
import TimeSlot from "../src/components/time-slot/TimeSlot";
import SelectionPlaceholder from "./components/placeholder/SelectionPlaceholder";
import Child from "./components/placeholder/Child";
import GridLayout from "./components/prepend-grid/GridLayout";
import Menu from "./components/basic_files/Menu";
import Catagory from "./components/basic_files/Catagory";
import Item from "./components/basic_files/Item";
import ModofierGroups from "./components/basic_files/ModofierGroups";

function App() {
  return (
    <div className="App">
      
      {/* <GridLayout/> */}
      {/* <TimeSlot/> */}
      {/* <SelectionPlaceholder
        imgSrc={
          "https://images.unsplash.com/photo-1683661649729-1053579e0d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80"
        }
        isTitleOnTop ={true}
        label="this is nothing"
        children={<Child />}
        imgHeight="120px"
        imgWidth="180px"
      /> */}
      <Menu/>
      <Catagory/>
      <Item/>
      <ModofierGroups/>
    </div>
  );
}

export default App;
