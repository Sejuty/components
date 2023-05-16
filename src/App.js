import "./App.css";
import Catagory from "./components/basic_files/Catagory";
import Item from "./components/basic_files/Item";
import Menu from "./components/basic_files/Menu";
import ModifierGroups from "./components/basic_files/ModifierGroups";
import Dropdown from "./components/dropdown/Dropdown";

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
      {/* <Menu/>
      <Catagory/>
      <Item/>
      <ModifierGroups/> */}
      <Dropdown children={<button className="text-purple-400"> hello</button>} isOpen={false} />
    </div>
  );
}

export default App;
