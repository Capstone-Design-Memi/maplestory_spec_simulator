import React, { useEffect, useState } from "react";
import { ChractersInfo } from "../../Util/CharatersData";
import { DefaultItems } from "../../Util/ItemDatas";
import { InventoryWrap, ItemBoxWrap } from "../../Style/Item";
import { useCookies } from "react-cookie";

const ItemItem = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const myItems = ChractersInfo[0].equipments;
  const [col, setCol] = useState(0);
  const inventoryItem = DefaultItems;

  const testInventoryItem = inventoryItem.map((it) => {
    return (
      <InventoryWrap>
        <img src={it.imageUrl} />
      </InventoryWrap>
    );
  });

  const myItemMap = myItems.map((item) => {
    const myItemsCategory = item.category;
    const inventoryItemMap = inventoryItem.map((it) => {
      if (item.category == it.category) {
        return item;
      }
    });
    return inventoryItemMap;
  });

  console.log(myItemMap);

  return (
    <div>
      <h3>장착비교</h3>
      <div></div>
      <h3>인벤</h3>
      <div
        style={{
          width: `${
            testInventoryItem.length >= 10 ? 475 : 51 * testInventoryItem.length
          }px`,
          height: `${
            testInventoryItem.length >= 10
              ? ((testInventoryItem.length - (testInventoryItem.length % 10)) /
                  10 +
                  1) *
                51
              : 51
          }px`,
          border: "1px solid #C4C4C4",
          marginLeft: "5px",
          borderRadius: "5px",
        }}
      >
        <ItemBoxWrap>{testInventoryItem}</ItemBoxWrap>
      </div>
    </div>
  );
};

export default ItemItem;
