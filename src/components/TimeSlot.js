import React from "react";
import DaySlot from "./DaySlot";

function TimeSlot() {
  return (
    <div className="p-4">
      <div className="flex-col space-y-2 max-w-screen">
        <div className="flex">
          <div className="w-1/6 pl-14">00:00</div>
          <div className="w-1/6 pl-6">04:00</div>
          <div className="w-1/6 pl-6">08:00</div>
          <div className="w-1/6 pl-6">12:00</div>
          <div className="w-1/6 pl-6">16:00</div>
          <div className="w-1/6 pl-6">20:00</div>
          <div>24:00</div>
        </div>
        <DaySlot day={"Sun"} />
        <DaySlot day={"Mon"} />
        <DaySlot day={"Tue"} />
        <DaySlot day={"Wed"} />
        <DaySlot day={"Thu"} />
        <DaySlot day={"Fri"} />
        <DaySlot day={"Sat"} />
      </div>
    </div>
  );
}

export default TimeSlot;
