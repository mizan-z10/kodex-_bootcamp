import React, { useRef, useState } from "react";

const App = () => {

console.log("app rendering");
  
let inpref = useRef({});
console.log(inpref);


  return (
    <div className="h-screen flex  flex-col gap-5 justify-center items-center ">
      <h1 className="font-bold text-3xl">Create Account</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inpref.current.name.value);
          console.log(inpref.current.email.value);
          console.log(inpref.current.password.value);
          console.log(inpref.current.mobile.value);
        }}
        action=""
        className="w-[30%] flex flex-col gap-4 border border-gray-600 p-5 rounded-2xl"
      >
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Name
          </label>
          <input
          name="name"
            ref={(e) =>{
              inpref.current.name = e
            }}
            className="bg-gray-600 p-2 rounded text-white"
            type="text"
            placeholder="Name.."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Email
          </label>
          <input
            name="email"
            ref={(e)=>{
              inpref.current.email = e;
            }}
            className="bg-gray-600 p-2 rounded text-white"
            type="text"
            placeholder="example@mial.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Password
          </label>
          <input
           name="password"
           ref={(e)=>{
            inpref.current.password = e;
           }}
            className="bg-gray-600 p-2 rounded text-white"
            type="text"
            placeholder="******"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Mobile
          </label>
          <input
           name="mobile"
           ref={(e)=>{
            inpref.current.mobile = e;
           }}
            className="bg-gray-600 p-2 rounded text-white"
            type="number"
            placeholder="number"
          />
        </div>
        <button className="bg-blue-600 p-2 rounded-2xl  text-white cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
