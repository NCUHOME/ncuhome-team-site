import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import routes from "./router";
import App from "./App";
import { showHairMessage } from "@/utils/hair";
import "./index.css";
import "reset.css/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App router={{ routes }} />
    </BrowserRouter>
  </React.StrictMode>,
  root
);

if (import.meta.env.PROD) {
  showHairMessage();
}
