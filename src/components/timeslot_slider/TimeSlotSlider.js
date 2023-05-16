import React from 'react'
import {IoIosArrowForward} from "react-icons/io"

function TimeSlotSlider() {
  return (
    <div className='m-4'>
        <div className='w-[735px] p-4 border border-[#d9d9d9] rounded-[8px] flex items-center justify-between'>
            <div className='font-medium'>
                Menu Hours
            </div>
            <IoIosArrowForward/>
        </div>
    </div>
  )
}

export default TimeSlotSlider