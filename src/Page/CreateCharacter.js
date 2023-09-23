import { Button, Cascader, Input, Form } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Class } from "../Util/Class";
import axios from "axios";
import { LOAD_MAPLE_CHRACTER_REQUEST } from "../constants/actionTypes";
import { useDispatch } from "react-redux";
import equipmentsData from "../Util/CharatersData2.json";

const CreateCharacter = () => {
  const [createcharacterToggle, setCreatecharacterToggle] = useState(false);
  const [chracterInfo, setChracterInfo] = useState();
  const dispatch = useDispatch();

  console.log(Object.keys(equipmentsData.equipments));

  const itid = [];

  

  const onFinishCreate = (values) => {
    console.log("Success:", values.job[1]);
  };
  const onFinishLoad = (values) => {
    localStorage.setItem(
      "equipments",
      JSON.stringify(equipmentsData.equipments)
    );
    dispatch({
      type: LOAD_MAPLE_CHRACTER_REQUEST,
      data: values.username,
    });
  };

  const navigator = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          setCreatecharacterToggle(true);
        }}
      >
        내 캐릭터 불러오기
      </Button>
      <Button
        onClick={() => {
          setCreatecharacterToggle(false);
        }}
      >
        새 캐릭터 생성하기
      </Button>
      <h2>캐릭터 생성</h2>
      {!createcharacterToggle ? (
        <Form name="basic" onFinish={onFinishCreate}>
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
      ) : (
        <Form name="basic" onFinish={onFinishLoad}>
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default CreateCharacter;
