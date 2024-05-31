"use client"
import { useState } from "react";


const New_Item = () => {
  const [name, setterName] = useState('');
  const [quantity, setterQuantity] = useState(1);
  const [category, setterCategory] = useState('produce');

  const submitFunction = (event) => {
    event.preventDefault();
    alert(`Item Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
  };
  

  return (
    <form onSubmit={submitFunction} className="p-6 rounded-lg shadow-md w-1/4 bg-slate-600">
      <div className="mb-4">
        <input type="text" id="name" value={name} placeholder="naem" onChange={(e) => setterName(String(e.target.value))} required
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4 float-left w-1/3">
        <input type="number" id="quantity" min="1" max="99" value={quantity} onChange={(e) => setterQuantity(Number(e.target.value))}
          required
          className="mt-1 p-2 w-full border rounded-md" 
        />
      </div>
      <div className="mb-4 float-right w-1/3">
        <select id="category" value={category} onChange={(e) => setterCategory(String(e.target.value))} className="mt-1 p-2 w-full border rounded-md"
        >
          <option value="" disabled>Category</option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full clear-both">+</button>
    </form>
  );
};

export default New_Item;
