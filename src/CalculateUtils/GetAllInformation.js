import { useCookies } from "react-cookie";
import { GetSumOfStats } from "./GetSumOfStats";

export const GetAllInformation = () => {
    const [cookies, setCookie] = useCookies();
    const cId = cookies.cId === undefined ? false : cookies.cId.cId;
    const chInfoArry = cookies.cId === undefined ? [{}] : Object.values(cookies);
    

    const chInfoMap = chInfoArry.map((item) => {
        if (cookies.cId !== undefined) {
          if (item.cookieInputData?.id == cId) {
            return item;
          } else {
            return {
              cookieInputData: { data: [{ message: "캐릭터를 선택해주세요" }] },
            };
          }
        } else {
          return {
            cookieInputData: { data: [{ message: "캐릭터를 선택해주세요" }] },
          };
        }
      });

    const chInfoMapFilterUndefined = chInfoMap.filter(
        (item) => item != undefined
    );

    const information = chInfoMapFilterUndefined[0].cookieInputData.data[0];
    const equipmentItem = JSON.parse(
      localStorage.getItem(`testChItem${cookies.cId.cId}`)
    )[0]?.data;
    //console.log(information);
    return [information,equipmentItem];
}