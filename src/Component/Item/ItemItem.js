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
  const chracterId = 0;
  const testItem = JSON.parse(localStorage.getItem(`testChItem${chracterId}`));
  const eqItemMap = testItem[0].data.map((item) => {
    if (hoverItem?.category == item?.category) {
      return item;
    }
  });
  const eqItem = eqItemMap.filter((it) => {
    if (it != undefined) {
      return it;
    }
  });
  console.log(eqItem);
  // 로컬의 장착 아이템
  const localEqItemMap = Object.keys(localStorage).map(
    (key) => localStorage[key]
  );

  const allKeys = Object.keys(localStorage);
  const allKeyMap = allKeys.map((item) => {
    if (item == `InventoryItem0`) {
      return JSON.parse(localStorage.getItem(item));
    }
  });

  const v = allKeyMap.map((item) => {
    const inventoryItems = item?.data;
    if (item != undefined) {
      const inventoryItemMap = inventoryItems?.map((it) => {
        console.log(it);
        return (
          <InventoryWrap
            onMouseOver={() => {
              setHoverItem(it);
              setHover(true);
            }}
            onMouseOut={() => {
              setHoverItem();
              setHover(false);
            }}
          >
            <img src={it?.imageUrl} />
          </InventoryWrap>
        );
      });
      return inventoryItemMap;
    }
  });
  const testInventoryItem = inventoryItem.map((it) => {
    return (
      <InventoryWrap
        onMouseOver={() => {
          setHoverItem(it);
          setHover(true);
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
        return item.category;
      }
    });
  });

  //
  const testEquiItems = localEqItemMap;
  const testEquiItemMap = testEquiItems?.map((item) => {
    if (item.category == allKeyMap[0]?.category) {
      return item;
    }
  });

  const testEqiItem = testEquiItemMap.filter(
    (element) => element !== undefined
  );
  return (
    <div>
      <h3>인벤</h3>
      <div
        style={{
          width: `${
            localStorage.getItem(`inventoryItem1`)?.length >= 10
              ? 475
              : 51 * localStorage.getItem(`inventoryItem1`)?.length
          }px`,
          height: `${
            localStorage.getItem(`inventoryItem1`)?.length >= 10
              ? ((localStorage.getItem(`inventoryItem1`)?.length -
                  (localStorage.getItem(`inventoryItem1`)?.length % 10)) /
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
        {localStorage.getItem(`inventoryItem1`)?.length !== 0 ? (
          <ItemBoxWrap>{v}</ItemBoxWrap>
        ) : (
          <div style={{ width: "120px" }}>아이템이 없습니다</div>
        )}
      </div>
      {hover ? (
        <div>
          <StatWindow item={hoverItem} eqItem={eqItem[0]} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ItemItem;
