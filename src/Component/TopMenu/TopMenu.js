import { Button } from "antd";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const TopMenu = () => {
  const navigator = useNavigate();
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "3rem",
          backgroundColor: "gray",
        }}
      >
        <Button
          style={{ float: "right" }}
          onClick={() => {
            navigator("/selectcharacter");
          }}
        >
          캐릭터 선택
        </Button>
        <Button
          style={{ float: "right" }}
          onClick={() => {
            navigator("/makeitem");
          }}
        >
          아이템 제작
        </Button>
        <Button
          style={{ float: "right" }}
          onClick={() => {
            navigator("/");
          }}
        >
          메인
        </Button>
      </div>
      <Outlet />
    </>
  );
};

export default TopMenu;
