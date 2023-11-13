import { GetAllInformation } from "./GetAllInformation"
import { GetSumOfStats } from "./GetSumOfStats";
import { GetCharacterMainStat, GetCharacterSubStat } from "./GetCharacterMainStat";
import { GetBaseStat } from "./GetBaseStat";
import { GetAppliedPersent } from "./GetAppliedPersent";

export const CalculateMain = () => {

    const result = GetAllInformation();
    console.log(result);
    const information = result[0];
    const equipmentItem = result[1];
    const mainStat = GetCharacterMainStat(information);
    const subStat = GetCharacterSubStat(information);
    const level = information.level;
    const base = GetBaseStat(mainStat, level);
    const sumOfStats = GetSumOfStats(equipmentItem);
    const appliedPerset = GetAppliedPersent(sumOfStats,base);
    
    console.log(sumOfStats);
    console.log(appliedPerset);
}