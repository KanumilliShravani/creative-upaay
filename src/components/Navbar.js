import { IoIosNotificationsOutline } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import {HiChevronDoubleLeft} from "react-icons/hi"
import { CiSearch } from "react-icons/ci";
import { TbMessageQuestion } from "react-icons/tb";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {

    return (
            <nav className="flex m-1 flex-row min-h-20 justify-between items-center ">
                       <div className="flex flex-row mx-px items-center">
                       <img className="w-8" src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1758432068/colorfilter_cgmrlx.png" alt="color-logo"/>
                      <h1 className="text-3xl font-bold">Project M.</h1>
                        <HiChevronDoubleLeft size={25} className="text-gray-500 mx-2"/>
                      </div>
                      <div className="flex flex-row items-center p-1 bg-gray-100">
                       <CiSearch size={25} className="text-gray-500" />
                       <input type="search" className="text-gray-500 w-60 h-7 m-1 bg-gray-100 rounded-md"  placeholder="Search for anything..."/>
                      </div>
                      <div className="flex flex-row items-center text-gray-500">
                       <LuCalendarDays size={30} className="px-1" />
                       <TbMessageQuestion size={30} className="px-1" />
                       <IoIosNotificationsOutline size={30} className="px-1" />
                      </div>
                      <div className="flex flex-row items-center ">
                      <div className="flex flex-col">
                       <h1 className="text-sm font-sans">Palak Jain</h1>
                       <p className="text-xs font-sans">Rajasthan, India</p>
                       </div>
                       <div>
                           <img className="w-10 h-10 rounded-full mx-px" alt="img" src="https://res.cloudinary.com/dqkvvulgz/image/upload/v1758431169/ad3f99f8bef8aecd2e54d68c4d642e43a47c99ab_jubsp4.png"/>
                       </div>
                        <IoChevronDown  size={30} className="mx-px px-1 text-gray-500"/>
                       </div>
                   </nav>
    )
}


export default Navbar