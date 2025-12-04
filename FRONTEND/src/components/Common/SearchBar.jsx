import { HiMagnifyingGlass } from "react-icons/hi2"
import { HiMiniXMark } from "react-icons/hi2"
import { useState } from "react";
const SearchBar = () => {
    const [SearchTerm, setSearchTerm] = useState("");
    const [isopen, setisopen] = useState(false);
    
    const Handlersubmit=(e)=>{
        e.preventDefault();
        console.log(SearchTerm);
        setSearchTerm("");

    }

    return (
        <div className={` flex items-center justify-center w-full transition-all duration-300 ${isopen ? "absolute left-0 top-14 bg-white w-full px-4 h:24 z-50" : "w-auto "}`}>
            {isopen ? (
                <form onSubmit={Handlersubmit} className="relative flex items-center justify-center w-1/2" >
                    <input type="text"
                        value={SearchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search here"
                        className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-none w-full placeholder:text-gray-700 pl-2"
                    />

                    <button type="submit" className=" flex items-center">
                        <HiMagnifyingGlass className="h-6 w-6 text-center text-gray-700 absolute right-3" />
                    </button>
                    <button type="button"
                        onClick={() => setisopen(false)}
                        className="absolute -right-10 top-1/2 transform -translate-1/2 text-gray-600">
                        <HiMiniXMark className="h-6 w-6" />
                    </button>
                </form>
                

            ) : (
                <button onClick={() => setisopen(true)}>
                    <HiMagnifyingGlass className="h-6 w-6 text-center text-gray-700" />
                </button>
            )
            }
        </div>
    )
}

export default SearchBar
