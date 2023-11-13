export const GetBaseStat = (mainStat, level) => {
    let base = [4,4,4,4];
    if(mainStat === "str") {
        base[0] = 18 + level * 5;
    }
    if(mainStat === "dex") {
        base[1] = 18 + level * 5;
    }
    if(mainStat === "int") {
        base[2] = 18 + level * 5;
    }
    if(mainStat === "luk") {
        base[3] = 18 + level * 5;
    }

    return base;
}