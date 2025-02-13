"use client"; // Add this line
import React from 'react';
import Image from "next/image";

const Header: React.FC = () => {
 
    return (
        <div className='max-w-[1280px] mx-auto h-[75px] w-full flex justify-between items-center'>
            <Image 
                src="/assets/image/logo.svg" 
                alt="Logo Icon" 
                width={147}
                height={24}
            />
            <div className='flex space-x-2'>
                <button  className="border border-green-default text-white font-[500] text-[18px] leading-[24px] py-[10px] px-[15px] rounded-[5px] hover:bg-green-default transition duration-200">
                    Login
                </button>
                <button  className="border bg-green-default border-green-default text-white font-[500] text-[18px] leading-[24px] py-[10px] px-[15px] rounded-[5px] hover:bg-opacity-0 transition duration-200">
                    Register
                </button>
            </div>
        </div>            
    );
};
export default Header;