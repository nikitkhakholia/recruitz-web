import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Base from "./Base";
import Home from "./Home/Home";
import Application from "./Application/Application";

ReactDOM.render(
  <BrowserRouter>
    <Base>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/application"  element={<Application/>} />
      </Routes>
    </Base>
  </BrowserRouter>,
  document.getElementById("root")
);
