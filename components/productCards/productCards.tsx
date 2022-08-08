import Card from "@mui/material/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";

type products = [
  {
    category: { categoryName: string; id: number };
    categoryId: number;
    id: number;
    price: number;
    productName: string;
    stock: number;
    tags: [
      {
        id: number;
        tagName: string;
      }
    ];
  }
];

export const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<products>();
  const [productImg, setImg] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/products").then((res) => {
      setProducts(res.data);
      console.info(products);
      // getImages();
    });
  }, []);

  // return the JPG
  axios.get(`https://loremflickr.com/320/320/plaint-shirt`).then((res) => {
    console.info(res.data);
  });

  // function getImages() {
  //   products.forEach((e, i: number) => {
  //     axios
  //       .get(`https://loremflickr.com/320/320/${products[i].productName}`)
  //       .then((res) => {
  //         return setImg(res.data);
  //       });
  //   });
  // };

  console.info(products);
  console.log(products?.[0].productName);

  // console log the product name from the product array

  return (
    <section>
      <img src={productImg[0]} />
    </section>
  );
};
