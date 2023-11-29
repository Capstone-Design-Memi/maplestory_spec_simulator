import React, { useState, useContext, useRef, useEffect, useMemo } from "react";
import { useCookies } from "react-cookie";
import Backgrnd from "../../images/statWindow/common/main/backgrnd.png";
import Layer_name from "../../images/statWindow/common/main/layer_name.png";
import styled from "styled-components";
import { LocalStorageContext } from "../../Context/LocalStorageContext";
import { CalculatStatLevel } from "./Util/CalculatStatLevel";
import { HyperStatInfo } from "../../Util/HyperStatInfo";
import { GetStatInformation } from "./Util/GetStatInformation";
import { AttackBack, CharacterInfo, LayerName, MainStatBack, Stat, StatBackgrnd, ApDistributeButton, 
    UtilityBack, AbilityButton, HyperButton, MainStatFont, AttactFont, UtilityFont, DefenseFont, LevelText,
     CharacterImg, NameText, GuildText, HyperBack, HyperStatUpButton, HyperStatText, HyperStatResetButton, Section, B1, TopFrame, Line } from "./Styles";
import { DetailWindow } from "./Util/DetailWindow";
import { Menu } from "antd";

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

    // const hyperStatLine = hyperStat[0].level.map((element, index) => 
    //     <div style={{height:"22px"}}>
    //          <HyperStatUpButton disabled={element > 14} value={index} style={{float: "left"}} onClick={updateHyperStat}/>
    //          <HyperStatText>{hyperStat[0].level[index]}</HyperStatText>
    //     </div>
    // )
    
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
                    <div style={{width:"448px", height:"35px", boxSizing:"border-box"}}></div>
                    <div style={{overflow:"hidden", marginTop:"2px"}}>
                        <MainStatBack>
                            <MainStatFont>
                                
                            </MainStatFont>
                            <div style={{margin:"9px auto", width:"430px", height:"70px", 
                            display:"flex", flexDirection: "row", flexWrap: "wrap"}}>
                                <Section onMouseOver={()=>setIsHovering("hp")}
                                         onMouseOut={()=>setIsHovering("nothing")}>
                                </Section><B1/>
                                <Section onMouseOver={()=> setIsHovering("mp")}
                                         onMouseOut={()=>setIsHovering("nothing")}>
                                </Section>
                                <Section onMouseOver={()=> setIsHovering("str")}
                                         onMouseOut={()=>setIsHovering("nothing")}>
                                </Section><B1/>
                                <Section onMouseOver={()=> setIsHovering("dex")}
                                         onMouseOut={()=>setIsHovering("nothing")}>
                                </Section>
                                <Section onMouseOver={()=> setIsHovering("int")}
                                         onMouseOut={()=>setIsHovering("nothing")}>
                                </Section><B1/>
                                <Section onMouseOver={()=> setIsHovering("luk")}
                                         onMouseOut={()=>setIsHovering("nothing")}>
                                </Section>
                            </div>
                        </MainStatBack>
                        <ApDistributeButton/>
                        <AttactFont>
                        </AttactFont>
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