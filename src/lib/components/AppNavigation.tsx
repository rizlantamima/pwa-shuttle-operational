"use client";
import { useState } from "react";
import AppDrawer from "./AppDrawer";
import Sidebar from "./Sidebar";

export default function AppNavigation() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <div className="flex lg:hidden w-full shadow py-2 px-4 justify-between items-center">
        <button
          className="p-3 rounded-lg active:bg-stone-500 bg-stone-600 text-white"
          onClick={(e) => setOpenSidebar(!openSidebar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div>navbar</div>
        <div>&nbsp;</div>
      </div>

      <AppDrawer isOpen={openSidebar} setIsOpen={setOpenSidebar}>
        <Sidebar />
      </AppDrawer>
    </>
  );
}
