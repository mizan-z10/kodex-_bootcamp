import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CartStore } from "../context/CardContex";

const ProductCard = ({ product }) => {
  const { setCardItem, cardItem } = useContext(CartStore);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setCardItem((prev) => [...prev, product]);
    alert("Product added to cart");
  };
  const isIncart = cardItem.find((item) => item.id === product.id);

  const [num, setNum] = useState(1);
  const handleIncrease = () => setNum(num + 1);
  const handleDecrease = () => {
  if (num > 1) {
    setNum(num - 1);
  }
};

  return (
    <div className=" m-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md">
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="overflow-hidden  rounded-xl bg-gray-50 aspect-square"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-500 hover:scale-60"
        />
      </div>

      <div className="mt-4 space-y-1">
        <span className="text-xs font-medium uppercase tracking-wider text-indigo-600">
          Category
        </span>
        <h1 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.title}
        </h1>
        <h2 className="text-xl font-bold text-gray-900 mt-1">
          ₹ {product.price.toFixed(2)}
        </h2>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button className="w-full rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 active:bg-gray-100">
          Remove
        </button>
        {isIncart ? (
          <div className="flex justify-between items-center w-full rounded-xl border border-gray-200 py-2.5 px-4 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 active:bg-gray-100">
            <p onClick={handleDecrease} className="cursor-pointer select-none">-</p>
            <p>{num}</p>
            <p onClick={handleIncrease} className="cursor-pointer select-none">+</p>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 active:bg-indigo-800 shadow-sm"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
