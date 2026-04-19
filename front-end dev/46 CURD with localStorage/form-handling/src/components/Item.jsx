import React from "react";

const Item = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-5 bg-gray-800 rounded-lg mb-5">
        <div className="">
          <img className="w-40 h-40 object-cover rounded-full border-4 border-white"
          src="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg" alt="" />
        </div>
        <div className="flex ml-5">
          <h2 className="text-4xl" 
          >Name : Item Name</h2>
        </div>
        <div>
          <h2 className="text-4xl text-green-500"
          >Price : $100</h2>
        </div>
        <div>
          <h2 className="text-4xl"
          >Quantity : 1</h2>
        </div>
        <div className="flex gap-5">
          <div>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 active:scale-95">
              Edit
            </button>
          </div>
          <div>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 active:scale-95">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
