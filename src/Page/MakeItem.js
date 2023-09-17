import { Button, Cascader, Form, Select } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemStat from "../Component/ItemDetail/ItemStat";
import { DefaultItems } from "../Util/ItemDatas";

const MakeItem = () => {
  const [itemId, setItemId] = useState(0);
  const navigator = useNavigate();

  const testLocal = JSON.parse(localStorage.getItem("test"));

  const onFinish = (value) => {
    const defaultItemMap = DefaultItems.map((item) => {
      if (item.name == value.makeItem) {
        const testItemId = { itemId: itemId };
        const testInput = [item].concat([testItemId]);
        console.log(testInput);
        localStorage.setItem(`test${itemId}`, JSON.stringify(testInput));
        setItemId(itemId + 1);
      }
    });
  };
  return (
    <div>
      <h2>아이템 제작</h2>
      <Form onFinish={onFinish}>
        <Form.Item label="makeItem" name="makeItem">
          <Cascader options={DefaultItems} />
        </Form.Item>

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
