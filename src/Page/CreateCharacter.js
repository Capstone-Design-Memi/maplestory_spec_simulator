import { Button, Cascader, Input, Form } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Class } from "../Util/Class";

const CreateCharacter = () => {
  const onFinish = (values) => {
    console.log("Success:", values.job[1]);
  };

  const navigator = useNavigate();
  return (
    <div>
      <h2>캐릭터 생성</h2>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item name="job">
          <Cascader options={Class} placeholder="Please select" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateCharacter;
