import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// import reducer
import characterReducer from "./Character/characterSlice";

const store = configureStore({
  reducer: {
    character: characterReducer
  },
});

export default function Store({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
