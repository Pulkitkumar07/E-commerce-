
import { IoMdClose } from "react-icons/io"
const CartDrawer = ({ drawerOpen, setDraweropen }) => {

    return (
        <div className={` flex flex-col    w-1/3 h-full p-1 uppercase top-0 right-0 fixed bg-white shadow-lg transition-transform ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex  justify-end p-4">
                <button >
                    <IoMdClose onClick={() => setDraweropen(false)} className='h-6 w-6 text-gray-600' />
                </button>
            </div>
            <div className="flex-grow p-4 overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
                <p className="text-gray-600">Looks like you haven't added anything to your cart yet.</p>
            </div>
            <div className="text-center uppercase">
                <button className="bg-black text-white uppercase  px-4 py-2 mb-2 rounded">checkout</button>
                <p className="text-gray-600 text-sm">shipping, taxes and discounts calculated at checkout</p>
            </div>
        </div>
    )
}

export default CartDrawer