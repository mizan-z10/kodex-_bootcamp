import React, { useState } from 'react'

const App = () => {

  console.log("aap is rendering");

  let [count,setCount] = useState(0);

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h3 className='text-4xl'>Count is {count} </h3>
      <button onClick={() =>{
        
          setCount((prev) => prev + 1)
          setCount((prev) => prev + 1)
          setCount((prev) => prev + 1)
        console.log("clicked....");
      }} className='p-1 bg-blue-200 text-white '>Increase Count</button>
    </div>
  )
}

export default App    

