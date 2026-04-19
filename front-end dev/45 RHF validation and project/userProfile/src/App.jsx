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
  const [users, setUsers] = useState( JSON.parse(localStorage.getItem("users")) || []);
  // console.log(users);

  // remove function
  // const handleremove = (id) => {
  //   // users.filter((user) => user.id !== id)
  //   setUsers(users.filter((user) => user.id !== id));
  //   localStorage.setItem("users", JSON.stringify(users));
  // };
  const handleremove = (id) => {
  const updatedUsers = users.filter((user) => user.id !== id);
  
  setUsers(updatedUsers);
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};

  // edit state
  const [useredit, setUseredit] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white p-5 ">
      <Navbar setToggle={setToggle} toggle={toggle} />

      {toggle ? (
        <AddUserForm
         users={users}
          setUsers={setUsers}
          setToggle={setToggle}
          useredit={useredit}
          setUseredit={setUseredit}
        />
      ) : (
        <div className="h-[90%] mt-5 grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4">
          {users.map((user) => (
            <Usercard
              key={user.id}
              user={user}
              handleremove={handleremove}
              setUseredit={setUseredit}
              setToggle={setToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
