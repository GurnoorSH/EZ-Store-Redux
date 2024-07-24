import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
        <div className="ml-5"> <img className="h-14" src="" /> 
        </div>
          
        </NavLink>
        <div className=" flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home </p>{" "}
          </NavLink>
          <NavLink to="/cart"> 
          <div className="relative">  <MdOutlineShoppingCart className="text-2xl" />
          {
            cart.length > 0 && <span className="absolute top-1 right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white"> {cart.length}</span>
          }
           </div>
           
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
