"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");
  const sortedItems = Array.from(items).sort((a, b) => 
    sortBy === 'name' ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
  );

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="sort" className="text-white">Sort by: </label>
        <button onClick={() => setSortBy('name')} className={`mr-2 p-2 ${sortBy === 'name' ? 'bg-orange-600 text-white' : 'bg-orange-300'}`}>
          Sort by Name
        </button>
        <button onClick={() => setSortBy('category')} className={`p-2 ${sortBy === 'category' ? 'bg-orange-600 text-white' : 'bg-orange-300'}`}>
          Sort by Category
        </button>
      </div>
      <ul className="text-white">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
