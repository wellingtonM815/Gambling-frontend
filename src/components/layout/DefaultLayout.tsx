// "use client";

import React from 'react';
import Header from "./header";
import Footer from "./footer";
import SideBar from './sidebar';

export default function DefaultLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

  return (
    <div className='min-h-screen flex'>
      <div>
        <SideBar />
      </div>
      <div className='flex flex-col w-full'>
        <div className='border-b border-gray-default'>
        <Header />          
        </div>
        <div className='main-container'>
            {children}
            <Footer />
          </div>
      </div>       
    </div>
  );
}
