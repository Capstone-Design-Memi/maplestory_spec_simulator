import { Avatar, Dropdown, Space } from "antd";
import React from "react";
import ItemStat from "./ItemStat";

const items = [
  {
    key: "1",
    label: <ItemStat />,
  },
];

const ItemItem = () => {
  return (
    <div>
      아이템
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Avatar />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default ItemItem;
