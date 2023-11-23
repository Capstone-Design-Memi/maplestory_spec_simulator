import React from "react";
import ItemItem from "./ItemItem";

const ItemList = ({ dragDrop, setDragDrop }) => {
  return (
    <div>
      <ItemItem dragDrop={dragDrop} setDragDrop={setDragDrop} />
    </div>
  );
};

export default ItemList;
