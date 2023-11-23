import React from "react";

const FlameDetail = ({select, valueSelect, handleSelect, handleValueSelect, selectOptions}) => {
    return (
        <>
        <select onChange={handleSelect} value={select}>
            {selectOptions.map((selectOption,index) => (
                <option
                    key={index}
                    value={index}
                >
                    {selectOption.name}
                </option>
            ))}
        </select>
        <select onChange={handleValueSelect} value={valueSelect}>
            {selectOptions[select].values.map((flameValue, index) => (
                <option
                    key={index}
                    value={index}
                >
                  {
                  index === 0
                  ? `---`
                  :(selectOptions[select].name === 
                  ("올스탯 %" 
                  || "보스 공격시 데미지 %"
                  || "데미지 %")
                  ? `+${flameValue}% (${index + 2}등급)` 
                  : `+${flameValue} (${index + 2}등급)`)}
                </option>
            ))}
        </select>
        </>
    )
}

export default FlameDetail