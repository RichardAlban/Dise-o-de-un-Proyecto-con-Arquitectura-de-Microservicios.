import React, { useState } from 'react';
import axios from 'axios';
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/search?q=${searchTerm}`);
      setSearchResults(response.data.searchResults);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="mt-4 mb-3">Buscar Computadoras</h2>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Ingrese el nombre de la computadora..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          Buscar
        </Button>
      </InputGroup>
      <ListGroup>
        {searchResults.map((computer) => (
          <ListGroup.Item key={computer.id}>
            <strong>{computer.name}</strong> - ${computer.price}
            <p>{computer.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SearchBar;