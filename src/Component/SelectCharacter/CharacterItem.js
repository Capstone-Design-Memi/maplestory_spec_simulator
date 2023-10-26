import { Avatar, Button, Card, List } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useCookies, withCookies } from "react-cookie";
import { json, useNavigate } from "react-router-dom";
import { ChractersInfo } from "../../Util/CharatersData";
import { useSelector } from "react-redux";
import { AppContext } from "../../App";

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
        dataSource={cookieMap}
        renderItem={(item) => {
          return (
            <>
              {item.cookieInputData.data[0].imageUrl ? (
                <img
                  src={item?.cookieInputData.data[0].imageUrl}
                  style={{
                    marginTop: "4.3vh",
                    marginLeft: "3vh",
                    width: "20vh",
                    textAlign: "center",
                  }}
                />
              ) : (
                <img src="../../assets/defaultAvatar.png" />
              )}
            </>
          );
        }}
      ></List>
    </>
  );
};

export default CharacterItem;
