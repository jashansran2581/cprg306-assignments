"use client";
import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  const sortedItems = Array.from(items).sort((a, b) => 
  sortBy === 'name' ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );

  return (
    <div>
      <div className="mb-4">
        <label for="sort">Sort by: </label>
        <button onClick={() => setSortBy("name")} className={`mr-2 p-3 ${sortBy === "name" ? "bg-orange-600 text-white" : "bg-orange-300"}`}>Name</button>
        <button onClick={() => setSortBy("category")}className={`p-3 ${sortBy === "category" ? "bg-orange-600 text-white" : "bg-orange-300"}`}>Category</button>
      </div>
      <ul className="">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;