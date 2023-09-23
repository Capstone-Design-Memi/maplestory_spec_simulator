import React from "react";
import styled from "styled-components";
import ReqLev_img from "../../images/Numbers/reqLev/reqLEV.png";
import ReqLev0_img from "../../images/Numbers/reqLev/0.png";
import ReqLev1_img from "../../images/Numbers/reqLev/1.png";
import ReqLev2_img from "../../images/Numbers/reqLev/2.png";
import ReqLev3_img from "../../images/Numbers/reqLev/3.png";
import ReqLev4_img from "../../images/Numbers/reqLev/4.png";
import ReqLev5_img from "../../images/Numbers/reqLev/5.png";
import ReqLev6_img from "../../images/Numbers/reqLev/6.png";
import ReqLev7_img from "../../images/Numbers/reqLev/7.png";
import ReqLev8_img from "../../images/Numbers/reqLev/8.png";
import ReqLev9_img from "../../images/Numbers/reqLev/9.png";
import ReqSTR_img from "../../images/Numbers/reqLev/reqSTR.png";
import ReqDEX_img from "../../images/Numbers/reqLev/reqDEX.png";
import ReqINT_img from "../../images/Numbers/reqLev/reqINT.png";
import ReqLUK_img from "../../images/Numbers/reqLev/reqLUK.png";
import Disable0_img from "../../images/Numbers/disable/0.png";

export const ReqLev = styled.div`
  width: 49px;
  height: 6px;
  background-image: url("${ReqLev_img}");
  float: left;
  margin-right: 5px;
`;

export const ReqLev0 = styled.div`
  width: 5px;
  height: 5px;
  float: left;
  margin-right: 1px;
  background-image: url("${ReqLev0_img}");
`;

export const ReqLev1 = styled.div`
  width: 2px;
  height: 5px;
  float: left;
  background-image: url("${ReqLev1_img}");
  margin-right: 1px;
`;

export const ReqLev2 = styled.div`
  width: 5px;
  height: 5px;
  float: left;
  margin-right: 1px;
  background-image: url("${ReqLev2_img}");
`;

export const ReqLev3 = styled.div`
  width: 5px;
  height: 5px;
  float: left;
  margin-right: 1px;
  background-image: url("${ReqLev3_img}");
`;

export const ReqLev4 = styled.div`
  width: 5px;
  height: 5px;
  float: left;
  margin-right: 1px;
  background-image: url("${ReqLev4_img}");
`;

export const ReqLev5 = styled.div`
  width: 5px;
  height: 5px;
  float: left;
  margin-right: 1px;
  background-image: url("${ReqLev5_img}");
`;

export const ReqLev6 = styled.div`
  width: 5px;
  height: 5px;
  float: left;
  margin-right: 1px;
  background-image: url("${ReqLev6_img}");
`;

export const ReqLev7 = styled.div`
  width: 4px;
  height: 5px;
  float: left;
  margin-right: 1px;
  background-image: url("${ReqLev7_img}");
`;

export const ReqLev8 = styled.div`
  width: 5px;
  height: 5px;
  float: left;
  margin-right: 1px;
  background-image: url("${ReqLev8_img}");
`;

export const ReqLev9 = styled.div`
  width: 5px;
  height: 5px;
  float: left;
  margin-right: 1px;
  background-image: url("${ReqLev9_img}");
`;

export const ReqSTR = styled.div`
  width: 50px;
  height: 6px;
  float: left;
  background-image: url("${ReqSTR_img}");
`;

export const ReqDEX = styled.div`
  width: 50px;
  height: 6px;
  float: left;
  background-image: url("${ReqDEX_img}");
`;

export const ReqINT = styled.div`
  width: 50px;
  height: 6px;
  float: left;
  background-image: url("${ReqINT_img}");
`;

export const ReqLUK = styled.div`
  width: 50px;
  height: 6px;
  float: left;
  background-image: url("${ReqLUK_img}");
`;

export const Disable0 = styled.div`
  width: 5px;
  height: 5px;
  float: left;
  margin-left: 1px;
  background-image: url("${Disable0_img}");
`;

export const Blank = styled.div`
  width: 1px;
  height: 5px;
  float: left;
`;

export const Blank4 = styled.div`
  width: 4px;
  height: 5px;
  float: left;
`;
export const BlackLine = styled.div`
  width 155px;
  height: 8px;
`;

const ItemImagePart_ReqLev = (props) => {
  const reqLevN = props?.reqLev;
  const reqLev = reqLevN?.toString();
  const arrReqLev = reqLev?.split("");

  const outputImage = [];

  for (let i = 0; i < arrReqLev?.length; i++) {
    switch (arrReqLev[i]) {
      case "0":
        outputImage.push(<ReqLev0 />);
        break;
      case "1":
        outputImage.push(<ReqLev1 />);
        break;
      case "2":
        outputImage.push(<ReqLev2 />);
        break;
      case "3":
        outputImage.push(<ReqLev3 />);
        break;
      case "4":
        outputImage.push(<ReqLev4 />);
        break;
      case "5":
        outputImage.push(<ReqLev5 />);
        break;
      case "6":
        outputImage.push(<ReqLev6 />);
        break;
      case "7":
        outputImage.push(<ReqLev7 />);
        break;
      case "8":
        outputImage.push(<ReqLev8 />);
        break;
      case "9":
        outputImage.push(<ReqLev9 />);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div
        style={{
          height: "6px",
          width: "155px",
          float: "left",
          marginTop: "33px",
        }}
      >
        <ReqLev />
        <div style={{ marginLeft: "12px" }}>
          {outputImage.map((value, index) => (
            <div style={{ marginLeft: "2px" }}>{value}</div>
          ))}
        </div>
      </div>
      <div
        style={{
          width: "155px",
          float: "left",
          height: "6px",
          marginTop: "10px",
        }}
      >
        <ReqSTR />
        <Blank4 />
        <Disable0 />
        <Disable0 />
        <Disable0 />
        <Blank4 />
        <Blank4 />
        <ReqLUK />
        <Blank4 />
        <Disable0 />
        <Disable0 />
        <Disable0 />
        <BlackLine />
        <ReqDEX />
        <Blank4 />
        <Disable0 />
        <Disable0 />
        <Disable0 />
        <Blank4 />
        <Blank4 />
        <ReqINT />
        <Blank4 />
        <Disable0 />
        <Disable0 />
        <Disable0 />
      </div>
    </>
  );
};

export default ItemImagePart_ReqLev;
