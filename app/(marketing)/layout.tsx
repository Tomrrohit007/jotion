import React from "react";
import Navbar from "./_components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-full dark:bg-darkColor'>
      <Navbar />
      <main className='h-full pt-40 dark:bg-darkColor'>{children}</main>
    </div>
  );
};

export default Layout;
