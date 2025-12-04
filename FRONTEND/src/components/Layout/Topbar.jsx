import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io5"
import { RiTwitterXLine } from "react-icons/ri"
const Topbar = () => {
    return (
        <div className='bg-[#ea2e0e] text-white  py-2 px-5 '>
            <div className='container mx-auto flex justify-between items-center py-1 px-4 md:px-0 text-xs md:text-sm'>
                <div className="hidden md:flex   items-center  gap-2">
                    <a href="#" className='hover:text-gray-300'>
                        <TbBrandMeta className="h-5 w-5" />
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <IoLogoInstagram className="h-5 w-5" />
                    </a>
                    <a href="#" className='hover:text-gray-300'>
                        <RiTwitterXLine className="h-4 w-4" />
                    </a>
                </div>
                <div className="text-sm text-center flex-grow">
                    <span>We Ship Worldwide - Fast and reliable shipping</span>
                </div>
                <div className="text-sm hidden md:block">
                    <a href="tel:+123456789" className="hover:text-gray-300">91+ 1234567890</a>
                </div>
            </div>
        </div>
    )
}

export default Topbar
