import "./App.css";
import "./lib/css/allspark.min.css";
import Tooltip from "./components/tooltip/Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip message="Coming soon in the fair!" position="left">
        <button>button</button>
      </Tooltip>
    </div>
  );
}

export default App;
