import React from "react";
import HourSlots from "./Slot";

function DaySlot({ day, sectionSlots }) {
  const sorted = [];
  for (let i = 0; i < sectionSlots.length; i++) {
    for (let j = 0; j < sectionSlots[i].length; j++) {
      sorted.push(sectionSlots[i][j]);
    }
  }

  const slots = sorted.sort((a, b) => {
    return b.start_time - a.start_time;
  });

  const divs = Array.from({ length: 24 }, (_, hour) => {
    return slots.length ? (
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
              color={slot.color}
            />
          );
        })}
      </div>
    ) : (
      <div
        key={hour}
        className="w-1/6 h-10 bg-gray-200 border border-white relative "
      >
        {slots.map((slot, index) => {
          return (
            <HourSlots
              key={index}
              hour={hour}
              start_time={slot.start_time}
              end_time={slot.end_time}
              color={slot.color}
            />
          );
        })}
      </div>
    );
  });
  return (
    <div className="flex">
      <div className="flex w-[250px] h-[30px] justify-end pr-2 text-xl">
        {day}
      </div>
      {divs}
    </div>
  );
}

export default DaySlot;
