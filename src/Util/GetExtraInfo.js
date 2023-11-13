import ExtraInfo from "./ExtraInfo";
import { Class } from "./Class";
import SubWeaponData from "./SubWeaponData";

const cannotStarfoce = [...SubWeaponData, "엠블렘", "뱃지", "훈장", "안드로이드", "포켓 아이템", "반지"];
const canStarfoceRing = ["가디언 엔젤 링", "여명의 가디언 엔젤 링", "마이스터링", "거대한 공포", "실버블라썸 링", "고귀한 이피아의 반지"];

const GetExtraInfo = (enforceItem, jobName) => {
    let maxStar = 0;
    let starfoceAvail = false;
    let result = ExtraInfo.find(index => index.name === enforceItem.name);
    let reqLev = 0;

    //console.log(`level : ${enforceItem.level}`);

    if(result) {
        reqLev = result.reqLev;
    } else {
        reqLev = enforceItem.level;
        result = {...result, "reqLev" : reqLev};
        //console.log(result);
    }

    if(cannotStarfoce.includes(enforceItem.category)) {
        starfoceAvail = false;
        if(canStarfoceRing.includes(enforceItem.name)) {
            starfoceAvail = true;
        }
        if(enforceItem.category === "방패") {
            starfoceAvail = true;
        }
    } else {
        starfoceAvail = true;
    }

    if(starfoceAvail) {
        if(reqLev <= 94) {
            maxStar = 5;
        } else if(reqLev <= 107) {
            maxStar = 8;
        } else if(reqLev <=117) {
            maxStar = 10;
        } else if(reqLev <=127) {
            maxStar = 15;
        } else if(reqLev <=137) {
            maxStar = 20;
        } else {
            maxStar = 25;
        }
    }

    return {...result, "maxStar" : maxStar}
}


export default GetExtraInfo;