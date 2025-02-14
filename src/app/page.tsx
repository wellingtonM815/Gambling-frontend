import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  const products = [
    {
        name: "Apple MacBook Pro 17\"",
        color: "Silver",
        category: "Laptop",
        price: "$2999"
    },
    {
        name: "Microsoft Surface Pro",
        color: "White",
        category: "Laptop PC",
        price: "$1999"
    },
    {
        name: "Magic Mouse 2",
        color: "Black",
        category: "Accessories",
        price: "$99"
    }
];
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col flex-col p-3">
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-3 gap-5 py-[16px]">
          <Image 
              src="/assets/image/slider.webp" 
              alt="Logo Icon" 
              width={415} // Set the desired width
              height={233} // Set the desired height
              className="transform transition-transform duration-300 hover:-translate-y-2  cursor-pointer rounded-lg"
          />
          <Image 
              src="/assets/image/slider.webp" 
              alt="Logo Icon" 
              width={415} // Set the desired width
              height={233} // Set the desired height
              className="transform transition-transform duration-300 hover:-translate-y-2  cursor-pointer rounded-lg"
          />
          <Image 
              src="/assets/image/slider.webp" 
              alt="Logo Icon" 
              width={415} // Set the desired width
              height={233} // Set the desired height
              
          />
        </div>
        <div className="flex justify-between space-x-2">
          <div className="flex rounded-lg bg-gray-default p-[6px] w-full justify-between space-x-1">
            <button className="flex bg-gray-dark2 items-center space-x-2 justify-center text-gray-light w-full  py-[5px] rounded-lg hover:bg-green-default transition duration-200">
              <FontAwesomeIcon 
                icon={faHome} 
                className="w-4 flex pb-1" 
              />
              <p className="font-[500] text-[14px]">Lobby</p>
            </button>
            <button className="flex items-center space-x-2 justify-center text-gray-light  w-full py-[5px] rounded-lg hover:bg-green-default transition duration-200">
              <FontAwesomeIcon 
                icon={faHome} 
                className="w-4 flex pb-1"  
              />
              <p className="font-[500] text-[14px]">Originals</p>
            </button>
            <button className="flex items-center space-x-2 justify-center text-gray-light  py-[5px]  w-full  rounded-lg hover:bg-green-default transition duration-200">
              <FontAwesomeIcon 
                icon={faHome} 
                className="w-4 flex pb-1" 
              />
              <p className="font-[500] text-[14px]">Slots</p>
            </button>
            <button className="flex items-center space-x-2 justify-center text-gray-light  py-[5px] w-full  rounded-lg hover:bg-green-default transition duration-200">
              <FontAwesomeIcon 
                icon={faHome} 
                className="w-4 flex pb-1" 
              />
              <p className="font-[500] text-[14px]">Live Casino</p>
            </button>
            <button className="flex items-center space-x-2 justify-center text-gray-light  py-[5px]  w-full rounded-lg hover:bg-green-default transition duration-200">
              <FontAwesomeIcon 
                icon={faHome} 
                className="w-4 flex pb-1" 
              />
              <p className="font-[500] text-[14px]">Table Games</p>
            </button>
          </div>
          <div className="flex items-center rounded-lg bg-gray-default w-full p-3">
            <FontAwesomeIcon icon={faSearch} className="text-white mr-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none flex-1 text-gray-700"
            />
          </div>
        </div>
        <div className="flex flex-col py-6">
          <div>
            <div className="flex pb-5">
              <FontAwesomeIcon icon={faGamepad} className="text-white mr-3 w-6" />
              <p className="text-[22px] text-white font-bold">Originals</p>
            </div>
            <div className="grid grid-cols-8 gap-5">
              <Image 
                src="/assets/image/card.png" 
                alt="Logo Icon" 
                width={145} // Set the desired width
                height={217} // Set the desired height
                className="transform transition-transform duration-300 hover:-translate-y-2  cursor-pointer rounded-lg"
              />
              <Image 
                src="/assets/image/card.png" 
                alt="Logo Icon" 
                width={145} // Set the desired width
                height={217} // Set the desired height
                className="transform transition-transform duration-300 hover:-translate-y-2  cursor-pointer rounded-lg"
              />
              <Image 
                src="/assets/image/card.png" 
                alt="Logo Icon" 
                width={145} // Set the desired width
                height={217} // Set the desired height
                className="transform transition-transform duration-300 hover:-translate-y-2  cursor-pointer rounded-lg"
              />
              <Image 
                src="/assets/image/tile.png" 
                alt="Logo Icon" 
                width={145} // Set the desired width
                height={217} // Set the desired height
                className="transform transition-transform duration-300 hover:-translate-y-2  cursor-pointer rounded-lg"
              />
              <Image 
                src="/assets/image/card.png" 
                alt="Logo Icon" 
                width={145} // Set the desired width
                height={217} // Set the desired height
                className="transform transition-transform duration-300 hover:-translate-y-2  cursor-pointer rounded-lg"
              />
              <Image 
                src="/assets/image/card.png" 
                alt="Logo Icon" 
                width={145} // Set the desired width
                height={217} // Set the desired height
                className="transform transition-transform duration-300 hover:-translate-y-2  cursor-pointer rounded-lg"
              />
              <Image 
                src="/assets/image/card.png" 
                alt="Logo Icon" 
                width={145} // Set the desired width
                height={217} // Set the desired height
                className="transform transition-transform duration-300 hover:-translate-y-2  cursor-pointer rounded-lg"
              />
              <Image 
                src="/assets/image/card.png" 
                alt="Logo Icon" 
                width={145} // Set the desired width
                height={217} // Set the desired height
                className="transform transition-transform duration-300 hover:-translate-y-2  cursor-pointer rounded-lg"
              />
              <Image 
                src="/assets/image/tile.png" 
                alt="Logo Icon" 
                width={145} // Set the desired width
                height={217} // Set the desired height
                className="transform transition-transform duration-300 hover:-translate-y-2  cursor-pointer rounded-lg"
              />
              <Image 
                src="/assets/image/tile.png" 
                alt="Logo Icon" 
                width={145} // Set the desired width
                height={217} // Set the desired height
                className="transform transition-transform duration-300 hover:-translate-y-2  cursor-pointer rounded-lg"
              />

            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex justify-between">
            <div className="flex rounded-lg bg-gray-default p-[6px] w-2/6 justify-between space-x-1">
              <button className="flex bg-gray-dark2 items-center space-x-2 justify-center text-gray-light w-full  py-[5px] rounded-lg hover:bg-green-default transition duration-200">
                <p className="font-[500] text-[14px]">Lobby</p>
              </button>
              <button className="flex items-center space-x-2 justify-center text-gray-light  w-full py-[5px] rounded-lg hover:bg-green-default transition duration-200">
                <p className="font-[500] text-[14px]">Originals</p>
              </button>
              <button className="flex items-center space-x-2 justify-center text-gray-light  py-[5px]  w-full  rounded-lg hover:bg-green-default transition duration-200">
                <p className="font-[500] text-[14px]">Slots</p>
              </button>
              <button className="flex items-center space-x-2 justify-center text-gray-light  py-[5px] w-full  rounded-lg hover:bg-green-default transition duration-200">
                <p className="font-[500] text-[14px]">Live Casino</p>
              </button>              
            </div>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr className=" border-b dark:border-gray-700 border-gray-200">
                        <th scope="col" className="px-6 py-3">Product name</th>
                        <th scope="col" className="px-6 py-3">Color</th>
                        <th scope="col" className="px-6 py-3">Category</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className=" even:bg-gray-50 even:dark:bg-gray-dark">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.name}
                            </th>
                            <td className="px-6 py-4">{product.color}</td>
                            <td className="px-6 py-4">{product.category}</td>
                            <td className="px-6 py-4">{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  );
}
