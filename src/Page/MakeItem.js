import { Button, Cascader } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import ItemStat from "../Component/ItemDetail/ItemStat";
import { DefaultItems } from "../Util/ItemDatas";

const onChange = (value) => {
  console.log(value);
};

const MakeItem = () => {
  const navigator = useNavigate();
  return (
    <div>
      <h2>아이템 제작</h2>
      <Cascader
        options={DefaultItems}
        onChange={onChange}
        placeholder="Please select"
      />
      <Button
        onClick={() => {
          navigator("/");
        }}
      >
        제작
      </Button>
      <ItemStat/>
    </div>
  );
};

export default MakeItem;
