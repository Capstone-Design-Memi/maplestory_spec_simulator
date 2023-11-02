import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Class } from "../../Util/Class";

const CharacterStat = () => {
  const [cookies, setCookie] = useCookies();
  const navigator = useNavigate();
  let str = 4;
  let int = 4;
  let dex = 4;
  let luk = 4;
  const jobClass = Class;
  const cId = cookies.cId === undefined ? false : cookies.cId.cId;
  const chInfoArry = cookies.cId === undefined ? [{}] : Object.values(cookies);
  let test;

  const chInfoMap = chInfoArry.map((item) => {
    if (cookies.cId !== undefined) {
      if (item.cookieInputData?.id == cId) {
        return item;
      } else {
        return {
          cookieInputData: { data: [{ message: "캐릭터를 선택해주세요" }] },
        };
      }
    } else {
      return {
        cookieInputData: { data: [{ message: "캐릭터를 선택해주세요" }] },
      };
    }
  });

  const chInfoMapFilterUndefined = chInfoMap.filter(
    (item) => item != undefined
  );
  const chInfo = chInfoMapFilterUndefined[0].cookieInputData.data[0];

  const mainStat = jobClass.map((item) => {
    const type = item.children;
    const testClass = type.map((it) => {
      const testDepart = it.children;
      const testJob = testDepart.map((i) => {
        if (i.value == chInfo.job) {
          if (i.main == "str") {
            str = chInfo.level * 5 + 18;
          } else if (i.main == "int") {
            int = chInfo.level * 5 + 18;
          } else if (i.main == "dex") {
            dex = chInfo.level * 5 + 18;
          } else if (i.main == "luk") {
            luk = chInfo.level * 5 + 18;
          }
        }
      });
    });
  });

  return cookies.cId !== undefined ? (
    <div style={{ backgroundColor: "white" }}>
      <ul>
        <li>name:{chInfo.name}</li>
        <li>lv:{chInfo.level}</li>
        <li>job:{chInfo.job}</li>
        <ul>
          <li>str:{str}</li>
          <li>int:{int}</li>
          <li>dex:{dex}</li>
          <li>luk:{luk}</li>
        </ul>
      </ul>
    </div>
  ) : (
    <div style={{ backgroundColor: "white" }}>캐릭터를 선택해주세요</div>
  );
};

export default CharacterStat;
