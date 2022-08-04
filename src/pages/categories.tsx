import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

useEffect(()=>{
    fetch('http://localhost:4000/categories')
    .then(resp=>resp.json())
    .then(categoriesServer=> setCategories(categoriesServer))
}, [])

  return(
<div className='categories-container '>
    <ul className="categories-container__list">
        {categories.map(item=>(
          <Link to={`/categories/${item.id}`}>
            <li className="categories-container__list_item">{item.name}</li>
            </Link>
        ))}
    </ul>
</div>
  );
}
