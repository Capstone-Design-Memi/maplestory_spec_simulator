import React from "react";
import ItemSingleDropDown from "../ItemStatDropDown/ItemSingleDropDown";

const StatInventory = ({ item, eqItem }) => {
  return (
      <div>
        <ItemSingleDropDown item={item} eqItem={eqItem} />
      </div>
  );
};

export default StatInventory;
