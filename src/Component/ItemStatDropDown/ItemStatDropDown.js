import React from "react";
import ItemStat from "../ItemDetail/ItemStat";

const ItemStatDropDown = ({ item, eqItem }) => {
  const newItem = {...item, amount: -2997563}

  return (
    <div style={{position:"absolute", width:"1000px", left:"100px", top:"-50px"}}>
      <ul style={{ listStyle: "none" }}>
        <li style={{ float: "left" }}>
          <ItemStat item={newItem} />
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
