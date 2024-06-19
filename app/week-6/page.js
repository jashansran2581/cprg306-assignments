"use client";

import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const AI = (name, quantity, category) => {
    const newItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, name, quantity, category,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-black min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">Shopping List</h1>
      <NewItem onAddItem={AI} /><br/>
      <ItemList items={items} />
    </main>
  );
};

export default Page;
