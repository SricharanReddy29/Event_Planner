import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import {RxTriangleDown} from "react-icons/rx";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filopen,setFilopen]=useState(false);
  const [sortopen,setSortopen]=useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen)
   console.log(isOpen)
};

  return (
    <div className="relative">
    {/*   <button
        className="fixed top-0 right-0 z-40 p-2 rounded-full cursor-pointer hover:bg-gray-100"
        onClick={()=>handleToggle()}
      > */}
        <FiMenu className="text-Slate-900" size={24} onClick={()=>handleToggle()} />
      {/* </button> */}
      <div
        className={`fixed top-0 right-0 h-screen w-60 bg-slate-900 z-30 py-4 px-6 transition-all duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h4 className="text-sky-600 text-2xl mb-4 font-bold ">Menu</h4>
        <ul>
          <li className="flex space-x-2 items-center flex-col text-slate-300 mb-4 w-full">
         
            <a href="#" className="hover:text-sky-500 flex flex-row items-center gap-2 w-full " onClick={()=>setFilopen(!filopen)}>
              Filter <RxTriangleDown/>
            </a>
           
            <div className={`w-full transition-all ${ filopen ? 'block': 'hidden' }`}>
                <input type="text"  className=" bg-black my-2 outline-2 outline-sky-500 rounded-lg p-1 placeholder:text-slate-200 text-sky-600 ring-2 ring-orange-400 hover:ring-sky-500 hover:ring-2 focus:ring-sky-500 focus:ring-2 focus:outline-none"  placeholder="Type of Event" />
                <input type="text"  className=" bg-black my-2 outline-2 outline-sky-500 rounded-lg p-1 placeholder:text-slate-200 text-sky-600 ring-2 ring-orange-400 hover:ring-sky-500 hover:ring-2 focus:ring-sky-500 focus:ring-2 focus:outline-none"  placeholder="Budget" />
                <input type="text"  className=" bg-black my-2 outline-2 outline-sky-500 rounded-lg p-1 placeholder:text-slate-200 text-sky-600 ring-2 ring-orange-400 hover:ring-sky-500 hover:ring-2 focus:ring-sky-500 focus:ring-2 focus:outline-none"  placeholder="Date" />
                <input type="text"  className=" bg-black my-2 outline-2 outline-sky-500 rounded-lg p-1 placeholder:text-slate-200 text-sky-600 ring-2 ring-orange-400 hover:ring-sky-500 hover:ring-2 focus:ring-sky-500 focus:ring-2 focus:outline-none"  placeholder="Estimated Guests" />
                <input type="text"  className=" bg-black my-2 outline-2 outline-sky-500 rounded-lg p-1 placeholder:text-slate-200 text-sky-600 ring-2 ring-orange-400 hover:ring-sky-500 hover:ring-2 focus:ring-sky-500 focus:ring-2 focus:outline-none"  placeholder="No. of Days" />
            </div>
          </li>


          <li className="flex space-x-2 items-center flex-col text-slate-300 mb-4 w-full">
            <a href="#" className="hover:text-sky-500 flex flex-row items-center gap-2 w-full " onClick={()=>setSortopen(!sortopen)}>
              Sort <RxTriangleDown/>
            </a>
           
           
            <div className={`w-full transition-all ${ sortopen ? 'block': 'hidden' }`}>
                <input type="text"  className=" bg-black my-2 outline-2 outline-sky-500 rounded-lg p-1 placeholder:text-slate-200 text-sky-600 ring-2 ring-orange-400 hover:ring-sky-500 hover:ring-2 focus:ring-sky-500 focus:ring-2 focus:outline-none"  placeholder="Price Low to high" />
                <input type="text"  className=" bg-black my-2 outline-2 outline-sky-500 rounded-lg p-1 placeholder:text-slate-200 text-sky-600 ring-2 ring-orange-400 hover:ring-sky-500 hover:ring-2 focus:ring-sky-500 focus:ring-2 focus:outline-none"  placeholder="Price High to Low" />
                <input type="text"  className=" bg-black my-2 outline-2 outline-sky-500 rounded-lg p-1 placeholder:text-slate-200 text-sky-600 ring-2 ring-orange-400 hover:ring-sky-500 hover:ring-2 focus:ring-sky-500 focus:ring-2 focus:outline-none"  placeholder="Nearest" />
                <input type="text"  className=" bg-black my-2 outline-2 outline-sky-500 rounded-lg p-1 placeholder:text-slate-200 text-sky-600 ring-2 ring-orange-400 hover:ring-sky-500 hover:ring-2 focus:ring-sky-500 focus:ring-2 focus:outline-none"  placeholder="Rating" />
            </div>
          </li>
          <li className="flex items-center space-x-2 text-slate-300 mb-4">
            
            <a href="#" className="hover:text-sky-500">
              Settings
            </a>
          </li>
          <li className="flex items-center space-x-2 text-slate-300">
         
            <a href="#" className="hover:text-sky-500">
              Support
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`fixed inset-0 bg-gray-900 opacity-50 transition-opacity duration-500 ${
          isOpen ? "z-20" : "-z-10"
        }`}
        onClick={handleToggle}
      ></div>
    </div>
  );
};

export default Sidebar;
