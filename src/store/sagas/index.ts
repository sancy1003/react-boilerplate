import { all, fork } from "redux-saga/effects";
import boilerPlateSaga from "./boilerPlateSaga";

export default function* rootSaga() {
  yield all([fork(boilerPlateSaga)]);
}
