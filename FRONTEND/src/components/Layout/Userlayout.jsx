import { Outlet } from "react-router-dom"
import Footer from "../Common/Footer"
import Header from "../Common/Header"


const Userlayout = () => {
  return (
      <div className="min-h-screen flex flex-col justify-between">
      <Header/>
       
        <Outlet/>
      
      <Footer/>
      </div>
  )
}

export default Userlayout
