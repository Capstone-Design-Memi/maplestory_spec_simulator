import React from "react";
import { useState } from "react";
import AccPotentialData from "../../Util/AccPotentialData";
import Convert from "../../Util/Convert";

const PotentialTab = ({item, handlePotentialChange}) => {
    const firstOption = [];
    let potentialData = [];

    firstOption.push({value: "null", name: "---"});
    const accCategory = ["반지","귀고리","눈장식","얼굴장식","펜던트"];
    for(let i=0; i<accCategory.length; i++) {
        if(item.category === accCategory[i]) {
            potentialData = AccPotentialData;
        }
    }

    const [grade, setGrade] = useState(item.grade);
    const [firstValue, setFirstValue] = useState({});

    const handleGradeSelect = (e) => {
        displayOptions(e.target.value);
        setGrade(e.target.value);
    }

    const handleFirstChange = (e) => {

    }

    const displayOptions = (grade) => {
        let firstOptions;
        let secondOptions;
        let convertFirstOptions;
        let convertSecondOptions;

        for(let key in potentialData) {
            if(potentialData[key].grade === grade) {
                firstOptions = potentialData[key].effects[0].first;
                secondOptions = potentialData[key].effects[0].second;
            }
        }

        for(let i=0; i<firstOptions.length; i++) {
            for(let key in firstOptions[i]) {
                for(let j=0; j<Convert.length; j++) {
                    if(Convert[j].value === key) {
                        firstOption.push({
                            value : key,
                            first : Convert[j].first,
                            result : firstOptions[i][key],
                            persent : Convert[j].persent,
                        });
                    }
                }
            }
        }
        console.log(firstOption);
    }

    return (
        <>
            <select onChange={handleGradeSelect} value={grade} style={{width: "100px"}}>
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
            <select onChange={handleFirstChange} value={firstValue}>
                {firstOption.map((potentialValue, index)=> {
                    <option
                        key={index}
                        value={index}
                    >
                        123{`${potentialValue.first} : ${potentialValue.result}`}
                    </option>
                })}
            </select>
        </>
    )
}
export default PotentialTab;

