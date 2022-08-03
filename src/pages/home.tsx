import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);

  return (
    <div className="products-container">
      <ul className="products-container__list">
        {products.map((item) => (
          <li className="product-item">
            <img src={item.image}></img>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
