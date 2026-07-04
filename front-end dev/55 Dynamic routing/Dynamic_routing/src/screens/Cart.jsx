import React, { useContext } from "react";
import { CartStore } from "../context/CardContex";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const { cardItem } = useContext(CartStore);
  console.log("cartItems", cardItem);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {cardItem.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Cart;
