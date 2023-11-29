import { TopFrame, Line, BottomFrame, MainText, SubText } from "../Styles"
import { DetailText } from "./DetailText"
import { GetMainStat, GetStatInformation } from "./GetStatInformation";

const mainStatArr = ["hp", "mp", "str", "dex", "int", "luk"];

export const DetailWindow = ({xy, element}) => {

    const text = Object.entries(DetailText).find(([key, value]) => key === element);
    const mainStat = GetMainStat();
    const statInformation = GetStatInformation();
    console.log(mainStat);

    return (
        <div style={{position:"absolute", left:`${xy.x}px`, top:xy.y, width:"261px", pointerEvents:"none", zIndex:5}}>
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
                        <SubText>기본 수치 : </SubText>
                        <SubText>% 수치 : </SubText>
                        <SubText>% 미적용 수치 : </SubText>
                        <br/>
                        <SubText>[기본 수치]</SubText>
                        </>
                    }
                    </div>
                </Line>
            <BottomFrame/>
        </div>
    )
}