import { RiDeleteBin3Line } from "react-icons/ri";
import { useState } from "react";
const CartContents = () => {
   const [cartQuantity, setcartQuantity] = useState(1)
   
 

    const cardProduct = [
        {
            productID: 1,
            name: "T-shirt",
            size: "M",
            color: "Red",
            price: 29.99,
            quantity: 2,
            imageUrl: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D"
        },
        {
            productID: 2,
            name: "Jeans",
            size: "S",
            color: "Blue",
            price: 59.99,
            quantity: 1,
            imageUrl: "https://images.unsplash.com/photo-1516313570236-85371711ee13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxqZWFuc3xlbnwwfHwwfHx8MA%3D%3D"

        },
        {
            productID: 1,
            name: "T-shirt",
            size: "M",
            color: "Red",
            price: 29.99,
            quantity: 2,
            imageUrl: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D"
        },
        {
            productID: 2,
            name: "Jeans",
            size: "S",
            color: "Blue",
            price: 59.99,
            quantity: 0,
            imageUrl: "https://images.unsplash.com/photo-1516313570236-85371711ee13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxqZWFuc3xlbnwwfHwwfHx8MA%3D%3D"

        }
        ,
        {
            productID: 1,
            name: "T-shirt",
            size: "M",
            color: "Red",
            price: 29.99,
            quantity: 2,
            imageUrl: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D"
        },
        {
            productID: 2,
            name: "Jeans",
            size: "S",
            color: "Blue",
            price: 59.99,
            quantity: 1,
            imageUrl: "https://images.unsplash.com/photo-1516313570236-85371711ee13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxqZWFuc3xlbnwwfHwwfHx8MA%3D%3D"

        }
    ]

    const allProductsInCart = cardProduct.map((product, index) => {
        return <li>
            <div key={index} className="flex justify-between mb-4">
                <div className="flex ">
                    <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover rounded mr-4" />
                    <div>
                        <p className="text-black">{product.name}</p>
                        <p className="text-gray-500 text-sm">size: {product.size} | color: {product.color}</p>
                        <button 
                        onClick={()=>handleQuantity("minus")}
                        className="px-2  border rounded font-medium text-xl">-</button>
                        <span className="mx-4">{product.quantity}</span>
                        <button
                        onClick={()=>handleQuantity("plus")}
                         className="px-2  border font-medium rounded text-xl">+</button>
                    </div>
                </div>

                <div>
                    <p className="text-black font-semibold">${(product.price * product.quantity).toFixed(2)}</p>
                    <button onClick={()=>FilterHandler(product.productID)}>
                        <RiDeleteBin3Line className="text-gray-600 text-xl hover:text-red-600" />
                    </button>
                </div>
            </div>

        </li>
    })

    const FilterHandler = (id) => {
        return  allProductsInCart.filter((product) => product.productID !== id)
      
   }

    return (
        <div>
            <ul>
                {allProductsInCart}
            </ul>

        </div>
    )
}

export default CartContents

