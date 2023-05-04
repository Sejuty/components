import React, { useEffect, useState } from "react";
import HourSlots from "./Slots";

function TimeDivision({
  day,
  foodSlot,
  timeSlotIndex,
  tempColor,
}) {
  const [dayFoodSlot, setDayFoodSlot] = useState(foodSlot);
  // let colors = ["blue", "green", "yellow"];




  const slots = Object.values(dayFoodSlot).sort((a, b) => {
    return b[0].start_time - a[0].start_time;
  });


  // console.log(slots)
  // const sortedColor = Object.values(dayFoodSlot)
  //   .map((value, index) => {
  //     const start_time = value.start_time;
  //     return { start_time, index };
  //   })
  //   .sort((a, b) => b.start_time - a.start_time)
  //   .map(({ index }) => colors[index]);

  // useEffect(() => {
  //   if (tempColor.length < 7) {
  //     tempColor.push([...sortedColor]);
  //   }
  // }, []);

  // useEffect(() => {
  //   setFoodColor(tempColor[timeSlotIndex]);
  // }, [tempColor.length]);

  // const [foodColor, setFoodColor] = useState([]);

  useEffect(() => {
    setDayFoodSlot(foodSlot);
  }, [foodSlot]);

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
            start_time={slot[0].start_time}
            end_time={slot[0].end_time}
            color={slot['color']}
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
