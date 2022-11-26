import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// import reducer
import characterReducer from "./Character/characterSlice";
import quoteSlice from "./Quote";

export const store = configureStore({
  reducer: {
    character: characterReducer,
    quote: quoteSlice,
  },
});

const Store = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Store;
