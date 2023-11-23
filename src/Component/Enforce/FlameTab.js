import React from "react";
import styled from 'styled-components';
import {useState, useEffect} from "react";
import FlameDetail from "./FlameDetail";

const flameOption = ["mainStat","mainStat","mainStat","mainStat",
                         "mainAndSub", "mainAndSub", "mainAndSub", "mainAndSub", "mainAndSub", "mainAndSub",
                         "hp","mp","atk", "mAtk","speed","jump","def",
                         "bossDmg", "dmg","allStatP","reqLevDecrease"];

const display = ["STR","DEX","INT","LUK",
                 "STR + DEX", "STR + INT", "STR + LUK", "DEX + INT", "DEX + LUK", "INT + LUK",
                 "최대HP", "최대MP", "공격력", "마력", "이동속도", "점프력", "방어력",
                 "보스 공격시 데미지 %", "데미지 %", "올스탯 %", "착용레벨감소"];

const selectArr = [null,null,null,null];
const valueArr = [0,0,0,0];

const FlameTab = ({flameInfo, handleFlameChange}) => {
    const selectOptions = [];

    const [firstSelect, setFirstSelect] = useState("0");
    const [secondSelect, setSecondSelect] = useState("0");
    const [thirdSelect, setThirdSelect] = useState("0");
    const [forthSelect, setForthSelect] = useState("0");

    const [firstValueSelect, setFirstValueSelect] = useState("0");
    const [secondValueSelect, setSecondValueSelect] = useState("0");
    const [thirdValueSelect, setThirdValueSelect] = useState("0");
    const [forthValueSelect, setForthValueSelect] = useState("0");

    const sumOfFlame = {}

    const handleFirstSelect = (e) => {
        valueArr[0] = 0;
        addToSum();
        setFirstValueSelect(0);
        setFirstSelect(e.target.value);
    }

    const handleFirstValueSelect = (e) => {
        selectArr[0] = selectOptions[firstSelect].name;
        valueArr[0] = selectOptions[firstSelect].values[e.target.value];
        addToSum();
        setFirstValueSelect(e.target.value);
    }

    const handleSecondSelect = (e) => {
        valueArr[1] = 0;
        addToSum();
        setSecondValueSelect(0);
        setSecondSelect(e.target.value);
    }

    const handleSecondValueSelect = (e) => {
        selectArr[1] = selectOptions[secondSelect].name;
        valueArr[1] = selectOptions[secondSelect].values[e.target.value];
        addToSum();
        setSecondValueSelect(e.target.value);
    }

    const handleThirdSelect = (e) => {
        valueArr[2] = 0;
        addToSum();
        setThirdValueSelect(0);
        setThirdSelect(e.target.value);
    }

    const handleThirdValueSelect = (e) => {
        selectArr[2] = selectOptions[thirdSelect].name;
        valueArr[2] = selectOptions[thirdSelect].values[e.target.value];
        addToSum();
        setThirdValueSelect(e.target.value);
    }

    const handleForthSelect = (e) => {
        valueArr[3] = 0;
        addToSum();
        setForthValueSelect(0);
        setForthSelect(e.target.value);
    }

    const handleForthValueSelect = (e) => {
        selectArr[3] = selectOptions[forthSelect].name;
        valueArr[3] = selectOptions[forthSelect].values[e.target.value];
        addToSum();
        setForthValueSelect(e.target.value);
    }

    const addToSum = () => {
        let sumArr = ["str", "dex", "int", "luk", "hp", "mp", "atk", "mAtk",
        "speed", "jump", "def", "bossDmg", "dmg", "allStatP", "reqLevDecrease"];
        let sum = [0, 0, 0, 0, 0, 0, 0, 0, 
                   0, 0, 0, 0, 0, 0, 0];

        for(let i=0; i<selectArr.length; i++) {
            if(selectArr[i] === "STR") sum[0] += valueArr[i];
            if(selectArr[i] === "DEX") sum[1] += valueArr[i];
            if(selectArr[i] === "INT") sum[2] += valueArr[i];
            if(selectArr[i] === "LUK") sum[3] += valueArr[i];
            if(selectArr[i] === "STR + DEX") {
                sum[0] += valueArr[i];
                sum[1] += valueArr[i];
            }
            if(selectArr[i] === "STR + INT") {
                sum[0] += valueArr[i];
                sum[2] += valueArr[i];
            }
            if(selectArr[i] === "STR + LUK") {
                sum[0] += valueArr[i];
                sum[3] += valueArr[i];
            }
            if(selectArr[i] === "DEX + INT") {
                sum[1] += valueArr[i];
                sum[2] += valueArr[i];
            }
            if(selectArr[i] === "DEX + LUK") {
                sum[1] += valueArr[i];
                sum[3] += valueArr[i];
            }
            if(selectArr[i] === "INT + LUK") {
                sum[2] += valueArr[i];
                sum[3] += valueArr[i];
            }
            for(let j=10; j<display.length; j++) {
                if(selectArr[i] === display[j]) {
                    sum[j-6] += valueArr[i];
                }
            }
        }

        for(let i=0; i<sumArr.length; i++) {
            if(sum[i] !== 0) sumOfFlame[sumArr[i]] = sum[i];
        }

        handleFlameChange(sumOfFlame);
        //console.log(`${selectOptions[firstSelect].name} : ${selectOptions[firstSelect].values[firstValueSelect]}`)
    }

    

    selectOptions.push({name: "---", values: ["---"]});

    for(let i=0; i<flameOption.length; i++) {
        for(let key in flameInfo) {
            if(key === flameOption[i]) {
                selectOptions.push({name: display[i], values: [0,...flameInfo[key]]});
            }
        }
    }

    return (
        <>
        <FlameDetail select={firstSelect}
                     valueSelect={firstValueSelect}
                     handleSelect={handleFirstSelect}
                     handleValueSelect={handleFirstValueSelect}
                     selectOptions={selectOptions}
                     />
        <br/>
        <FlameDetail select={secondSelect}
                     valueSelect={secondValueSelect}
                     handleSelect={handleSecondSelect}
                     handleValueSelect={handleSecondValueSelect}
                     selectOptions={selectOptions}/>
        <br/>
        <FlameDetail select={thirdSelect}
                     valueSelect={thirdValueSelect}
                     handleSelect={handleThirdSelect}
                     handleValueSelect={handleThirdValueSelect}
                     selectOptions={selectOptions}/>
        <br/>
        <FlameDetail select={forthSelect}
                     valueSelect={forthValueSelect}
                     handleSelect={handleForthSelect}
                     handleValueSelect={handleForthValueSelect}
                     selectOptions={selectOptions}/>
        <br/>
        <br/>
        </>
    )
}

export default FlameTab;