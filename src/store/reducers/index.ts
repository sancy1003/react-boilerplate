import { combineReducers } from "@reduxjs/toolkit";
import boilerPlateReducer from "./boilerPlateReducer";

const rootReducer = combineReducers({
  boilerPlate: boilerPlateReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
