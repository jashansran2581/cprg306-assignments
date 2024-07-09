"use client";

import React, { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/router";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }
const Page = () => {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) {
    return <p>Redirecting...</p>;
  }

  const handleAddItem = (name, quantity, category) => {
    const newItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name,
      quantity,
      category,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const itemNameRegex = /^[^\W_]+(?: [^\W_]+)*/;
    const itemNameMatch = item.name.match(itemNameRegex);
    const name = itemNameMatch ? itemNameMatch[0].trim() : item.name.trim();
    setSelectedItemName(name);
  };

  return (
    <main className="bg-black min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-white">Shopping List</h1>
      <div className="flex w-full">
        <div className="w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <br />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}};
