"use client";

import {
  ChevronDown,
  ChevronsLeftRight,
  Bell,
  MessageCircleMore,
  Search,
  Settings,
  CopyX,
} from "lucide-react";
import React, { useState } from "react";

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="p-3 bg-gray-100 text-black text-sm font-medium rounded-full hover:bg-gray-200 transition">
      {children}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selected, setSelected] = useState<string>("");
  const accounts = ["Savings", "Checking", "Credit Card", "Investment", "Loan"];

  return (
    <div className="w-full h-20 bg-white flex items-center justify-between px-6 ">
      <div className="ml-10 lg:ml-4 flex items-center">
        <span className="text-2xl font-bold font-sans text-black">
          Hello Steward 👋
        </span>
      </div>

      {/* Choose Account */}
      <div className="relative hidden lg:block">
        <button
          title="Choose Account"
          onClick={() => setOpen(!open)}
          className="w-60 hidden lg:flex align-items-center justify-between ml-4 px-3 py-2 bg-gray-100 text-sm text-gray-400 font-semibold rounded-full hover:bg-gray-200 transition"
        >
          {selected ? selected : "Choose Account"}
          <ChevronsLeftRight
            size={14}
            className="text-black ml-2 transform rotate-90 mt-1"
          />

          {open && (
            <div className="absolute mt-2 w-60 text-black bg-white border rounded-lg shadow-lg z-10">
              {accounts.map((account) => (
                <button
                  type="button"
                  key={account}
                  onClick={() => setSelected(account)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                >
                  {account}
                </button>
              ))}
            </div>
          )}
        </button>
      </div>

      {/* Tools */}
      <div className="hidden lg:flex align-items-center justify-content-center gap-3 mr-6">
        <IconButton>
          <Search size={16} />
        </IconButton>
        <IconButton>
          <Bell size={16} />
        </IconButton>
        <IconButton>
          <MessageCircleMore size={16} />
        </IconButton>
        <IconButton>
          <Settings size={16} />
        </IconButton>
      </div>

      <div className="relative flex lg:hidden items-center justify-center">
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`p-3 rounded-full transition duration-300 
      ${mobileMenu ? "bg-gray-200" : "bg-transparent hover:bg-gray-100"}`}
        >
          {mobileMenu ? (
            <CopyX size={18} className="text-black" />
          ) : (
            <Settings size={18} className="text-black" />
          )}
        </button>

        {mobileMenu && (
          <div className="absolute top-14 right-0 w-72 bg-white shadow-xl rounded-2xl p-4 space-y-4 z-50 border">
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 text-sm font-semibold rounded-full hover:bg-gray-200 transition"
              >
                <span className={selected ? "text-black" : "text-gray-400"}>
                  {selected || "Choose Account"}
                </span>

                <ChevronsLeftRight size={16} className="transform rotate-90" />
              </button>

              {open && (
                <div className="absolute mt-2 w-full bg-white text-black border rounded-lg shadow-md z-50">
                  {accounts.map((account) => (
                    <button
                      key={account}
                      onClick={() => {
                        setSelected(account);
                        setOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {account}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tools */}
            <div className="flex justify-between">
              <IconButton>
                <Search size={16} />
              </IconButton>
              <IconButton>
                <Bell size={16} />
              </IconButton>
              <IconButton>
                <MessageCircleMore size={16} />
              </IconButton>
              <IconButton>
                <Settings size={16} />
              </IconButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
