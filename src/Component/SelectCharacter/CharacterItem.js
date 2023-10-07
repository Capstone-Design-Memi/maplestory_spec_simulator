import { Avatar, Button, Card, List } from "antd";
import React, { useEffect, useState } from "react";
import { useCookies, withCookies } from "react-cookie";
import { json, useNavigate } from "react-router-dom";
import { ChractersInfo } from "../../Util/CharatersData";
import { useSelector } from "react-redux";

const CharacterItem = ({ toggle }) => {
  const { characterInfo } = useSelector((state) => state.maple);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [input, setInput] = useState(cookies.characters);
  const [id, setId] = useState(0);
  const navigator = useNavigate();
  console.log(characterInfo);
  // console.log(characterInfo.data.name);

  // const arrString = JSON.stringify(arr);

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
              <Card hoverable>
                <img src={item?.cookieInputData.data[0].imageUrl} />
                <p>{item?.cookieInputData.data[0].name}</p>
                {!toggle ? (
                  <Button
                    onClick={() => {
                      navigator("/main");
                    }}
                  >
                    선택
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      onRemoveCharacter(item);
                    }}
                  >
                    삭제
                  </Button>
                )}
              </Card>
            </>
          );
        }}
      ></List>
    </>
  );
};

export default CharacterItem;
