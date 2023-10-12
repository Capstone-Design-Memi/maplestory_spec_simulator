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

const CreateCharacter = () => {
  const { characterInfo } = useSelector((state) => state.maple);
  const [cookies, setcookie, removecookie] = useCookies();
  const [id, setId] = useState(0);
  const [characterInfoLoadSuccess, setCharacterInfoLoadSuccess] =
    useState(false);
  const [createcharacterToggle, setCreatecharacterToggle] = useState(true);
  const [equipments, setEquipments] = useState();
  const dispatch = useDispatch();

  const onFinishLoad = (values) => {
    dispatch({
      type: LOAD_MAPLE_CHRACTER_REQUEST,
      data: values.username,
    });
    setCharacterInfoLoadSuccess(true);
  };

  useEffect(() => {
    if (characterInfoLoadSuccess) {
      localStorage.setItem(
        `InventoryItem${id}`,
        JSON.stringify([{ id: id, data: [] }])
      );
      const localItemData = [{ id: id, data: characterInfo.equipments }];
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
      setId(id + 1);
      setCharacterInfoLoadSuccess(false);
    }
  }, [characterInfo]);

  const navigator = useNavigate();

  useEffect(() => {
    const getEquipments = JSON.parse(localStorage.getItem("equipments"));
    setEquipments(getEquipments);
  }, []);

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
