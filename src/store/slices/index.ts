import { combineReducers } from "@reduxjs/toolkit";
import boilerPlateReducer from "./boilerPlateSlice";

const rootReducer = combineReducers({
  boilerPlate: boilerPlateReducer.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
