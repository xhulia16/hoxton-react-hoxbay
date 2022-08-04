import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
  inCart: number;
};

export function Basket() {
  const [basket, setBasket] = useState<Product[]>([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setBasket(productsFromServer));
  }, []);

  const basketItems = basket.filter((item) => item.inCart > 0);

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div className="basket-container">
      <h2>Your Basket</h2>
      <ul>
        {basketItems.map((item) => (
          <li className="basket-container__item :last-of-type">
            <img className="basket-image" src={item.image}></img>
            <h4>{item.title}</h4>
            <label>
              Qty:
              <select name="quantity" onChange={handleChange}>
              <option ></option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              </select>
            </label>
            <h4>Item Total: £{item.price* selected}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
