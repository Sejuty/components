import React from "react";
import HourSlots from "./Slots";

function TimeDivision({ day, start_time, end_time }) {
  // const slots = Slots.slots;
  // slots.sort((a, b) => b.start_time - a.start_time);
  const divs = Array.from({ length: 24 }, (_, hour) => (
    <div
      key={hour}
      className="w-1/6 h-10 bg-blue-100 border border-white relative "
    >
      {/* {slots.map((slot) => {
        return (
          <HourSlots
            hour={hour}
            start_time={slot.start_time}
            end_time={slot.end_time}
          />
        );
      })} */}

      <HourSlots hour={hour} start_time={start_time} end_time={end_time} />
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
