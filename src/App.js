import Tooltip from "./components/tooltip/Tooltip";
import TimeSlot from "./components/time-slot/TimeSlot";
import Dropdown from "./components/dropdown/Dropdown";
import DropdownMenu from "./components/dropdown/DropdownMenu";
import DropdownToggle from "./components/dropdown/DropdownToggle";
import "./lib/css/allspark.min.css";
import DropdownItem from "./components/dropdown/DropdownItem";

function App() {
  return (
    <div className="App">
      {/* <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet
        nec mauris at mattis. Mauris ut purus ac sapien congue dapibus id tempus
        nunc. Curabitur tincidunt, diam eget vulputate porttitor, quam enim
        rhoncus enim, at ultricies tellus massa ut sapien. Vivamus ullamcorper
        metus arcu, faucibus tempus nisi eleifend sed. Vivamus mattis, neque vel
        consequat tempus, eros dui maximus dui, sed lacinia elit massa vitae
        nulla. Nullam in mauris enim. Sed sit amet elit a neque mollis vulputate
        in nec odio. Nullam ipsum sapien, porttitor in elit in, convallis
        consectetur massa. Praesent consectetur eros ut leo tincidunt elementum.
        Cras id lectus ac nisi tincidunt iaculis. Integer at placerat tellus.
        Fusce dictum ex vel libero tempus, in scelerisque nisi ullamcorper.
        Aliquam dolor nulla, egestas vitae velit ullamcorper, efficitur lacinia
        risus. Nunc lacinia tristique leo, in vulputate nibh blandit sed.
        Maecenas non porttitor sapien. Sed rutrum eleifend orci ac pellentesque.
        In et ex mauris. Quisque non congue libero. Nam nulla nisl, dignissim
        vel nunc ac, vestibulum posuere neque. Nulla vitae gravida velit, id
        fringilla purus. Maecenas iaculis bibendum posuere. Vivamus vestibulum
        ex massa <Tooltip
          content="nishat tafannum nishat tafannum nishat tafannum"
          position="bottom-right"
          caret={true}
          variant="danger"
          trigger="hover"
        >
         <div className="underline bg-purple-500 p-4"> vel placerat eros</div>
        </Tooltip> malesuada eget. Vivamus venenatis facilisis mi, sed interdum dolor
        ullamcorper id. Vivamus in nisi metus. Integer non leo vestibulum,
        scelerisque lectus vitae, efficitur lectus. Nullam sed nulla dui.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Pellentesque a cursus nunc. Donec tincidunt placerat nibh, a mattis
        ipsum suscipit sed. Proin tempor augue quis commodo maximus. Suspendisse
        risus arcu, ultrices sed feugiat ut, malesuada non odio. Nam in arcu vel
        orci lobortis ornare nec sed libero.
      </div> */}
      <Dropdown
        children={<button className="text-purple-400"> hello</button>}
        isOpen={false}
      />
      <Dropdown isOpen={false}>
        <DropdownToggle>
          <button>click</button>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem label="button 1"></DropdownItem>
          <DropdownItem label="button 2"></DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {/* <TimeSlot/> */}
    </div>
  );
}

export default App;
