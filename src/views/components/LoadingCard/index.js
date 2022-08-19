import React from "react";

const LoadingCard = () => {
  return (
    <div
      className="p-6 flex flex-col w-full md:w-96 bg-white shadow-sm border rounded-lg mx-auto animate-pulse"
    >
      <div className="px-4 py-8 mb-4">
        <div className=" h-32 w-full bg-slate-400"></div>
      </div>
      <div className="flex flex-col">
        <div className=" h-2 w-24 bg-slate-400"></div>
        <div className=" h-2 w-32 bg-slate-400 my-2"></div>
        <div className=" h-2 w-32 bg-slate-400"></div>
        <div className="mt-6">
          <div className=" h-12 w-full bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
