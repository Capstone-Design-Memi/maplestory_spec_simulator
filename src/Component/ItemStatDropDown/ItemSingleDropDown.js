import React from "react";
import ItemStat from "../ItemDetail/ItemStat";

const ItemSingleDropDown = ({ item, eqItem }) => {
  const extraInfo = {
    maxStar : 25,
  }
  return (
          <ItemStat item={item} extraInfo={extraInfo} />
  )
};

export default ItemSingleDropDown;
