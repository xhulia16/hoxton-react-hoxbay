import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
  inCart: number;
};


export function StoreItem() {
  const[storeItem, setStoreItem] = useState<null | Product>(null);
  const params = useParams();

  const navigate = useNavigate();

  let count=0; 

  useEffect(() => {
    fetch(`http://localhost:4000/products/${params.itemId}`)
      .then((resp) => resp.json())
      .then((items) => setStoreItem(items));
  }, [count]);

  if (storeItem === null)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  if (storeItem.id === undefined) return <Navigate to='/products'/>;

  //function addToCart(){
    //const newItem = structuredClone(storeItem)
    //newItem.inCart+= 1;
   // setStoreItem(newItem)
  //}

  function addToBasket(){ 
    fetch(`http://localhost:4000/products/${params.itemId}`, {
      method: `PATCH`,
      body: JSON.stringify({
        inCart: storeItem?.inCart+1
      }),
      headers: { 'Content-type': `application/json; charset=UTF-8` },
    }).then((response) => response.json())
  }


  return(
    <div className="product-detail ">
        
            <img src={storeItem.image}></img>
        
        <div className="product-detail__side">

            <h2>{storeItem.title}</h2>
            <p>{storeItem.description}</p>
            <p>£{storeItem.price}</p>
            <button onClick={() => {
              addToBasket()
              count++
              console.log(count)
              navigate("/basket")
              }} >
                Add to Basket
                </button>
            
        </div>
    </div>
  ) 
}
