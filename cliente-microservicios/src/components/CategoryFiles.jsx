import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryFiles = () => {
  const [categoryFile, setCategoryFile] = useState(null);
  const categoryId = 1; // You can change this value to get files for a different category

  useEffect(() => {
    const fetchCategoryFile = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/category-files/${categoryId}`);
        setCategoryFile(response.data.categoryFile);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategoryFile();
  }, [categoryId]);

  return (
    <div>
      <h2>Category Files</h2>
      {categoryFile ? (
        <p>{categoryFile}</p>
      ) : (
        <p>No category file available for category {categoryId}</p>
      )}
    </div>
  );
};

export default CategoryFiles;