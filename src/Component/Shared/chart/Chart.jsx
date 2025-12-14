import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = () => {
  const data = [
    { month: "জানুয়ারি", sales: 45000 },
    { month: "ফেব্রুয়ারি", sales: 52000 },
    { month: "মার্চ", sales: 61000 },
  ];

  return (
    <div className="py-20">
      <h2>মাসিক বিক্রয়</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Chart;
