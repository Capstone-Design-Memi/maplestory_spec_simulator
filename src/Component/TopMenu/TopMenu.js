import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

const TopMenu = () => {
  const { cId } = useContext(AppContext);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isButtonAble, setIsButtonAble] = useState(true);
  const navigator = useNavigate();

  useEffect(() => {
    if (cId !== 50) {
      setIsButtonAble(false);
    } else {
      setIsButtonAble(true);
    }
  }, [cId]);

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
          disabled={isButtonAble}
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
          disabled={isButtonAble}
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
