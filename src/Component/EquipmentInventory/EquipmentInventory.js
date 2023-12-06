import React, { useContext, useState } from "react";
import styled from "styled-components";
import BackgroundImg from "../../images/frame/equipmentInventory.png";
import DepartmentDiv from "./DepartmentDiv";
import { useCookies } from "react-cookie";
import { AppContext } from "../../App";
import Authentic from "./Authentic";
import Arcane from "./Arcane";
import RegistSetEffects from "../SetEffects/RegistSetEffects";
import { LocalStorageContext } from "../../Context/LocalStorageContext";

export const Background = styled.div`
  margin: 0px;
  padding: 0px;
  width: 230px;
  height: 354px;
  border-radius: 7px;
  background-image: url("${BackgroundImg}");
`;

const EquipmentInventory = ({
  dragDrop,
  setDragDrop,
  doubleClickItem,
  setDoubleClickItem,
}) => {
  const [cookies] = useCookies();
  const { cId } = useContext(AppContext);
  const [hover, setHover] = useState(false);
  const [hoverItem, setHoverItem] = useState();
  const { information, setInformationHandler } =
    useContext(LocalStorageContext);
  const [isArcane, setIsArcane] = useState(true);
  const [isAuthentic, setIsAuthentic] = useState(true);

  const handleArcaneClick = () => {
    setIsArcane(!isArcane);
  };

  const handleAuthenticClick = () => {
    setIsAuthentic(!isAuthentic);
  };

  RegistSetEffects();

  return (
    <div style={{ display: "flex" }}>
      <Background>
        <div
          style={{
            display: "inline-block",
            width: "205px",
            height: "246px",
            marginTop: "50px",
            marginLeft: "14px",
          }}
        >
          {information ? (
            <DepartmentDiv
              doubleClickItem={doubleClickItem}
              setDoubleClickItem={setDoubleClickItem}
              dragDrop={dragDrop}
              setDragDrop={setDragDrop}
              exampleData={information.data}
            />
          ) : (
            <DepartmentDiv
              doubleClickItem={doubleClickItem}
              setDoubleClickItem={setDoubleClickItem}
              dragDrop={dragDrop}
              setDragDrop={setDragDrop}
              exampleData={exampleData}
            />
          )}
        </div>
        <button
          style={{
            border: "1px solid red",
            width: "50px",
            height: "10px",
            position: "absolute",
            top: "310px",
            left: "120px",
            backgroundColor: "rgba(0,0,0,0)",
          }}
          onClick={handleAuthenticClick}
        ></button>
        <button
          style={{
            border: "1px solid blue",
            width: "45px",
            height: "10px",
            position: "absolute",
            top: "310px",
            left: "175px",
            backgroundColor: "rgba(0,0,0,0)",
          }}
          onClick={handleArcaneClick}
        ></button>
      </Background>
      {isArcane && <Arcane />}
      {isAuthentic && <Authentic />}
    </div>
  );
};

const exampleData = [
  {
    name: "리스트레인트 링",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEODIHHJ.png",
    category: "반지",
    upgrade: 0,
    base: {
      str: 4,
      dex: 4,
      int: 4,
      luk: 4,
      atk: 4,
      mAtk: 4,
    },
    scroll: {},
    grade: "rare",
    star: 0,
    flame: {},
  },
  {
    name: "골드 메이플리프 엠블렘",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEOLLEOA.png",
    category: "엠블렘",
    upgrade: 0,
    base: {
      str: 10,
      dex: 10,
      int: 10,
      luk: 10,
      atk: 2,
      mAtk: 2,
    },
    scroll: {},
    grade: "epic",
    star: 0,
    potential: {
      grade: "legendary",
      effects: [
        {
          ignoreDef: 35,
        },
        {
          atkP: 9,
        },
        {
          atkP: 9,
        },
      ],
    },
    flame: {},
  },
  {
    name: "크리스탈 웬투스 뱃지",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEOKJHGG.png",
    category: "뱃지",
    upgrade: 0,
    base: {
      str: 10,
      dex: 10,
      int: 10,
      luk: 10,
      atk: 5,
      mAtk: 5,
      speed: 10,
      jump: 10,
    },
    scroll: {},
    grade: "nothing",
    star: 0,
    flame: {},
  },
  {
    name: "도미네이터 펜던트",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEOAJGLB.png",
    category: "펜던트",
    upgrade: 0,
    base: {
      str: 20,
      dex: 20,
      int: 20,
      luk: 20,
      hpP: 10,
      mpP: 10,
      atk: 3,
      mAtk: 3,
      def: 100,
    },
    scroll: {
      str: 94,
      dex: 94,
      int: 94,
      luk: 94,
      hp: 255,
      atk: 63,
      mAtk: 63,
      def: 197,
    },
    grade: "legendary",
    star: 21,
    potential: {
      grade: "legendary",
      effects: [
        {
          lukP: 12,
        },
        {
          allStatP: 6,
        },
        {
          allStatP: 6,
        },
      ],
    },
    flame: {
      dex: 16,
      luk: 48,
      atk: 4,
      allStatP: 4,
    },
    scissors: 10,
  },
  {
    name: "데아 시두스 이어링",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPBJFKA.png",
    category: "귀고리",
    upgrade: 0,
    base: {
      str: 5,
      dex: 5,
      int: 5,
      luk: 5,
      atk: 2,
      mAtk: 2,
      def: 50,
    },
    scroll: {
      str: 75,
      dex: 75,
      int: 75,
      luk: 75,
      atk: 45,
      mAtk: 45,
      def: 99,
    },
    grade: "legendary",
    star: 20,
    potential: {
      grade: "legendary",
      effects: [
        {
          allStatP: 9,
        },
        {
          lukP: 9,
        },
        {
          lukP: 9,
        },
      ],
    },
    flame: {
      luk: 21,
      mp: 1950,
      speed: 4,
      allStatP: 6,
    },
  },
  {
    name: "칠요의 몬스터파커",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEOGJOMD.png",
    category: "훈장",
    upgrade: 0,
    base: {
      str: 7,
      dex: 7,
      int: 7,
      luk: 7,
      atk: 7,
      mAtk: 7,
      ignoreDef: 10,
    },
    scroll: {},
    grade: "nothing",
    star: 0,
    flame: {},
  },
  {
    name: "이글아이 어새신셔츠",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPGJFLG.png",
    category: "상의",
    upgrade: 0,
    base: {
      dex: 30,
      luk: 30,
      atk: 2,
      def: 135,
      ignoreDef: 5,
    },
    scroll: {
      dex: 106,
      luk: 106,
      hp: 255,
      atk: 69,
      mAtk: 69,
      def: 258,
    },
    grade: "legendary",
    star: 21,
    potential: {
      grade: "legendary",
      effects: [
        {
          lukP: 12,
        },
        {
          lukP: 9,
        },
        {
          allStatP: 6,
        },
      ],
    },
    flame: {
      int: 20,
      luk: 60,
      hp: 1800,
      allStatP: 5,
    },
    scissors: 10,
  },
  {
    name: "데이모스 다크니스 실드",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPLJHGJ.png",
    category: "방패",
    upgrade: 0,
    base: {
      luk: 10,
      def: 99,
    },
    scroll: {
      dex: 75,
      luk: 75,
      hp: 255,
      atk: 45,
      mAtk: 45,
      def: 179,
    },
    grade: "legendary",
    star: 20,
    potential: {
      grade: "legendary",
      effects: [
        {
          atkP: 12,
        },
        {
          bossDmg: 30,
        },
        {
          atkP: 9,
        },
      ],
    },
    flame: {},
  },
  {
    name: "골든 클로버 벨트",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEOBJFJD.png",
    category: "벨트",
    upgrade: 0,
    base: {
      str: 15,
      dex: 15,
      int: 15,
      luk: 15,
      hp: 150,
      mp: 150,
      atk: 1,
      mAtk: 1,
      def: 150,
    },
    scroll: {
      str: 94,
      dex: 94,
      int: 94,
      luk: 94,
      hp: 255,
      atk: 63,
      mAtk: 63,
      def: 284,
    },
    grade: "legendary",
    star: 21,
    potential: {
      grade: "legendary",
      effects: [
        {
          lukP: 12,
        },
        {
          hpP: 9,
        },
        {
          lukP: 9,
        },
      ],
    },
    flame: {
      dex: 20,
      int: 40,
      luk: 60,
      allStatP: 6,
    },
  },
  {
    name: "아케인셰이드 시프글러브",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPKJBHJ.png",
    category: "장갑",
    upgrade: 0,
    base: {
      dex: 40,
      luk: 40,
      atk: 9,
      def: 250,
    },
    scroll: {
      dex: 85,
      luk: 85,
      atk: 46,
      mAtk: 39,
      def: 364,
    },
    grade: "legendary",
    star: 18,
    potential: {
      grade: "legendary",
      effects: [
        {
          critDmg: 8,
        },
        {
          critDmg: 8,
        },
        {
          allStatP: 6,
        },
      ],
    },
    flame: {
      dex: 24,
      int: 36,
      luk: 126,
      allStatP: 6,
    },
    scissors: 10,
  },
  {
    name: "데이모스 다크니스 실드",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPLJHGJ.png",
    category: "방패",
    upgrade: 0,
    base: {
      luk: 10,
      def: 99,
    },
    scroll: {
      dex: 75,
      luk: 75,
      hp: 255,
      atk: 45,
      mAtk: 45,
      def: 179,
    },
    grade: "legendary",
    star: 20,
    potential: {
      grade: "legendary",
      effects: [
        {
          atkP: 12,
        },
        {
          bossDmg: 30,
        },
        {
          atkP: 9,
        },
      ],
    },
  },
  {
    name: "데아 시두스 이어링",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPBJFKA.png",
    category: "귀고리",
    upgrade: 0,
    base: {
      str: 5,
      dex: 5,
      int: 5,
      luk: 5,
      atk: 2,
      mAtk: 2,
      def: 50,
    },
    scroll: {
      str: 75,
      dex: 75,
      int: 75,
      luk: 75,
      atk: 45,
      mAtk: 45,
      def: 99,
    },
    grade: "legendary",
    star: 20,
    potential: {
      grade: "legendary",
      effects: [
        {
          allStatP: 9,
        },
        {
          lukP: 9,
        },
        {
          lukP: 9,
        },
      ],
    },
    flame: {
      luk: 21,
      mp: 1950,
      speed: 4,
      allStatP: 6,
    },
  },
  {
    name: "하이네스 어새신보닛",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPCIPOB.png",
    category: "모자",
    upgrade: 0,
    base: {
      dex: 40,
      luk: 40,
      hp: 360,
      mp: 360,
      atk: 2,
      def: 300,
      ignoreDef: 10,
    },
    scroll: {
      dex: 117,
      luk: 117,
      hp: 255,
      atk: 85,
      mAtk: 85,
      def: 598,
    },
    grade: "legendary",
    star: 22,
    potential: {
      grade: "legendary",
      effects: [
        {
          lukP: 9,
        },
        {
          allStatP: 6,
        },
      ],
    },
    flame: {
      str: 40,
      int: 24,
      luk: 56,
      allStatP: 5,
    },
    scissors: 10,
  },
  {
    name: "여명의 가디언 엔젤 링",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEODIEPH.png",
    category: "반지",
    upgrade: 0,
    base: {
      str: 5,
      dex: 5,
      int: 5,
      luk: 5,
      hp: 200,
      mp: 200,
      atk: 2,
      mAtk: 2,
    },
    scroll: {
      str: 66,
      dex: 66,
      int: 66,
      luk: 66,
      hp: 255,
      atk: 21,
      mAtk: 21,
      def: 18,
    },
    grade: "legendary",
    star: 17,
    potential: {
      grade: "legendary",
      effects: [
        {
          meso: 20,
        },
        {
          lukP: 9,
        },
        {
          lukP: 9,
        },
      ],
    },
    flame: {},
  },
  {
    name: "트릭스터 어새신팬츠",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPEJGIJ.png",
    category: "하의",
    upgrade: 0,
    base: {
      dex: 30,
      luk: 30,
      atk: 2,
      def: 135,
      ignoreDef: 5,
    },
    scroll: {
      dex: 117,
      luk: 117,
      hp: 255,
      atk: 85,
      mAtk: 85,
      def: 278,
    },
    grade: "legendary",
    star: 22,
    potential: {
      grade: "legendary",
      effects: [
        {
          lukP: 12,
        },
        {
          lukP: 9,
        },
        {
          lukP: 12,
        },
      ],
    },
    flame: {
      str: 20,
      dex: 20,
      int: 16,
      luk: 56,
      allStatP: 6,
    },
    scissors: 10,
  },
  {
    name: "저주받은 황의 마도서",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEOEJHGC.png",
    category: "포켓 아이템",
    upgrade: 0,
    base: {
      str: 10,
      dex: 10,
      int: 10,
      luk: 20,
      hp: 100,
      mp: 100,
      atk: 10,
      mAtk: 10,
    },
  },
  {
    name: "아케인셰이드 시프숄더",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEOHJGHI.png",
    category: "어깨장식",
    upgrade: 0,
    base: {
      str: 35,
      dex: 35,
      int: 35,
      luk: 35,
      atk: 20,
      mAtk: 20,
      def: 300,
    },
    scroll: {
      str: 45,
      dex: 85,
      int: 45,
      luk: 85,
      hp: 255,
      atk: 39,
      mAtk: 39,
      def: 438,
    },
    grade: "legendary",
    star: 18,
    potential: {
      grade: "legendary",
      effects: [
        {
          allStatP: 9,
        },
        {
          lukP: 9,
        },
        {
          lukP: 9,
        },
      ],
    },
    flame: {},
  },
  {
    name: "트와일라이트 마크",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPDJALG.png",
    category: "얼굴장식",
    upgrade: 0,
    base: {
      str: 5,
      dex: 5,
      int: 5,
      luk: 5,
      atk: 5,
      mAtk: 5,
      def: 100,
    },
    scroll: {
      str: 76,
      dex: 76,
      int: 76,
      luk: 76,
      atk: 38,
      mAtk: 38,
      def: 168,
    },
    grade: "legendary",
    star: 19,
    potential: {
      grade: "legendary",
      effects: [
        {
          lukP: 12,
        },
        {
          allStatP: 9,
        },
        {
          allStatP: 6,
        },
      ],
    },
    flame: {
      dex: 20,
      luk: 68,
      hp: 2520,
      allStatP: 5,
    },
    scissors: 10,
  },
  {
    name: "블랙빈 마크",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPAJFND.png",
    category: "눈장식",
    upgrade: 0,
    base: {
      str: 7,
      dex: 7,
      int: 7,
      luk: 7,
      atk: 1,
      mAtk: 1,
      def: 120,
    },
    scroll: {
      str: 75,
      dex: 75,
      int: 75,
      luk: 75,
      atk: 45,
      mAtk: 45,
      def: 218,
    },
    grade: "legendary",
    star: 20,
    potential: {
      grade: "legendary",
      effects: [
        {
          lukP: 12,
        },
        {
          strP: 9,
        },
        {
          lukP: 9,
        },
      ],
    },
    flame: {
      str: 20,
      luk: 48,
      mp: 1560,
      allStatP: 5,
    },
  },
  {
    name: "아케인셰이드 대거",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEMBJFGJ.png",
    category: "단검 (한손무기)",
    upgrade: 0,
    base: {
      dex: 100,
      luk: 100,
      atk: 276,
      bossDmg: 30,
      ignoreDef: 20,
    },
    scroll: {
      dex: 85,
      luk: 85,
      hp: 255,
      mp: 255,
      atk: 144,
    },
    grade: "legendary",
    star: 18,
    potential: {
      grade: "legendary",
      effects: [
        {
          atkP: 12,
        },
        {
          atkP: 12,
        },
        {
          dmg: 9,
        },
      ],
    },
    flame: {
      luk: 55,
      atk: 133,
      bossDmg: 10,
      allStatP: 5,
    },
    soul: {
      atk: 3,
    },
    scissors: 10,
  },
  {
    name: "아케인셰이드 시프케이프",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEOCJOKC.png",
    category: "망토",
    upgrade: 0,
    base: {
      str: 35,
      dex: 35,
      int: 35,
      luk: 35,
      atk: 6,
      mAtk: 6,
      def: 450,
    },
    scroll: {
      str: 45,
      dex: 85,
      int: 45,
      luk: 85,
      hp: 255,
      atk: 39,
      mAtk: 39,
      def: 645,
    },
    grade: "legendary",
    star: 18,
    potential: {
      grade: "legendary",
      effects: [
        {
          lukP: 12,
        },
        {
          allStatP: 6,
        },
        {
          lukP: 9,
        },
      ],
    },
    flame: {
      str: 24,
      luk: 90,
      allStatP: 6,
    },
    scissors: 10,
  },
  {
    name: "루시드로이드",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEJEJGPA.png",
    category: "안드로이드",
    upgrade: 0,
    base: {},
    scroll: {},
    grade: "nothing",
    star: 0,
    flame: {},
  },
  {
    name: "아케인셰이드 시프슈즈",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEPFIGIA.png",
    category: "신발",
    upgrade: 0,
    base: {
      dex: 40,
      luk: 40,
      atk: 9,
      def: 250,
      speed: 10,
      jump: 7,
    },
    scroll: {
      dex: 85,
      luk: 85,
      atk: 39,
      mAtk: 39,
      def: 364,
      speed: 18,
      jump: 18,
    },
    grade: "legendary",
    star: 18,
    potential: {
      grade: "legendary",
      effects: [
        {
          lukP: 12,
        },
        {
          allStatP: 9,
        },
        {
          lukP: 9,
        },
      ],
    },
    flame: {
      dex: 30,
      int: 66,
      luk: 91,
      allStatP: 5,
    },
    scissors: 10,
  },
  {
    name: "페어리 하트",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEJFJHJI.png",
    category: "기계 심장",
    upgrade: 0,
    base: {
      hp: 100,
    },
    scroll: {
      str: 19,
      dex: 19,
      int: 19,
      luk: 19,
    },
    grade: "legendary",
    star: 8,
    potential: {
      grade: "legendary",
      effects: [
        {
          lukP: 12,
        },
        {
          lukP: 9,
        },
        {
          lukP: 9,
        },
      ],
    },
    flame: {},
  },
  {
    name: "피콕스 퍼플 펜던트",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEOAJGOC.png",
    category: "펜던트",
    upgrade: 0,
    base: {
      luk: 16,
      hp: 180,
      mp: 180,
      def: 185,
    },
    scroll: {
      str: 75,
      dex: 75,
      int: 75,
      luk: 75,
      hp: 255,
      atk: 45,
      mAtk: 45,
      def: 321,
    },
    grade: "unique",
    star: 20,
    potential: {
      grade: "unique",
      effects: [
        {
          lukP: 9,
        },
        {
          lukP: 6,
        },
        {
          lukP: 9,
        },
      ],
    },
    flame: {
      str: 20,
      dex: 8,
      luk: 12,
      mAtk: 2,
      allStatP: 3,
    },
    scissors: 10,
  },
  {
    name: "마이스터링",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEODIHLE.png",
    category: "반지",
    upgrade: 0,
    base: {
      str: 5,
      dex: 5,
      int: 5,
      luk: 5,
      hp: 200,
      mp: 200,
      atk: 1,
      mAtk: 1,
      def: 150,
    },
    scroll: {
      str: 94,
      dex: 94,
      int: 94,
      luk: 94,
      hp: 255,
      atk: 63,
      mAtk: 63,
      def: 284,
    },
    grade: "legendary",
    star: 21,
    potential: {
      grade: "legendary",
      effects: [
        {
          lukP: 12,
        },
        {
          lukP: 9,
        },
        {
          lukP: 9,
        },
      ],
    },
    flame: {},
  },
  {
    name: "글로리온 링 : 슈프림",
    imageUrl: "https://avatar.maplestory.nexon.com/ItemIcon/KEODPEPH.png",
    category: "반지",
    upgrade: 0,
    base: {
      str: 40,
      dex: 40,
      int: 40,
      luk: 40,
      hp: 4000,
      mp: 4000,
      atk: 25,
      mAtk: 25,
    },
    scroll: {},
    grade: "legendary",
    star: 0,
    potential: {
      grade: "legendary",
      effects: [
        {
          lukP: 12,
        },
        {
          allStatP: 9,
        },
        {
          lukP: 9,
        },
      ],
    },
    flame: {},
  },
];

export default EquipmentInventory;
