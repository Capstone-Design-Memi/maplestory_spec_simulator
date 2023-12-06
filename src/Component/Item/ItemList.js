import React from "react";
import ItemItem from "./ItemItem";

const ItemList = ({
  dragDrop,
  setDragDrop,
  doubleClickItem,
  setDoubleClickItem,
}) => {
  return (
    <div>
      <ItemItem
        dragDrop={dragDrop}
        setDragDrop={setDragDrop}
        doubleClickItem={doubleClickItem}
        setDoubleClickItem={setDoubleClickItem}
      />
    </div>
  );
};

export default ItemList;
