import { Avatar, Button, Card } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CharacterItem = ({ toggle }) => {
  const navigator = useNavigate();
  return (
    <div>
      <Card
        hoverable
        style={{
          width: "5rem",
        }}
        cover={<Avatar />}
      >
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
    </div>
  );
};

export default CharacterItem;
