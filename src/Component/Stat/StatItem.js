import React from "react";
import ItemStatDropDown from "../ItemStatDropDown/ItemStatDropDown";

const StatItem = ({ item, eqItem }) => {
  return (
    <div>
      <h3>장착비교</h3>
      <div>
        <ItemStatDropDown item={item} eqItem={eqItem} />
      </div>
    </div>
  );
};

export default StatItem;
