import React from "react";

const StatsCard = ({
  title,
  value,
  icon,
  color = "from-blue-500 to-indigo-600",
}) => {
  return (
    <div
      className={`bg-gradient-to-br ${color} text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-2 leading-tight">{value}</h3>
      <p className="text-white/90 text-sm font-medium opacity-90">{title}</p>
    </div>
  );
};

export default StatsCard;
