"use client";

import { ChevronDown, Paperclip } from "lucide-react";

type Transaction = {
  id: number;
  name: string;
  date: string;
  amount: string;
  type: "income" | "expense";
};

const transactions: Transaction[] = [
  {
    id: 1,
    name: "Jane Cooper",
    date: "08 Sep, 2022",
    amount: "$1200",
    type: "income",
  },
  {
    id: 2,
    name: "Leslie Alexander",
    date: "08 Sep, 2022",
    amount: "$1750",
    type: "income",
  },
  {
    id: 3,
    name: "Flight Ticket",
    date: "08 Sep, 2022",
    amount: "$500",
    type: "expense",
  },
  {
    id: 4,
    name: "Robert Fox",
    date: "08 Sep, 2022",
    amount: "$4300",
    type: "income",
  },
  { id: 5, name: "KFC", date: "08 Sep, 2022", amount: "$189", type: "expense" },
  {
    id: 6,
    name: "Jacob Jones",
    date: "08 Sep, 2022",
    amount: "$840",
    type: "income",
  },
];

export default function Transactions() {
  return (
    <div className=" w-full font-sans p-3 lg:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-black">Transactions</h2>

        <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 text-sm font-medium rounded-full text-gray-700 hover:bg-gray-200 transition">
          Month
          <ChevronDown className="w-4 h-4 mt-1" />
        </button>
      </div>

      {/* Transactions List */}
      <div className="space-y-5  h-100 py-6 rounded-lg">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-lg ${
                  tx.type === "income" ? "bg-green-100" : "bg-orange-100"
                }`}
              >
                <Paperclip
                  className={`w-4 h-4 ${
                    tx.type === "income" ? "text-green-600" : "text-orange-600"
                  }`}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">{tx.name}</p>
                <p className="text-xs text-gray-500">{tx.date}</p>
              </div>
            </div>

            <p className="flex items-center gap-3 text-sm font-semibold text-gray-900">
              <Paperclip className="w-4 h-4 -rotate-45" />
              {tx.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
