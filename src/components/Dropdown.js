import React from 'react'

function Dropdown() {
  return (
    <div  className="top-4 z-30 left-0 mt-2 w-[100px] rounded shadow-lg bg-white divide-y divide-gray-100">
    <div className="py-1">
      <button className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left text-sm">
        Make Default
      </button>
      <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
        Update
      </button>
      <button
        // onClick={() => handleDeleteGrid(index)}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
      >
        Delete
      </button>
    </div>
  </div>
  )
}

export default Dropdown