import { all, fork } from "redux-saga/effects";
import boilerPlateSaga from "./boilerPlateSaga";
import UserSaga from "./userSaga";

export default function* rootSaga() {
  yield all([fork(boilerPlateSaga), fork(UserSaga)]);
}
