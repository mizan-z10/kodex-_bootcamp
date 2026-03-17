import Card from "./components/Card/Card";
import products from "./data/products";
import "./styles/global.css";

const App = () => {
  return (
    <>
      <h1 className="heading">Our Products</h1>

      <div className="container">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default App;