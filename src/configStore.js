import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reducers/homeReducer";

/**
 * Redux store.
 * @reducer object uses combineReducer by default and combine all reducers.
 * We can add middleWares in middleware object.
 * Redux toolkit uses thunk by default so we dont need to add it manually.
 */
const store = configureStore({
  reducer: {
    home: homeReducer,
    // can add more reducer here
  },
});

export default store;
