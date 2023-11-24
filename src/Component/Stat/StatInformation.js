import React, { useState, useContext } from "react";
import { useCookies } from "react-cookie";
import Backgrnd from "../../images/statWindow/common/main/backgrnd.png";
import Layer_name from "../../images/statWindow/common/main/layer_name.png";
import styled from "styled-components";
import { LocalStorageContext } from "../../Context/LocalStorageContext";

import { AttackBack, CharacterInfo, LayerName, MainStatBack, Stat, StatBackgrnd, ApDistributeButton, 
    UtilityBack, AbilityButton, HyperButton, MainStatFont, AttactFont, UtilityFont, DefenseFont, LevelText,
     CharacterImg, NameText, GuildText, HyperBack, HyperStatUpButton, HyperStatText, HyperStatResetButton } from "./Styles";

const StatInformation = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [toggle, setToggle] = useState(false);
    const [hyperToggle, setHyperToggle] = useState(false);
    const {information, setInformationHandler} = useContext(LocalStorageContext);

    const hyperStat = information.hyperStat;

    const showHyper = () => {
        setHyperToggle(!hyperToggle);
    }

    const test = (e) => {
        setToggle(!toggle)
    }

    const updateHyperStat = (e) => {
       let levelResult = hyperStat[0].level.slice();
       levelResult[e.target.value]++;
       let result = [{level:levelResult},hyperStat[1]]
       
       let localStorageResult = {...information, hyperStat:result}
       setInformationHandler(localStorageResult);
    }

    const resetHyperStat = () => {
        let levelResult = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        let result = [{level:levelResult},hyperStat[1]];

        let localStorageResult = {...information, hyperStat:result}
        setInformationHandler(localStorageResult);
    }

    const hyperStatLine = hyperStat[0].level.map((element, index) => 
        <div style={{height:"22px"}}>
             <HyperStatUpButton disabled={element > 14} value={index} style={{float: "left"}} onClick={updateHyperStat}/>
             <HyperStatText>{hyperStat[0].level[index]}</HyperStatText>
        </div>
    )

    return (
        <div>
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
            <StatBackgrnd>
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
                        </MainStatBack>
                        <ApDistributeButton/>
                        <AttactFont>
                            {information.arcanes[0].level}
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