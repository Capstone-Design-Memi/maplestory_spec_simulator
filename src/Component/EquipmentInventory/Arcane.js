import React, { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
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
import disabled from "../../images/arcEquip/button_enchant/disabled.png";
import mouseOver from "../../images/arcEquip/button_enchant/mouseOver.png";
import normal from "../../images/arcEquip/button_enchant/normal.png";
import pressed from "../../images/arcEquip/button_enchant/pressed.png";
import base2 from "../../images/arcEquip/background/base2.png";

import styled from "styled-components";
import PrintArcaneLevel from "./PrintArcaneLevel";
import { GetAllInformation } from "../../CalculateUtils/GetAllInformation";
import { DefaultArcane } from "./DefaultArcane";

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

const Arcane = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [arcanes,setArcanes] = useState(JSON.parse(localStorage.getItem(`testChArchane${cookies.cId.cId}`))[0]?.data);

    const symbol1 = arcanes.find((element) => element.name === "아케인심볼 : 소멸의 여로");
    const symbol2 = arcanes.find((element) => element.name === "아케인심볼 : 츄츄 아일랜드");
    const symbol3 = arcanes.find((element) => element.name === "아케인심볼 : 레헬른");
    const symbol4 = arcanes.find((element) => element.name === "아케인심볼 : 아르카나");
    const symbol5 = arcanes.find((element) => element.name === "아케인심볼 : 모라스");
    const symbol6 = arcanes.find((element) => element.name === "아케인심볼 : 에스페라");
    
    console.log(symbol1.level);

    console.log(arcanes);
    return (
        <div style={{margin:"0px", padding: "0px"}}>
            <div style={{backgroundImage: `url(${backgrnd})`, width:"189px", height:"135px", overflow:"hidden"}}>
                <div style={{backgroundImage: `url(${background2})`, width:"164px", height:"100px", 
                             backgroundRepeat:"no-repeat", margin:"auto", borderRadius:"8px",
                             marginTop:"25px"}}>
                </div>
            </div>
            <div style={{backgroundImage: `url(${background4})`}}>
                <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)",
                             width:"150px", margin:"auto", rowGap:"8px", columnGap:"3px"}}>
                    <Box>
                        <Symbol src={Symbol1} />
                        <Level src={Lv}/>
                        <PrintArcaneLevel arcane={symbol1}/>
                        {
                            Symbol1.level === 20 ? <Button/> : <MaxLev/>
                        }
                    </Box>
                    <Box>
                        <Symbol src={Symbol2} />
                        <Level src={Lv}/>
                        <PrintArcaneLevel arcane={symbol2}/>
                    </Box>
                    <Box>
                        <Symbol src={Symbol3} />
                        <Level src={Lv}/>
                        <PrintArcaneLevel arcane={symbol3}/>
                    </Box>
                    <Box>
                        <Symbol src={Symbol4} />
                        <Level src={Lv}/>
                        <PrintArcaneLevel arcane={symbol4}/>
                    </Box>
                    <Box>
                        <Symbol src={Symbol5} />
                        <Level src={Lv}/>
                        <PrintArcaneLevel arcane={symbol5}/>
                    </Box>
                    <Box>
                        <Symbol src={Symbol6} />
                        <Level src={Lv}/>
                        <PrintArcaneLevel arcane={symbol6}/>
                    </Box>
                </div>
            </div>
            <div style={{backgroundImage: `url(${background5})`, height:"26px", backgroundRepeat:"no-repeat"}}>
                
            </div>
        </div>
    );
}

export default Arcane;