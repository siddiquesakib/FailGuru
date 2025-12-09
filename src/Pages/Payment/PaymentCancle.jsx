import React from "react";
import { Link } from "react-router";

const PaymentCancle = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-150px)] bg-[#f9f5f6] px-4">
      <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-md w-full transform transition-all hover:scale-105">
        <div className="flex justify-center mb-6"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-red-600">
          Payment Cancelled
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Payment Cancle successfully.
        </p>
        <Link
          to="/pricing"
          className="inline-block bg-red-500 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-red-600"
        >
          Return to Pricing
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancle;
