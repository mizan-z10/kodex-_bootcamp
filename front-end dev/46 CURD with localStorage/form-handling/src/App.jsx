import React from "react";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import Additem from "./components/Additem";
import { useState } from "react";



const App = () => {

    const [toggle, setToggle] = useState(false);


  return (
    <div className="min-h-screen bg-black text-white p-5">
      <Navbar setToggle={setToggle} toggle={toggle}/>

      {(toggle) ? (
        <Additem />
      ) : (
        <main>
          <h1 className="text-4xl font-bold text-center my-10 font-serif">
            Welcome to the Item List
          </h1>
          <p className="text-center text-lg mb-10">
            Here you can add, edit, and delete items from your list.
          </p>
          <div className="mt-1.5">
            <Item />
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
