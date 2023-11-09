import { GetAllInformation } from "./GetAllInformation"
import { GetSumOfStats } from "./GetSumOfStats";
import { GetCharacterMainStat, GetCharacterSubStat } from "./GetCharacterMainStat";

export const CalculateMain = () => {
    const result = GetAllInformation();
    const information = result[0];
    const equipmentItem = result[1];
    const mainStat = GetCharacterMainStat(information);
    const subStat = GetCharacterSubStat(information);
    const level = information.level;

    const sumOfStats = GetSumOfStats(equipmentItem);
    
    console.log(sumOfStats);
}