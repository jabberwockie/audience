import { React, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';

import { PRODUCTS } from './utils/constants'

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const config = {
      origin: 'http://localhost:3000',
      headers: {
        "access-control-allow-origin" : "*",
        "Content-Type": "application/json",
        "Accept": "*/*",
      }}
  useEffect(() => {
    fetch(PRODUCTS, config)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.items);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
           <ProductList data={data}/>   
          }
      </ul>
    </div>
  );
}