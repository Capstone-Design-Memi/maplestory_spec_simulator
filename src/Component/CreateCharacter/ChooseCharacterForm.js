import { Button, Cascader, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Class } from "../../Util/Class";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import {
  jobValidate,
  validateLevel,
  validatename,
} from "../../Util/ChooseCharacterValidator";
import { useNavigate } from "react-router-dom";

const ChooseCharacterForm = () => {
  const { characterInfo } = useSelector((state) => state.maple);
  const [cookies, setcookie, removecookie] = useCookies();
  const [id, setId] = useState(0);
  const [characterInfoLoadSuccess, setCharacterInfoLoadSuccess] =
    useState(false);
  const [userClass, setUserClass] = useState([]);
  const [chStat, setChstat] = useState();
  const [lv, setLv] = useState(1);
  const [str, setStr] = useState(4);
  const [dex, setDex] = useState(4);
  const [int, setInt] = useState(4);
  const [luk, setLuk] = useState(4);
  const [hp, setHp] = useState(4);
  const [mp, setMp] = useState(4);

  const navigator = useNavigate();

  const onFinishCreate = (values) => {
    if (values.level >= 301) {
      alert("최고 레벨은 300입니다.");
    } else if (values.level <= 0) {
      alert("최저 레벨은 1입니다.");
    } else {
      localStorage.setItem(
        `InventoryItem${id}`,
        JSON.stringify([{ id: id, data: [] }])
      );
      const localItemData = [{ id: id, data: [] }];
      localStorage.setItem(`testChItem${id}`, JSON.stringify(localItemData));
      const cookieInputData = {
        id: id,
        data: [
          {
            arcanes: "없음",
            guild: "없음",
            imageUrl: "없음",
            job: values.job[2],
            class: values.job[1],
            level: values.level,
            name: values.username,
            petEquipments: "없음",
            spec: chStat,
          },
        ],
      };
      setcookie(`testChInfo${id}`, { cookieInputData });
      setId(id + 1);
      setCharacterInfoLoadSuccess(false);
    }
    navigator("/");
  };

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
    setChstat({
      str: str,
      dex: dex,
      int: int,
      luk: luk,
      hp: hp,
      mp: mp,
    });
  }, [lv]);
  useEffect(() => {
    if (cookies.testChInfo0) {
      const characterIds = Object.keys(cookies);
      const lastCharacterId = characterIds[characterIds.length - 1]?.replace(
        "testChInfo",
        ""
      );
      setId(parseInt(lastCharacterId) + 1);
    } else {
      setId(0);
    }
  }, []);

  return (
    <Form name="basic" onFinish={onFinishCreate}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ validator: validatename }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="job" rules={[{ validator: jobValidate }]}>
        <Cascader
          options={Class}
          placeholder="Please select"
          onChange={(e) => {
            setUserClass(e);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Level"
        name="level"
        rules={[{ validator: validateLevel }]}
      >
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
