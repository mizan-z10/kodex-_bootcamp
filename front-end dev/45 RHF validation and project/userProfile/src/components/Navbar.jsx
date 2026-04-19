import React from "react";

const Navbar = ({ setToggle, toggle }) => {
  return (
    <div className="flex items-center justify-between py-2 px-5 bg-white/10 backdrop-blur-md text-white rounded-xl">
      <div>
        <img src="vite.svg" alt="" />
      </div>
      <div className="flex items-center gap-4 text-xl font-semibold">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
      <div>
        <button
          onClick={() => {setToggle((prev) => !prev)}}
          className="text-xl font-medium px-5 py-2 rounded-2xl cursor-pointer bg-blue-500 hover:bg-blue-600"
        >
          {toggle ? "Close" : "Add User"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
