import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
  inCart: number;
};

type Basket={
  Item: Product[]
  inCart: number
}

export function CategoryItems() {
  const [categoryItems, setCategoryItems] = useState<Product[]>([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products?categoryId=${params.itemId}`)
      .then((resp) => resp.json())
      .then((categoryItemsServer) => setCategoryItems(categoryItemsServer));
  }, []);

  return (
    <div className="products-container">
      <ul className="products-container__list">
        {categoryItems.map((item) => (
          <li key={item.id} className="product-item">
            <Link to={`/products/${item.id}`}>
            <img src={item.image}></img>
            <h3>{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
