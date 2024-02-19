import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import verificationReducer, { customerVerification } from "./slice/Node";
import NodeReducer from "./slice/Node";

const root = ReactDOM.createRoot(
  document.getElementById("root") 
);

const store = configureStore({
 reducer:verificationReducer,
 rudecerNo:NodeReducer
})

store.dispatch(customerVerification());



export default store;
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
