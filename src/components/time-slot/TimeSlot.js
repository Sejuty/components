import React, { useEffect, useState } from "react";
import FoodAvailability from "../../json/food_availability.json";
import ModifiedFoodAvailability from "../../json/modified_food_availability.json";
import "../../lib/css/allspark.min.css";
import { SCButton, SCTimepicker } from "../../lib/index.cjs";
import DaySlot from "./DaySlot";

function TimeSlot() {
  const foodAvailability = FoodAvailability.food_availability;
  const colors = ["#79c5f5", "#95f7b3", "#f4f57a"];

  const modified = ModifiedFoodAvailability.sections;

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const tempFoodSlot = {};
  const tempFoodSlot2 = {};

  modified.forEach((m, index) => {
    const temp = Object.values(m.available_times);
    temp.forEach((t) => {
      t.slots.color = colors[index];
    });
  });

  modified.forEach((obj) => {
    const available_times = Object.values(obj.available_times);
    console.log(obj.available_times);
    const id = obj.color;
    for (const [key, value] of Object.entries(available_times)) {
      if (!tempFoodSlot2[key]) {
        tempFoodSlot2[key] = [];
      }
      tempFoodSlot2[key].push(value.slots);
    }
  });

  // foodAvailability.forEach((obj) => {
  //   for (const [key, value] of Object.entries(obj)) {
  //     if (!tempFoodSlot[key]) {
  //       tempFoodSlot[key] = {};
  //     }
  //     tempFoodSlot[key][foodAvailability.indexOf(obj)] = value.slots[0];
  //   }
  // });
  const [foodSlot, setFoodSlot] = useState(tempFoodSlot2);
  const foodSlotArray = Object.values(foodSlot);
  const selectedButton = 7;
  const checked = [...new Array(selectedButton)].map((_, idx) => idx === false);
  const [singleSelected, setSingleSelected] = useState(checked);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [deletedIndex, setDeletedIndex] = useState(undefined);
  const slot = foodSlotArray[selectedIndex];
  const timeSlot = Object.values(slot);
  const [slots, setSlots] = useState(timeSlot);

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

  const removeSlot = (i) => {
    const tempSlot = [...timeSlot];
    tempSlot.splice(i, 1);
    setSlots(tempSlot);
  };
  useEffect(() => {
    let newFoodSlot = { ...foodSlot };
    newFoodSlot[selectedIndex] = { ...slots };
    setFoodSlot(newFoodSlot);
  }, [slots]);

  const tempColor = [];

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
              tempColor={tempColor}
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

      <div className="flex-col mt-6 ml-[45px]">
        {slots.map((slot, index) => {
          return slot.map((s,index2) => {
            return (
              <div className="w-full flex justify-between" key={index2}>
                <div className="px-4 py-2 rounded flex-1 ">
                  <SCTimepicker label="Start Time" value={s.start_time} />
                </div>
                <div className="px-4 py-2 rounded flex-1">
                  <SCTimepicker label="End Time" value={s.end_time} />
                </div>
                <div
                  onClick={(e) => removeSlot(index)}
                  className="cursor-pointer px-4 py-2 rounded flex-1 text-center mt-7 text-purple-500 font-medium"
                >
                  <div>Remove Hour</div>
                </div>
                <div className="px-4 py-2 rounded flex-1 text-center mt-7">
                  <div>Custom Hours</div>
                </div>
              </div>
            );
          });
        })}
      </div>
      <div>
        <SCButton
          size="lg"
          variant="primary-outline"
          className="ml-[60px] mt-4"
        >
          <span className="ml-2">Add New Hour</span>
        </SCButton>
      </div>
    </div>
  );
}

export default TimeSlot;
