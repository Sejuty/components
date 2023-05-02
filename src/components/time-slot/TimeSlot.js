import React, { useEffect, useState } from "react";
import DaySlot from "./DaySlot";
import FoodAvailability from "../../json/food_availability.json";
import { SCButton, SCTimepicker } from "../../lib/index.cjs";
import "../../lib/css/allspark.min.css";

function TimeSlot() {
  const foodAvailability = FoodAvailability;
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const tempFoodSlot = {};
  const color = ["#79c5f5", "#95f7b3", "#f4f57a"];

  const [foodSlot, setFoodSlot] = useState(tempFoodSlot);

  foodAvailability.food_availability.forEach((obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (!tempFoodSlot[key]) {
        tempFoodSlot[key] = {};
      }
      tempFoodSlot[key][foodAvailability.food_availability.indexOf(obj)] =
        value.slots[0];
    }
  });

  const foodSlotArray = Object.values(foodSlot);

  const selectedButton = 7;
  const checked = [...new Array(selectedButton)].map((_, idx) => idx === false);
  const [singleSelected, setSingleSelected] = useState(checked);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slot = foodSlotArray[selectedIndex];
  const timeSlot = Object.values(slot);
  const [slots, setSlots] = useState(timeSlot);
  const [dayFoodSlot, setDayFoodSlot] = useState(foodSlot[selectedIndex]);

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
    // console.log(slots)

    // console.log(i);

    // const tempFoodSlot = [...foodSlotArray]

    // const temp = tempFoodSlot.forEach((food, index) => {
    //   if (index === selectedIndex) {
    //     const f = Object.values(food);
    //     f.splice(i, 1);
    //     setSlots(f);
    //   }
    // });

    // console.log(temp)

    // setFoodSlot({})

    console.log("hi");

    // console.log(tempFoodSlot)

    // console.log(foodSlotArray)
    // const newFoodSlot = { ...foodSlot };
    // console.log(slots);
    // newFoodSlot[selectedIndex] = { ...slots };
    // console.log("newFoodSlot", newFoodSlot);
  };
  useEffect(() => {
    let newFoodSlot = { ...foodSlot };
    newFoodSlot[selectedIndex] = { ...slots };
    setFoodSlot(newFoodSlot)
  }, [slots]);

  console.log(foodSlot)

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
              dayFoodSlot={dayFoodSlot}
              color = {color}
              daySlot={slots}
              selectedIndex={selectedIndex}
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
        {slots.map((s, index) => {
          return (
            <div className="w-full flex justify-between" key={index}>
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
