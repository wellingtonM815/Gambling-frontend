"use client"; // Add this line
import { useState } from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faRocket, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => {
    
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="h-[100vh] flex border-r border-gray-default bg-gray-dark">
      <div className={`sidebar inline-block transition-width duration-500 ${sidebarOpen ? '' : 'hide-nav'}`}>
        <div className="flex h-[75px] border-b border-gray-default items-center justify-between px-3 ">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                <FontAwesomeIcon icon={faBars} className="text-white text-[24px] p-2" />
            </button>            
            <button
                onClick={toggle}
                className={`flex ${sidebarOpen ? '' : 'nav-item-hide'}`}
                >
                <span className={`flex rounded-l-lg p-2 px-4 ${isToggled ? 'bg-green-default border-1 border-green-default' : 'bg-gray-dark border border-gray-default'}`}>Casino</span>
                <span className={`flex rounded-r-lg p-2 px-4 ${isToggled ? 'bg-gray-dark border border-gray-default' : 'bg-green-default border-1 border-green-default'}`}>Sports</span>
            </button>
        </div>
        <div className={`flex border-b border-gray-default items-center justify-between p-3 py-4 h-[90px]`}>
            <div className="flex items-center rounded-lg bg-black border border-gray-default w-full p-3 px-2 space-x-2">
                <FontAwesomeIcon icon={faSearch} className="text-white w-4" />
                <input
                    type="text"
                    placeholder="Search..."
                    className={`bg-transparent outline-none flex-1 text-white  ${sidebarOpen ? '' : 'nav-item-hide'}`}
                />
            </div>
        </div>
        <div className='flex flex-col sidebar-menu'>
            <div className='flex border-b border-gray-default w-full'>
                <div className='flex flex-col p-3  w-full space-y-4'>
                    <div className='flex space-x-2 items-center'>
                        <Image 
                            src="/assets/image/token.svg" 
                            alt="Logo Icon" 
                            width={48} // Set the desired width
                            height={48} // Set the desired height
                            className={` ${sidebarOpen ? '' : 'w-[38px] h-[38px]'}`}
                        />
                        <div className={`flex flex-col text-[14px] text-gray-light  ${sidebarOpen ? '' : 'nav-item-hide'}`}>
                            <p><span className='text-white'>Shuffle</span> (SHFL)</p>
                            <p>$0.2113 <span className='text-[#f1323e]'>-0.24%</span></p>
                        </div>
                    </div>
                    <div className={`flex space-x-1  ${sidebarOpen ? '' : 'nav-item-hide'}`}>
                        <button className="flex bg-gray-dark2 items-center space-x-2 justify-center text-gray-light w-full  py-[5px] rounded-lg hover:bg-green-default transition duration-200">
                            <p className="font-[500] text-[14px]">Convert</p>
                        </button>
                        <button className="flex bg-gray-dark2 items-center space-x-2 justify-center text-white w-full  py-[5px] rounded-lg hover:bg-green-default transition duration-200">
                            <p className="font-[500] text-[14px]">Dashboard</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex border-b border-gray-default  w-full'>
                <ul className="nav text-[14px] flex flex-col w-full py-2">
                    <a href='#' className={`nav-item flex items-center space-x-2 w-full px-4 py-3 hover:border-l-4 border-green-default hover:text-green-default ${sidebarOpen ? '' : 'justify-center' }`}>
                        <FontAwesomeIcon icon={faHome} className="w-5" />
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Home</div>
                    </a>
                    <a href='#' className={`nav-item flex items-center space-x-2 w-full px-4 py-3 hover:border-l-4 border-green-default hover:text-green-default ${sidebarOpen ? '' : 'justify-center' }`}>
                        <FontAwesomeIcon icon={faStar} className="w-5" />
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Favourites</div>
                    </a>
                    <a href='#' className={`nav-item flex items-center space-x-2 w-full px-4 py-3 hover:border-l-4 border-green-default hover:text-green-default ${sidebarOpen ? '' : 'justify-center' }`}>
                        <FontAwesomeIcon icon={faRocket} className="w-5" />
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Latest Released</div>
                    </a>
                    <a href='#' className={`nav-item flex items-center space-x-2 w-full px-4 py-3 hover:border-l-4 border-green-default hover:text-green-default ${sidebarOpen ? '' : 'justify-center' }`}>
                        <FontAwesomeIcon icon={faStar} className="w-5" />
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Challenges</div>
                    </a>                           
                </ul> 
            </div>
            <div className='flex border-b border-gray-default w-full'>
                <ul className="nav p-4 text-[14px] flex flex-col space-y-5 w-full">
                    <li className={`nav-item flex items-center w-full space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/home.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Home</div>
                    </li>
                    <li className={`nav-item flex items-center space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/star.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Favourites</div>
                    </li>
                    <li className={`nav-item flex items-center space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/latest.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Latest Released</div>
                    </li>
                    <li className={`nav-item flex items-center space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/challenge.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Challenges</div>
                    </li>          
                </ul> 
            </div>
            <div className='flex border-b border-gray-default w-full'>
                <ul className="nav p-4 text-[14px] flex flex-col space-y-5 w-full">
                    <li className={`nav-item flex items-center w-full space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/home.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Home</div>
                    </li>
                    <li className={`nav-item flex items-center space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/star.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Favourites</div>
                    </li>
                    <li className={`nav-item flex items-center space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/latest.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Latest Released</div>
                    </li>
                    <li className={`nav-item flex items-center space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/challenge.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Challenges</div>
                    </li>          
                </ul> 
            </div>
            <div className='flex border-b border-gray-default w-full'>
                <ul className="nav p-4 text-[14px] flex flex-col space-y-5 w-full">
                    <li className={`nav-item flex items-center w-full space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/home.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Home</div>
                    </li>
                    <li className={`nav-item flex items-center space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/star.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Favourites</div>
                    </li>
                    <li className={`nav-item flex items-center space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/latest.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Latest Released</div>
                    </li>
                    <li className={`nav-item flex items-center space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/challenge.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Challenges</div>
                    </li>          
                </ul> 
            </div>
            <div className='flex border-b border-gray-default w-full'>
                <ul className="nav p-4 text-[14px] flex flex-col space-y-5 w-full">
                    <li className={`nav-item flex items-center w-full space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/home.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Home</div>
                    </li>
                    <li className={`nav-item flex items-center space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/star.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Favourites</div>
                    </li>
                    <li className={`nav-item flex items-center space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/latest.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Latest Released</div>
                    </li>
                    <li className={`nav-item flex items-center space-x-2 ${sidebarOpen ? '' : 'justify-center'}`}>
                        <div className="">
                            <Image 
                                src="/assets/image/challenge.svg" 
                                alt="Logo Icon" 
                                width={16} // Set the desired width
                                height={16} // Set the desired height
                            />
                        </div>
                        <div className={`${sidebarOpen ? '' : 'nav-item-hide'}`}>Challenges</div>
                    </li>          
                </ul> 
            </div>
        </div>
        
               
      </div>
    </div>
  );
};

export default Sidebar;
