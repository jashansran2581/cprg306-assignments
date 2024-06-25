"use client";

import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setterName] = useState('');
  const [quantity, setterQuantity] = useState(1);
  const [category, setterCategory] = useState('produce');

  const submitFunction = (event) => {
    event.preventDefault();
    onAddItem(name, quantity, category);
    setterName('');
    setterQuantity(1);
    setterCategory('produce');
  };

  return (
    <form onSubmit={submitFunction} className="p-6 rounded-lg shadow-md w-3/6 bg-slate-600">
    <div className="mb-4">
      <input type="text" id="name" value={name} placeholder="Name *" onChange={(e) => setterName(String(e.target.value))} required
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

export default NewItem;

// "use client";
// import React from "react";
// import { useState } from "react";

// const NewItem = ({onAddItem}) => {
//     // Use states for name, quantity, and category
//     const [name, setName] = useState("");
//     const [quantity, setQuantity] = useState(1);
//     const [category, setCategory] = useState("Produce");    

//     const submitItem = (event) => {
//         event.preventDefault();

//         const Item = {
//             name: name,
//             quantity: quantity,
//             category: category
//         };

//         console.log("Item submitted: ", Item);
//         onAddItem(Item);
        
//         //Resets the state variables to their initial values
//         setName("");
//         setQuantity(1);
//         setCategory("Produce");
//     }
    
//     return (
//         //Form
//         <form className="bg-white p-4 " onSubmit={submitItem}>
            
//             <label>
//                 <span className="text-gray-700">Item Name:</span>
//                 <input
//                     type="text"
//                     placeholder="Enter item name"                  
//                     value={name}
//                     onChange={(event) => {
//                         setName(event.target.value);}
//                     }
//                     className="ml-2"
//                     required/>
//             </label>
//             <label className="block mt-6">
//                 <span className="text-gray-700">Quantity:</span>
//                 <input
//                     type="number"
//                     min={1}
//                     max={99}                 
//                     value={quantity}
//                     onChange={(event) => setQuantity(event.target.value)}
//                     className="ml-2"
//                     required/>
//             </label>
//             <label className="block mt-6">
//                 <span className="text-gray-700">Category:</span>
//                 <select
//                     value={category}
//                     onChange={(event) => setCategory(event.target.value)}
//                     className="ml-2">
                    
//                     <option value="Produce">Produce</option>
//                     <option value="Dairy">Dairy</option>
//                     <option value="Bakery">Bakery</option>
//                     <option value="Meat">Meat</option>
//                     <option value="Frozen Foods">Frozen Foods</option>
//                     <option value="Canned Goods">Canned Goods</option>
//                     <option value="Dry Goods">Dry Goods</option>    
//                     <option value="Beverages">Beverages</option>
//                     <option value="Snacks">Snacks</option>
//                     <option value="Household">Household</option>
//                     <option value="Other">Other</option>
//                 </select>
//             </label>
//             <button 
//                 className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"                 
//                 type="submit">
//                 Add Item
//             </button>
//         </form>
//     );
// }

// export default NewItem;