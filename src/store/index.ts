import { configureStore } from "@reduxjs/toolkit";
import marvelReducer from "./marvel-slice/index";
import { InitialState } from "./marvel-slice/type";

const store = configureStore({
  reducer: {
    marvel: marvelReducer(),
  },
});

export interface RootState {
  marvel: InitialState;
}

export default store;
