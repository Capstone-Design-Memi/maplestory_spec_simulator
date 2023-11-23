import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Backgrnd from "../../images/statWindow/common/main/backgrnd.png";
import Layer_name from "../../images/statWindow/common/main/layer_name.png";
import styled from "styled-components";

import { AttackBack, CharacterInfo, LayerName, MainStatBack, Stat, StatBackgrnd, ApDistributeButton, 
    UtilityBack, AbilityButton, HyperButton, MainStatFont, AttactFont, UtilityFont, DefenseFont, LevelText,
     CharacterImg, NameText, GuildText, HyperBack } from "./Styles";

const StatInformation = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [toggle, setToggle] = useState(false);
    const [hyperToggle, setHyperToggle] = useState(false);
    const [information, setInformation] = useState(JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0]);

    const showHyper = () => {
        setHyperToggle(!hyperToggle);
    }

    const test = (e) => {
        setToggle(!toggle)
    }

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
                    hyperToggle && <HyperBack></HyperBack>
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