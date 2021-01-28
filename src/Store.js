import { createContext } from "react";
let initialState = { apiData: {}, walletData: {} };
const context = {
  state: initialState,
  dispatch: (data) => {
    throw new Error("dispatch function must be overridden");
  },
};
export const AppReducer = (state, action) => {
  switch (action.type) {
    case "get-data":
      return { ...state, apiData: action.payload };
    case "wallet-data":
      return { ...state, walletData: action.payload };
    default:
      return { ...state };
  }
};
export const AppContext = createContext(context);
