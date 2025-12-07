import { useEffect, useState } from "react";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [isDragging, setisDragging] = useState(false);
    const [starX, setStartX] = useState(0);
    const [ScrollLeft, setScrollLeft] = useState(false);
    const [canScrollRight, setcanScrollRight] = useState(true);
    const [canScrollLeft, setcanScrollLeft] = useState(false);

    const newArrivals = [
        {
            _id: 1,
            name: "Oversized Hoodie",
            price: 799,
            image: {
                url:
                    "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&auto=format&fit=crop&q=60",
                altText: "Oversized Hoodie",
            },
        },
        {
            _id: 2,
            name: "Classic Denim Jacket",
            price: 2499,
            image: {
                url:
                    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=60",
                altText: "Denim Jacket",
            },
        },
        {
            _id: 3,
            name: "Minimal White Tee",
            price: 499,
            image: {
                url:
                    "https://images.unsplash.com/photo-1556900365-6f66368bb07a?w=800&auto=format&fit=crop&q=60",
                altText: "White T-Shirt",
            },
        },
        {
            _id: 4,
            name: "Tailored Trousers",
            price: 1799,
            image: {
                url:
                    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&auto=format&fit=crop&q=60",
                altText: "Trousers",
            },
        },
        {
            _id: 5,
            name: "Pleated Dress",
            price: 2199,
            image: {
                url:
                    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60",
                altText: "Pleated Dress",
            },
        },
        {
            _id: 6,
            name: "Casual Hoodie",
            price: 899,
            image: {
                url:
                    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&auto=format&fit=crop&q=60",
                altText: "Casual Hoodie",
            },
        },
        {
            _id: 7,
            name: "Leather Bag",
            price: 2599,
            image: {
                url:
                    "https://images.unsplash.com/photo-1601924582971-6ee8f6dab497?w=800&auto=format&fit=crop&q=60",
                altText: "Leather Bag",
            },
        },
        {
            _id: 8,
            name: "Sporty Sneakers",
            price: 3499,
            image: {
                url:
                    "https://images.unsplash.com/photo-1528701800489-20be9c6e4f09?w=800&auto=format&fit=crop&q=60",
                altText: "Sneakers",
            },
        },
        {
            _id: 9,
            name: "Summer Shirt",
            price: 1199,
            image: {
                url:
                    "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=60",
                altText: "Summer Shirt",
            },
        },
    ];

    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        })
    }
    const updateScrollButtons = () => {
        const container = scrollRef.current;

        if (container) {
            const leftScroll = container.scrollLeft;
            const rightScroll = container.scrollWidth - container.clientWidth > leftScroll;
            setcanScrollLeft(leftScroll > 0);
            setcanScrollRight(rightScroll)
        }

        console.log({
            screenLeft: container.scrollLeft,
            clientWidth: container.clientWidth,
            containerScrollWidth: container.scrollWidth
        })
    }

    useEffect(() => {
        const container = scrollRef.current
        if (container) {
            container.addEventListener("scroll", updateScrollButtons)
            updateScrollButtons()
        }
    }, [])


    return (
        <section>
            <div className="container mx-auto text-center mb-10 relative px-4">
                <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Discover new arrivals designed to elevate your everyday look—crafted
                    with timeless style, premium comfort, and effortless versatility.
                </p>

                <div className="absolute right-4 bottom-[-30px] flex space-x-2 p-2">
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        aria-label="Previous"

                        className={`p-2 rounded border ${canScrollLeft ? "text-black bg-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}

                    >
                        <FiChevronLeft className="text-2xl" />
                    </button>
                    <button
                        aria-label="Next"
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={`p-2 rounded border ${canScrollRight ? "text-black bg-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                    >
                        <FiChevronRight className="text-2xl" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="container mx-auto overflow-x-auto  flex space-x-6 py-4 px-4 scroll-smooth"
            >
                {newArrivals.map((product) => (
                    <div key={product._id} className="min-w-[220px]">
                        <div className="w-full h-[300px] bg-gray-100 rounded-sm overflow-hidden">
                            <img
                                src={product.image?.url || fallback}
                                alt={product.image?.altText || product.name}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        <Link
                            to={`/product/${product._id}`}
                            className="block mt-3 font-semibold hover:underline"
                        >
                            {product.name}
                        </Link>

                        <p className="text-gray-600">${product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewArrivals;
