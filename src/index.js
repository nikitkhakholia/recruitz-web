import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Base from "./Base";
import Job from "./Job/Job";
import Home from "./Home/Home";
import Application from "./Application/Application";
import Profile from "./Profile/Profile";

ReactDOM.render(
  <BrowserRouter>
    <Base>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/job" element={<Job/>} />
        <Route path="/activity"  element={<Application/>} />
        <Route path="/profile"  element={<Profile/>} />
        <Route path="*" element={<div className="text-center display-4 p-4"><strong>404!</strong> Page Not Found</div>}/>
      </Routes>
    </Base>
  </BrowserRouter>,
  document.getElementById("root")
);
