import React from 'react'
import Navbar from './components/Navbar';
import AppRoute from './routes/AppRoute';
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <>
      <Navbar className="bg-gray-800" />
      <AppRoute />
      
    </>
  )
} 

export default App;