import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li className="flex justify-between items-center py-2 p-4 " onClick={onSelect}>
      <div className="text-xl cursor-pointer hover:bg-orange-500 bg-slate-900 w-1/2 p-2 font-bold">
        {name}
        <div className="text-sm text-white">
          Buy {quantity} in {category}
        </div>
      </div>
    </li>
  );
};

export default Item;
