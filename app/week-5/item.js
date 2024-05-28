import React from "react";

let Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center py-2 p-4">
      <div className="text-xl bg-slate-900 w-1/4 p-2 font-bold">
        {name}
        <div className="text-sm text-white">
          {`Buy ${quantity} in ${category}`}
        </div>
      </div>
    </li>
  );
};
export default Item;

