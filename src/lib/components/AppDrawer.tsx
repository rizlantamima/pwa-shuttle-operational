// src/Drawer.tsx
import React, { ReactNode, useState } from "react";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: Function;
  children: ReactNode;
}

const AppDrawer: React.FC<DrawerProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <main
      className={
        "fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform" +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen overflow-y-auto overflow-x-hidden max-w-lg absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0" : "-translate-x-full ")
        }
      >
        {children}
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default AppDrawer;
