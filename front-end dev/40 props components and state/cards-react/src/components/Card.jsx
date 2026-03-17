

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name}  className="product-img" />
      <h2 className="card-title">{product.name}</h2>
      
      <p className="card-price">₹{product.price}</p>

      <button
        className="card-btn"
        onClick={() => console.log(product.name)}
      >
        Add to Cart
      </button>

    </div>
  );
};

export default Card;