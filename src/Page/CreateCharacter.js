import { Button, Cascader, Input, Form } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Class } from "../Util/Class";
import axios from "axios";
import { LOAD_MAPLE_CHRACTER_REQUEST } from "../constants/actionTypes";
import { useDispatch } from "react-redux";
import equipmentsData from "../Util/CharatersData2.json";
import { v4 as uuidv4 } from "uuid";

const CreateCharacter = () => {
  const [createcharacterToggle, setCreatecharacterToggle] = useState(false);
  const [chracterInfo, setChracterInfo] = useState();
  const [equipments, setEquipments] = useState();
  const dispatch = useDispatch();

  const onFinishCreate = (values) => {
    console.log("Success:", values.job[1]);
  };
  const onFinishLoad = (values) => {
    if (localStorage.getItem("equipments")) {
      const newArray = equipments.map((item) => {
        return { ...item, id: uuidv4() };
      });

      localStorage.setItem("equipments", JSON.stringify(newArray));
    }
    dispatch({
      type: LOAD_MAPLE_CHRACTER_REQUEST,
      data: values.username,
    });
  };

  const navigator = useNavigate();

  useEffect(() => {
    const getEquipments = JSON.parse(localStorage.getItem("equipments"));
    setEquipments(getEquipments);
  }, []);

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
