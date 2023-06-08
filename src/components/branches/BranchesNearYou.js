import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Branches from "../../json/select_branch.json";

function BranchesNearYou() {
  useEffect(() => {
    setNearBranches(tempNearBranches);
  }, []);
  const allBranches = Branches.branches;
  const selectedBranch = allBranches[0];
  const tempNearBranches = allBranches.filter((_, index) => index !== 0);
  const [nearBranches, setNearBranches] = useState(tempNearBranches);

  console.log(nearBranches);

  return (
    <div className="bg-primary-lighter h-screen">
      <div className="px-4 py-16 shadow-sm bg-white mb-16">
        <div className="flex items-center gap-x-2">
          <div>
            <BsArrowLeft className="text-primary" />
          </div>
          <div className="text-lg font-medium">Delivery address</div>
        </div>
      </div>

      <div className="mx-16">
        <div className="flex flex-col bg-white p-16 rounded-8 h-[207px]">
          <div className="flex items-center">
            <div className="flex-1 text-md font-bold">Deliver to</div>
            <div className="flex-1 flex items-center justify-end ">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66602 4.66602H3.99935C3.64573 4.66602 3.30659 4.80649 3.05654 5.05654C2.80649 5.30659 2.66602 5.64573 2.66602 5.99935V11.9993C2.66602 12.353 2.80649 12.6921 3.05654 12.9422C3.30659 13.1922 3.64573 13.3327 3.99935 13.3327H9.99935C10.353 13.3327 10.6921 13.1922 10.9422 12.9422C11.1922 12.6921 11.3327 12.353 11.3327 11.9993V11.3327"
                  stroke="#79797A"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.59 4.39007C13.8526 4.12751 14.0001 3.77139 14.0001 3.40007C14.0001 3.02875 13.8526 2.67264 13.59 2.41007C13.3274 2.14751 12.9713 2 12.6 2C12.2287 2 11.8726 2.14751 11.61 2.41007L6 8.00007V10.0001H8L13.59 4.39007Z"
                  stroke="#79797A"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.666 3.33398L12.666 5.33398"
                  stroke="#79797A"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="text-md">
            V Corporate Center, L.P. Leviste Street, Makati, Metro Manila,
            Philippines
          </div>
          <div className="text-sm font-medium mt-16 mb-6"> Delivery Instruction</div>
          <textarea
            className="px-14 py-10 rounded-8 text-sm h-[72px]"
            placeholder="Enter a description..."
          />
        </div>
        <div className="flex flex-col my-16">
          <div className="text-lg font-medium mb-8">Select Your Branch</div>
          <input
            placeholder="Search for branches"
            className="w-full h-34 text-sm p-8 rounded-8 bg-white  @apply shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
            type="text"
          />
        </div>
        <div className="flex flex-col my-8">
          <div className="text-md font-medium mb-8">Selected Branch</div>
          <div className="w-full text-sm p-12 rounded-8 bg-white">
            <div className="flex">
              <div className="flex-1 font-medium text-lg">
                {selectedBranch.title}
              </div>
              <div className="flex-1 text-end">s</div>
            </div>
            <div className="flex">
              <div className="truncate flex-1">{selectedBranch.address}</div>
              <div className="flex-1 text-end font-medium text-lg">
                {selectedBranch.user_distance} km
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-8">
          <div className="text-md font-medium mb-8">
            Other Branches Near You
          </div>
          <div className="flex flex-col gap-8">
            {nearBranches.map((branch, index) => {
              return (
                <div
                  key={index}
                  className="w-full text-sm p-12 rounded-8 bg-white"
                >
                  <div className="flex justify">
                    <div className="flex-1 font-medium text-lg truncate">
                      {branch.title}
                    </div>
                    <div className="flex-1 text-end">s</div>
                  </div>
                  <div className="flex justify">
                    <div className="truncate flex-1">{branch.address}</div>
                    <div className="flex-1 text-end font-medium text-lg">
                      {branch.user_distance} km
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          className="absolute left-16 right-16 bottom-44 mx-auto w-auto bg-primary text-white h-33 py-8 rounded-4"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default BranchesNearYou;
