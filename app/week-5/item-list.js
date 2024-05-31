// import React from "react";
// import Item from "./item";
// import React, { useState } from "react";

// const ItemList = () => {
  
//   const [sortBy, setSortBy] = useState("name");


//   return (
//     <ul className="">
//       {items.map((item, index) => (
//         <Item key={index} {...item} />
//       ))}
//     </ul>
//   );
// };

// export default ItemList;
"use client";
import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`mr-2 p-2 ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-2 ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
