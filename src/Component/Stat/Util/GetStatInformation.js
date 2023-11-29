import React, { useContext } from "react";
import { LocalStorageContext } from "../../../Context/LocalStorageContext";
import { JobList } from "./JobList";

export const GetMainStat = () => {
    const {information, setInformationHandler} = useContext(LocalStorageContext);

    return Object.entries(JobList).find(([key,value]) => value.includes(information.job))[0];
}

export const GetStatInformation = () => {
    const {information, setInformationHandler} = useContext(LocalStorageContext);
    const mainStat = GetMainStat();

    let result = {
        base : {
            base : {str : 4, dex : 4, int : 4,luk : 4, hp : 4, mp : 4},
            skill : {str : 0, dex : 0, int : 0, luk : 0, hp : 0, mp : 0},
            item : {str : 0, dex : 0, int : 0, luk : 0, hp : 0, mp : 0},
            unionAttacker : {str : 0, dex : 0, int : 0, luk : 0, hp : 0, mp : 0},
            title : {str : 0, dex : 0, int : 0, luk : 0, hp : 0, mp : 0},
        },
        persent : {
            item : {str : 0, dex : 0, int : 0, luk : 0, hp : 0, mp : 0},
        },
        noPersent : {
            hexa : {str : 0, dex : 0, int : 0, luk : 0, hp : 0, mp : 0},
            unionPlaced : {str : 0, dex : 0, int : 0, luk : 0, hp : 0, mp : 0},
            hyper : {str : 0, dex : 0, int : 0, luk : 0, hp : 0, mp : 0},
            arcane : {str : 0, dex : 0, int : 0, luk : 0, hp : 0, mp : 0},
            authentic : {str : 0, dex : 0, int : 0, luk : 0, hp : 0, mp : 0},
            ability : {str : 0, dex : 0, int : 0, luk : 0, hp : 0, mp : 0},
        }
    };

    result.base.base[mainStat] = 5 * information.level + 18;
    
}