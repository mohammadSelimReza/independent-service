import { useEffect, useState } from "react";
import Cart from "./Cart";

const Service = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="products-container service flex justify-center">
        {products.map((product) => (
          <Cart key={product.id} product={product}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Service;
