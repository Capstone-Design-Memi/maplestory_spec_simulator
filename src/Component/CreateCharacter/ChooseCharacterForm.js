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
import { DefaultArcane } from "../EquipmentInventory/DefaultArcane";
import { DefaultAuthentic } from "../EquipmentInventory/DefaultAuthentic";
import { DefaultHyperStat } from "../Stat/DefaultHyperStat";

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

  const dsadsad = {
    cookieInputData: {
      id: 1,
      data: [
        {
          arcanes: DefaultArcane,
          guild: false,
          imageUrl: false,
          job: "보우마스터",
          class: "궁수",
          level: "123",
          name: "12",
          petEquipments: false,
          spec: { str: 4, dex: 4, int: 4, luk: 4, hp: 4, mp: 4 },
        },
      ],
    },
  };

  const wqewq = {
    cookieInputData: {
      id: 0,
      data: [
        {
          guild: "본투비",
          imageUrl:
            "https://avatar.maplestory.nexon.com/Character/180/NMLPCHLPKNDMKGHCGDGLIHOGIDPDDKMDKEIJDHNOIPOKBKKLMHLIEHIJMLGDJAAIBFLDCFPCEIIOBFHHCPMNBFBECNBAEGDKNNPOHKADGGBBNOBLLEDPKAMNGMAIBKEDGNFCNOLFMAKMCDCJILOELLBJAABEGCNOGFBNJAECLCHIKFEMCOBNAKFFIJMGFLMHPEDENCBDJLFJODCGPBAEFKICLHCIIEJIMNPAMNPFHJGHKDIPNLBLCNADBODJFFKA.png",
          job: "바이퍼",
          level: 250,
          name: "바이퍼병장님",
          petEquipments: [],
          spec: {
            statAtkLow: 10990442,
            statAtkHigh: 12211599,
            hp: 69392,
            mp: 39456,
            str: 20691,
            dex: 3010,
            int: 1567,
            luk: 2220,
            critDmg: 94,
            bossDmg: 277,
            ignoreDef: 87,
            resistance: 36,
            stance: 100,
            def: 40283,
            speed: 153,
            jump: 123,
            starForce: 252,
            arcaneForce: 1010,
            hypers: {
              atk: 15,
              mAtk: 15,
              str: 150,
              critDmg: 12,
              ignoreDef: 30,
              dmg: 30,
              bossDmg: 43,
            },
            abilities: { drop: 20, int: 5, luk: 3 },
          },
        },
      ],
    },
  };

  const ewq = {
    cookieInputData: {
      id: 0,
      data: [
        {
          arcanes: DefaultArcane,
          guild: "본투비",
          imageUrl:
            "https://avatar.maplestory.nexon.com/Character/180/NMLPCHLPKNDMKGHCGDGLIHOGIDPDDKMDKEIJDHNOIPOKBKKLMHLIEHIJMLGDJAAIBFLDCFPCEIIOBFHHCPMNBFBECNBAEGDKNNPOHKADGGBBNOBLLEDPKAMNGMAIBKEDGNFCNOLFMAKMCDCJILOELLBJAABEGCNOGFBNJAECLCHIKFEMCOBNAKFFIJMGFLMHPEDENCBDJLFJODCGPBAEFKICLHCIIEJIMNPAMNPFHJGHKDIPNLBLCNADBODJFFKA.png",
          job: "바이퍼",
          level: 250,
          name: "바이퍼병장님",
          petEquipments: [],
          spec: {
            statAtkLow: 10990442,
            statAtkHigh: 12211599,
            hp: 69392,
            mp: 39456,
            str: 20691,
            dex: 3010,
            int: 1567,
            luk: 2220,
            critDmg: 94,
            bossDmg: 277,
            ignoreDef: 87,
            resistance: 36,
            stance: 100,
            def: 40283,
            speed: 153,
            jump: 123,
            starForce: 252,
            arcaneForce: 1010,
            hypers: {
              atk: 15,
              mAtk: 15,
              str: 150,
              critDmg: 12,
              ignoreDef: 30,
              dmg: 30,
              bossDmg: 43,
            },
            abilities: { drop: 20, int: 5, luk: 3 },
          },
        },
      ],
    },
  };

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
      //const localItemData = [{ id: id, data: [] }];
      const localItemData = [
        {
          id: id,
          arcanes: DefaultArcane,
          name: values.username,
          world: "리부트",
          guild: "본투비",
          job: values.job[2],
          level: values.level,
          imageUrl: "",
          traits: [],
          data: [],
          cashEquipments: [],
          petEquipments: [],
          arcanes: [...DefaultArcane],
          authentics: [...DefaultAuthentic],
          setEffects: [],
          hyperStat: DefaultHyperStat,
          spec: {
            statAtkLow: 0,
            statAtkHigh: 0,
            hp: 0,
            mp: 0,
            str: 0,
            dex: 0,
            int: 0,
            luk: 0,
            critDmg: 0,
            bossDmg: 0,
            ignoreDef: 0,
            resistance: 0,
            stance: 0,
            def: 0,
            speed: 0,
            jump: 0,
            starForce: 0,
            arcaneForce: 0,
            hypers: {
              atk: 0,
              mAtk: 0,
              str: 0,
              critDmg: 0,
              ignoreDef: 0,
              dmg: 0,
              bossDmg: 0,
            },
            abilities: { drop: 0, int: 0, luk: 0 },
          },
          abilities: {},
        },
      ];
      localStorage.setItem(`testChItem${id}`, JSON.stringify(localItemData));
      const cookieInputData = {
        id: id,
        data: [
          {
            arcanes: [
              {
                name: "아케인심볼 : 소멸의 여로",
                stat: { str: 1700 },
                level: 15,
                experience: 142,
                requiredExperience: 236,
              },
              {
                name: "아케인심볼 : 레헬른",
                stat: { str: 1700 },
                level: 15,
                experience: 26,
                requiredExperience: 236,
              },
              {
                name: "아케인심볼 : 츄츄 아일랜드",
                stat: { str: 1800 },
                level: 16,
                experience: 177,
                requiredExperience: 267,
              },
              {
                name: "아케인심볼 : 아르카나",
                stat: { str: 1700 },
                level: 15,
                experience: 160,
                requiredExperience: 236,
              },
              {
                name: "아케인심볼 : 모라스",
                stat: { str: 1500 },
                level: 13,
                experience: 76,
                requiredExperience: 180,
              },
              {
                name: "아케인심볼 : 에스페라",
                stat: { str: 1400 },
                level: 12,
                experience: 133,
                requiredExperience: 155,
              },
            ],
            guild: "없음",
            imageUrl: false,
            job: values.job[2],
            class: values.job[1],
            level: values.level,
            name: values.username,
            petEquipments: [],
            spec: {
              statAtkLow: 0,
              statAtkHigh: 0,
              hp: 0,
              mp: 0,
              str: 0,
              dex: 0,
              int: 0,
              luk: 0,
              critDmg: 0,
              bossDmg: 0,
              ignoreDef: 0,
              resistance: 0,
              stance: 0,
              def: 0,
              speed: 0,
              jump: 0,
              starForce: 0,
              arcaneForce: 0,
              hypers: {
                atk: 0,
                mAtk: 0,
                str: 0,
                critDmg: 0,
                ignoreDef: 0,
                dmg: 0,
                bossDmg: 0,
              },
              abilities: { drop: 0, int: 0, luk: 0 },
            },
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
      const lastCharacterId = characterIds.filter((it) => {
        if (it.includes("testCh")) {
          return it;
        }
      });
      setId(lastCharacterId.length);
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
