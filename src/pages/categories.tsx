import { useEffect, useState } from "react";

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
            <li className="categories-container__list_item">{item.name}</li>
        ))}
    </ul>
</div>
  );
}
