import { Button, Cascader, Input, Form } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Class } from "../Util/Class";

const CreateCharacter = () => {
  const onFinish = (value) => {
    console.log(value);
  };

  const navigator = useNavigate();
  return (
    <div>
      <h2>캐릭터 생성</h2>
      <Form onFinish={onFinish}>
        <Form.Item name="job">
          <label>직업</label>
          <Cascader options={Class} placeholder="Please select" />
        </Form.Item>
        <Form.Item name="name">
          <label>이름</label>
          <Input
            onChange={(e) => {
              console.log(e.target.value);
            }}
            style={{ width: "10rem" }}
          />
        </Form.Item>
        <Button htmlType="submit">캐릭터 생성</Button>
      </Form>
    </div>
  );
};

export default CreateCharacter;
