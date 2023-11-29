import { useEffect, useMemo } from "react";
import { TopFrame, Line, BottomFrame, MainText, SubText } from "../Styles"
import { DetailText } from "./DetailText"
import { GetMainStat, GetStatInformation } from "./GetStatInformation";

const mainStatArr = ["hp", "mp", "str", "dex", "int", "luk"];

export const DetailWindow = ({xy, element}) => {

    const text = Object.entries(DetailText).find(([key, value]) => key === element);
    const mainStat = GetMainStat();
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

    return (
        <div style={{position:"absolute", left:`${xy.x}px`, top:xy.y, width:"261px", pointerEvents:"none", zIndex:5}}>
            {makeMainStatInfo()}
        </div>
    )
}