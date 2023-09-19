import React, { useEffect, useState } from "react";
import { ChractersInfo } from "../../Util/CharatersData";
import { DefaultItems } from "../../Util/ItemDatas";
import { InventoryWrap, ItemBoxWrap } from "../../Style/Item";
import { useCookies } from "react-cookie";

const ItemItem = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const myItems = ChractersInfo[0].equipments;
  const [hover, setHover] = useState(false);
  const [testLocalItems, setTestLocalItems] = useState([]);
  const inventoryItem = DefaultItems;

  // const test = JSON.parse(localStorage);
  const allKeys = Object.keys(localStorage);
  const allKeyMap = allKeys.map((item) => {
    return JSON.parse(localStorage.getItem(item));
  });

  const v = allKeyMap.map((item) => {
    return (
      <InventoryWrap>
        <img src={item[0]?.imageUrl} />
      </InventoryWrap>
    );
  });
  const testInventoryItem = inventoryItem.map((it) => {
    return (
      <InventoryWrap>
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
  return (
    <div>
      <button
        onClick={() => {
          // 객체를 localstorage에 담을 때 object로 저장이 되어 객체를 JSON형태로 파싱
          localStorage.setItem("test", JSON.stringify({ inventoryItem }));
        }}
      >
        로컬 생성
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("test");
        }}
      >
        로컬 삭제
      </button>
      <h3>장착비교</h3>
      <div></div>
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
          <>아이템이 없습니다</>
        )}
      </div>
    </div>
  );
};

export default ItemItem;
