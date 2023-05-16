import "./App.css";
import Dropdown from "./components/dropdown/Dropdown";

function App() {
  return (
    <div className="App">
      <Dropdown children={<button className="text-purple-400"> hello</button>} isOpen={false} />
    </div>
  );
}

export default App;
