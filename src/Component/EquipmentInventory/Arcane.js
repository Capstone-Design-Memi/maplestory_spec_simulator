import React, { useState, useContext } from "react";
import backgrnd from "../../images/arcEquip/background/backgrnd.png";
import background2 from "../../images/arcEquip/background/backgrnd2.png";
import background3 from "../../images/arcEquip/background/backgrnd3.png";
import background4 from "../../images/arcEquip/background/backgrnd4.png";
import background5 from "../../images/arcEquip/background/backgrnd5.png";
import Symbol1 from "../../images/arcEquip/symbols/1.png";
import Symbol2 from "../../images/arcEquip/symbols/2.png";
import Symbol3 from "../../images/arcEquip/symbols/3.png";
import Symbol4 from "../../images/arcEquip/symbols/4.png";
import Symbol5 from "../../images/arcEquip/symbols/5.png";
import Symbol6 from "../../images/arcEquip/symbols/6.png";
import Lv from "../../images/arcEquip/textDown/lv.png";
import box from "../../images/arcEquip/box.png";
import Arc from "../../images/arcEquip/textUp/arcane.png";
import disabled from "../../images/arcEquip/button_enchant/disabled.png";
import mouseOver from "../../images/arcEquip/button_enchant/mouseOver.png";
import normal from "../../images/arcEquip/button_enchant/normal.png";
import pressed from "../../images/arcEquip/button_enchant/pressed.png";
import base2 from "../../images/arcEquip/background/base2.png";

import styled from "styled-components";
import PrintArcaneLevel from "./PrintArcaneLevel";
import { GetAllInformation } from "../../CalculateUtils/GetAllInformation";
import { DefaultArcane } from "./DefaultArcane";
import PrintARC from "./PrintARC";
import PrintAnimation from "./PrintAnimation";
import PrintBgAnimation from "./PrintBgAnimation";
import { LocalStorageContext } from "../../Context/LocalStorageContext";


export const Box = styled.div`
width: 48px;
height: 84px;
background-image: url("${box}");
text-align: center;
`

export const Level = styled.img`
display: block;
margin-left: 6px;
margin-top: 10px;
float: left;
`

export const MaxLev = styled.div`
width: 46px;
height: 13px;
margin-left: 1px;
margin-top: 27px;
background-image: url("${base2}");
`

export const Symbol = styled.img`
display: block; 
margin: auto;
margin-top: 5px;
`

export const Button = styled.button`
width: 40px;
height: 16px;
margin-top: 2px;
border: 0;
outline: 0;
border-radius: 6px;
background-image: url("${normal}");
&:hover{
    background-image: url("${mouseOver}");
}
&:active{
    background-image: url("${pressed}");
}
`
let animation = false;

const Arcane = () => {
    const [isAnimate, setIsAnimate] = useState(false);
    const [animationLT, setAnimationLT] = useState({left: 0, top: 0});
    const {information, setInformationHandler} = useContext(LocalStorageContext);
    const [arcanes,setArcanes] = useState(information.arcanes);
    const mainStat = Object.keys(arcanes[0].stat)[0];

    if(information.arcanes.length < 6) {
        handleResetClick();
    }

    const handleResetClick = () => {
        console.log(DefaultArcane);
        let resetObj = JSON.parse(JSON.stringify(DefaultArcane));
        for(let i=0; i<resetObj.length; i++) {
            resetObj[i].stat = {};
            resetObj[i].stat[mainStat] = 0;
        }
        console.log(resetObj);
        let localStorageResult = {...information, arcanes: [...resetObj]}
        setInformationHandler(localStorageResult);
        setArcanes(information.arcanes);
    }

    const handleEnforceClick = (symbol) => {
        symbol.level++;
        symbol.stat[Object.keys(symbol.stat)[0]] = (symbol.level + 2) * 100;

        const result = information.arcanes.map((element) => {
            return element.name === symbol.name ? symbol : element;
        })
        

        let localStorageResult = {...information, arcanes: result}
        setInformationHandler(localStorageResult);
        changeLT(symbol);
        setIsAnimate(true);
    }

    const changeLT = (symbol) => {
        if(symbol.name === "아케인심볼 : 소멸의 여로") {
            setAnimationLT({left: 22, top: 135});
        }else if(symbol.name === "아케인심볼 : 츄츄 아일랜드") {
            setAnimationLT({left: 73, top: 135});
        }else if(symbol.name === "아케인심볼 : 레헬른") {
            setAnimationLT({left: 124, top: 135});
        }else if(symbol.name === "아케인심볼 : 아르카나") {
            setAnimationLT({left: 22, top: 228});
        }else if(symbol.name === "아케인심볼 : 모라스") {
            setAnimationLT({left: 73, top: 228});
        }else if(symbol.name === "아케인심볼 : 에스페라") {
            setAnimationLT({left: 124, top: 228});
        }
        
    }
    
    const symbol1 = information.arcanes.find((element) => element.name === "아케인심볼 : 소멸의 여로");
    const symbol2 = information.arcanes.find((element) => element.name === "아케인심볼 : 츄츄 아일랜드");
    const symbol3 = information.arcanes.find((element) => element.name === "아케인심볼 : 레헬른");
    const symbol4 = information.arcanes.find((element) => element.name === "아케인심볼 : 아르카나");
    const symbol5 = information.arcanes.find((element) => element.name === "아케인심볼 : 모라스");
    const symbol6 = information.arcanes.find((element) => element.name === "아케인심볼 : 에스페라");

    if(!(symbol1 && symbol2 && symbol3 && symbol4 && symbol5 && symbol6)){
        handleResetClick();
    }

    return (
        <div style={{margin:"0px", padding: "0px", textAlign:"center", position:"relative"}}>
            <div style={{backgroundImage: `url(${backgrnd})`, width:"189px", height:"135px", overflow:"hidden"}}>
                <div style={{backgroundImage: `url(${background2})`, width:"164px", height:"100px", 
                             backgroundRepeat:"no-repeat", margin:"auto", borderRadius:"8px",
                             marginTop:"25px", overflow:"hidden"}}>
                    <PrintBgAnimation/>
                    <div style={{textAlign:"left", width:"110px", margin:"30px auto"}}>
                        <PrintARC arcanes={information.arcanes}/>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${background4})`}}>
                <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)",
                             width:"150px", margin:"auto", rowGap:"8px", columnGap:"3px"}}>
                    {
                        isAnimate && <PrintAnimation isAnimate={isAnimate} setIsAnimate={setIsAnimate} animationLT={animationLT}/>
                    }
                    <Box>
                        <Symbol src={Symbol1} />
                        <Level src={Lv}/>
                        <PrintArcaneLevel arcane={symbol1}/>
                        {
                            symbol1.level < 20 
                            ? <Button onClick={()=>handleEnforceClick(symbol1)}></Button> 
                            : <MaxLev/>
                        }
                    </Box>
                    <Box>
                        <Symbol src={Symbol2} />
                        <Level src={Lv}/>
                        <PrintArcaneLevel arcane={symbol2}/>
                        {
                            symbol2.level < 20 
                            ? <Button onClick={()=>handleEnforceClick(symbol2)}></Button> 
                            : <MaxLev/>
                        }
                    </Box>
                    <Box>
                        <Symbol src={Symbol3} />
                        <Level src={Lv}/>
                        <PrintArcaneLevel arcane={symbol3}/>
                        {
                            symbol3.level < 20 
                            ? <Button onClick={()=>handleEnforceClick(symbol3)}></Button> 
                            : <MaxLev/>
                        }
                    </Box>
                    <Box>
                        <Symbol src={Symbol4} />
                        <Level src={Lv}/>
                        <PrintArcaneLevel arcane={symbol4}/>
                        {
                            symbol4.level < 20 
                            ? <Button onClick={()=>handleEnforceClick(symbol4)}></Button> 
                            : <MaxLev/>
                        }
                    </Box>
                    <Box>
                        <Symbol src={Symbol5} />
                        <Level src={Lv}/>
                        <PrintArcaneLevel arcane={symbol5}/>
                        {
                            symbol5.level < 20 
                            ? <Button onClick={()=>handleEnforceClick(symbol5)}></Button> 
                            : <MaxLev/>
                        }
                    </Box>
                    <Box>
                        <Symbol src={Symbol6} />
                        <Level src={Lv}/>
                        <PrintArcaneLevel arcane={symbol6}/>
                        {
                            symbol6.level < 20 
                            ? <Button onClick={()=>handleEnforceClick(symbol6)}></Button> 
                            : <MaxLev/>
                        }
                    </Box>
                </div>
            </div>
            <div style={{backgroundImage: `url(${background5})`, height:"26px", backgroundRepeat:"no-repeat"}}></div>
            <button onClick={handleResetClick}>아케인심볼 초기화</button> 
        </div>
    );
}

export default Arcane;