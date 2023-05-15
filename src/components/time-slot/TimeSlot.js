import React, { useEffect, useState } from "react";
import ModifiedFoodAvailability from "../../json/modified_food_availability.json";
import "../../lib/css/allspark.min.css";
import { SCButton, SCTimepicker } from "../../lib/index.cjs";
import DaySlot from "./DaySlot";
import Empty from "../../json/empty.json";

function TimeSlot() {
  const colors = [
    "#C3B1E1",
    "#FDFD96",
    "#A7C7E7",
    "#F8C8DC",
    "#FAC898",
    "#77DD77",
  ];
  const modified_food_availability = Empty.sections;
  const emptyObj = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const tempSectionSlot = {};
  const id = [];

  modified_food_availability.forEach((items, index) => {
    const temp = Object.values(items.available_times);
    id.push(items.id);
    temp.forEach((item) => {
      item.slots.forEach((s) => {
        s.color = colors[index];
        s.id = items.id;
      });
    });
  });

  const idToColorMap = id.reduce((map, currentId, index) => {
    map[currentId] = colors[index];
    return map;
  }, {});

  id.sort();

  modified_food_availability.forEach((obj) => {
    const available_times = Object.values(obj.available_times);
    for (const [key, value] of Object.entries(available_times)) {
      if (!tempSectionSlot[key]) {
        tempSectionSlot[key] = [];
      }
      tempSectionSlot[key].push(value.slots);
    }
  });

  const [allSectionSlots, setSectionSlot] = useState(
    Object.keys(tempSectionSlot).length === 0 ? emptyObj : tempSectionSlot
  );
  let sectionSlotsArray = Object.values(allSectionSlots);
  const selectedButton = 7;
  const checkedDay = [...new Array(selectedButton)].map(
    (_, idx) => idx === false
  );
  const [dayButtons, setDayButtons] = useState(checkedDay);
  const [selectedDay, setSelectedDay] = useState(0);
  const timeSlot = Object.values(sectionSlotsArray?.[selectedDay] || {});
  const [slots, setSlots] = useState(timeSlot);
  const totalSections = [...new Array(modified_food_availability.length)].map(
    (_, idx) => idx === false
  );
  const [sectionIdButtons, setSectionIdButtons] = useState(totalSections);

  useEffect(() => {
    setSlots(timeSlot);
  }, [selectedDay]);

  useEffect(() => {
    setDayButtons([...checkedDay]);
    setDayButtons(() => {
      const newState = { ...dayButtons };
      newState[0] = true;
      return newState;
    });
  }, [selectedButton]);

  const toggleCheck = (index) => {
    setSelectedDay(index);
    setDayButtons(() => {
      const newState = { ...dayButtons };
      newState[index] = !dayButtons[index];
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
    let newFoodSlot = { ...allSectionSlots };
    newFoodSlot[selectedDay] = [...slots];
    setSectionSlot(newFoodSlot);
  }, [slots]);

  const [selectedSection, setSelectedSection] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [slot, setSlot] = useState([]);
  const [sectionId, setSectionId] = useState(null);

  function groupById(slots) {
    const groupedSlotsById = slots.reduce((acc, cur) => {
      cur.forEach((item) => {
        if (acc[item.id]) {
          acc[item.id].push(item);
        } else {
          acc[item.id] = [item];
        }
      });
      return acc;
    }, {});
    return groupedSlotsById;
  }

  const groupBy = groupById(slots);

  const [groupedSlotsById, setGroupedSlotsById] = useState(groupBy);

  useEffect(() => {
    setGroupedSlotsById(groupBy);
  }, [slots]);

  const removeSlot = (key, index) => {
    const tempObj = { ...groupedSlotsById };
    tempObj[key].splice(index, 1);
    setGroupedSlotsById(tempObj);
    setSlots(Object.values(tempObj));
  };

  const handleColor = (e, index) => {
    const tempKey = e.target.textContent;
    setSectionId(tempKey);
    setSlot(groupedSlotsById[tempKey]);
    setSelectedSection(index);
    setSectionIdButtons(() => {
      const newState = [...sectionIdButtons];
      if (newState[index] === true) {
        newState[index] = true;
      } else {
        newState[index] = !sectionIdButtons[index];
      }
      if (newState[index]) {
        for (let i = 0; i < sectionIdButtons.length; i++) {
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
    temp.id = parseInt(sectionId);
    temp.color = idToColorMap[sectionId];
    let tempObj = groupById(slots);
    const isExistingKey = keyExists(tempObj, sectionId);
    if (!isExistingKey) {
      tempObj = createArrayWithKey(tempObj, sectionId);
    } else {
      tempObj[sectionId].push(temp);
    }
    const newSlots = Object.values(tempObj);
    setSlot(tempObj[sectionId]);
    setGroupedSlotsById(tempObj);
    setSlots(newSlots);
  };

  const isAllSectionSelected = sectionIdButtons.every(
    (value) => value === false
  );

  useEffect(() => {
    setSectionIdButtons(totalSections);
    setSlot([]);
  }, [selectedDay]);

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

        {sectionSlotsArray.map((_, index) => {
          return (
            <DaySlot
              key={index}
              day={daysOfWeek[index]}
              sectionSlots={sectionSlotsArray[index]}
              daySlot={slots}
              selectedDay={selectedDay}
              timeSlotIndex={index}
            />
          );
        })}
      </div>
      <div className="flex mt-6 ml-[65px]">
        <div className="w-full flex justify-between">
          {checkedDay.map((_, index) => {
            return dayButtons[index] ? (
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
          {sectionIdButtons.map((_, index) => {
            return sectionIdButtons[index] ? (
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
        {sectionId && !isAllSectionSelected && (
          <div>
            {groupedSlotsById[sectionId]?.map((s, index) => (
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
                    onClick={(e) => removeSlot(sectionId, index)}
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

        {isAllSectionSelected ? null : (
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
