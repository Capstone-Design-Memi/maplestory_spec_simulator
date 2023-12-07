import { Avatar, Button, Card, List } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useCookies, withCookies } from "react-cookie";
import { json, useNavigate } from "react-router-dom";
import { ChractersInfo } from "../../Util/CharatersData";
import { useSelector } from "react-redux";
import { AppContext } from "../../App";
import {
  Basic,
  LoadBox,
  BasicBox,
  Load,
} from "../../Style/CharacterSelectStyle";

const CharacterItem = ({ toggle }) => {
  const { characterInfo } = useSelector((state) => state.maple);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [input, setInput] = useState(cookies.characters);
  const [id, setId] = useState(0);
  const { cId, setCId } = useContext(AppContext);
  const navigator = useNavigate();

  const CharacterInfos = ChractersInfo[0];
  const CharacterItem = ChractersInfo[0].equipments;

  // 객체 상태인 cookie값 배열로 변환
  const cookieMap = Object.keys(cookies).map((key) => cookies[key]);

  // cookieMap에서 cookieInputData가 들어간 이름만 걸러서 return
  const cookieIncludeTestChInfo = cookieMap.map((item) => {
    // cookieMap의 object의 key값만 따로 배열화
    if (Object.keys(item).includes(`cookieInputData`)) {
      return item;
    }
  });

  // cookieIncludeTestChInfo의 undefined제거 후 return
  const cookiesFilterUndefined = cookieIncludeTestChInfo.filter(
    (item) => item != undefined
  );

  const ontestMakeCookie = () => {
    if (!cookies.test) {
      setCookie(`characters${id}`, [
        {
          id: 0,
          children: [CharacterInfos],
        },
      ]);

      console.log(cookies.characters);
    } else {
      setInput(cookies.characters);
      const body = [
        {
          id: id,
          children: [CharacterInfos],
        },
      ];
      removeCookie(`characters${id}`);
      setCookie(`characters${id}`, input.concat(body));
    }
  };

  const testCharacters = cookies.charaters;
  const testCharacterMap = testCharacters?.map((item) => {
    return item;
  });

  const onRemoveCharacter = (value) => {
    const characterRemoveId = value.cookieInputData.id;
    removeCookie(`testChInfo${characterRemoveId}`);
    localStorage.removeItem(`testChItem${characterRemoveId}`);
    localStorage.removeItem(`InventoryItem${characterRemoveId}`);
  };
  return (
    <>
      <List
        dataSource={cookiesFilterUndefined}
        renderItem={(item) => {
          return (
            <>
              {item.cookieInputData.data[0].imageUrl ? (
                <LoadBox>
                  <Load // 불러오기 캐릭터 이미지
                    src={item?.cookieInputData.data[0].imageUrl}
                    onClick={() => {
                      if (cId) {
                        removeCookie(cId);
                        setCookie("cId", { cId: item.cookieInputData.id });
                      } else {
                        setCookie("cId", { cId: item.cookieInputData.id });
                      }
                    }}
                  />
                </LoadBox>
              ) : (
                <BasicBox>
                  <Basic //생성된 기본 캐릭터 이미지
                    src="../../assets/defaultAvatar.png"
                    onClick={() => {
                      if (cId) {
                        removeCookie(cId);
                        setCookie("cId", { cId: item.cookieInputData.id });
                      } else {
                        setCookie("cId", { cId: item.cookieInputData.id });
                      }
                    }}
                  />
                </BasicBox>
              )}
            </>
          );
        }}
      />
    </>
  );
};

export default CharacterItem;
