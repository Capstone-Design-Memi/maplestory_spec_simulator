import React from "react";
import ItemList from "../Component/Item/ItemList";
import StatWindow from "../Component/Stat/StatWindow";
import EquipmentInventory from "../Component/EquipmentInventory/EquipmentInventory";

const Main = () => {
  return (
    <div>
      <h2>메인</h2>
      <EquipmentInventory />
      <StatWindow />
      <ItemList />
    </div>
  );
};

export default Main;
