import React from "react";
import { useForm } from "react-hook-form";

const Additem = () => {
  const { register, handleSubmit , reset,formState: { errors } } = useForm();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10 font-serif">
        Add Item
      </h1>
      <form 
      
      className="max-w-md mx-auto bg-gray-800 p-5 rounded-lg flex flex-col"
      action="">
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Item Name"
          className="bg-gray-800 text-white placeholder:text-gray-500 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 p-5 rounded-lg"
        />
        <input
          {...register("price", { required: true })}
          type="number"
          placeholder="Price"
          className="bg-gray-800 text-white placeholder:text-gray-500 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 p-5 rounded-lg mt-5"
        />
        <input
          {...register("quantity", { required: true })}
          type="number"
          placeholder="Quantity"
          className="bg-gray-800 text-white placeholder:text-gray-500 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 p-5 rounded-lg mt-5"
        />
        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 active:scale-95 mt-5">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Additem;
