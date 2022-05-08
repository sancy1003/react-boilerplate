import { put, all, fork, takeLatest } from "redux-saga/effects";
import {
  BOILERPLATE_REQUEST,
  BOILERPLATE_SUCCESS,
  BOILERPLATE_FAILURE,
} from "../actionTypes";

// function boilerPlateAPI(params) {
//   return axios.get("/api/boilerPlateAPI/", params);
// }

function* boilerPlate(action: any) {
  try {
    //const result = yield call(boilerPlateAPI, action.params);
    yield put({ type: BOILERPLATE_SUCCESS, data: "SUCCESS" });
  } catch (err) {
    yield put({ type: BOILERPLATE_FAILURE, data: "FAIL" });
  }
}

function* watchBoilerPlate() {
  yield takeLatest(BOILERPLATE_REQUEST, boilerPlate);
}

export default function* boilerPlateSaga() {
  yield all([fork(watchBoilerPlate)]);
}
