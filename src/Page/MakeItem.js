import { Button, Cascader } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
const onChange = (value) => {
  console.log(value);
};

const MakeItem = () => {
  const navigator = useNavigate();
  return (
    <div>
      <h2>아이템 제작</h2>
      <Cascader
        options={options}
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
    </div>
  );
};

export default MakeItem;
