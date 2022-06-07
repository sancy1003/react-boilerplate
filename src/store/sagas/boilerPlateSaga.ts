import { call, takeLatest, fork, all, put } from "redux-saga/effects";
import boilerPlateSlice from "@store/slices/boilerPlateSlice";

const { boilerPlate, boilerPlateSuccess, boilerPlateFailure } =
  boilerPlateSlice.actions;

function* callBoilerPlateSaga() {
  try {
    const result = "success";
    yield put(boilerPlateSuccess(result));
  } catch (error) {
    const result = "fail";
    yield put(boilerPlateFailure(result));
  }
}

function* watchCallBoilerPlateSaga() {
  yield takeLatest(boilerPlate, callBoilerPlateSaga);
}

export default function* MemberSaga() {
  yield all([fork(watchCallBoilerPlateSaga)]);
}
