import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Base from "./Base";
import Home from "./Home/Home";

ReactDOM.render(
  <BrowserRouter>
    <Base>
      <Routes>
        <Route path="/"  element={<Home/>} />
      </Routes>
    </Base>
  </BrowserRouter>,
  document.getElementById("root")
);
