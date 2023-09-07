import { Avatar, Button, Card, List } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChractersInfo } from "../../Util/CharatersData";

const CharacterItem = ({ toggle }) => {
  const navigator = useNavigate();
  const CharacterInfos = ChractersInfo;
  console.log(ChractersInfo);
  return (
    <>
      <List
        dataSource={ChractersInfo}
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
                        navigator("/");
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
