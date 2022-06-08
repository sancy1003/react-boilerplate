import { combineReducers } from "@reduxjs/toolkit";
import boilerPlateReducer from "./boilerPlateSlice";
import loadingSlice from "./loadingSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
  boilerPlate: boilerPlateReducer.reducer,
  user: userSlice.reducer,
  loading: loadingSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
