import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
    let data = useContext(ThemeContext);
  return (
    <>
      <nav className={`w-full h-16 ${data.theme === "dark" ? "bg-black text-white" : "bg-gray-700 text-white"} flex items-center justify-between px-4`}>
        <div className="text-lg font-bold">MyApp</div>
        <ul className="flex space-x-4 text-sm font-medium px-10 gap-4">
          <li>
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
        <button 
        onClick={() => data.setTheme(data.theme === "dark" ? "light" : "dark")}
        className="bg-blue-500  active:scale-95 hover:bg-blue-600 text-white px-3 py-1 rounded">
          {data.theme === "dark" ? "light" : "Dark"}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
