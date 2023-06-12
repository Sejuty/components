import "./lib/css/allspark.min.css";
import FileInput from "../src/components/file_input/FileInput";
import { SCButton } from "./lib/index.cjs";

function App() {
  return (
    <div className="App">
      <FileInput
        label="Profile Picture"
        isVertical
        variant="primary-outline"
        hint="upload Image"
        childButton={<SCButton label="click me" variant="success" size="xl" />}
      />
    </div>
  );
}

export default App;
