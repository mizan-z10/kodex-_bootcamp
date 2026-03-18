import React, { useState } from "react";

const Optamized = () => {
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
  let [arr, setArr] = useState([]);
  console.log(arr);

  //   console.log(formValue);
  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormvalue({ ...formValue, [name]: value });
  };

  let handling = (e) => {
    e.preventDefault();
    console.log("after submit ----> ", formValue);
    setArr([...arr, formValue]);

    setFormvalue({
      name: "",
      email: "",
      password: "",
      mobile: "",
    });
  };

  return (
    <div className="h-screen flex  flex-col gap-5 justify-center items-center ">
      <h1 className="font-bold text-3xl">Create Account</h1>
      <form
        onSubmit={handling}
        action=""
        className="w-[30%] flex flex-col gap-4 border border-gray-600 p-5 rounded-2xl"
      >
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Name
          </label>
          <input
            value={formValue.name}
            name="name"
            onChange={handleChange}
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
            value={formValue.email}
            name="email"
            onChange={handleChange}
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
            value={formValue.password}
            name="password"
            onChange={handleChange}
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
            value={formValue.mobile}
            name="mobile"
            onChange={handleChange}
            className="bg-gray-600 p-2 rounded text-white"
            type="number"
            placeholder="number"
          />
        </div>
        <button className="bg-blue-600 p-2 rounded-2xl  text-white cursor-pointer">
          Submit
        </button>
      </form>
      <div>
        <h1>User name</h1>
        <div>
          {arr.map((elem) =>(
            <h1>{elem.name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Optamized;
