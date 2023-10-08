import { Button } from "antd";
import React from "react";
import { Cookies, useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom";

const TopMenu = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
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
            navigator("/");
          }}
        >
          캐릭터 선택
        </Button>
        <Button
          style={{ float: "right" }}
          onClick={() => {
            if (!cookies || localStorage.length == 0) {
              alert("캐릭터 정보가 없습니다");
            } else {
              navigator("/makeitem");
            }
          }}
        >
          아이템 제작
        </Button>
        <Button
          style={{ float: "right" }}
          onClick={() => {
            if (!cookies || localStorage.length == 0) {
              alert("캐릭터 정보가 없습니다");
            } else {
              navigator("/main");
            }
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
