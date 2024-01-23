import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCatalog = () => {
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    const fetchComputers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/computers');
        setComputers(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComputers();
  }, []);

  return (
    <div>
      <h2>Catálogo de Computadoras</h2>
      <ul>
        {computers.map(computer => (
          <li key={computer.id}>
            <strong>{computer.name}</strong> - ${computer.price}
            <p>{computer.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;