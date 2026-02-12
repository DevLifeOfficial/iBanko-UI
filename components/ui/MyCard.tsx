"use client"

import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"
import { BanknoteArrowUp, BanknoteArrowDown } from "lucide-react"

export default function MyCard() {

  const data = [
    { value: 20 },
    { value: 65 },
    { value: 10 },
    { value: 50 },
    { value: 35 },
    { value: 60 },
    { value: 25 },
    { value: 70 },
  ]

  return (
    <div className="
      bg-linear-to-br from-[#0f0f1a] to-[#111827]
      rounded-2xl w-full
      p-4 sm:p-6
      min-h-45
      flex flex-col justify-between
      font-sans
    ">

      {/* Top Section */}
      <div className="flex justify-between items-start gap-4">

        <p className="text-lg sm:text-2xl font-semibold text-white">
          My Card
        </p>

        <div className="flex items-center gap-3">

          <p className="text-green-400 text-xs sm:text-sm font-medium">
            ↑ 10%
          </p>

          <div className="w-20 sm:w-28 h-12 sm:h-14">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="sparkline" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00FFA3" stopOpacity={0.6}/>
                    <stop offset="100%" stopColor="#00FFA3" stopOpacity={0}/>
                  </linearGradient>
                </defs>

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#00FFA3"
                  strokeWidth={2}
                  fill="url(#sparkline)"
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">

        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          $143,899.00
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

          <button
            type="button"
            className="group w-full sm:w-auto border border-white text-white text-sm px-4 py-2.5 rounded-full hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
          >
            <BanknoteArrowUp
              className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-black transition"
            />
            Deposit
          </button>

          <button
            type="button"
            className="group w-full sm:w-auto border border-white text-white text-sm px-4 py-2.5 rounded-full hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
          >
            <BanknoteArrowDown
              className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-black transition"
            />
            Withdraw
          </button>
        </div>
      </div>
    </div>
  )
}
