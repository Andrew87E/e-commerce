import axios from "axios";
import React, { useEffect, useState } from "react";

type productsType = [
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
  const [isLoading, setLoading] = useState(true);
  const [products, setproducts] = useState<productsType[]>([]);

// fetch()

  useEffect(() => {
    axios.get(`http://localhost:3001/api/products`).then((response) => {
      setproducts(response.data);
      setLoading(false);
    });
  }, []);

  const renderCard = () => {
    console.log(products);
    for (let i = 0; i < 4; i++) {
      console.log(i);
      return (
        <>
          <div
            className="flex font-sans w-96 m-5 relative border-b border-r bg-black"
            key={i}
          >
            <div className="flex-none w-48 relative">
              <img
                src="/classic-utility-jacket.jpg"
                alt="Product Image"
                className="absolute inset-0 w-full h-full object-cover hover:scale-110"
                loading="lazy"
              />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-white">
                  {products[i].productName}
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                  {products[i].stock + " In Stock!"}
                </div>
                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                  {"$" + products[i].price}
                </div>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-2 flex text-sm"></div>
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-white hover:scale-110">
                    Add
                  </button>
                </div>
                <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 hover:scale-110">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-slate-700">Free shipping!</p>
            </form>
          </div>
        </>
      );
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "grey",
        }}
      >
        Loading...
      </div>
    );
  } else {
    return (
      <div className="">
        <p className="text-center text-white text-4xl font-semibold py-4">
          Check out what we have in stock!
        </p>
        {renderCard()}
      </div>
    );
  }
};
