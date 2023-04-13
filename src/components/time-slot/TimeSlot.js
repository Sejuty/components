import React from "react";
import AvailableTimes from "../../json/available-times.json";
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

        {foodSlotArray.map((res, index) => {
          return (
            <DaySlot
              key={index}
              day={daysOfWeek[index]}
              foodSlot={foodSlot[index]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TimeSlot;
