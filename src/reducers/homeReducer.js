import { createSlice } from "@reduxjs/toolkit";

export const homeReducer = createSlice({
  name: "home",
  initialState: { users: [], repos: [] },
  reducers: {
    getAllUser: (state, action) => {
      return { ...state, users: action.payload };
    },
    getAllRepos: (state, action) => {
      return { ...state, repos: action.payload };
    },
  },
});

export const home_action = homeReducer.actions;

export default homeReducer.reducer;
