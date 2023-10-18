import React from "react";
import ItemStatDropDown from "../ItemStatDropDown/ItemStatDropDown";

const StatItem = ({ item, eqItem }) => {
  return (
      <div>
        <ItemStatDropDown item={item} eqItem={eqItem} />
      </div>
  );
};

export default StatItem;
