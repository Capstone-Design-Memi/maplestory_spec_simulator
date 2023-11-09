import axios from "axios";
import { useNavigate } from "react-router-dom";
import { all, fork, put, takeLatest, throttle, call } from "redux-saga/effects";
import { MapleUtilsParser } from "../Parser/maple-util-parser";

import {
  LOAD_MAPLE_CHRACTER_FAILURE,
  LOAD_MAPLE_CHRACTER_SUCCESS,
  LOAD_MAPLE_CHRACTER_REQUEST,
} from "../constants/actionTypes";
import { act } from "react-dom/test-utils";

function loadCharacterAPI(data) {
  console.log(data);
  return axios.get(
    
  );
}

function parseCharacter(data) {
  const parser = MapleUtilsParser.new();
    parser.getCharacter({
            name: data,
            cash: true,
            pet: true,
            equip: true,
            symbol: true
    }).then((character) => {
      console.log(character);
      return(character);
    });
    
    parser.getCharacterWithErrors({
        name: data,
        cash: true,
        pet: true,
        equip: true,
        symbol: true
    }).then(({data: character, errors}) => {
        console.log(character);
        //return(character);
        if(errors?.equipments) {
            errors?.equipments()?.then(equipments => console.log(equipments));
        }
        if(errors?.arcanes) {
            errors?.arcanes()?.then(symbols => console.log(symbols));
        }
        if(errors?.petEquipments) {
            errors.petEquipments()?.then(petEquipments => console.log(petEquipments));
        }
        if(errors?.cashEquipments) {
            errors?.cashEquipments()?.then(cashEquipments => console.log(cashEquipments));
        }
    })
}



function* loadCharacter(action) {
  try {
    const result = yield call(parseCharacter, action.data);
    console.log(result);
    yield put({
      type: LOAD_MAPLE_CHRACTER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MAPLE_CHRACTER_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadCharacter() {
  yield takeLatest(LOAD_MAPLE_CHRACTER_REQUEST, loadCharacter);
}

export default function* postSaga() {
  yield all([fork(watchLoadCharacter)]);
}
