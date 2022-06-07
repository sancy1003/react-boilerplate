import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
  boilerPlate: any;
}

const initialState: InitialState = {
  boilerPlate: null,
};

export const boilerPlateSlice = createSlice({
  name: "boilerPlate",
  initialState,
  reducers: {
    boilerPlate: (state) => {},
    boilerPlateSuccess: (state, { payload }: PayloadAction<any>) => {
      state.boilerPlate = payload;
    },
    boilerPlateFailure: (state, { payload }: PayloadAction<any>) => {
      state.boilerPlate = payload;
    },
  },
});

export default boilerPlateSlice;
