import React, { useEffect, useState } from "react";
import ModifiedFoodAvailability from "../../json/modified_food_availability.json";
import "../../lib/css/allspark.min.css";
import { SCButton, SCTimepicker } from "../../lib/index.cjs";
import DaySlot from "./DaySlot";
import Empty from "../../json/empty.json";

function TimeSlot() {
  const colors = ["#79c5f5", "#95f7b3", "#f4f57a"];

  const modified = Empty.sections;
  const id = [];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const tempFoodSlot2 = {};

  modified.forEach((m, index) => {
    const temp = Object.values(m.available_times);
    id.push(m.id);
    temp.forEach((t) => {
      t.slots.forEach((s) => {
        s.color = colors[index];
        s.id = m.id;
      });
    });
  });
const emptyObj = {"0": [], "1": [], "2": [], "3": [], "4": [], "5": [], "6": []}
  const idToColorMap = id.reduce((map, currentId, index) => {
    map[currentId] = colors[index];
    return map;
  }, {});

  id.sort();

  modified.forEach((obj) => {
    const available_times = Object.values(obj.available_times);
    for (const [key, value] of Object.entries(available_times)) {
      if (!tempFoodSlot2[key]) {
        tempFoodSlot2[key] = [];
      }
      tempFoodSlot2[key].push(value.slots);
    }
  });

 
  const [foodSlot, setFoodSlot] = useState(tempFoodSlot2===null ? emptyObj : emptyObj);
  let foodSlotArray = Object.values(foodSlot);
  const selectedButton = 7;
  const checked = [...new Array(selectedButton)].map((_, idx) => idx === false);
  const [singleSelected, setSingleSelected] = useState(checked);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timeSlot = Object.values(foodSlotArray?.[selectedIndex]|| {});
  const [slots, setSlots] = useState(timeSlot);
  const sectionButton = [...new Array(3)].map((_, idx) => idx === false);
  const [buttonSelected, setButtonSelected] = useState(sectionButton);

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

  useEffect(() => {
    let newFoodSlot = { ...foodSlot };
    newFoodSlot[selectedIndex] = [...slots];
    setFoodSlot(newFoodSlot);
  }, [slots]);

  const [selectedSection, setSelectedSection] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [slot, setSlot] = useState([]);
  const [pid, setPid] = useState(null);

  function groupById(slots) {
    const idKey = slots.reduce((acc, cur) => {
      cur.forEach((item) => {
        if (acc[item.id]) {
          acc[item.id].push(item);
        } else {
          acc[item.id] = [item];
        }
      });
      return acc;
    }, {});
    return idKey;
  }

  const groupBy = groupById(slots);

  const [idKey, setIdKey] = useState(groupBy);

  useEffect(() => {
    setIdKey(groupBy);
  }, [slots]);

  const removeSlot = (key, index) => {
    const tempObj = { ...idKey };
    tempObj[key].splice(index, 1);
    setIdKey(tempObj);
    setSlots(Object.values(tempObj));
  };

  const handleColor = (e, index) => {
    const tempKey = e.target.textContent;
    setPid(tempKey);
    setSlot(idKey[tempKey]);
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
    setStart(value);
    const tempSlot = [...slot];
    tempSlot[index].start_time = value;
    setSlot(tempSlot);
    setStart(0);
  };
  const handleEndValue = (value, index) => {
    setEnd(value);
    const tempSlot = [...slot];
    tempSlot[index].end_time = value;
    setSlot(tempSlot);
    setEnd(0);
  };

  function createArrayWithKey(obj, key) {
    const temp = {};
    temp.start_time = start;
    temp.end_time = end;
    temp.color = idToColorMap[key];
    temp.id = parseInt(key);
    if (!(key in obj)) {
      obj[key] = [];
      obj[key].push(temp);
    }
    return obj;
  }

  function keyExists(obj, key) {
    return key in obj;
  }

  const addNewHour = (index) => {
    const temp = {};
    temp.start_time = start;
    temp.end_time = end;
    temp.id = parseInt(pid);
    temp.color = idToColorMap[pid];
    //grouping by ID
    let tempObj = groupById(slots);
    const exists = keyExists(tempObj, pid);
    //if doesn't exist create new corresponding object
    if (!exists) {
      tempObj = createArrayWithKey(tempObj, pid);
    } else {
      tempObj[pid].push(temp);
    }
    const a = Object.values(tempObj);
    setSlot(tempObj[pid]);
  
    setIdKey(tempObj);
    setSlots(a);
  };



  const allFalse = buttonSelected.every((value) => value === false);

  useEffect(() => {
    setButtonSelected(sectionButton);
    setSlot([]);
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
          const x = foodSlotArray[index];

          return (
            <DaySlot
              key={index}
              day={daysOfWeek[index]}
              foodSlot={x}
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
          {buttonSelected.map((_, index) => {
            return buttonSelected[index] ? (
              <SCButton
                key={index}
                variant="primary"
                size="sm"
                action={(e) => handleColor(e, index)}
              >
                {id[index]}
              </SCButton>
            ) : (
              <SCButton
                key={index}
                variant="primary-outline"
                size="sm"
                action={(e) => handleColor(e, index)}
              >
                {id[index]}
              </SCButton>
            );
          })}
        </div>
        {pid && !allFalse && (
          <div>
            {idKey[pid]?.map((s, index) => (
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
                    onClick={(e) => removeSlot(pid, index)}
                    className="cursor-pointer px-4 py-2 rounded flex-1 text-center mt-7 text-purple-500 font-medium"
                  >
                    <div>Remove Hour</div>
                  </div>
                  <div className="px-4 py-2 rounded flex-1 text-center mt-7">
                    <div>Custom Hours</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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
