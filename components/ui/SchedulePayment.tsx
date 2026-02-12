import React from 'react'
import { EllipsisVertical, Plus } from 'lucide-react'

export default function SchedulePayment() {

    const scheduledPayments = [
        {
            name: "Netflix",
            amt: 9.99
        },
        {
            name: "Discord",
            amt: 14.99
        },
        {
            name: "Wattpad",
            amt: 24.99
        }
    ]

  return (
    <div className="w-full bg-white rounded-2xl p-6 h-40 shadow-sm font-sans">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-black">Schedule Payment</h2>
            <button type="button" title="More options" className="group text-sm p-2 font-medium
            text-black transition rounded-full hover:bg-gray-400 cursor-pointer">
                        <EllipsisVertical className="w-4 h-4 group-hover:text-white transition-colors"/>
                    </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
           {scheduledPayments.map((data,index) => (
               <div key={index} className="bg-gray-50 rounded-lg p-2">
                   <h3 className="font-medium text-gray-600 text-xs">{data.name}</h3>
                   <p className="text-black font-bold  text-md">${data.amt}</p>
               </div>
           ))}
        </div>
    </div>
  )
}
