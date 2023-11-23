import React, { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import ItemStat from "../ItemDetail/ItemStat";
import SetEffectDropDown from "./SetEffectDropDown";


const ItemSingleDropDown = ({ item }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const setEffects = JSON.parse(localStorage.getItem(`testChItem${cookies.cId.cId}`))[0]?.setEffects;
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
