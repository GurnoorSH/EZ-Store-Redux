import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import { Route ,Routes } from "react-router-dom";

function App() {
  return (
   <div>
    <div className="bg-slate-800">
      <Navbar></Navbar>
    </div>
    <Routes>
      <Route path="/" element={<Home></Home> }/>
      <Route path="/cart" element={<Cart></Cart> }/> 
    </Routes>
   </div>
  );
}

export default App;
