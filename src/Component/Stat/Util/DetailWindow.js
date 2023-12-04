import { useEffect, useMemo } from "react";
import { TopFrame, Line, BottomFrame, MainText, SubText } from "../Styles"
import { DetailText } from "./DetailText"
import { GetMainStat, GetStatInformation } from "./GetStatInformation";
import e from "cors";

const mainStatArr = ["hp", "mp", "str", "dex", "int", "luk"];
const otherStatArr = ["statAtk", "dmg", "finalDmg", "bossDmg", "ignoreDef", "mobDmg",
"crit", "critDmg", "reuse", "buff", "reset", "ignoreResist", "statusDmg", "summonor"];
const atks = ["atk", "mAtk"];
export const DetailWindow = ({xy, element}) => {

    const text = Object.entries(DetailText).find(([key, value]) => key === element);
    const statInfo = GetStatInformation();
    console.log(statInfo);

    const makeMainStatInfo = () => {
        return (
            <>
            <TopFrame/>
                <Line>
                    <div style={{width:"90%", margin:"0 auto"}}>
                    <MainText>{text[1]?.title}</MainText>
                    <SubText>{text[1]?.text}</SubText>
                    <br/>
                    {
                        mainStatArr.includes(element) &&
                        <>
                        <SubText>[적용 중인 수치]</SubText>
                        <SubText>기본 수치 : {statInfo.base.base[element] + 
                        statInfo.base.skill[element] + 
                        statInfo.base.item[element] +
                        statInfo.base.union[element] +
                        statInfo.base.title[element]}</SubText>
                        <SubText>% 수치 : {statInfo.persent.item[element+"P"]}%</SubText>
                        <SubText>% 미적용 수치 : {statInfo.noPersent.hexa[element] + 
                        statInfo.noPersent.union[element] + 
                        statInfo.noPersent.hyper[element] +
                        statInfo.noPersent.arcane[element] + 
                        statInfo.noPersent.authentic[element]}</SubText>
                        <br/>
                        <SubText>[기본 수치]</SubText>
                        <SubText>기본 : {statInfo.base.base[element]}</SubText>
                        <SubText>스킬 : {statInfo.base.skill[element]}</SubText>
                        <SubText>장비 아이템 : {statInfo.base.item[element]}</SubText>
                        <SubText>유니온 공격대 : {statInfo.base.union[element]}</SubText>
                        <SubText>칭호 : {statInfo.base.title[element]}</SubText>
                        <br/>
                        <SubText>[% 수치]</SubText>
                        <SubText>장비 아이템 : {statInfo.persent.item[element+"P"]}%</SubText>

                        <br/>
                        <SubText>[% 미적용수치]</SubText>
                        <SubText>헥사 스탯 : {statInfo.noPersent.hexa[element]}</SubText>
                        <SubText>유니온 공격대 : {statInfo.noPersent.union[element]}</SubText>
                        <SubText>하이퍼 스탯 : {statInfo.noPersent.hyper[element]}</SubText>
                        <SubText>아케인 심볼 : {statInfo.noPersent.arcane[element]}</SubText>
                        <SubText>어센틱 심볼 : {statInfo.noPersent.authentic[element]}</SubText>
                        </>
                    }
                    </div>
                </Line>
            <BottomFrame/>
            </> 
        )
    }

    const makeOtherInfo = () => {
        const {base, noPersent, persent} = statInfo;
        return(
            <>
            <TopFrame/>
                <Line>
                <div style={{width:"90%", margin:"0 auto"}}>
                <MainText>{text[1]?.title}</MainText>
                <SubText>{text[1]?.text}</SubText>
                <br></br>
                <SubText>[적용 중인 수치]</SubText>
                {base.title[element] > 0 && <SubText>칭호 : {base.title[element]}%</SubText>}
                {base.skill[element] > 0 && <SubText>스킬 : {base.skill[element]}%</SubText>}
                {noPersent.hexa[element] > 0 && <SubText>헥사스텟 : {noPersent.hexa[element]}%</SubText>}
                {base.item[element] > 0 && <SubText> 장비아이템 : {base.item[element]}%</SubText>}
                {base.union[element] > 0 && <SubText>유니온 공격대 : {base.union[element] + noPersent.union[element]}%</SubText>}
                {noPersent.ability[element] > 0 && <SubText>어빌리티 : {noPersent.ability[element]}%</SubText>}
                {noPersent.hyper[element] > 0 && <SubText>하이퍼 스탯 : {noPersent.hyper[element]}%</SubText>}
                {/* <SubText>성향 : </SubText> */}
                </div>
                </Line>
            <BottomFrame/>
            </>
        )
    }

    const makeAtks = () => {
        const {base, noPersent, persent} = statInfo;
        return (
            <>
            <TopFrame/>
                <Line>
                <div style={{width:"90%", margin:"0 auto"}}>
                <MainText>{text[1]?.title}</MainText>
                <SubText>{text[1]?.text}</SubText>
                <br></br>
                <SubText>[적용 중인 수치]</SubText>
                <SubText>기본 수치 : { 
                        base.skill[element] + 
                        noPersent.hexa[element] +
                        base.item[element] +
                        base.union[element] + noPersent.union[element] +
                        noPersent.hyper[element] +
                        base.title[element] + noPersent.ability[element]}
                </SubText>
                <SubText>% 수치 : {persent.item[element+"P"]}%</SubText>
                <br/>
                <SubText>[기본 수치]</SubText>
                <SubText>스킬 : {base.skill[element]}</SubText>
                <SubText>헥사 스탯 : {noPersent.hexa[element]}</SubText>
                <SubText>장비 아이템 : {base.item[element]}</SubText>
                <SubText>유니온 공격대 : {base.union[element] + noPersent.union[element]}</SubText>
                <SubText>하이퍼 스탯 : {statInfo.noPersent.hyper[element]}</SubText>
                <SubText>칭호 : {base.title[element]}</SubText>
                <SubText>어빌리티 : {noPersent.ability[element]}</SubText>
                </div>
                </Line>
            <BottomFrame/>
            </>
        )
    }

    return (
        <div style={{position:"absolute", left:`${xy.x}px`, top:xy.y, width:"261px", pointerEvents:"none", zIndex:5}}>
            {mainStatArr.includes(element) && makeMainStatInfo()}
            {otherStatArr.includes(element) && makeOtherInfo()}
            {atks.includes(element) && makeAtks()}
        </div>
    )
}