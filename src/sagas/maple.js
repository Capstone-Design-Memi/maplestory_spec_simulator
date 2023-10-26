import axios from "axios";
import { useNavigate } from "react-router-dom";
import { all, fork, put, takeLatest, throttle, call } from "redux-saga/effects";

import {
  LOAD_MAPLE_CHRACTER_FAILURE,
  LOAD_MAPLE_CHRACTER_SUCCESS,
  LOAD_MAPLE_CHRACTER_REQUEST,
} from "../constants/actionTypes";
import { act } from "react-dom/test-utils";

function loadCharacterAPI(data) {
  console.log(data);
  return axios.get(
    `/character/${data}`
    // , {
    //   headers: {
    //     proxy: "http://localhost:3030",
    //   },
    // }
  );
}

function* loadCharacter(action) {
  try {
    const result = yield call(loadCharacterAPI, action.data);
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
