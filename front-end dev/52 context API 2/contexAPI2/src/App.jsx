import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
// h-screen w-screen bg-gray-900
const App = () => {
  let data = useContext(ThemeContext);
  return (
    <div className={`h-screen w-screen ${data.theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      
      <Navbar />
    </div>
  );
};

export default App;
