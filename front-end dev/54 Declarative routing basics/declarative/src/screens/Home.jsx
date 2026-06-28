import React from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center h-screen text-5xl'>
      <h1>Home</h1>
      <ul className='text-2xl mt-4 flex flex-col gap-2'>
        {names.map((name, index) => (
          <li key={index} onClick={()=> navigate(`/names/${name}`)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home