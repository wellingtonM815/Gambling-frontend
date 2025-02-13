"use client"; // Add this line
import React from 'react';
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <div className='w-full bg-gray-dark'>
            <div className='flex flex-col max-w-[1280px] mx-auto py-[30px] pt-[50px]'>
                <div className="grid grid-cols-6 gap-5 py-[16px]">
                    <Image 
                        src="/assets/image/logo.svg" 
                        alt="Logo Icon" 
                        width={147} // Set the desired width
                        height={24} // Set the desired height
                    />
                    <div className='flex flex-col space-y-3'>
                        <p className='text-white text-[16px] font-bold'>Support</p>
                        <p className='text-gray-light text-[14px] font-normal'>Live Support</p>
                        <p className='text-gray-light text-[14px] font-normal'>Help Center</p>
                        <p className='text-gray-light text-[14px] font-normal'>Game Responsible</p>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <p className='text-white text-[16px] font-bold'>Platfrom</p>
                        <p className='text-gray-light text-[14px] font-normal'>Live Support</p>
                        <p className='text-gray-light text-[14px] font-normal'>Help Center</p>
                        <p className='text-gray-light text-[14px] font-normal'>Game Responsible</p>
                        <p className='text-gray-light text-[14px] font-normal'>Game Responsible</p>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <p className='text-white text-[16px] font-bold'>Policy</p>
                        <p className='text-gray-light text-[14px] font-normal'>Live Support</p>
                        <p className='text-gray-light text-[14px] font-normal'>Help Center</p>
                        <p className='text-gray-light text-[14px] font-normal'>Game Responsible</p>
                        <p className='text-gray-light text-[14px] font-normal'>Help Center</p>
                        <p className='text-gray-light text-[14px] font-normal'>Game Responsible</p>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <p className='text-white text-[16px] font-bold'>Community</p>
                        <p className='text-gray-light text-[14px] font-normal'>Live Support</p>
                        <p className='text-gray-light text-[14px] font-normal'>Help Center</p>
                        <p className='text-gray-light text-[14px] font-normal'>Game Responsible</p>
                        <p className='text-gray-light text-[14px] font-normal'>Live Support</p>
                        <p className='text-gray-light text-[14px] font-normal'>Help Center</p>
                        <p className='text-gray-light text-[14px] font-normal'>Game Responsible</p>
                    </div>   
                    <div className='flex flex-col space-y-3'>
                        <p className='text-white text-[16px] font-bold'>Platfrom</p>
                        <p className='text-gray-light text-[14px] font-normal'>Live Support</p>
                        <p className='text-gray-light text-[14px] font-normal'>Help Center</p>
                        <p className='text-gray-light text-[14px] font-normal'>Game Responsible</p>
                        <p className='text-gray-light text-[14px] font-normal'>Game Responsible</p>
                    </div>                
                </div>
                <div className='py-6 border-b border-gray-default'>
                    <p className='text-[14px] text-gray-light text-left'>Shuffle is owned and operated by Natural Nine B.V., Curaçao company registration number 160998, with its registered address at Korporaalweg 10, Willemstad, Curaçao and is licensed by the Curaçao Gaming Control Board to offer games of chance under license number OGL/2024/1337/0628. Shuffle’s payment agent company is River Card Limited, Cyprus company registration number HE 431566, with its registered address at 50 Spyrou Kyprianou Avenue, Irida Tower 3, Floor 6, 6057 Larnaca, Cyprus. Contact us at support@shuffle.com.</p>
                </div>
                <div className='flex justify-between pt-10'>
                    <p className='text-gray-light text-[14px]'>
                        1 ETH = $2,643.60
                    </p>
                    <div className='flex justify-end space-x-5'>
                        <p className='text-gray-light text-[14px]'>
                            © 2025 Shuffle.com | All Rights Reserved
                        </p>
                        <Image 
                            src="/assets/image/footer.svg" 
                            alt="Logo Icon" 
                            width={56} // Set the desired width
                            height={32} // Set the desired height
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;