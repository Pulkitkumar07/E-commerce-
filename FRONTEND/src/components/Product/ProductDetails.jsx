import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import ProductGrid from "./ProductGrid";


const selectedProduct = {
    name: "Stylish jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish jacket perfect for any occasion",
    brand: "Zara",
    size: ["S", "M", "L", "XL"],
    color: ["Black", "White", "red"],
    material: "Leather",
    images: [
        {
            url: "https://images.unsplash.com/photo-1553640662-9ab20b8fa2ea?w=1400&auto=format&fit=crop&q=60"
        },
        {
            url: "https://images.unsplash.com/photo-1602700205182-923ff4b8e643?w=1400&auto=format&fit=crop&q=60"
        }
    ]
}
const similar=[
    {
    _id: 1,
    name: "Classic Black Jacket",
    price: 230,
    images:
      "https://static.zara.net/assets/public/efa9/7309/6a0448d3a60d/b57e8e864eb2/08281152704-a1/08281152704-a1.jpg?ts=1764775326887&w=580"
  },
  {
    _id: 2,
    name: "Minimal White Shirt",
    price: 150,
    images:
      "https://static.zara.net/assets/public/7b32/1c62/fd3d4b09bb30/438726fbb49b/08281152800-a1/08281152800-a1.jpg?ts=1764775347371&w=580"
  },
  {
    _id: 3,
    name: "Beige Winter Coat",
    price: 340,
    images:
      "https://static.zara.net/assets/public/5558/c251/8c26498d8c88/a2f204b1ec4e/00993704251-a1/00993704251-a1.jpg?ts=1764751959159&w=1198"
  },
  {
    _id: 4,
    name: "Beige  Coat",
    price: 240,
    images:
      "https://static.zara.net/assets/public/1e40/48b2/0d6940899cd0/5e678feb0384/04302209800-e1/04302209800-e1.jpg?ts=1761572482144&w=888"
  }
]

const ProductDetails = () => {

    const [images, setimages] = useState("")
    const [selectedSize, SetselectedSize] = useState("")
    const [selectedColor, setSelectedColor] = useState("");

    const [Quantity, setQuantity] = useState(1)
    const [isButtondisabled, setisButtondisabled] = useState('')

    const handleQuantityChange = (action) => {
        if (action == 'plus') {
            setQuantity(Quantity + 1)

        } else {
            setQuantity(Quantity > 1 ? Quantity - 1 : 1)
        }

    }

    const handleSubmitButton = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select a size and color before adding to cart.", {
                duration: 1000,
            });
            return;
        }
        setisButtondisabled(true)

        setTimeout(() => {
            toast.success("Product added to cart", {
                duration: 1000,
            });

            setisButtondisabled(false)
        }, 500)
    }


    useEffect(() => {
        if (selectedProduct.images.length > 0) {
            setimages(selectedProduct.images[0].url)
        }
    }, [selectedProduct])



    return (
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                <div className=' flex flex-col md:flex-row'>

                    {/* Left side images */}
                    <div className='hidden md:flex flex-col pl-15 space-y-4 mr-6'>
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url} alt=""
                                className={`w-17 h-17 object-cover rounded-sm cursor-pointer border ${images === image.url ? "border-black" : "border-gray-300"}`}
                                onClick={() => setimages(image.url)}
                            />
                        ))}
                    </div>
                    {/* Right side Product*/}
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img src={images} alt=""
                                className='w-full h-auto object-cover rounded-sm'
                            />
                        </div>
                    </div>

                    <div className='md:hidden flex overflow-x-scroll space-x-4 mb-4'>
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url} alt=""
                                className={`w-17 h-17 object-cover rounded-sm cursor-pointer  ${images === image.url ? "border-black" : "border-gray-300"}`}
                                onClick={() => setimages(image.url)}
                            />
                        ))}
                    </div>

                    {/* Ride side details */}
                    <div className='md:w1/2 md:ml-10'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                            {selectedProduct.name}
                        </h1>
                        <p className='text-lg text-gray-600 mb-1 line-through'>
                            {selectedProduct.originalPrice &&
                                `${selectedProduct.originalPrice}`
                            }
                        </p>
                        <p className='text-lg'>
                            ${selectedProduct.price}
                        </p>
                        <p className='text-gray-600 mb-4'>
                            {selectedProduct.description}
                        </p>
                        <div className='mb-4'>
                            <p className='text-gray-700'>Color:</p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.color.map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                    ></button>
                                ))}
                            </div>
                        </div>

                        <div className='mb-4'>
                            <p className='text-gray-700 '>Size:</p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.size.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => SetselectedSize(size)}
                                        className={` px-4 py-2 rounded border ${selectedSize === size ? "border-3 border-black" : "border-gray-300"} `}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>


                        <div className='mb-6 '>
                            <p className='text-gray-700'>Quantity:</p>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button
                                    onClick={() => handleQuantityChange("minus")}
                                    className='rounded px-2 py-1 bg-gray-200 text-lg'>-</button>
                                <span className='text-lg'>{Quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange("plus")}
                                    className='rounded px-2 py-1 bg-gray-200 text-lg'>+</button>
                            </div>
                        </div>

                        <button
                            onClick={handleSubmitButton}
                            disabled={isButtondisabled}
                            className={`px-5 py-2 rounded-sm text-white 
                             ${isButtondisabled
                                    ? "bg-black opacity-50 cursor-not-allowed"
                                    : "bg-black cursor-pointer"
                                }`}
                        >
                            ADD TO CART
                        </button>


                        <div className='mt-10 text-gray-700'>
                            <h2 className='text-xl font-bold mb-4'>Characteristics: </h2>
                            <table className='w-full text-left text-sm text-gray-700'>
                                <tbody>
                                    <tr>
                                        <td className='py-1'>Brand</td>
                                        <td className='py-1'>{selectedProduct.brand} </td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>Meterial</td>
                                        <td className='py-1'>{selectedProduct.material} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>



                </div>

            <div className="mt-20">
                <h2 className="text-2xl text-center font-medium mb-4">
                    You May Also Like
                </h2>
                <div className="mt-10 "></div>
                <ProductGrid products={similar}/>
            </div>

            </div>
        </div>
    )
}

export default ProductDetails
