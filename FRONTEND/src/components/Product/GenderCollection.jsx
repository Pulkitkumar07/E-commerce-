import MenCollection from "../../assets/mens-collection.webp";
import  WomenCollection from  "../../assets/womens-collection.webp";
import {Link} from "react-router-dom"
const GenderCollection = () => {
  return <section className="py-12 px-4 lg:px-0 ">
    <div className="container mx-auto  flex flex-col md:flex-row md:px-12 gap-8 ">
        <div className="relative flex-1">
            <img src={WomenCollection} alt="Women's Collection" className="w-full h-[700px] object-cover" />
              <div className="absolute bottom-8 left-8  bg-white/90 p-4 rounded-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Women's Collection
              </h2>
              <Link to='/collection/all?gender-women' className="text-gray-900 underline">
              Shop now
              </Link>
              </div>
        </div>
        <div className="relative flex-1">
            <img src={MenCollection} alt="Men's Collection " className="w-full h-[700px] object-cover" />
              <div className="absolute bottom-8 left-8  bg-white/90 p-4 rounded-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Men's Collection
              </h2>
              <Link to='/collection/all?gender-men' className="text-gray-900 underline">
              Shop now
              </Link>
              </div>
        </div>

    </div>
    

  </section>
}

export default GenderCollection