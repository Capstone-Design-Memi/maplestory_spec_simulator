import { Button, Cascader, Form, Select } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemStat from "../Component/ItemDetail/ItemStat";
import { DefaultItems } from "../Util/ItemDatas";
import Enforce from "../Component/Enforce/Enforce";
import { Cookies, useCookies } from "react-cookie";
import { AppContext } from "../App";

const MakeItem = () => {
  const [cookies, setcookie, removecookie] = useCookies();
  const [changeEnforce, setChangeEnforce] = useState([]);
  const [input, setInput] = useState();
  const [itemId, setItemId] = useState(0);
  const { cId } = useContext(AppContext);
  const navigator = useNavigate();
  let enforceItem;
  DefaultItems.forEach((item) => {
    if (item.name === changeEnforce[0]) {
      enforceItem = item;
    }
  });

  const allKeys = Object.keys(localStorage);
  const testId = allKeys[allKeys.length - 1];
  const itemLen = JSON.parse(
    localStorage.getItem(`InventoryItem${cookies.cId.cId}`)
  );
  console.log(itemLen[0].data.length);

  useEffect(() => {
    if (cookies.cId === undefined) {
      navigator("/");
    } else {
      if (
        JSON.parse(localStorage.getItem(`InventoryItem${cookies.cId.cId}`))
          ?.data
      ) {
        const lastInventoryItem = JSON.parse(
          localStorage.getItem(`InventoryItem${cookies.cId.cId}`)
        ).data.length;
        setItemId(
          JSON.parse(localStorage.getItem(`InventoryItem${cookies.cId.cId}`))
            .data[lastInventoryItem - 1].id + 1
        );
      }
    }
  }, []);

  const onFinish = (values) => {
    let localInventoryItem;
    if (
      JSON.parse(localStorage.getItem(`InventoryItem${cookies.cId.cId}`))
        ?.data !== undefined
    ) {
      localInventoryItem = JSON.parse(
        localStorage.getItem(`InventoryItem${cookies.cId.cId}`)
      )?.data;
    } else {
      localInventoryItem = JSON.parse(
        localStorage.getItem(`InventoryItem${cookies.cId.cId}`)
      )[0]?.data;
    }

    let inputLocalInventoryItem;
    const defaultItemInputMap = DefaultItems.map((item) => {
      if (item?.name === values?.makeItem[0]) {
        inputLocalInventoryItem = localInventoryItem.concat({
          ...item,
          id: itemLen[0].data.length,
        });
      }
      setItemId(itemId + 1);
    });
    const inputData = [{ id: cId, data: inputLocalInventoryItem }];
    console.log(inputData);
    localStorage.removeItem(`InventoryItem${cookies.cId.cId}`);
    localStorage.setItem(
      `InventoryItem${cookies.cId.cId}`,
      JSON.stringify(inputData)
    );
    navigator("/main");
  };

  const optionItems = DefaultItems.map((item) => {
    const optionItem = { value: item.name, label: item.name };
    return optionItem;
  });

  return (
    <div>
      <h2>아이템 제작</h2>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item label="makeItem" name="makeItem">
          <Cascader
            options={optionItems}
            onChange={(e) => {
              setChangeEnforce(e);
            }}
          />
        </Form.Item>
        <Enforce enforceItem={enforceItem} />
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
