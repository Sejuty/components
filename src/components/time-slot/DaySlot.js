import React, { useState } from "react";
import HourSlots from "./Slots";

function TimeDivision({ day, foodSlot }) {
  const color = ["#79c5f5", "#95f7b3", "#f4f57a"];

  const [dayFoodSlot, setDayFoodSlot] = useState(foodSlot);
  const sortedColor = Object.values(dayFoodSlot)
    .map((value, index) => {
      const start_time = value.start_time;
      return { start_time, index };
    })
    .sort((a, b) => b.start_time - a.start_time)
    .map(({ index }) => color[index]);

  const slots = Object.values(dayFoodSlot).sort((a, b) => {
    return b.start_time - a.start_time;
  });
  const divs = Array.from({ length: 24 }, (_, hour) => (
    <div
      key={hour}
      className="w-1/6 h-10 bg-blue-100 border border-white relative "
    >
      {slots.map((slot, index) => {
        return (
          <HourSlots
            key={index}
            hour={hour}
            start_time={slot.start_time}
            end_time={slot.end_time}
            color={sortedColor[index]}
          />
        );
      })}
    </div>
  ));
  return (
    <div className="flex">
      <div className="flex w-[250px] h-[30px] justify-end pr-2 text-xl">
        {day}
      </div>
      {divs}
    </div>
  );
}

export default TimeDivision;
