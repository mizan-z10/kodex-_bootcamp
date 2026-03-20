import React from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import AddUserForm from "./components/AddUserForm";
import { useState } from "react";

const App = () => {
  // this is toggling the page between  form and home 
  const [toggle, setToggle] = useState(false);
// console.log(toggle);

// this is use for add data from form 
const [users, setUsers] = useState([])
console.log(users);


  return (
    <div className="min-h-screen bg-black text-white p-5 ">
      <Navbar setToggle={setToggle} toggle={toggle} />

      {toggle ? (
        <AddUserForm setUsers={setUsers} />
      ) : (
        <div className="h-[90%] mt-5 grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4">
          {users.map((user) => (
            <Usercard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
