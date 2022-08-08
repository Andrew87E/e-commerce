import Card from "@mui/material/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const ProductCards: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/products").then((res) => {
      setProducts(res.data);
      console.info(res.data);
    });
  }, []);

  console.info('state =', products)
  return <section></section>;
};
