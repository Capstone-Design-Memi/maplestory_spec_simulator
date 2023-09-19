import { all, fork } from "redux-saga/effects";
import axios from "axios";

import mapleSaga from "./maple";

axios.defaults.baseURL = "https://mapleutils-parser-api.vercel.app/api/";
// axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
// axios.defaults.withCredentials = true;
export default function* rootSaga() {
  yield all([fork(mapleSaga)]);
}
