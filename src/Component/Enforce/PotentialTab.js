import React from "react";
import { useState } from "react";
import AccPotentialData from "../../Util/AccPotentialData";

const PotentialTab = ({item, handlePotentialChange}) => {

    const accCategory = ["반지","귀고리","눈장식","얼굴장식","펜던트"];
    for(let i=0; i<accCategory; i++) {
        if(item.category === accCategory[i]) {
            potentialData = AccPotentialData;
        }
    }

    const [grade, setGrade] = useState(item.grade);

    const handleGradeSelect = (e) => {
        setGrade(e.target.value);
    }

    return (
        <>
            <select onChange={handleGradeSelect} value={grade}>
                <option value="nothing">
                    ---
                </option>
                <option value="rare">
                    레어
                </option>
                <option value="epic">
                    에픽
                </option>
                <option value="unique">
                    유니크
                </option>
                <option value="legendary">
                    레전드리
                </option>
            </select>
        </>
    )
}

const potentialData = {

}
export default PotentialTab;

