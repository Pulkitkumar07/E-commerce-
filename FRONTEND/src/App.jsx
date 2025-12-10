import { BrowserRouter } from "react-router-dom"
import Mainroutes from "./routes/Mainroutes";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer  position="top-right" />
      <Mainroutes />
    </BrowserRouter>
  )
}

export default App
