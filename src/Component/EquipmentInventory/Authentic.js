import { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { DefaultAuthentic } from "./DefaultAuthentic";
import backgrnd from "../../images/autEquip/backgrndExtend.png";
import diamond from "../../images/autEquip/backgrnd2.png";
import boximg from "../../images/autEquip/box.png";
import styled from "styled-components";
import Symbol1 from "../../images/autEquip/symbols/1.png";
import Symbol2 from "../../images/autEquip/symbols/2.png";
import Symbol3 from "../../images/autEquip/symbols/3.png";
import Symbol4 from "../../images/autEquip/symbols/4.png";
import Symbol5 from "../../images/autEquip/symbols/5.png";
import Symbol6 from "../../images/autEquip/symbols/6.png";
import Lv from "../../images/autEquip/textDown/lv.png";
import normal from "../../images/autEquip/button_enchant/normal.png";
import mouseOver from "../../images/autEquip/button_enchant/mouseOver.png";
import pressed from "../../images/autEquip/button_enchant/pressed.png";
import base2 from "../../images/autEquip/base2.png";
import PrintAUT from "./PrintAUT";
import PrintAuthenticLevel from "./PrintAuthenticLevel";
import PrintAutAnimation from "./PrintAutAnimation";

export const Box = styled.div`
position: relative;
width: 42px;
height: 83px;
float: left;
background-image: url("${boximg}");
`

export const Symbol = styled.img`
position: absolute;
display: block; 
left: 50%;
transform: translate(-52%);
margin-top: 5px;
`

export const Level = styled.img`
margin-top: 40px;
display: block;
margin-left: 6px;
float: left;
`

export const Button = styled.button`
width: 34px;
height: 16px;
margin-top: 3px;
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

export const MaxLev = styled.div`
width: 40px;
height: 11px;
margin-left: 1px;
margin-top: 55px;
background-image: url("${base2}");
`

const Authentic = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [authentics, setAuthentics] = useState(JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0]?.authentics);
    const mainStat = Object.keys(JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0]?.arcanes[0].stat)[0]
    const [isAnimate, setIsAnimate] = useState(false);
    const [animationLT, setAnimationLT] = useState({left: 0, top: 0});

    const handleResetClick = () => {
        let resetObj = DefaultAuthentic;
        for(let i=0; i<resetObj.length; i++) {
            resetObj[i].stat = {};
            resetObj[i].stat[mainStat] = 0;
        }
        console.log(resetObj);
        let localStorageInfo = JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0];
        localStorage.setItem(`testChItem${cookies.cId.cId}`,JSON.stringify([{...localStorageInfo, authentics: resetObj}]));
        setAuthentics(JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0]?.authentics);
    }

    if(Object.keys(authentics[0].stat)[0] !== mainStat) {
        handleResetClick();
    }

    const updateAuthentics = () => {
        setAuthentics(JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0]?.authentics);
    }

    const symbol1 = authentics[0];
    const symbol2 = authentics[1];
    const symbol3 = authentics[2];
    const symbol4 = authentics[3];
    const symbol5 = authentics[4];
    const symbol6 = authentics[5];

    console.log(symbol1);

    const handleEnforceClick = (symbol) => {
        symbol.level++;
        symbol.stat[Object.keys(symbol.stat)[0]] = ((symbol.level) * 2 + 3) * 100;

        const result = authentics.map((element) => {
            return element.name === symbol.name ? symbol : element;
        })
        const localStorageData = JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0];
        localStorage.setItem(`testChItem${cookies.cId.cId}`, JSON.stringify([{...localStorageData, authentics: result}]));
        changeLT(symbol);
        setIsAnimate(true);
        updateAuthentics();
    }

    const changeLT = (symbol) => {
        if(symbol.name === "어센틱심볼 : 세르니움") {
            setAnimationLT({left: 22, top: 121});
        }else if(symbol.name === "어센틱심볼 : 아르크스") {
            setAnimationLT({left: 75, top: 139});
        }else if(symbol.name === "어센틱심볼 : 오디움") {
            setAnimationLT({left: 127, top: 121});
        }else if(symbol.name === "어센틱심볼 : 도원경") {
            setAnimationLT({left: 22, top: 210});
        }else if(symbol.name === "어센틱심볼 : 아르테리아") {
            setAnimationLT({left: 75, top: 229});
        }else if(symbol.name === "어센틱심볼 : 카르시온") {
            setAnimationLT({left: 127, top: 210});
        }    
    }

    console.log(authentics);
    return (
        <div style={{margin:"0px", padding: "0px", textAlign:"center", position:"relative"}}>
            <div style={{backgroundImage: `url(${backgrnd})`, width:"189px", height:"330px", overflow:"hidden"}}>
                <div style={{backgroundImage: `url(${diamond})`, width:"103px", height:"113px", position:"absolute", left:"50%",
                             transform: "translate(-50%, 25%)"}}>
                    <div style={{textAlign:"left", width:"82px", margin:"40px 13px"}}>
                        <PrintAUT authentics={authentics}/>
                    </div>
                </div>
                {
                        isAnimate && <PrintAutAnimation isAnimate={isAnimate} setIsAnimate={setIsAnimate} animationLT={animationLT}/>
                }
                <div style={{overflow:"hidden", display:"inline-block", marginTop:"120px", position:"relative"}}>
                    <Box style={{marginRight: "10px"}}>
                        <Symbol src={Symbol1}/>
                        <Level src={Lv}/>
                        <PrintAuthenticLevel authentic={symbol1} />
                        {
                            symbol1.level < 11
                            ? <Button onClick={()=>handleEnforceClick(symbol1)}></Button> 
                            : <MaxLev/>
                        }
                    </Box>
                    <Box style={{marginTop: "20px"}}>
                        <Symbol src={Symbol2}/>
                        <Level src={Lv}/>
                        <PrintAuthenticLevel authentic={symbol2} />
                        {
                            symbol2.level < 11
                            ? <Button onClick={()=>handleEnforceClick(symbol2)}></Button> 
                            : <MaxLev/>
                        }
                    </Box>
                    <Box style={{marginLeft:"10px"}}>
                        <Symbol src={Symbol3}/>
                        <Level src={Lv}/>
                        <PrintAuthenticLevel authentic={symbol3} />
                        {
                            symbol3.level < 11
                            ? <Button onClick={()=>handleEnforceClick(symbol3)}></Button> 
                            : <MaxLev/>
                        }
                    </Box>
                </div>
                <div style={{position:"absolute", left:"50%", width:"146px",
                             transform:"translate(-50%, -16%)"}}>
                    <div style={{overflow:"hidden", display:"inline-block"}}>
                        <Box style={{marginRight: "10px"}}>
                            <Symbol src={Symbol4}/>
                            <Level src={Lv}/>
                            <PrintAuthenticLevel authentic={symbol4} />
                            {
                                symbol4.level < 11
                                ? <Button onClick={()=>handleEnforceClick(symbol4)}></Button> 
                                : <MaxLev/>
                            }
                        </Box>
                        <Box style={{marginTop: "20px"}}>
                            <Symbol src={Symbol5}/>
                            <Level src={Lv}/>
                            <PrintAuthenticLevel authentic={symbol5} />
                            {
                                symbol5.level < 11
                                ? <Button onClick={()=>handleEnforceClick(symbol5)}></Button> 
                                : <MaxLev/>
                            }
                        </Box>
                        <Box style={{marginLeft:"10px"}}>
                            <Symbol src={Symbol6}/>
                            <Level src={Lv}/>
                            <PrintAuthenticLevel authentic={symbol6} />
                            {
                                symbol6.level < 11
                                ? <Button onClick={()=>handleEnforceClick(symbol6)}></Button> 
                                : <MaxLev/>
                            }
                        </Box>
                    </div>
                </div>
            </div>
            <button onClick={handleResetClick}>어센틱심볼 초기화</button> 
        </div>
    )
}

export default Authentic;