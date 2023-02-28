import React, { useEffect, useState } from "react";
import { calculateTimeLeft } from "./time.ts";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
  }, [timeLeft]);
  return (
    <>
      <div className=" border  flex justify-between w-full md:w-4/5    items-center bg-red-500 rounded-xl p-5">
        <div className="flex flex-col items-center h-14 text-xs font-bold md:h-20 w-1/5  md:w-1/6 justify-around md:text-md  md:font-bold text-gray-700 bg-white rounded-lg">
          <span className="">{String(timeLeft.days).padStart(2, "0")}</span>
          <span className="label">Days</span>
        </div>

        <div className="flex flex-col items-center h-14 text-xs font-bold md:h-20 md:text-xs w-1/5  md:w-1/6 justify-around  md:font-bold text-gray-700  bg-white rounded-lg">
          <span className="">{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="label">Hours</span>
        </div>

        <div className="flex flex-col items-center h-14 text-xs font-bold md:h-20 w-1/5  md:w-1/6 justify-around md:text-md  md:font-bold text-gray-700  bg-white rounded-lg">
          <span className="">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="label">Minutes</span>
        </div>

        <div className=" flex flex-col items-center h-14 text-xs font-bold md:h-20 w-1/5  md:w-1/6 justify-around md:text-md  md:font-bold text-gray-700  bg-white rounded-lg">
          <span className=" ">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </>
  );
};

export default Timer;
