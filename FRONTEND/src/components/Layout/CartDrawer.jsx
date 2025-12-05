
import { IoMdClose } from "react-icons/io"
import CartContents from "../Cart/CartContents"
const CartDrawer = ({ drawerOpen, setDraweropen }) => {

    return (
        <div className={` flex flex-col  sm:w-1/2  md:w-2/6 h-full p-1  top-0 right-0 fixed bg-white shadow-lg transition-transform ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex  justify-end p-4">
                <button >
                    <IoMdClose onClick={() => setDraweropen(false)} className='h-6 w-6 text-gray-600' />
                </button>
            </div>
            <div className="flex-grow p-4 overflow-y-auto">
                <h2 className=" font-bold mb-4">Your Cart </h2>
                     <CartContents />
            </div>
       
            <div className="text-center uppercase">
                <button className="bg-black mt-4 text-white uppercase  px-4 py-2 mb-2 rounded">checkout</button>
                <p className="text-gray-500 text-sm tracking-tighter">shipping, taxes and discounts calculated at checkout</p>
            </div>
        </div>
    )
}

export default CartDrawer