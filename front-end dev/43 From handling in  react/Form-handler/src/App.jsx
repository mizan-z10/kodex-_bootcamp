import React, { useState } from "react";

const App = () => {
  // const [Name, setName] = useState("");
  // const [Email, setEmail] = useState("");
  // const [Password, setPassword] = useState("");
  // const [Mobile, setMobile] = useState("");

  let [formValue, setFormvalue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  console.log(formValue);

  return (
    <div className="h-screen flex  flex-col gap-5 justify-center items-center ">
      <h1 className="font-bold text-3xl">Create Account</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("name --->" ,Name);
          // console.log("Email -->", Email);
          // console.log("Password -->",Password);
          // console.log("Mobile -->" ,Mobile);
        }}
        action=""
        className="w-[30%] flex flex-col gap-4 border border-gray-600 p-5 rounded-2xl"
      >
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Name
          </label>
          <input
            onChange={(e) => {
              setFormvalue({...formValue, name:e.target.value})
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
            onChange={(e) => {
              setFormvalue({...formValue, email:e.target.value})
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
            onChange={(e) => {
              setFormvalue({...formValue, password:e.target.value})
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
            onChange={(e) => {
             setFormvalue({...formValue, mobile:e.target.value})
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
