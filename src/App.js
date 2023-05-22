import Tooltip from "./components/tooltip/Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip
        content="hello my name is sejuty hello my name is sejuty hello hello my name is sejuty hello my name is sejuty hello hello my name is sejuty hello my name is sejuty hello hello my name is sejuty hello my name is sejuty hellov "
        position="top"
        caret={true}
        variant="primary"
      >
        <button className="bg-black text-white rounded px-10 py-2 w-fit">
          button
        </button>
      </Tooltip>
    </div>
  );
}

export default App;
