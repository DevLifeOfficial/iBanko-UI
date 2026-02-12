
import { EllipsisVertical, Plus } from 'lucide-react'
import React from 'react'

export default function SendMoneyTo() {

    const images = [{
        url: "https://i.pravatar.cc/100",
        name: "John Doe"
    },
    {
        url:"https://i.pravatar.cc/100?img=2",
        name: "Jane Doe"
    },
    {
        url:"https://i.pravatar.cc/100?img=3",
        name: "Alice Smith"
    }
]

  return (
    <div className="w-full bg-white rounded-2xl p-6 h-40 shadow-sm font-sans">
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-2xl font-bold text-black">
          Send Money To
        </h2>
        <button type="button" title="More options" className="group text-sm p-2 font-medium text-black transition rounded-full hover:bg-gray-400 cursor-pointer">
            <EllipsisVertical className="w-4 h-4 group-hover:text-white transition-colors"/>
        </button>
      </div>
        <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-semibold">
                <Plus className="w-6 h-6"/>
            </div>
            {images.map((image, index) => (
                <div key={index} className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={image.url} alt={image.name} className="w-full h-full object-cover"/>
                </div>
            ))}
        </div>     
    </div>
  )
}
