import React, { useContext } from "react";
import { HyperStatInfo } from "../../../Util/HyperStatInfo"
import { LocalStorageContext } from "../../../Context/LocalStorageContext";

export const CalculatStatLevel = () => {
    const {information, setInformationHandler} = useContext(LocalStorageContext);
    const hyperStat = information.spec.hypers;

    const levelArr = Object.entries(HyperStatInfo).map(([key1, value1]) => {
        const match = Object.entries(hyperStat).find(([key2, value2]) => 
            key1 === key2
        )
        
        if(match) {
            let level = value1.findIndex((e) => e === match[1]);
            return level;
        }
        return 0;
    });

    return levelArr;
}