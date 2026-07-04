import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isloding, setIsloding] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");
        console.log("getting api response", res);
        setProducts(res.data);
        setIsloding(false);
      } catch (error) {ii
        console.log("Error in Api ", error);
      }
    })();
    setIsloding(true);
  }, []);

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
