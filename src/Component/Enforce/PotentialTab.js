import React from "react";
import { useState } from "react";
import AccPotentialData from "../../Util/AccPotentialData";
import ArmPotentialData from "../../Util/ArmPotentialData";
import BotPotentialData from "../../Util/BotPotentialData";
import EmPotentialData from "../../Util/EmPotentialData";
import FsPotentialData from "../../Util/FsPotentialData";
import GlovePotentialData from "../../Util/GlovePotentialData";
import HatPotentialData from "../../Util/HatPotentialData";
import HeartPotentialData from "../../Util/HeartPotentialData";
import ShoesPotentialData from "../../Util/ShoesPotentialData";
import SubPotentialData from "../../Util/SubPotentialData";
import SubWeaponData from "../../Util/SubWeaponData";
import Convert from "../../Util/Convert";
import PotentialDetail from "./PotentialDetail";

const currentFirsts = [];
const currentSeconds = [];
const currentThirds = [];

let firstJSON = {};
let secondJSON = {};
let thirdJSON = {};

const PotentialTab = ({ item, handlePotentialChange, handleGradeChange }) => {
  const [firstOptions, setFirstOptions] = useState([]);
  const [secondOptions, setSecondOptions] = useState([]);
  const [thirdOptions, setThirdOptions] = useState([]);

  let potentialData = [];
  const accCategory = ["반지", "귀고리", "눈장식", "얼굴장식", "펜던트"];

  if (accCategory.includes(item?.category)) {
    potentialData = AccPotentialData;
  }


  if(SubWeaponData.includes(item?.category)) {
    potentialData = SubPotentialData;
  }

  if(item?.category === "모자") {
    potentialData = HatPotentialData;
  }

  if(item?.category === "상의") {
    potentialData = ArmPotentialData;
  }

  if(item?.category === "하의") {
    potentialData = BotPotentialData;
  }

  if(item?.category === "엠블렘") {
    potentialData = EmPotentialData;
  }

  if(item?.category === "포스실드" || "소울링") {
    potentialData = FsPotentialData;
  }

  if(item?.category === "장갑") {
    potentialData = GlovePotentialData;
  }

  if(item?.category === "기계심장") {
    potentialData = HeartPotentialData;
  }

  if(item?.category === "신발") {
    potentialData = ShoesPotentialData;
  }

  const [grade, setGrade] = useState(item?.grade);
  const [firstValue, setFirstValue] = useState(item?.potential?.effects[0]);
  const [secondValue, setSecondValue] = useState(item?.potential?.effects[1]);
  const [thirdValue, setThirdValue] = useState(item?.potential?.effects[2]);

  const displayOptions = (grade) => {
    currentFirsts.splice(0);
    currentSeconds.splice(0);
    currentThirds.splice(0);
    for (let key in potentialData) {
      if (potentialData[key].grade === grade) {
        let data = potentialData[key].effects[0].first;
        let data2 = potentialData[key].effects[1].second;
        for(let i=0; i<data.length; i++) {
          let result = {...Convert.find((element) => {
            return (element.value === Object.keys(data[i])[0]);
          }), number: Object.values(data[i])[0]};
          currentFirsts.push(result);
        }
        setFirstOptions(potentialData[key].effects[0].first);

        for(let i=0; i<data2.length; i++) {
          let result = {...Convert.find((element) => {
            return (element.value === Object.keys(data2[i])[0]);
          }), number: Object.values(data2[i])[0]};
          currentSeconds.push(result);
          currentThirds.push(result);
        }
        setSecondOptions(potentialData[key].effects[0].second);
        setThirdOptions(potentialData[key].effects[0].second);
      }
    }
  };

  const handleGradeSelect = (e) => {
    displayOptions(e.target.value);
    setGrade(e.target.value);
    handleGradeChange(e.target.value);
    firstJSON = {};
    secondJSON = {};
    thirdJSON = {};
    handlePotentialChange([firstJSON, secondJSON, thirdJSON])
  };

  const handleFirstChange = (e) => {
    setFirstValue(e.target.value);
    firstJSON = JSON.parse(e.target.value);
    handlePotentialChange([firstJSON, secondJSON, thirdJSON])
  }

  const handleSecondChage = (e) => {
    setSecondValue(e.target.value);
    secondJSON = JSON.parse(e.target.value);
    handlePotentialChange([firstJSON, secondJSON, thirdJSON])
  }

  const handleThirdChage = (e) => {
    setThirdValue(e.target.value);
    thirdJSON = JSON.parse(e.target.value);
    handlePotentialChange([firstJSON, secondJSON, thirdJSON])
  }


  return (
    <>
      <select
        onChange={(e) => {
          handleGradeSelect(e);
        }}
        value={grade}
        style={{ width: "100px" }}
      >
        <option value="nothing">---</option>
        <option value="rare">레어</option>
        <option value="epic">에픽</option>
        <option value="unique">유니크</option>
        <option value="legendary">레전드리</option>
      </select>
      <select onChange={(e) => {handleFirstChange(e)}} value={firstValue}>
        <option>1</option>
        {currentFirsts.map((currentFirst,index) => (
        <option
            key={index}
            value={`{"${currentFirst.value}": ${currentFirst.number}}`}
        >
            {`${currentFirst.first + " +" + currentFirst.number}`}
            {currentFirst.persent && `%`}
        </option>
        ))}
      </select>
      <select onChange={(e) => {handleSecondChage(e)}} value={secondValue}>
        <option>1</option>
        {currentSeconds.map((currentSecond,index) => (
        <option
            key={index}
            value={`{"${currentSecond.value}": ${currentSecond.number}}`}
        >
            {`${currentSecond.first + " +" + currentSecond.number}`}
            {currentSecond.persent && `%`}
        </option>
        ))}
      </select>
      <select onChange={(e) => {handleThirdChage(e)}} value={thirdValue}>
        <option>1</option>
        {currentThirds.map((currentThird,index) => (
        <option
            key={index}
            value={`{"${currentThird.value}": ${currentThird.number}}`}
        >
            {`${currentThird.first + " +" + currentThird.number}`}
            {currentThird.persent && `%`}
        </option>
        ))}
      </select>
    </>
  );
};
export default PotentialTab;
