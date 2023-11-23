import { Button, Form, Input } from "antd";
import React from "react";

const LoadCharacterForm = ({ onFinishLoad }) => {
  const createCookie = () => {
    const localStorageData = JSON.parse(localStorage.getItem(`testChItem0`));
    
  }
  return (
    <Form name="basic" onFinish={onFinishLoad}>
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button onClick={createCookie()}>
          enforce
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoadCharacterForm;
