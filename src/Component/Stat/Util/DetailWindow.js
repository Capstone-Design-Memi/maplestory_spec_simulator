import { TopFrame, Line, BottomFrame } from "../Styles"

export const DetailWindow = ({xy}) => {
    return (
        <div style={{position:"absolute", left:`${xy.x}px`, top:xy.y, width:"261px"}}>
            <TopFrame/>
                <Line>
                    123
                </Line>
            <BottomFrame/>
        </div>
    )
}