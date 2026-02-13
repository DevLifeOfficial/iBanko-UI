import React from "react";
import { EllipsisVertical, Plus } from "lucide-react";

export default function SchedulePayment() {
  const scheduledPayments = [
    {
      name: "Netflix",
      amt: 9.99,
    },
    {
      name: "Discord",
      amt: 14.99,
    },
    {
      name: "Wattpad",
      amt: 24.99,
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl p-4 sm:p-6 h-fit sm:h-40 shadow-sm font-sans">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-black">Schedule Payment</h2>
        <button
          type="button"
          title="More options"
          className="group text-sm p-2 font-medium
            text-black transition rounded-full hover:bg-gray-400 cursor-pointer"
        >
          <EllipsisVertical className="w-4 h-4 group-hover:text-white transition-colors" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {scheduledPayments.map((data, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-3 sm:p-4 flex flex-row sm:flex-col justify-between items-center gap-1"
          >
            <h3 className="font-medium text-gray-600 text-sm">{data.name}</h3>

            <p className="text-black font-bold text-base sm:text-lg">
              ${data.amt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
