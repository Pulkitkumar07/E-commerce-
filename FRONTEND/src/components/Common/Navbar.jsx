import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2"
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import SearchBar from "../Common/SearchBar";
import CartDrawer from "../Cart/CartDrawer";
const Navbar = () => {
        const [drawerOpen, setDraweropen] = useState("true");
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
                    <button className="">
                        <HiBars3BottomRight className="h-6 w-6 text-gray-700 md:hidden" />
                    </button>

                </div>
            </nav>
            <CartDrawer drawerOpen={drawerOpen} setDraweropen={setDraweropen} />
        </>
    )
}

export default Navbar
