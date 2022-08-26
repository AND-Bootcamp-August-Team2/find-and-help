import React, { useState } from "react";

const SlackBanner = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={`absolute top-0 py-3 text-white bg-[#4a154b] w-full ${
        visible ? `` : `-translate-y-full`
      } transform transition duration-100`}
    >
      <div className="">
        <div className="flex items-center md:gap-4">
          <svg
            className="h-10 ml-4"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M165.964 15.838c-3.89-11.975-16.752-18.528-28.725-14.636-11.975 3.89-18.528 16.752-14.636 28.725l58.947 181.365c4.048 11.187 16.132 17.473 27.732 14.135 12.1-3.483 19.475-16.334 15.614-28.217L165.964 15.838"
              fill="#DFA22F"
            />
            <path
              d="M74.626 45.516C70.734 33.542 57.873 26.989 45.9 30.879 33.924 34.77 27.37 47.631 31.263 59.606l58.948 181.366c4.047 11.186 16.132 17.473 27.732 14.132 12.099-3.481 19.474-16.332 15.613-28.217L74.626 45.516"
              fill="#3CB187"
            />
            <path
              d="M240.162 166.045c11.975-3.89 18.526-16.75 14.636-28.726-3.89-11.973-16.752-18.527-28.725-14.636L44.708 181.632c-11.187 4.046-17.473 16.13-14.135 27.73 3.483 12.099 16.334 19.475 28.217 15.614l181.372-58.93"
              fill="#CE1E5B"
            />
            <path
              d="M82.508 217.27l43.347-14.084-14.086-43.352-43.35 14.09 14.089 43.347"
              fill="#392538"
            />
            <path
              d="M173.847 187.591c16.388-5.323 31.62-10.273 43.348-14.084l-14.088-43.36-43.35 14.09 14.09 43.354"
              fill="#BB242A"
            />
            <path
              d="M210.484 74.706c11.974-3.89 18.527-16.751 14.637-28.727-3.89-11.973-16.752-18.526-28.727-14.636L15.028 90.293C3.842 94.337-2.445 106.422.896 118.022c3.481 12.098 16.332 19.474 28.217 15.613l181.371-58.93"
              fill="#72C5CD"
            />
            <path
              d="M52.822 125.933c11.805-3.836 27.025-8.782 43.354-14.086-5.323-16.39-10.273-31.622-14.084-43.352l-43.36 14.092 14.09 43.346"
              fill="#248C73"
            />
            <path
              d="M144.16 96.256l43.356-14.088a546179.21 546179.21 0 0 0-14.089-43.36L130.07 52.9l14.09 43.356"
              fill="#62803A"
            />
          </svg>
          <span className="flex-1 text-slate-400">
            Find us on Slack #FindANDHelp
          </span>
          <button class="btn btn-circle btn-outline btn-sm mr-6 border-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-slate-400"
              onClick={() => setVisible(false)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlackBanner;
