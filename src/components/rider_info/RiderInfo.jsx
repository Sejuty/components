import React from "react";

function RiderInfo() {
  return (
    <div className="mx-16 p-16 bg-white rounded-8">
      <div className="font-medium text-sm">Rider Info</div>
      <div className="w-full bg-gray-light h-[1px] my-8"></div>
      <div className="flex gap-16 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1615859721906-472e62eabbd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1049&q=80"
            alt="rider"
            className="h-[72px] w-[72px] rounded-[50%]"
          />
        </div>
        <div>
          <div className="font-normal text-sm text-gray">Name</div>
          <div className="font-normal text-sm">Moontakim Hassan</div>
          <div className="font-normal text-sm text-gray mt-8">
            Vehicle Registration
          </div>
          <div className="font-normal text-sm">1234 5678 9012 3445</div>
        </div>
      </div>
      <div className="flex gap-8 mt-24">
        <div className="flex flex-1 items-center justify-center gap-6 px-36 py-8 border border-primary rounded-4 ">
          <div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3.66667C9.35362 3.66667 9.69276 3.80714 9.94281 4.05719C10.1929 4.30724 10.3333 4.64638 10.3333 5M9 1C10.0609 1 11.0783 1.42143 11.8284 2.17157C12.5786 2.92172 13 3.93913 13 5M2.33333 1.66667H5L6.33333 5L4.66667 6C5.38064 7.44769 6.55231 8.61936 8 9.33333L9 7.66667L12.3333 9V11.6667C12.3333 12.0203 12.1929 12.3594 11.9428 12.6095C11.6928 12.8595 11.3536 13 11 13C8.39951 12.842 5.94677 11.7377 4.10455 9.89545C2.26234 8.05323 1.15803 5.60049 1 3C1 2.64638 1.14048 2.30724 1.39052 2.05719C1.64057 1.80714 1.97971 1.66667 2.33333 1.66667Z"
                stroke="#6A13F4"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="font-medium text-md text-primary">Contact</div>
        </div>

        <div className="flex flex-1 items-center justify-center gap-6 px-36 py-8 border border-primary rounded-4">
          <svg
            width="13"
            height="15"
            viewBox="0 0 13 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.01384 13.3243C5.83665 13.3262 5.66088 13.2926 5.49683 13.2257C5.33278 13.1587 5.18375 13.0596 5.0585 12.9343L2.22917 10.1056C1.56874 9.44488 1.09345 8.62225 0.850886 7.72008C0.608319 6.81791 0.606981 5.86785 0.847008 4.965C1.08703 4.06215 1.56 3.23818 2.21857 2.57558C2.87714 1.91298 3.6982 1.43499 4.59957 1.18945C5.50094 0.94392 6.45099 0.939457 7.35462 1.17651C8.25826 1.41357 9.08378 1.88382 9.74854 2.5402C10.4133 3.19659 10.894 4.01607 11.1425 4.91663C11.391 5.81718 11.3986 6.76721 11.1645 7.67163M8.66667 13.6673L12 10.334M12 10.334V13.334M12 10.334H9M4 6.33398C4 6.86442 4.21071 7.37313 4.58579 7.7482C4.96086 8.12327 5.46957 8.33398 6 8.33398C6.53043 8.33398 7.03914 8.12327 7.41421 7.7482C7.78929 7.37313 8 6.86442 8 6.33398C8 5.80355 7.78929 5.29484 7.41421 4.91977C7.03914 4.5447 6.53043 4.33398 6 4.33398C5.46957 4.33398 4.96086 4.5447 4.58579 4.91977C4.21071 5.29484 4 5.80355 4 6.33398Z"
              stroke="#6A13F4"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="font-medium text-md text-primary">Track</div>
        </div>
      </div>
    </div>
  );
}

export default RiderInfo;
