import { Routes, Route } from "react-router-dom"

import Userlayout from "../components/Layout/Userlayout";

const Mainroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Userlayout />}></Route>
        </Routes>
    )
}

export default Mainroutes
