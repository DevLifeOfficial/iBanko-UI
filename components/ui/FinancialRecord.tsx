"use client"

import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"
import { MoreVertical, ChevronDown,ArrowUp,ArrowDown } from "lucide-react"

export default function FinancialRecord() {

  const incomeData = [
    { v: 10 }, { v: 45 }, { v: 50 },
    { v: 25 }, { v: 35 }, { v: 60 },
  ]

  const expenseData = [
    { v: 60 }, { v: 35 }, { v: 10 },
    { v: 25 }, { v: 15 }, { v: 10 },
  ]

  const savingData = [
    { v: 10 }, { v: 45 }, { v: 50 },
    { v: 25 }, { v: 35 }, { v: 60 },
  ]

  return (
    <div className="w-full mt-8">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-black">
          Financial Record
        </h2>

           <div className="flex items-center gap-6">

    </div>

        <button
          className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium  border border-gray-300 rounded-full  text-gray-700  hover:bg-gray-200 transition"
        >
          Month
          <ChevronDown className="w-4 h-4 mt-1"/>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

        <Card
          title="Total Income"
          amount="$85,992"
          percent="17%"
          icon={ArrowUp}
          percentColor="text-green-600"
          data={incomeData}
          stroke="#16A34A"
          gradientId="incomeGradient"
          bg="bg-[#E6F4EA]"
        />

        <Card
          title="Total Expense"
          amount="$38,160"
          percent="44%"
          icon={ArrowDown}
          percentColor="text-orange-600"
          data={expenseData}
          stroke="#EA580C"
          gradientId="expenseGradient"
          bg="bg-[#FCECE5]"
        />

        <Card
          title="Total Saving"
          amount="$47,832"
          percent="45%"
          icon={ArrowUp}
          percentColor="text-blue-600"
          data={savingData}
          stroke="#2563EB"
          gradientId="savingGradient"
          bg="bg-[#EAF1FB]"
        />

      </div>
    </div>
  )
}

type CardProps = {
  title: string
  amount: string
  percent: string
  icon: React.ComponentType<{ className?: string }>
  percentColor: string
  data: { v: number }[]
  stroke: string
  gradientId: string
  bg: string
}

function Card({
  title,
  amount,
  percent,
  icon:Icon,
  percentColor,
  data,
  stroke,
  gradientId,
  bg,
}: CardProps) {
  return (
    <div
      className={`${bg} rounded-2xl p-6 h-44 flex flex-col justify-between transition hover:shadow-md`}
    >

      <div className="flex items-start justify-between">
        <p className="text-sm text-gray-600 font-medium">
          {title}
        </p>

        <button title="button" type="button" className="p-1 rounded-full hover:bg-black/5 transition">
          <MoreVertical className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* Chart */}
      <div className="mx-auto w-[50%] h-14">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={stroke} stopOpacity={0.4} />
                <stop offset="100%" stopColor={stroke} stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="v"
              stroke={stroke}
              strokeWidth={2}
              fill={`url(#${gradientId})`}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-black">
          {amount}
        </h3>

        <span className={`flex items-cneter justify-center gap-2 text-sm font-semibold ${percentColor}`}>
        <Icon className="w-4 h-6" />
          {percent}
        </span>
      </div>
    </div>
  )
}
