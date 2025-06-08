import React, { useState } from "react";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    setProducts([...products, { name: "", price: 0, stock: 0 }]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Creator Dashboard</h1>
      <button
        onClick={addProduct}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl mb-4"
      >
        + Add Product
      </button>
      <div className="grid gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-4 border rounded-xl bg-white">
            <input
              type="text"
              placeholder="Product name"
              className="block mb-2 border p-2 w-full"
            />
            <input
              type="number"
              placeholder="Price"
              className="block mb-2 border p-2 w-full"
            />
            <input
              type="number"
              placeholder="Stock"
              className="block border p-2 w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}