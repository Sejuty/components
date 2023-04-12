import React from "react";
import DaySlot from "./DaySlot";

function TimeSlot() {
  return (
    <div className="p-4">
      <div className="flex-col space-y-2 max-w-screen">
        <div className="flex">
          <div className="w-1/6 text-xl pl-10">00:00</div>
          <div className="w-1/6 text-xl pl-[15px]">04:00</div>
          <div className="w-1/6 text-xl pl-[15px]">08:00</div>
          <div className="w-1/6 text-xl pl-[15px]">12:00</div>
          <div className="w-1/6 text-xl pl-[15px]">16:00</div>
          <div className="w-1/6 text-xl pl-[15px]">20:00</div>
          <div>24:00</div>
        </div>
        <DaySlot day={"Sun"} />
        {/* <DaySlot day={"Mon"} />
        <DaySlot day={"Tue"} />
        <DaySlot day={"Wed"} />
        <DaySlot day={"Thu"} />
        <DaySlot day={"Fri"} />
        <DaySlot day={"Sat"} /> */}
      </div>
    </div>
  );
}

export default TimeSlot;
