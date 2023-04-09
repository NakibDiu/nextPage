import React from "react";

const Loading = () => {
  return (
    <div className="h-[calc(100vh-60px)] flex justify-center items-center">
      <div className="flex items-center">
        <p className="text-4xl font-bold text-gray-600">L</p>
        <div className="border-dotted border-gray-500 border-4 w-8 h-8  animate-spin rounded-full"></div>
        <p className="text-4xl font-bold text-gray-600">ADING....</p>
      </div>
    </div>
  );
};

export default Loading;
