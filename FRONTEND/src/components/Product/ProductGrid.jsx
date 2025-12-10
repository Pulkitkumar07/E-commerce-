import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center">
      {products.map((item, index) => (
        <Link
          to={`/product/${item._id}`}   // unique product URL
          key={index}
          className="rounded hover:shadow-lg transition-shadow duration-200"
        >
          <img 
            src={item.images} 
            alt={item.name} 
            className="w-70 h-90 object-cover rounded-sm mx-auto"
          />
          <h2 className="mt-2 font-semibold text-center">{item.name}</h2>
          <p className="text-gray-700 text-center">₹{item.price}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;

