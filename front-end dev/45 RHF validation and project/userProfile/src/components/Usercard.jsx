import React from "react";

const Usercard = ({ user }) => {
  return (
    <div className="h-fit bg-black border flex flex-col gap-4 rounded-xl p-4 ">
      <div className="h-[80%]  rounded-full overflow-hidden">
        <img
          className="h-full   self-center object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZFa-LwxH1Vk0tCSbYd6DoAwiuHymguNHtA&s"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-green-700 text-2xl font-semibold">{user.name}</p>
        <p className="text-xl text-gray-700">{user.email}</p>
        <p className="text-xl text-gray-700">{user.designation}</p>
        <p className="text-xl text-gray-700">{user.emp_id}</p>
      </div>
      <div className="flex gap-4 w-full justify-between">
        <button className="w-[50%] border py-3 rounded-xl border-yellow-500 text-yellow-500 cursor-pointer">
          Update
        </button>
        <button className="w-[50%] border py-3 rounded-xl border-red-500 text-red-500 cursor-pointer">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Usercard;
