import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  userName: string | null;
  userAge: number | null;
  isLoading: boolean;
}

const initialState: InitialState = {
  userName: null,
  userAge: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserName: (state) => {
      state.isLoading = true;
    },
    getUserNameSuccess: (state, { payload }: PayloadAction<string>) => {
      state.userName = payload;
      state.isLoading = false;
    },
    getUserNameFailure: (state) => {
      state.isLoading = false;
    },
    getUserAge: (state) => {
      state.isLoading = true;
    },
    getUserAgeSuccess: (state, { payload }: PayloadAction<number>) => {
      state.userAge = payload;
      state.isLoading = false;
    },
    getUserAgeFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export default userSlice;
