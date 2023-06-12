import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Branches from "../../json/select_branch.json";
import DeliveryCard from "./DeliveryCard";
import Pickupfrom from "./Pickupfrom";
import DeliverTo from "./DeliverTo";
import RiderInfo from "../rider_info/RiderInfo";

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
      <RiderInfo/>
      <div className="mx-16">
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
