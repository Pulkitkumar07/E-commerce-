import { Routes, Route } from "react-router-dom"

import Userlayout from "../components/Layout/Userlayout";
import Home from "../pages/Home"
const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Userlayout />}>
             <Route index element={<Home/>} />
            </Route>
           
        </Routes>
    )
}

export default Mainroutes
