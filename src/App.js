import "./App.css";
import "./lib/css/allspark.min.css";
import Tooltip from "./components/tooltip/Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip message="This is a tooltip" position="bottom" caret={false}>
        <button className="bg-black text-white rounded px-3 py-2">button</button>
      </Tooltip>
    </div>
  );
}

export default App;
