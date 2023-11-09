import produce from "immer";
import {
  LOAD_MAPLE_CHRACTER_REQUEST,
  LOAD_MAPLE_CHRACTER_SUCCESS,
  LOAD_MAPLE_CHRACTER_FAILURE,
} from "../constants/actionTypes";

export const initialState = {
  loadMapleCharacterLoading: false,
  loadMapleCharacterDone: false,
  loadMapleCharacterError: null,
  characterInfo: [], // 캐릭터 정보
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    console.log(action);
    switch (action.type) {
      case LOAD_MAPLE_CHRACTER_REQUEST:
        draft.loadMapleCharacterLoading = true;
        draft.loadMapleCharacterDone = false;
        draft.loadMapleCharacterError = null;
        break;
      case LOAD_MAPLE_CHRACTER_SUCCESS: {
        draft.characterInfo = action.data;
        draft.loadMapleCharacterLoading = false;
        draft.loadMapleCharacterDone = true;
        break;
      }
      case LOAD_MAPLE_CHRACTER_FAILURE:
        draft.loadMapleCharacterLoading = false;
        draft.loadMapleCharacterError = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
