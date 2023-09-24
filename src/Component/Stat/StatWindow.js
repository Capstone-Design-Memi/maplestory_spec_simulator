import React from "react";
import { InventoryWrap } from "../../Style/Item";
import StatItem from "./StatItem";

const StatWindow = ({ item, eqItem }) => {
  return (
    <div>
      <StatItem item={item} eqItem={eqItem} />
    </div>
  );
};

export default StatWindow;
