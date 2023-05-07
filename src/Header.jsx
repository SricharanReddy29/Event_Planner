import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import  Location  from "./Location";
import { useAuth } from "./AuthProvider";
const Header = ({name}) => {
  const {logout}=useAuth();

  const handlelogout=async()=>{
    await logout()
  }
  return (
    <header className="flex justify-between items-center py-3 px-6  bg-gradient-to-r from-cyan-500 to-blue-500">
     
      <div>
        {/* Logo or website title here */}
      </div>
      <div className="fontc text-4xl"><h1><b>Event Planner</b></h1>
      </div>
      <Location/>
      {/* 
        <h1>{name}</h1> */}
        
<div class="flex items-center space-x-4">
<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="avatar.svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
    <div class="font-medium dark:text-white">
        <div>{name}</div>
    </div>
</div>
<button
    className=" rounded-lg text-lg text-slate-800 bg-orange-600 hover:bg-orange-400 text-center p-2 transition-all  w-25  "
    onClick={handlelogout}
        >
          LogOut
        </button>
       
      <div className="relative">
        <Sidebar />
        
      </div>
    </header>
  );
};

export default Header;

