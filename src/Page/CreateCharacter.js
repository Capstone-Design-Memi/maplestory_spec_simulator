import { Button, Cascader, Input } from "antd";
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

const CreateCharacter = () => {
  const navigator = useNavigate();
  return (
    <div>
      <h2>캐릭터 생성</h2>
      직업
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Please select"
      />
      이름
      <Input style={{ width: "10rem" }} />
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

export default CreateCharacter;
