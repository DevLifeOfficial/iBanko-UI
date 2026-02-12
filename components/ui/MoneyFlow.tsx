"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function MoneyFlow() {
  const data = [
    { day: "04 Se, Mo", saving: 1800, expense: 1500 },
    { day: "05 Se, Tu", saving: 2200, expense: 1900 },
    { day: "06 Se, We", saving: 1100, expense: 1300 },
    { day: "07 Se, Th", saving: 2289, expense: 1700 },
    { day: "08 Se, Fr", saving: 1600, expense: 2100 },
    { day: "09 Se, Sa", saving: 2900, expense: 2600 },
    { day: "10 Se, Su", saving: 2400, expense: 2300 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];

      return (
        <div className="bg-[#0F172A] text-white px-4 py-2 rounded-xl shadow-lg text-center">
          <p className="text-sm font-semibold">${data.value}</p>
          <p className="text-xs text-gray-400">{label}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full mt-5 h-80 flex flex-col justify-between font-sans">
      <div className="flex items-center justify-between gap-2">
        <div className="text-black text-2xl font-bold">Money Flow</div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="text-sm text-gray-500 font-medium">
              Total Saving
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
            <span className="text-sm text-gray-500 font-medium">
              Total Expense
            </span>
          </div>
        </div>

        <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium  border border-gray-300 rounded-full  text-gray-700  hover:bg-gray-200 transition">
          Weekly
          <ChevronDown className="w-4 h-4 mt-1 text-bold" />
        </button>
      </div>

      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              width={60}
              dx={-20}
              tick={{ fontSize: 12, fill: "#6B7280" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${value}`}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#D1D5DB", strokeWidth: 1 }}
              wrapperStyle={{ outline: "none" }}
            />

            <Line
              type="monotone"
              dataKey="saving"
              stroke="#111111"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: "#111111",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#F97316"
              strokeWidth={2}
              strokeDasharray="6 6"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#F97316",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
