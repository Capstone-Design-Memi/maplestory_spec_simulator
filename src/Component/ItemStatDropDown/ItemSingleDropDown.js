import React, { useContext } from "react";
import { Cookies, useCookies } from "react-cookie";
import ItemStat from "../ItemDetail/ItemStat";
import SetEffectDropDown from "./SetEffectDropDown";
import { LocalStorageContext } from "../../Context/LocalStorageContext";


const ItemSingleDropDown = ({ item }) => {
  const {information, setInformationHandler} = useContext(LocalStorageContext);
  const setEffects = information.setEffects;
  let showSetEffect = false
  const setItems = [];

 
  setEffects.map((element) => {
    let items = element.items;
    setItems.push(...items);
  })
  
  if(setItems.includes(item?.name)) {
    showSetEffect = true;
  }
 
  

  return (
    <div style={{display:"inline-flex"}}>
      <ItemStat item={item}/>
      {
        showSetEffect && <SetEffectDropDown item={item}/>
      }
    </div>
  )
};

export default ItemSingleDropDown;
