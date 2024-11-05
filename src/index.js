/* eslint-disable react/react-in-jsx-scope */
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  // eslint-disable-next-line react/react-in-jsx-scope
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
  rootElement
);
