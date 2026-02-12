"use client"

import Image from "next/image"

export default function AvailableCard() {
  return (
    <div className="w-full bg-white rounded-2xl mt-4 h-100 border-t p-6 border-gray-300">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Available Card
        </h2>

        <button className="text-sm text-gray-500 font-medium hover:text-black transition">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {/* Card 1 */}
        <div className="bg-[#EAF0F3] rounded-2xl p-5 flex flex-col gap-4">

          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">
              $3,736
            </h3>

            <span>
              <Image
                src="/Visa.png"
                alt="Visa Logo"
                width={40}
                height={40}
              />
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>
              <p className="text-xs font-semibold text-gray-400">Card Number</p>
              <p className="font-medium text-gray-900">
                7283 2323 7319 ****
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold text-gray-400">Exp</p>
              <p className="font-medium text-gray-900">
                **/**
              </p>
            </div>
          </div>

        </div>

        {/* Card 2 */}
        <div className="bg-[#EAF0F3] rounded-2xl p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">
              $21,426
            </h3>

            <span>
              <Image
                src="/Express.png"
                alt="American Express Logo"
                width={40}
                height={40}
              />
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>
              <p className="text-xs font-semibold text-gray-400">Card Number</p>
              <p className="font-medium text-gray-900">
                3253 8243 1100 ****
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold text-gray-400">Exp</p>
              <p className="font-medium text-gray-900">
                **/**
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
