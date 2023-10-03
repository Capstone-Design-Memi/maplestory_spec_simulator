import { Button, Cascader, Form, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemStat from "../Component/ItemDetail/ItemStat";
import { DefaultItems } from "../Util/ItemDatas";
import Enforce from "../Component/Enforce/Enforce";
import { Cookies, useCookies } from "react-cookie";

const MakeItem = () => {
  const [cookies, setcookie, removecookie] = useCookies();
  const [input, setInput] = useState();
  const [itemId, setItemId] = useState(0);
  const navigator = useNavigate();
  const testLocal = JSON.parse(localStorage.getItem("test"));

  const allKeys = Object.keys(localStorage);
  // const allKeyMap = allKeys.map((item) => {
  //   return JSON.parse(localStorage.getItem(item));
  // });

  //
  // const localstorageMap = Object.keys(localStorage).map((key) => {
  //   const outPut = localStorage[key];
  //   return JSON.parse(outPut);
  // });
  const testId = allKeys[allKeys.length - 1];

  useEffect(() => {
    if (allKeys.length !== 0) {
      const testReplace = testId?.replace("InventoryItem", "");
      setItemId(parseInt(testReplace) + 1);
    } else {
      setItemId(0);
    }
  }, []);

  const onFinish = (value) => {
    // 현재 선택된 캐릭터 아이디 판별 필요
    const defaultItemMap = DefaultItems.map((item) => {
      if (item.name == value.makeItem) {
        setInput(localStorage?.getItem("InventoryItem0"));
        console.log(JSON?.parse(input));
        const nowItem = JSON?.parse(input)?.data;
        console.log(nowItem);
        const addItem = nowItem?.concat(item);
        console.log(addItem);
        const inputLocalInventoryItem = {
          id: JSON.parse(input).id,
          data: nowItem.concat(addItem),
        };
        localStorage.setItem(
          "InventoryItem0",
          JSON?.stringify(inputLocalInventoryItem)
        );

        // const inputItemData = (JSON?.parse(input))[0].data;
        // const testItemId = { itemId: itemId };
        // const testInput = [item].concat([testItemId]);
        // setInput(localStorage.getItem("InventoryItem0"));
        // console.log(JSON.parse(input));
        // localStorage.setItem(
        //   `InventoryItem0`,
        //   input.concat(JSON.stringify(testInput))
        // );
        // setItemId(itemId + 1);
      }
    });
  };

  const optionItems = DefaultItems.map((item) => {
    const optionItem = { value: item.name, label: item.name };
    return optionItem;
  });

  return (
    <div>
      <h2>아이템 제작</h2>
      <Form onFinish={onFinish}>
        <Form.Item label="makeItem" name="makeItem">
          <Cascader options={optionItems} />
        </Form.Item>

        <Enforce />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            제작
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MakeItem;
