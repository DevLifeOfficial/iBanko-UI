"use client"

import React , { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  Send,
  Activity,
  User,
  LifeBuoy,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react"
import Image from "next/image"

const menuItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Savings", href: "/savings", icon: Wallet },
  { name: "Cards", href: "/cards", icon: CreditCard },
  { name: "Payments", href: "/payments", icon: Send },
  { name: "Activity", href: "/activity", icon: Activity },
  { name: "Profile", href: "/profile", icon: User },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
     <button
        title="Menu btn"
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow"
      >
        <Menu size={18} />
      </button>

       {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

    <aside className={`fixed top-0 left-0 z-50 w-60 h-full transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-0 lg:static lg:flex  bg-[#F6F4F5] flex flex-col font-sans justify-between p-4 lg:p-6 `}>

        <div className="lg:hidden flex justify-end  mb-2">
          <button type="button" title="close btn" className="text-white bg-black rounded-full p-2" onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

      {/* Top Section */}
      <div className="flex flex-col jus">
        {/* Logo */}
        <div className="flex items-center justify-center text-2xl font-bold mb-4 lg:mb-10 gap-2">
          <img src="/credit-card.png" alt="logo" className="w-10 h-10" />
          <span className="text-black">iBanKo</span>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center gap-2 mb-4 lg:mb-7">
          <img
            src="https://i.pravatar.cc/100"
            alt="User"
            className="w-18 h-18 rounded-full"
          />
          <div className="text-center">
            <p className="font-bold text-xl text-black">Darrell Steward</p>
            <p className="text-xs text-gray-500">UI/UX Design</p>
          </div>
        </div>

        {/* Navigation */}
        <nav>
          {menuItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-gray-100 text-black"
                    : "text-gray-400 hover:bg-gray-50 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>


          {/* Bottom Section */}
      <div className="space-y-2 px-3 mt-5 lg:mt-20">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 font-semibold text-sm text-gray-400 hover:text-black"
        >
          Support
        </Link>

        <Link
          href="/dashboard"
          className="flex items-center gap-3 font-semibold text-sm text-gray-400 hover:text-black"
        >
          Settings
        </Link>

        {/* Theme Toggle Placeholder */}
        <div className="flex items-center justify-between font-semibold text-sm text-gray-400">
          <span>Theme</span>
          <div className="w-10 h-5 bg-gray-200 rounded-full relative cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5 shadow"></div>
          </div>
        </div>

       
      </div>
      </div>
     <button type="button" className="flex items-center gap-3 px-3 font-semibold text-sm text-gray-500 hover:text-red-500">
          Sign out
          <img src="/logout.png" alt="logout" className="w-3 h-3" />
        </button>
    
    </aside>
    </>
  )
}
