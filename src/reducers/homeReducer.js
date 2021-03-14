import { createSlice } from "@reduxjs/toolkit";

/**
 * CreateSlice will create the reducer as well as actions
 */
export const homeReducer = createSlice({
  name: "home",
  initialState: { users: [], repos: [], userRepos: [] },
  reducers: {
    getAllUser: (state, action) => {
      return { ...state, users: action.payload };
    },
    getAllRepos: (state, action) => {
      return { ...state, repos: action.payload };
    },
    getUserRepos: (state, action) => ({ ...state, userRepos: action.payload }),
  },
});

/**
 * This actions is created by createSlice() method.
 * We can access this action on our component as home_action.getAllUser
 */
export const home_action = homeReducer.actions;

/**
 * If we need an asynchronous call
 */
export const asyncAction = (data) => (dispatch) => {
  setTimeout(() => {
    // Perform some action and call dispatch(home_action.<some_action>)
  }, 1000);
};

/**
 * This is the reducer created by createSlice() method.
 * We pass this to our reducer object in configStore.js file
 */
export default homeReducer.reducer;
