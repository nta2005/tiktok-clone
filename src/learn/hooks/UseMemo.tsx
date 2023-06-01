/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo, useRef } from 'react';

// useMemo
// Dùng để hạn chế thực hiện lại những logic, tính toán phức tạp không cần thiết

const UseMemo: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState<any>([]);

  const nameRef = useRef<any>();

  const handleSubmit = () => {
    setProducts([...products, { name, price: +price }]);
    setName('');
    setPrice('');
    nameRef.current.focus();
  };

  //console.log(products);

  const total = useMemo(() => {
    const result = products.reduce((total: number, product: any) => {
      console.log('Tính toán lại');
      return total + product.price;
    }, 0);

    return result;
  }, [products]);

  return (
    <div style={{ padding: '20px 30px' }}>
      <input
        ref={nameRef}
        aria-label='name'
        value={name}
        placeholder='Enter name...'
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        aria-label='price'
        value={price}
        placeholder='Enter price...'
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}> Add</button>
      <br />
      Total: {total}
      <ul>
        {products!.map((product: any, index: number) => (
          <li key={index}>
            {product.name}-{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;
