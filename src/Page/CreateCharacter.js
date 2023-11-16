import { Button, Cascader, Input, Form } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Class } from "../Util/Class";
import axios from "axios";
import { LOAD_MAPLE_CHRACTER_REQUEST } from "../constants/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import equipmentsData from "../Util/CharatersData2.json";
import { v4 as uuidv4 } from "uuid";
import { useCookies } from "react-cookie";
import { ChractersInfo } from "../Util/CharatersData";
import ChooseCharacterForm from "../Component/CreateCharacter/ChooseCharacterForm";
import LoadCharacterForm from "../Component/CreateCharacter/LoadCharacterForm";
import { MapleUtilsParser } from "../Parser/maple-util-parser";
import { DefaultAuthentic } from "../Component/EquipmentInventory/DefaultAuthentic";

const CreateCharacter = () => {
  const { characterInfo } = useSelector((state) => state.maple);
  const [cookies, setcookie, removecookie] = useCookies();
  const [id, setId] = useState(0);
  const [characterInfoLoadSuccess, setCharacterInfoLoadSuccess] =
    useState(false);
  const [createcharacterToggle, setCreatecharacterToggle] = useState(true);
  const [equipments, setEquipments] = useState();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const onFinishLoad = (values) => {
    const parser = MapleUtilsParser.new();
    let isReturnAble = false;
    let returnData;
    parser
      .getCharacter({
        name: values.username,
        cash: true,
        pet: true,
        equip: true,
        symbol: true,
      })
      .then((character) => {
        dispatch({
          type: LOAD_MAPLE_CHRACTER_REQUEST,
          data: character,
        });
        setCharacterInfoLoadSuccess(true);
        console.log(character);
        console.log(characterInfoLoadSuccess);
      });

    parser
      .getCharacterWithErrors({
        name: values.username,
        cash: true,
        pet: true,
        equip: true,
        symbol: true,
      })
      .then(({ data: character, errors }) => {
        console.log(character);
        //return(character);
        if (errors?.equipments) {
          errors?.equipments()?.then((equipments) => console.log(equipments));
        }
        if (errors?.arcanes) {
          errors?.arcanes()?.then((symbols) => console.log(symbols));
        }
        if (errors?.petEquipments) {
          errors
            .petEquipments()
            ?.then((petEquipments) => console.log(petEquipments));
        }
        if (errors?.cashEquipments) {
          errors
            ?.cashEquipments()
            ?.then((cashEquipments) => console.log(cashEquipments));
        }
      });
    //   dispatch({
    //     type: LOAD_MAPLE_CHRACTER_REQUEST,
    //     data: values.username,
    //   });
  };

  useEffect(() => {
    console.log(characterInfoLoadSuccess);
    console.log(characterInfo);
    if (characterInfoLoadSuccess) {
      console.log(characterInfo);
      localStorage.setItem(
        `InventoryItem${id}`,
        JSON.stringify([{ id: id, data: [] }])
      );
      console.log(characterInfo.equipments);
      const localItemData = [{ id: id, data: characterInfo.equipments, arcanes: characterInfo.arcanes, authentics: DefaultAuthentic}];
      localStorage.setItem(`testChItem${id}`, JSON.stringify(localItemData));
      const cookieInputData = {
        id: id,
        data: [
          {
            arcanes: characterInfo.arcanes,
            // cashEquipments: characterInfo.cashEquipments,
            guild: characterInfo.guild,
            imageUrl: characterInfo.imageUrl,
            job: characterInfo.job,
            level: characterInfo.level,
            name: characterInfo.name,
            petEquipments: characterInfo.petEquipments,
            spec: characterInfo.spec,
          },
        ],
      };
      setcookie(`testChInfo${id}`, { cookieInputData });
      setCharacterInfoLoadSuccess(false);
    }
  }, [characterInfo]);

  return (
    <div>
      <h2>캐릭터 생성</h2>
      {!createcharacterToggle ? (
        <div>
          <Button
            onClick={() => {
              setCreatecharacterToggle(true);
            }}
          >
            새 캐릭터 생성하기
          </Button>
          <LoadCharacterForm onFinishLoad={onFinishLoad} />
        </div>
      ) : (
        <div>
          <Button
            onClick={() => {
              console.log(cookies.testChInfo0);
              if (cookies.testChInfo0) {
                const characterIds = Object.keys(cookies);
                const lastCharacterId = characterIds[
                  characterIds.length - 1
                ]?.replace("testChInfo", "");
                setId(parseInt(lastCharacterId) + 1);
              } else {
                setId(0);
              }
              setCreatecharacterToggle(false);
            }}
          >
            내 캐릭터 불러오기
          </Button>
          <ChooseCharacterForm />
        </div>
      )}
    </div>
  );
};

export default CreateCharacter;
