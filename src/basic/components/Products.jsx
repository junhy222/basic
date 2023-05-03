import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [isLoding, isError, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked(prev => !prev);

  // if (isLoding) return (<p>로딩중입니다.</p>);
  if (isError) return (<p>에러가 발생했습니다.</p>);
  return (
    <>
      <input type="checkbox" id="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor='checkbox'>Show Only Sale!</label>
      <ul>
        {console.log("렌더링했어")}
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
