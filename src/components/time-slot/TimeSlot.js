import React, { useEffect, useState } from "react";
import ModifiedFoodAvailability from "../../json/modified_food_availability.json";
import "../../lib/css/allspark.min.css";
import { SCButton, SCTimepicker } from "../../lib/index.cjs";
import DaySlot from "./DaySlot";
import Empty from "../../json/empty.json"

function TimeSlot() {
  const colors = ["#79c5f5", "#95f7b3", "#f4f57a"];

  const modified = ModifiedFoodAvailability.sections;
  // const modified = Empty

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const tempFoodSlot2 = {};

  modified.forEach((m, index) => {
    const temp = Object.values(m.available_times);
    temp.forEach((t) => {
      t.slots.forEach((s) => {
        s.color = colors[index];
        s.id = m.id;
      });
    });
  });

  modified.forEach((obj) => {
    const available_times = Object.values(obj.available_times);
    for (const [key, value] of Object.entries(available_times)) {
      if (!tempFoodSlot2[key]) {
        tempFoodSlot2[key] = [];
      }
      tempFoodSlot2[key].push(value.slots);
    }
  });

  const [foodSlot, setFoodSlot] = useState(tempFoodSlot2);
  const foodSlotArray = Object.values(foodSlot);
  const selectedButton = 7;
  const checked = [...new Array(selectedButton)].map((_, idx) => idx === false);
  const [singleSelected, setSingleSelected] = useState(checked);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timeSlot = Object.values(foodSlotArray[selectedIndex]);
  const [slots, setSlots] = useState(timeSlot);
  const [buttonSelected, setButtonSelected] = useState([false, false, false]);

  useEffect(() => {
    setSlots(timeSlot);
  }, [selectedIndex]);

  useEffect(() => {
    setSingleSelected([...checked]);
    setSingleSelected(() => {
      const newState = { ...singleSelected };
      newState[0] = true;
      return newState;
    });
  }, [selectedButton]);

  const toggleCheck = (index) => {
    setSelectedIndex(index);
    setSingleSelected(() => {
      const newState = { ...singleSelected };
      newState[index] = !singleSelected[index];
      if (newState[index]) {
        for (let i = 0; i < selectedButton; i++) {
          if (index !== i) {
            newState[i] = false;
          }
        }
      }
      return newState;
    });
  };

  const removeSlot = (index, index2) => {
    const tempSlot = [...timeSlot];
    tempSlot[index].splice(index2, 1);
    setSlots(tempSlot);
  };

  useEffect(() => {
    let newFoodSlot = { ...foodSlot };
    newFoodSlot[selectedIndex] = { ...slots };
    setFoodSlot(newFoodSlot);
  }, [slots]);

  const buttonTitles = ["blue", "green", "yellow"];
  const [selectedSection, setSelectedSection] = useState(0);
  const [range, setRange] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [slot, setSlot] = useState([]);

  const handleColor = (index) => {
    setSlot(slots[index]);
    setSelectedSection(index);
    setButtonSelected(() => {
      const newState = [...buttonSelected];
      if (newState[index] === true) {
        newState[index] = true;
      } else {
        newState[index] = !buttonSelected[index];
      }

      if (newState[index]) {
        for (let i = 0; i < buttonSelected.length; i++) {
          if (index !== i) {
            newState[i] = false;
          }
        }
      }
      return newState;
    });
  };

  const handleStartValue = (value, index) => {
    setRange(index);
    setStart(value);
    const tempSlot = [...slot];
    tempSlot[index].start_time = value;
    setSlot(tempSlot);
    setStart(0);
  };
  const handleEndValue = (value, index) => {
    setRange(index);
    setEnd(value);
    const tempSlot = [...slot];
    tempSlot[index].end_time = value;
    setSlot(tempSlot);
    setEnd(0);
  };

  const addNewHour = (index) => {
    const temp = {};
    temp.start_time = start;
    temp.end_time = end;
    const newData = [...slots];
    newData[index].push(temp);
    setSlot(newData[index]);
    setSlots(newData);
  };

  const allFalse = buttonSelected.every((value) => value === false);

  console.log("slot", slot);
  console.log("slots", slots);

  useEffect(() => {
    setButtonSelected([false, false, false]);
    setSlot([])
  }, [selectedIndex]);

  return (
    <div className="p-4">
      <div className="flex-col space-y-2 max-w-screen">
        <div className="flex">
          <div className="w-1/6 text-xl pl-16">00:00</div>
          <div className="w-1/6 text-xl pl-[36px]">04:00</div>
          <div className="w-1/6 text-xl pl-[34px]">08:00</div>
          <div className="w-1/6 text-xl pl-[32px]">12:00</div>
          <div className="w-1/6 text-xl pl-[30px]">16:00</div>
          <div className="w-1/6 text-xl pl-[28px]">20:00</div>
          <div className="text-xl">24:00</div>
        </div>

        {foodSlotArray.map((_, index) => {
          return (
            <DaySlot
              key={index}
              day={daysOfWeek[index]}
              foodSlot={foodSlotArray[index]}
              daySlot={slots}
              selectedIndex={selectedIndex}
              timeSlotIndex={index}
            />
          );
        })}
      </div>
      <div className="flex mt-6 ml-[65px]">
        <div className="w-full flex justify-between">
          {checked.map((_, index) => {
            return singleSelected[index] ? (
              <SCButton
                key={index}
                action={(e) => toggleCheck(index)}
                size="xl"
                variant="primary"
              >
                {daysOfWeek[index]}
              </SCButton>
            ) : (
              <SCButton
                key={index}
                action={(e) => toggleCheck(index)}
                size="xl"
                variant="primary-outline"
              >
                {daysOfWeek[index]}
              </SCButton>
            );
          })}
        </div>
      </div>

      <div>
        <div className="mt-4">
          {buttonTitles.map((title, index) => {
            return buttonSelected[index] ? (
              <SCButton
                key={index}
                variant="primary"
                size="sm"
                action={(e) => handleColor(index)}
              >
                {title}
              </SCButton>
            ) : (
              <SCButton
                key={index}
                variant="primary-outline"
                size="sm"
                action={(e) => handleColor(index)}
              >
                {title}
              </SCButton>
            );
          })}
        </div>
        {slot.map((s, index) => {
          return (
            <div className="flex-col" key={index}>
              <div className="w-full flex justify-between">
                <div className="px-4 py-2 rounded flex-1">
                  <SCTimepicker
                    label="Start Time"
                    value={s.start_time}
                    handleChange={(value) => {
                      handleStartValue(value, index);
                    }}
                  />
                </div>
                <div className="px-4 py-2 rounded flex-1">
                  <SCTimepicker
                    label="End Time"
                    value={s.end_time}
                    handleChange={(value) => {
                      handleEndValue(value, index);
                    }}
                  />
                </div>
                <div
                  onClick={(e) => removeSlot(selectedSection, index)}
                  className="cursor-pointer px-4 py-2 rounded flex-1 text-center mt-7 text-purple-500 font-medium"
                >
                  <div>Remove Hour</div>
                </div>
                <div className="px-4 py-2 rounded flex-1 text-center mt-7">
                  <div>Custom Hours</div>
                </div>
              </div>
            </div>
          );
        })}

        {allFalse ? null : (
          <SCButton
            size="lg"
            variant="primary-outline"
            className="ml-[20px] mt-4"
            action={() => addNewHour(selectedSection)}
          >
            <span className="ml-2">Add New Hour</span>
          </SCButton>
        )}
      </div>
    </div>
  );
}

export default TimeSlot;
