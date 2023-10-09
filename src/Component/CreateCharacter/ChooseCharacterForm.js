import { Button, Cascader, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Class } from "../../Util/Class";

const ChooseCharacterForm = ({ onFinishCreate }) => {
  const [userClass, setUserClass] = useState();
  const [chStat, setChstat] = useState();
  const [lv, setLv] = useState(1);
  const [str, setStr] = useState(5);
  const [dex, setDex] = useState(5);
  const [int, setInt] = useState(5);
  const [luk, setLuk] = useState(5);
  const [hp, setHp] = useState(5);

  useEffect(() => {
    if (!userClass) {
    } else {
      console.log(userClass[1]);
      if (userClass[1] === "전사") {
        setStr(lv * 5);
      } else if (userClass[1] === "마법사") {
        setInt(lv * 5);
      } else if (userClass[1] === "궁수") {
        setDex(lv * 5);
      } else if (userClass[1] === "도적") {
        setLuk(lv * 5);
      } else if (userClass[1] === "해적") {
        if (userClass[2] === "캡틴" || "메카닉" || "엔젤릭버스터") {
          setDex(lv * 5);
        } else {
          setStr(lv * 5);
        }
      }
    }
    setChstat({ lv: lv, str: str, dex: dex, int: int, luk: luk, hp: hp });
    console.log(chStat);
  }, [lv]);
  return (
    <Form name="basic" onFinish={onFinishCreate}>
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>
      <Form.Item name="job">
        <Cascader
          options={Class}
          placeholder="Please select"
          onChange={(e) => {
            setUserClass(e);
          }}
        />
      </Form.Item>
      <Form.Item label="Level" name="level">
        <Input
          onChange={(e) => {
            setLv(parseInt(e.target.value));
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ChooseCharacterForm;
