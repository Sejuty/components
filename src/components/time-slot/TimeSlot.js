import React, { useEffect, useState } from "react";
import DaySlot from "./DaySlot";
import FoodAvailability from "../../json/food_availability.json";

function TimeSlot() {
  const foodAvailability = FoodAvailability;
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const foodSlot = {};
  foodAvailability.food_availability.forEach((obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (!foodSlot[key]) {
        foodSlot[key] = {};
      }
      foodSlot[key][foodAvailability.food_availability.indexOf(obj)] =
        value.slots[0];
    }
  });

  const foodSlotArray = Object.values(foodSlot);

  const selectedButton = 7;
  const checked = [...new Array(selectedButton)].map((_, idx) => idx === false);
  const [singleSelected, setSingleSelected] = useState(checked);
  const [selectedAll, setSelectedAll] = useState(false);

  useEffect(() => {
    setSingleSelected([...checked]);
  }, [selectedButton]);

  const toggleCheck = (index) => {
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

  // const selectAll = () => {
  //   const value = !selectedAll;
  //   setSelectedAll(value);
  //   setSingleSelected(() => {
  //     const newState = { ...singleSelected };
  //     for (let i = 0; i < selectedButton; i++) {
  //       newState[i] = value;
  //     }
  //     return newState;
  //   });
  // };
  console.log(singleSelected);
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
              foodSlot={foodSlot[index]}
            />
          );
        })}
      </div>
      <div className="flex mt-6 ml-[65px]">
        <div className="w-full flex justify-between">
          {checked.map((_, index) => {
            return singleSelected[index] ? (
              <div
                key={index}
                onClick={(e) => toggleCheck(index)}
                className="px-4 py-2 rounded flex-1 ml-3 text-center bg-purple-500 text-white transition-all ease-in cursor-pointer duration-400"
              >
                {daysOfWeek[index]}
              </div>
            ) : (
              <div
                key={index}
                onClick={(e) => toggleCheck(index)}
                className="px-4 py-2 border-purple-200 border text-purple-500 rounded flex-1 ml-3 text-center transition-all ease-in cursor-pointer duration-400"
              >
                {daysOfWeek[index]}
              </div>
            );
          })}

          {/* {selectedAll ? (
            <div
              onClick={selectAll}
              className="px-4 py-2 rounded flex-1 ml-3 text-center bg-purple-500 text-white transition-all ease-in cursor-pointer duration-400"
            >
              All
            </div>
          ) : (
            <div
              onClick={selectAll}
              className="px-4 py-2 border-purple-200 border text-purple-500 rounded flex-1 ml-3 text-center transition-all ease-in cursor-pointer duration-400"
            >
              All
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default TimeSlot;
