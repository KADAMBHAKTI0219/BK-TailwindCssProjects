import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Service = () => {
  const [current, setCurrent] = useState(0);
  const totalSteps = 5;

  const handlePrev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrent((prev) => Math.min(prev + 1, totalSteps));
  };

  const width = (current / totalSteps) * 100

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-white dark:bg-black">
      <div className="relative flex flex-col items-center w-full max-w-7xl px-4">
        {/* Progress Bar */}
        <div className="relative w-full h-2 bg-gray-300 rounded-md">
          <div
            className={"absolute h-2 bg-amber-700 rounded-md transition-all duration-300 "}
            style={{ width: `${width}%` }}
          ></div>
        </div>

        {/* Steps */}
        <div className="absolute top-1/2 flex w-full justify-between -translate-y-1/2">
          {[...Array(totalSteps + 1)].map((_, index) => (
            <div
              key={index}
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 text-lg font-semibold 
              ${index <= current ? "bg-amber-700 text-white border-amber-700" : "bg-gray-300 border-gray-400"} 
              transition-all duration-300`}
            >
              {index <= current ? <FaCheck className="text-white" /> : index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Service;
