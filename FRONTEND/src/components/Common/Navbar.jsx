import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2"
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import SearchBar from "../Common/SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoIosClose } from "react-icons/io";
const Navbar = () => {
        const [drawerOpen, setDraweropen] = useState(false);
        const [navbarOpen, setNavbarOpen] = useState(false);
        
        const toggleNavbar = () => {
            setNavbarOpen(true);
        }
    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-5'>
                <div>
                    <Link to="/" className='text-2xl font-medium'>
                        Rabbit
                    </Link>
                </div>
                <div className='hidden md:flex space-x-6'>
                    <Link to="#" className='text-gray-700 hover:text-gray-700 text-sm font-medium uppercase'>
                        Men
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-gray-700 text-sm font-medium uppercase'>
                        Women
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-gray-700 text-sm font-medium uppercase'>
                        Top wear
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-gray-700 text-sm font-medium uppercase'>
                        Bottom wear
                    </Link>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link to='/profile' className='hover:text-black'>
                        <HiOutlineUser className="h-6 w-6 text-gray-700" />
                    </Link>
                    <button 
                    onClick={()=>setDraweropen(true)}
                     className="relative hover:text-black">
                        <HiOutlineShoppingBag className="h-6 w-6 text-grey-700" />
                        <span className="absolute bg-[#ea2e0e] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center top-2 -right-1">
                            1
                        </span>
                    </button>
                   <div className="overflow-hidden">
                        <SearchBar />
                   </div>
                    <button  onClick={()=>toggleNavbar()}
                     className="">
                        <HiBars3BottomRight className="h-6 w-6 text-gray-700 md:hidden" />
                    </button>

                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} setDraweropen={setDraweropen} />
             
        <div className={`  fixed top-0 left-0 h-full sm:w-1/3  w-2/6 bg-white shadow-lg transform transition-transform duration-300 z-50 ${navbarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-end  p-4">
                 <button onClick={()=>setNavbarOpen(false)} className=" text-black  text-3xl font-bold ">
                <IoIosClose />
             </button>
            </div>
              <div className="p-4">
               <h2 className="text-2xl font-semibold mb-4">Menu</h2>
               <nav className="space-y-4">
                <Link onClick={()=>setNavbarOpen(false)} to="#" className="block text-gray-600 hover:text-black">
                 Men
                </Link>
                <Link onClick={()=>setNavbarOpen(false)} to="#" className="block text-gray-600 hover:text-black">
                 Women
                </Link>
                <Link onClick={()=>setNavbarOpen(false)} to="#" className="block text-gray-600 hover:text-black">
                 Top wear
                </Link>
                <Link onClick={()=>setNavbarOpen(false)} to="#" className="block text-gray-600 hover:text-black">
                 Bottom wear
                </Link>
               </nav>
             </div>
        </div>
        </>
    )
}

export default Navbar
