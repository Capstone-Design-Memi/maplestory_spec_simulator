import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import { useCookies } from "react-cookie";
import SubWeaponData from "../../Util/SubWeaponData";
import ItemSingleDropDown from "../ItemStatDropDown/ItemSingleDropDown";
import { stringify } from "rc-field-form/es/useWatch";
import { LocalStorageContext } from "../../Context/LocalStorageContext";

const ItemArr = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const categoryName = [
  "반지",
  "",
  "모자",
  "",
  "엠블렘",
  "반지",
  "펜던트",
  "얼굴장식",
  "",
  "뱃지",
  "반지",
  "펜던트",
  "눈장식",
  "귀고리",
  "훈장",
  "반지",
  "무기",
  "상의",
  "어깨장식",
  "보조무기",
  "포켓 아이템",
  "벨트",
  "하의",
  "장갑",
  "망토",
  "",
  "",
  "신발",
  "안드로이드",
  "기계 심장",
];

const nothingBorder = {
  width: "40px",
  height: "38px",
  boxSizing: "border-box",
};
const rareBorder = {
  width: "40px",
  height: "38px",
  boxSizing: "border-box",
  border: "1px solid skyblue",
};
const epicBorder = {
  width: "40px",
  height: "38px",
  boxSizing: "border-box",
  border: "1px solid purple",
};
const uniqueBorder = {
  width: "40px",
  height: "38px",
  boxSizing: "border-box",
  border: "1px solid orange",
};
const legendaryBorder = {
  width: "40px",
  height: "38px",
  boxSizing: "border-box",
  border: "1px solid lime",
};

const gradeArr = [
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
  nothingBorder,
];

export const ItemSlot = styled.div`
  margin: 0px;
  padding: 0px;
  width: 41px;
  height: 41px;
  float: left;
  text-align: center;
  justify-content: center;
  line-height: 51px;
  box-sizing: border-box;
`;

const DepartmentDiv = (props) => {
  const [hover, setHover] = useState(false);
  const [hoverUrl, setHoverUrl] = useState();
  const [hoverItem, setHoverItem] = useState();
  const [hoverNum, setHoverNum] = useState(300);
  const [cookies] = useCookies();
  const {information, setInformationHandler} = useContext(LocalStorageContext);
  const exampleData = props.exampleData;
  for (let key in exampleData) {
    for (let i = 0; i < categoryName.length; i++) {
      if (exampleData[key].category === categoryName[i]) {
        if (ItemArr[i] === "") {
          ItemArr[i] = exampleData[key].imageUrl;
          if (exampleData[key].grade === "nothing") {
            gradeArr[i] = nothingBorder;
          } else if (exampleData[key].grade === "rare") {
            gradeArr[i] = rareBorder;
          } else if (exampleData[key].grade === "epic") {
            gradeArr[i] = epicBorder;
          } else if (exampleData[key].grade === "unique") {
            gradeArr[i] = uniqueBorder;
          } else if (exampleData[key].grade === "legendary") {
            gradeArr[i] = legendaryBorder;
          } else {
          }
          break;
        } else {
        }
      } else if (SubWeaponData.includes(exampleData[key].category)) {
        ItemArr[19] = exampleData[key].imageUrl;
        if (exampleData[key].grade === "nothing") {
          gradeArr[19] = nothingBorder;
        } else if (exampleData[key].grade === "rare") {
          gradeArr[19] = rareBorder;
        } else if (exampleData[key].grade === "epic") {
          gradeArr[19] = epicBorder;
        } else if (exampleData[key].grade === "unique") {
          gradeArr[19] = uniqueBorder;
        } else if (exampleData[key].grade === "legendary") {
          gradeArr[19] = legendaryBorder;
        } else {
        }
      } else if (exampleData[key].category.endsWith("무기)")) {
        ItemArr[16] = exampleData[key].imageUrl;
        if (exampleData[key].grade === "nothing") {
          gradeArr[16] = nothingBorder;
        } else if (exampleData[key].grade === "rare") {
          gradeArr[16] = rareBorder;
        } else if (exampleData[key].grade === "epic") {
          gradeArr[16] = epicBorder;
        } else if (exampleData[key].grade === "unique") {
          gradeArr[16] = uniqueBorder;
        } else if (exampleData[key].grade === "legendary") {
          gradeArr[16] = legendaryBorder;
        } else {
        }
      }
    }
  }
  const test = information.data;
  // const testMap = test[0].data.map((item) => {
  //   if (item.imageUrl === hoverUrl) {
  //     setHoverItem(item);
  //   }
  // });

  useEffect(() => {
    test.forEach((item) => {
      if (item.imageUrl === hoverUrl) {
        // setHoverItem(item);
        setHoverItem(item);
      }
    });
  }, [hover]);

  return (
    <div>
      {ItemArr.map((value, index) => (
        <ItemSlot
          onMouseUp={() => {
            const newEqItem = information;
            if (categoryName[index] == props.dragDrop.category) {
              const asd = {
                ...JSON.parse(
                  localStorage.getItem(`testChItem${cookies.cId.cId}`)
                )[0],
                data: [
                  ...JSON.parse(
                    localStorage.getItem(`testChItem${cookies.cId.cId}`)
                  )[0]?.data.concat(props.dragDrop),
                ],
              };
              console.log(
                JSON.parse(
                  localStorage.getItem(`testChItem${cookies.cId.cId}`)
                )[0]
              );
            }
          }}
        >
          {ItemArr[index] === "" ? (
            <div></div>
          ) : (
            <div style={gradeArr[index]}>
              <img
                src={ItemArr[index]}
                onMouseOver={(e) => {
                  setHover(true);
                  setHoverUrl(ItemArr[index]);
                  setHoverNum(index);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setHoverUrl();
                }}
                alt="item Image"
              />
            </div>
          )}
        </ItemSlot>
      ))}
      {hover ? (
        <div
          style={{
            position: "absolute",
            zIndex: "2",
            left: (hoverNum % 5) * 42 + 50,
            top: ((hoverNum + 1) / 6) * 42,
          }}
        >
          <ItemSingleDropDown item={hoverItem} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DepartmentDiv;
