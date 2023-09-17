import { Avatar, Button, Card, List } from "antd";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { json, useNavigate } from "react-router-dom";
import { ChractersInfo } from "../../Util/CharatersData";

const CharacterItem = ({ toggle }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [input, setInput] = useState(cookies.characters);
  const [id, setId] = useState(0);
  const navigator = useNavigate();
  // const arrString = JSON.stringify(arr);

  const CharacterInfos = ChractersInfo[0];
  const CharacterItem = ChractersInfo[0].equipments;
  console.log(CharacterInfos);

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
  return (
    <>
      <button
        onClick={() => {
          // ontestMakeCookie();
          // localStorage.setItem(`test`, tes);
          localStorage.setItem("testCh", JSON.stringify({ CharacterInfos }));
          localStorage.setItem("testItem", JSON.stringify({ CharacterItem }));
          setId(id + 1);
        }}
      >
        생성
      </button>
      <button
        onClick={() => {
          // removeCookie("characters");
          localStorage.removeItem(`test`);
        }}
      >
        삭제
      </button>
      <List
        dataSource={testCharacterMap}
        renderItem={(item) => {
          for (var i = 0; i < 11; i++) {
            return (
              <>
                <Card hoverable>
                  <img src={item.imageUrl} />
                  <p>이름 : {item.name}</p>
                  <p>직업군 : {item.class}</p>
                  <p>직업 : {item.job}</p>
                  <p>레벨 :{item.level}.lv</p>
                  {!toggle ? (
                    <Button
                      onClick={() => {
                        navigator("/main");
                      }}
                    >
                      선택
                    </Button>
                  ) : (
                    <Button>삭제</Button>
                  )}
                </Card>
              </>
            );
          }
        }}
      ></List>
    </>
  );
};

export default CharacterItem;
