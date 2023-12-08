import React, { useContext, useEffect, useState } from "react";
import { ChractersInfo } from "../../Util/CharatersData";
import { DefaultItems } from "../../Util/ItemDatas";
import { InventoryWrap, ItemBoxWrap } from "../../Style/Item";
import { useCookies } from "react-cookie";
import { Modal } from "antd";
import ItemStat from "../ItemDetail/ItemStat";
import { AppContext } from "../../App";
import ItemStatDropDown from "../ItemStatDropDown/ItemStatDropDown";
import { LocalStorageContext } from "../../Context/LocalStorageContext";

const ItemItem = ({ dragDrop, setDragDrop }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const myItems = ChractersInfo[0].equipments;
  const [hover, setHover] = useState(false);
  const [hoverItem, setHoverItem] = useState();
  const [testLocalItems, setTestLocalItems] = useState([]);
  const [testItem, setTestItem] = useState([]);
  const {information, setInformationHandler} = useContext(LocalStorageContext);
  const inventoryItem = DefaultItems;

  const eqItemMap = testItem[0]?.data.map((item) => {
    if (hoverItem?.category == item?.category) {
      return item;
    }
  });
  const eqItem = eqItemMap?.filter((it) => {
    if (it != undefined) {
      return it;
    }
  });
  // 로컬의 장착 아이템
  const localEqItemMap = Object.keys(localStorage).map(
    (key) => localStorage[key]
  );
  const allKeys = Object.keys(localStorage);
  const allKeyMap = allKeys.map((item) => {
    if (item == `InventoryItem${cookies.cId.cId}`) {
      return JSON.parse(localStorage.getItem(item));
    }
  });

  const v = allKeyMap.map((item) => {
    const inventoryItems = item?.data;
    if (item != undefined) {
      const inventoryItemMap = inventoryItems?.map((it) => {
        return (
          <InventoryWrap
            onMouseDown={() => {
              setDragDrop(it);
              console.log(dragDrop);
            }}
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

  useEffect(() => {
    setTestItem(
      JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))
    );
  }, [cookies.cId.cId]);
  useEffect(() => {
    setTestItem(
      JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))
    );
  }, []);
  return (
    <div>
      <h3>인벤</h3>
      <div
        style={{
          width: `${
            localStorage.getItem(`inventoryItem${cookies.cId.cId}`)?.length >=
            10
              ? 475
              : 51 *
                localStorage.getItem(`inventoryItem${cookies.cId.cId}`)?.length
          }px`,
          height: `${
            localStorage.getItem(`inventoryItem${cookies.cId.cId}`)?.length >=
            10
              ? ((localStorage.getItem(`inventoryItem${cookies.cId.cId}`)
                  ?.length -
                  (localStorage.getItem(`inventoryItem${cookies.cId.cId}`)
                    ?.length %
                    10)) /
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
        {localStorage.getItem(`inventoryItem${cookies.cId.cId}`)?.length !==
        0 ? (
          <ItemBoxWrap>{v}</ItemBoxWrap>
        ) : (
          <div style={{ width: "120px" }}>아이템이 없습니다</div>
        )}
      </div>
      {hover ? (
        <div>
          <ItemStatDropDown item={hoverItem} eqItem={eqItem[0]} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ItemItem;
