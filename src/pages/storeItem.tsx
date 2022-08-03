import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export function StoreItem() {
  const [storeItem, setStoreItem] = useState<null | Product>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${params.itemId}`)
      .then((resp) => resp.json())
      .then((items) => setStoreItem(items));
  }, []);

  if (storeItem === null)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  if (storeItem.id === undefined) return <Navigate to="/products" />;

  return(
    <div className="product-detail ">
        
            <img src={storeItem.image}></img>
        
        <div className="product-detail__side">

            <h2>{storeItem.title}</h2>
            <p>{storeItem.description}</p>
            <p>£{storeItem.price}</p>
            <button>Add to basket</button>
        </div>
    </div>
  ) 
}
