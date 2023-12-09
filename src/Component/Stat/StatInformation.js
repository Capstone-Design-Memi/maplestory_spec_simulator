import React, { useState, useContext, useRef, useEffect, useMemo } from "react";
import { useCookies } from "react-cookie";
import Backgrnd from "../../images/statWindow/common/main/backgrnd.png";
import Layer_name from "../../images/statWindow/common/main/layer_name.png";
import styled from "styled-components";
import { LocalStorageContext } from "../../Context/LocalStorageContext";
import { CalculatStatLevel } from "./Util/CalculatStatLevel";
import { HyperStatInfo } from "../../Util/HyperStatInfo";
import { GetStatInformation, GetSumOfStat } from "./Util/GetStatInformation";
import { AttackBack, CharacterInfo, LayerName, MainStatBack, Stat, StatBackgrnd, ApDistributeButton, 
    UtilityBack, AbilityButton, HyperButton, MainStatFont, AttactFont, UtilityFont, DefenseFont, LevelText,
     CharacterImg, NameText, GuildText, HyperBack, HyperStatUpButton, HyperStatText, HyperStatResetButton, Section, B1, TopFrame, Line, SubText, SumOfStatText } from "./Styles";
import { DetailWindow } from "./Util/DetailWindow";
import number0 from"../../images/statWindow/common/detailStat/attackPowrFont/0.png";
import number1 from"../../images/statWindow/common/detailStat/attackPowrFont/1.png";
import number2 from"../../images/statWindow/common/detailStat/attackPowrFont/2.png";
import number3 from"../../images/statWindow/common/detailStat/attackPowrFont/3.png";
import number4 from"../../images/statWindow/common/detailStat/attackPowrFont/4.png";
import number5 from"../../images/statWindow/common/detailStat/attackPowrFont/5.png";
import number6 from"../../images/statWindow/common/detailStat/attackPowrFont/6.png";
import number7 from"../../images/statWindow/common/detailStat/attackPowrFont/7.png";
import number8 from"../../images/statWindow/common/detailStat/attackPowrFont/8.png";
import number9 from"../../images/statWindow/common/detailStat/attackPowrFont/9.png";
import numberx from"../../images/statWindow/common/detailStat/attackPowrFont/x.png";
import numbery from"../../images/statWindow/common/detailStat/attackPowrFont/y.png";
import numberz from"../../images/statWindow/common/detailStat/attackPowrFont/z.png";


const StatInformation = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [toggle, setToggle] = useState(false);
    const [hyperToggle, setHyperToggle] = useState(false);
    const {information, setInformationHandler} = useContext(LocalStorageContext);
    const [xy, setXY] = useState({x:0, y:0});
    const [offsetXY, setOffsetXY] = useState({x:0, y:0});
    const [isHovering, setIsHovering] = useState("nothing");
    const wrapperRef = useRef();
    const levelArr = CalculatStatLevel();
    const sumOfStat = GetSumOfStat();
    const numArr = [number0,number1,number2,number3,number4,
                    number5,number6,number7,number8,number9,numberx,numbery,numberz];
    const xyzArr = [numberx,numbery,numberz];

    const hyperStat = information.spec.hypers;
    
    useEffect(() => {
        const statBackground = document.querySelector('.statBackground');
        const elem = statBackground.getBoundingClientRect();
        setOffsetXY({x:elem.left, y:elem.top});
    },[xy])
   
    // const statInfo = useMemo(()=> {
    //     return GetStatInformation();
    // })

    const handleMouseMove = (e) => {
        let rect = e.target.getBoundingClientRect();
        setXY({x : e.clientX - offsetXY.x, 
               y : e.clientY - offsetXY.y});
    }

    const showHyper = () => {
        setHyperToggle(!hyperToggle);
    }

    const test = (e) => {
        setToggle(!toggle)
    }

    

    const updateHyperStat = (e) => {
        const index = parseInt(e.target.value)
        hyperStat[Object.keys(HyperStatInfo)[index]] = Object.values(HyperStatInfo)[index][levelArr[index]+1];
        if(index === 14) hyperStat.mAtk = Object.values(HyperStatInfo)[index][levelArr[index]+1];
        let localStorageResult = {...information, spec:{...information.spec, hypers: hyperStat}}

        setInformationHandler(localStorageResult);
    }

    const resetHyperStat = () => {
        let localStorageResult = {...information, spec:{...information.spec, hypers: {}}}
        setInformationHandler(localStorageResult);
    }

    let statArr = ["hp", "mp", "str", "dex", "int", "luk"];
    const mainStatSections = statArr.map((element, index) =>
    <>
        <Section key={index} onMouseOver={()=>setIsHovering(element)}
                 onMouseOut={()=>setIsHovering("nothing")}>
                    <SumOfStatText>{Number(sumOfStat[element]).toLocaleString()}</SumOfStatText>
                 </Section>
        {index % 2 === 0 && <B1/>}
    </>)

    const toLocale = (num) => {
        let numArr = num.toString().split("");
        let charArr = ['만','억'];
        for(let i=numArr.length - 1; i>=0; i--) {
            if(i%4 === 0) {
                numArr.splice(numArr.length - i, 0, charArr[i / 4 - 1], " ");
            }
        }
        return numArr;
    }

    let combatArr = sumOfStat.combat.toString().split("");

    for(let i=combatArr.length - 1; i > 0; i--) {
        if(i%4 === 0) {
            combatArr.splice(combatArr.length - i, 0, i / 4 - 1 + 10);
        }
    }
    
    const combatLine = combatArr.map((element, index) =>
        <>
        { element < 10 ? 
        <div key={index} style={{float:"left", width:"11px", height:"14px", overflow:"hidden"}}>
            <img key={index} src={numArr[element]} style={{width:"100%", height:"100%", objectFit:"contain"}}></img>
        </div>
        :
        <div key={index} style={{float:"left", width:"16px", height:"18px", overflow:"hidden", marginLeft:"1px"}}>
            <img key={index} src={numArr[element]} style={{width:"100%", height:"100%", objectFit:"contain"}}></img>
        </div>
        }
        </>
    )

    let statAtkArr = ["statAtk", "dmg", "finalDmg", "bossDmg", "ignoreDef",
    "mobDmg", "atk", "crit", "mAtk", "critDmg", "reuse", "buff", "reset", "ignoreResist",
    "statusDmg", "summonor"];
    let noPersent = ["atk", "mAtk", "statAtk"];
    let isPoint = ["dmg", "finalDmg", "bossDmg", "ignoreDef", "mobDmg", "statusDmg"];
    const statAtkSections = statAtkArr.map((element,index) =>
    <>
        <Section key={index} onMouseOver={()=>setIsHovering(element)}
                 onMouseOut={()=>setIsHovering("nothing")}>
                    <SumOfStatText>
                    {isPoint.includes(element) ? 
                    (Number(sumOfStat[element]).toFixed(2)).toLocaleString()
                    : 
                    element !== "statAtk" ? Number(sumOfStat[element]).toLocaleString()
                    :
                        toLocale(sumOfStat[element])
                    }
                    
                {
                    !noPersent.includes(element) && <>%</>
                }
                </SumOfStatText>
        </Section>
        {index % 2 === 0 && <B1/>}
    </>)

    const hyperStatLine = levelArr.map((element, index) => 
        <div style={{height:"22px"}}>
             <HyperStatUpButton disabled={element > 14} value={index} style={{float: "left"}} onClick={updateHyperStat}/>
             <HyperStatText>{element}</HyperStatText>
        </div>
    )

    return (
        <div ref={wrapperRef}>
            <CharacterInfo>
                <div style={{flex: 1}}>
                    <NameText style={{marginTop:"40px"}}>{information.job}</NameText>
                </div>
                    <LayerName>
                        <LevelText>{information.level}</LevelText>
                            <CharacterImg style={{backgroundImage: `url(${information.imageUrl})`}}/>
                        <NameText>{information.name}</NameText>
                    </LayerName>
                <div style={{flex: 1, overflow:"hidden"}}>
                    <GuildText>{information.guild}</GuildText>
                </div>
            </CharacterInfo>
            <StatBackgrnd onMouseMove={(e)=>handleMouseMove(e)} className="statBackground">
                {
                    (isHovering !== "nothing") && 
                    <DetailWindow xy={xy} element={isHovering}/>
                }
                <Stat/>
                {
                    hyperToggle && <HyperBack>
                        <div style={{marginTop:"41px", height: "374px"}}>
                            {hyperStatLine}
                        </div>
                        <HyperStatResetButton onClick={resetHyperStat}/>
                    </HyperBack>
                }
                <AttackBack>
                    <div style={{width:"448px", height:"35px", boxSizing:"border-box", display:"flex", justifyContent:"center"}}>
                        <div style={{margin: "auto"}}>
                            {combatLine}
                        </div>
                    </div>
                    <div style={{overflow:"hidden", marginTop:"2px"}}>
                        <MainStatBack>
                            <MainStatFont/>
                            <div style={{margin:"9px auto", width:"430px", height:"70px", 
                            display:"flex", flexDirection: "row", flexWrap: "wrap"}}>
                                {mainStatSections}
                            </div>
                        </MainStatBack>
                        <ApDistributeButton/>
                        <AttactFont/>
                        <div style={{margin:"12px 2px", width:"430px", height:"174px", 
                            display:"flex", flexDirection: "row", flexWrap: "wrap",}}>
                            {statAtkSections}
                        </div>
                    </div>
                </AttackBack>
                <UtilityBack onWheel={(e)=> test(e)}>
                    {
                        toggle ? <DefenseFont></DefenseFont>
                        : <UtilityFont></UtilityFont>
                    }
                </UtilityBack>
                <div style={{overflow:"hidden"}}>
                    <HyperButton onClick={showHyper}/>
                    <AbilityButton/>
                </div>
            </StatBackgrnd>
        </div>
    );
}

export default StatInformation;