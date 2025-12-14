import React from "react";

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-[#f9f5f6]">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 bg-black rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className="w-2 h-2 bg-black rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        ></div>
        <div
          className="w-2 h-2 bg-black rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
