import { Button, Cascader, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Class } from "../Util/Class";

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
        options={Class}
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
