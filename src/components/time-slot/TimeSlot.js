import React from "react";
import AvailableTimes from "../../json/available-times.json";
import DaySlot from "./DaySlot";

function TimeSlot() {
  const availableTimes = AvailableTimes;
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const result = Object.values(availableTimes).map((value) => value.slots[0]);

  console.log(result);
  

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
      {
        result.map((res, index)=>{
          return (
            <DaySlot day={daysOfWeek[index]} start_time={res.start_time} end_time={res.end_time}/>
          )
        })
      }
      </div>
    </div>
  );
}

export default TimeSlot;
