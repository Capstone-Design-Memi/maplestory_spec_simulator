import React, { useEffect, useState } from "react";
import { ChractersInfo } from "../../Util/CharatersData";
import { DefaultItems } from "../../Util/ItemDatas";
import { InventoryWrap, ItemBoxWrap } from "../../Style/Item";
import { useCookies } from "react-cookie";
import { Modal } from "antd";
import StatWindow from "../Stat/StatWindow";
import ItemStat from "../ItemDetail/ItemStat";

const ItemItem = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const myItems = ChractersInfo[0].equipments;
  const [hover, setHover] = useState(false);
  const [hoverItem, setHoverItem] = useState();
  const [testLocalItems, setTestLocalItems] = useState([]);
  const inventoryItem = DefaultItems;

  // const test = JSON.parse(localStorage);
  const allKeys = Object.keys(localStorage);
  const allKeyMap = allKeys.map((item) => {
    return JSON.parse(localStorage.getItem(item));
  });

  const v = allKeyMap.map((item, idx) => {
    return (
      <InventoryWrap
        onMouseOver={() => {
          setHoverItem(item);
          setHover(true);
        }}
        onMouseOut={() => {
          setHoverItem();
          setHover(false);
        }}
      >
        <img src={item[0]?.imageUrl} />
      </InventoryWrap>
    );
  });
  const testInventoryItem = inventoryItem.map((it, idx) => {
    return (
      <InventoryWrap
        onMouseOver={() => {
          setHoverItem(it);
          setHover(true);
          console.log(hover);
        }}
        onMouseOut={() => {
          setHoverItem();
          setHover(false);
        }}
      >
        <img src={it.imageUrl} />
      </InventoryWrap>
    );
  });

  const myItemMap = myItems.map((item) => {
    const myItemCategory = item.category;
    const inventoryItemCategoryMap = inventoryItem.map((it) => {
      const inventoryItemCategory = it.category;
      if (item.category == it.category) {
        // console.log(`item : ${item.category}`);
        // console.log(`it : ${it.category}`);
        return item.category;
      }
    });
  });
  // console.log(myItemMap);
  // 데이터가 JSON형태로 들어가 있어 가져올떄는 파싱을 통해 객체로 가져옴
  // const testLocal = JSON.parse(localStorage.getItem("test"));
  // console.log(testLocal);

  // const testEqItems = testCharacterData.
  const testEquiItems = ChractersInfo[0].equipments;
  const testEquiItemMap = testEquiItems?.map((item) => {
    if (item.category == allKeyMap[0][0]?.category) {
      return item;
    }
  });

  const testEqiItem = testEquiItemMap.filter(
    (element) => element !== undefined
  );

  useEffect(() => {}, []);
  return (
    <div>
      <h3>인벤</h3>
      <div
        style={{
          width: `${allKeys.length >= 10 ? 475 : 51 * allKeys.length}px`,
          height: `${
            allKeys.length >= 10
              ? ((allKeys.length - (allKeys.length % 10)) / 10 + 1) * 51
              : 51
          }px`,
          border: "1px solid #C4C4C4",
          marginLeft: "5px",
          borderRadius: "5px",
        }}
      >
        {allKeys.length !== 0 ? (
          <ItemBoxWrap>{v}</ItemBoxWrap>
        ) : (
          <div style={{ width: "120px" }}>아이템이 없습니다</div>
        )}
      </div>
      {hover ? (
        <div>
          <StatWindow item={hoverItem[0]} eqItem={testEqiItem[0]} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ItemItem;
