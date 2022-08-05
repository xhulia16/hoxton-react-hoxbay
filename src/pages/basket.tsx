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

  const options = [
    {
      label: "0",
      value: "0",
    },
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
  ];




  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setBasket(productsFromServer));
  }, []);

  const basketItems = basket.filter((item) => item.inCart > 0);

  const [quantity, setQuantity] = useState('');


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
              <select name="quantity" onChange={event => {setQuantity(event.target.value)}}>
              {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
              </select>
            </label>
            <h4>Item Total: £{item.price*Number(quantity)}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
