import { combineReducers } from "redux";

import maple from "./maple";

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  maple,
});

export default rootReducer;
