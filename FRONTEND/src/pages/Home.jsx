import Hero from "../components/Layout/Hero"
import GenderCollection from "../components/Product/GenderCollection"
import NewArrivals from "../components/Product/NewArrivals"
import ProductDetails from "../components/Product/ProductDetails"
import ProductGrid from "../components/Product/ProductGrid";
import FeaturedCollection from "../components/Product/FeaturedCollection"
const placeholderProducts=[
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
  },{
    _id: 5,
    name: "Classic Black Jacket",
    price: 230,
    images:
      "https://static.zara.net/assets/public/efa9/7309/6a0448d3a60d/b57e8e864eb2/08281152704-a1/08281152704-a1.jpg?ts=1764775326887&w=580"
  },
  {
    _id: 6,
    name: "Minimal White Shirt",
    price: 150,
    images:
      "https://static.zara.net/assets/public/7b32/1c62/fd3d4b09bb30/438726fbb49b/08281152800-a1/08281152800-a1.jpg?ts=1764775347371&w=580"
  },
  {
    _id: 7,
    name: "Beige Winter Coat",
    price: 340,
    images:
      "https://static.zara.net/assets/public/5558/c251/8c26498d8c88/a2f204b1ec4e/00993704251-a1/00993704251-a1.jpg?ts=1764751959159&w=1198"
  },
  {
    _id: 8,
    name: "Beige  Coat",
    price: 240,
    images:
      "https://static.zara.net/assets/public/1e40/48b2/0d6940899cd0/5e678feb0384/04302209800-e1/04302209800-e1.jpg?ts=1761572482144&w=888"
  },
]

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollection/>
        <NewArrivals/>
        <h2 className="text-3xl text-center font-bold mb-4">
           Best Seller 
        </h2>
        <ProductDetails/>

        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4">
            Top Wears for Women
          </h2>
          <ProductGrid products={placeholderProducts}  />
        </div>

        <FeaturedCollection/>
        
    </div>
  )
}

export default Home
