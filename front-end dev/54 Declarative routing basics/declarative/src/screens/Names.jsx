import React from 'react'
import { useParams } from 'react-router'

const Names = () => {
    const data = useParams();
    console.log(data);
  return (
    <div>
      <h1>Names</h1>
      <p>Name: {data.id}</p>
    </div>
  )
}

export default Names