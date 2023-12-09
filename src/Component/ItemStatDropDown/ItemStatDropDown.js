import React from "react";
import ItemStat from "../ItemDetail/ItemStat";

const ItemStatDropDown = ({ item, eqItem }) => {
  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          marginLeft: "480px",
          transform: "translateY(-400px)",
        }}
      >
        <li style={{ float: "left" }}>
          <ItemStat item={item} />
        </li>
        {eqItem ? (
          <li style={{ float: "left" }}>
            <ItemStat item={eqItem} />
          </li>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default ItemStatDropDown;
