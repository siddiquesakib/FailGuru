import React from "react";

const Button = ({ children, className = "" }) => {
  return (
    <div
      className={`font2 mt-10 font-black text-[10px] uppercase text-black border-2 border-black px-3 py-1.5 text-center whitespace-nowrap inline-block mx-auto block bg-[#f8d6b3] ${className}`}
      style={{
        boxShadow: "4px 4px 0px 0px #000",
      }}
    >
      {children}
    </div>
  );
};

export default Button;
