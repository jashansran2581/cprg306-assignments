"use client";
import React, { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = response.ok ? await response.json() : { meals: [] };
  return data.meals || [];
};
const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    ingredient && fetchMealIdeas(ingredient).then(setMeals);
  }, [ingredient]);

  return (
    <main>
      <h1 className="text-3xl text-center font-bold mt-4">Meal Ideas</h1>
      <ul>
        {meals.length ? (
          meals.map((meal, index) => (
            <li key={index} className="bg-black text-white p-4 m-4 rounded">
              <h2 className="text-xl font-bold">{meal.strMeal}</h2>
            </li>
          ))
        ) : (
          <li className="bg-blue-100 p-4 m-4 rounded">
            <h2 className="text-xl font-bold">No ideas found</h2>
          </li>
        )}
      </ul>
    </main>
  );
};
export default MealIdeas;