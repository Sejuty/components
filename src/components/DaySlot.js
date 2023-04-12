import React from "react";
import AvailableTime from "../json/available-times.json";

function TimeDivision({ day }) {
  const availableTime = AvailableTime;

  const start_time = availableTime[0].slots[0].start_time;
  const end_time = availableTime[0].slots[0].end_time;

  function timeConversion(number) {
    if (number > 2359 || number < 1) return [];
    const minutes = number % 100;
    const hours = (number - minutes) / 100;
    return [hours, minutes];
  }

  const [start_hours, start_minutes] = timeConversion(start_time);
  const [end_hours, end_minutes] = timeConversion(end_time);

  const trackStartHour = new Array(24).fill(false);
  for (let i = 0; i < start_hours; i++) {
    trackStartHour[i] = true;
  }

  const trackEndHour = new Array(24).fill(false);
  for (let i = 0; i < end_hours; i++) {
    trackEndHour[i] = true;
  }

  const divs = Array.from({ length: 24 }, (_, hour) => (
    <div
      key={hour}
      className="w-1/6 h-10 bg-blue-100 border border-white relative"
    >
      {hour === end_hours ? (
        <div
          className="absolute inset-0 bg-blue-500"
          style={{ width: `${(end_minutes * 100) / 60}%` }}
        ></div>
      ) : (
        <div
          className="absolute inset-0 bg-blue-500"
          style={{ width: `${trackEndHour[hour] ? 100 : 0}%` }}
        ></div>
      )}
      {hour === start_hours ? (
        <div
          className="absolute inset-0 bg-blue-100"
          style={{ width: `${(start_minutes * 100) / 60}%` }}
        ></div>
      ) : (
        <div
          className="absolute inset-0 bg-blue-100"
          style={{ width: `${trackStartHour[hour] ? 100 : 0}%` }}
        ></div>
      )}
    </div>
  ));
  return (
    <div className="flex">
      <div className="flex w-[50px] h-[30px] justify-end pr-2 text-xl">
        {day}
      </div>
      {divs}
    </div>
  );
}

export default TimeDivision;
