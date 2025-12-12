import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-md mx-auto">
        <div 
          className="border-4 border-white p-12 text-center font-black"
          style={{ 
            boxShadow: "12px 12px 0px 0px #000",
            background: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)"
          }}
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl text-white mb-8 uppercase tracking-wider">
            Ready to Share Your Story?
          </h2>
          
          {/* Button */}
          <Link
            to="/addlesson"
            className="block w-full bg-[#ffdb58] text-black text-2xl py-8 px-12 uppercase border-4 border-black hover:-translate-x-2 hover:-translate-y-2 transition-all duration-300"
            style={{ boxShadow: "8px 8px 0px 0px #000" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "4px 4px 0px 0px #000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "8px 8px 0px 0px #000";
            }}
          >
            Start Sharing Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
