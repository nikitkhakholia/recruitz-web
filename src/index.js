import React from "react";
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Base from "./Base";
import Job from "./Job/Job";
import Home from "./Home/Home";
import Application from "./Application/Application";
import Profile from "./Profile/Profile";
import ProfileAdmin from "./Admin/ProfileAdmin/ProfileAdmin";
import JobAdmin from "./Admin/JobAdmin/JobAdmin";
import ApplicationAdmin from "./Admin/ApplicationAdmin/ActivityAdmin";
import Admin from "./Admin";
import LoggedIn from "./LoggedIn";
import ProfilePublic from "./Profile/ProfilePublic";

// ReactDOM.createRoot(document.getElementById("root")).render()
// ReactDOM.render(<div>Browser Router </div>, root element)
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Base>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/jobs" element={<Job/>} />
        <Route path="/activity"  element={<Application/>} />
        <Route path="/profile"  element={<LoggedIn><Profile/></LoggedIn>} />
        <Route path="/admin/students"  element={<Admin><ProfileAdmin/></Admin>} />
        <Route path="/admin/jobs"  element={<JobAdmin/>} />
        <Route path="/admin/applications"  element={<ApplicationAdmin/>} />
        <Route path="/profile/:id"  element={<ProfilePublic/>} />

        <Route path="*" element={<div className="text-center display-4 p-4"><strong>404!</strong> Page Not Found</div>}/>
      </Routes>
    </Base>
    <div className="progress d-none" style={{height:".4rem", width:'100%'}}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated bg-dark"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: "100%"}}
          ></div>
        </div>
  </BrowserRouter>
);
