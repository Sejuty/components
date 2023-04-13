import React from "react";

function HourSlot({ hour, start_time, end_time }) {
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

  return (
    <div>
      {hour === end_hours ? (
        <div
          className="absolute inset-0 bg-purple-500"
          style={{ width: `${(end_minutes * 100) / 60}%` }}
        ></div>
      ) : (
        <div
          className="absolute inset-0 bg-purple-500"
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
  );
}

export default HourSlot;
