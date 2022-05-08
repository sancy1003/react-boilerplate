import { createAction, createReducer } from "@reduxjs/toolkit";
import {
  BOILERPLATE_FAILURE,
  BOILERPLATE_REQUEST,
  BOILERPLATE_SUCCESS,
} from "../actionTypes";

export interface BoilerPlateReducer {
  boilerPlate: string;
  loading: boolean;
}

const initialState: BoilerPlateReducer = {
  boilerPlate: "",
  loading: false,
};

export const boilerPlateTest = createAction(BOILERPLATE_REQUEST, (param) => {
  return { payload: param };
});

const boilerPlateReducer = createReducer(initialState, {
  [BOILERPLATE_REQUEST]: (state) => ({ ...state, loading: true }),
  [BOILERPLATE_SUCCESS]: (state, action) => ({
    ...state,
    boilerPlate: action.data,
    loading: false,
  }),
  [BOILERPLATE_FAILURE]: (state, action) => ({
    ...state,
    boilerPlate: action.data,
    loading: false,
  }),
});

export default boilerPlateReducer;
