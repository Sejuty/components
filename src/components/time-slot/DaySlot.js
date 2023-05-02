import React, { useState } from "react";
import HourSlots from "./Slots";

function TimeDivision({ day, dayFoodSlot, sortedColor,daySlots}) {
  const divs = Array.from({ length: 24 }, (_, hour) => (
    <div
      key={hour}
      className="w-1/6 h-10 bg-blue-100 border border-white relative "
    >
      {daySlots.map((slot, index) => {
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
