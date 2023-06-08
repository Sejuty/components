import React from "react";

function DeliverTo() {
  return (
    <div>
      {" "}
      <div className="mx-16">
        <div className="bg-white p-16 rounded-8">
          <div className="flex items-center mb-8">
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
          <div className="text-md font-normal">
            V Corporate Center, L.P. Leviste Street, Makati, Metro Manila,
            Philippines
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliverTo;
