import React from "react";

const Paragraph = ({ children, className = "" }) => {
  return (
    <div className={`text-[14px] font-medium text-[#777] ${className}`}>
      {children}
    </div>
  );
};

export default Paragraph;
