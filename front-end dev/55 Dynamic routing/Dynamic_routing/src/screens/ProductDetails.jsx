import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'

const ProductDetails = () => {
  const { id } = useParams();
  const [productdetail, setProductDetail] = useState([]);
  const [isloding, setIsloding] = useState(true)
  const navigate = useNavigate();

  console.log(id);

  useEffect (() => {
    if(id){
            (
     async()=>{
        try {
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(res.data);
            setProductDetail(res.data);
            setIsloding(false)
        } catch (error){
            console.log("Error in Api ", error);
        }
     }    
    )()
    }
    setIsloding(true)

  }, [id])

 

 if (isloding) {
    return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-gray-50 via-white to-gray-100">
      <div className="text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>

        <h1 className="mt-8 text-4xl font-extrabold tracking-[0.3em] text-gray-900 uppercase">
          Loading...
        </h1>

        <p className="mt-3 text-sm tracking-[0.2em] text-gray-500 uppercase">
          Please Wait
        </p>
      </div>
    </div>
  );
  }
    return (
  <div className="max-w-5xl mx-auto p-10">
    <div className="grid md:grid-cols-2 gap-10 items-center">

      <img
        src={productdetail.image}
        alt={productdetail.title}
        className="h-96 object-contain w-full transition-transform duration-500 hover:scale-120"
      />

      <div>
        <h1 className="text-3xl font-bold">{productdetail.title}</h1>

        <p className="text-gray-500 mt-2">{productdetail.category}</p>

        <p className="mt-5 text-gray-700 transition-transform duration-500 hover:scale-120">
          {productdetail.description}
        </p>

        <h2 className="text-3xl font-bold text-green-600 mt-6">
          ₹{productdetail.price}
        </h2>


        <button className="mt-8 bg-black text-white px-6 py-3 rounded-lg">
          Add To Cart
        </button>
        <button 
        onClick={() => navigate(`/product/${id}/more`)}
         className="mt-8 ml-2.5 bg-black text-white px-6 py-3 rounded-lg">
          More Details
        </button>
        
      </div>

    </div>
    <Outlet />
  </div>
);
  
}

export default ProductDetails