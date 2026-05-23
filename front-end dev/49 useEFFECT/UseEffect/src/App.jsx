import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import axios from "axios";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    (async () => {
      let response = await axios.get("https://fakestoreapi.com/users");
      console.log(response.data);
      setData(response.data);
    })();
  }, []);

  return (
    <div>
      App
      {toggle ? <Home /> : <About />}

      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
      {data.map((item) => (
        <div key={item.id}>
          <h3>Name: {item.name.firstname} {item.name.lastname}</h3>
          <h3>Email: {item.email}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
