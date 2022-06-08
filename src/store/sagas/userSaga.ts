import { call, takeLatest, fork, all, put } from "redux-saga/effects";

import userSlice from "@store/slices/userSlice";
import loadingSlice from "@store/slices/loadingSlice";
import { PayloadAction } from "@reduxjs/toolkit";

const {
  getUserAge,
  getUserAgeSuccess,
  getUserAgeFailure,
  getUserName,
  getUserNameSuccess,
  getUserNameFailure,
} = userSlice.actions;

const { startLoading, finishLoading } = loadingSlice.actions;

const wait = () => {
  return new Promise(function (resolve) {
    setTimeout(resolve, 3000);
  });
};

function* getUserNameSaga(action: PayloadAction) {
  yield put(startLoading(action.type));
  try {
    yield call(wait);
    const result = "찬영";
    yield put(getUserNameSuccess(result));
  } catch (error) {
    console.log(error);
    yield put(getUserNameFailure());
  }
  yield put(finishLoading(action.type));
}

function* getUserAgeSaga(action: PayloadAction) {
  yield put(startLoading(action.type));
  try {
    yield call(wait);
    const result = 25;
    yield put(getUserAgeSuccess(result));
  } catch (error) {
    console.log(error);
    yield put(getUserAgeFailure());
  }
  yield put(finishLoading(action.type));
}

function* watchGetUserNameSaga() {
  yield takeLatest(getUserName, getUserNameSaga);
}

function* watchGetUserAgeSaga() {
  yield takeLatest(getUserAge, getUserAgeSaga);
}

export default function* UserSaga() {
  yield all([fork(watchGetUserNameSaga), fork(watchGetUserAgeSaga)]);
}
