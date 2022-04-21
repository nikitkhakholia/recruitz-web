import React from "react";
import { Link } from "react-router-dom";
import { isLoggedIn, logOut } from "./Login/helper";
import Login from "./Login/Login";

const Base = ({ children }) => {
  return (
    <div>
      <header>
        <div className="row justify-content-between align-items-center m-0 p-2">
          <div className="col-4 display-5" style={{ fontWeight: "bold" }}>
            <Link to="/">Recruitz</Link>
          </div>
          <div className="col-4">
            <div className="row m-0 p-0 justify-content-end">
              {/* {!isLoggedIn() && (
                <div className="col-2">
                  <Link to="/123">Home</Link>
                </div>
              )} */}
              {!isLoggedIn() && (
                <div className="col-2">
                  <Link
                    to="/#login"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </Link>
                </div>
              )}
              {!isLoggedIn() && (
                <div className="col-2">
                  <Link
                    to="/#register"
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                  >
                    Register
                  </Link>
                </div>
              )}
              {isLoggedIn() && (
                <div className="col-2">
                  <Link to="/jobs">Jobs</Link>
                </div>
              )}
              {isLoggedIn() && (
                <div className="col-2">
                  <Link to="/activity">Activity</Link>
                </div>
              )}
              {isLoggedIn() && (
                <div className="col-2">
                  <Link to="/profile">Profile</Link>
                </div>
              )}
              {isLoggedIn() && (
                <div className="col-2">
                  <Link to="#" onClick={(e)=>{
                    logOut(data=>{
                      if(data){
                        alert("Logged Out Successfully.")
                        window.location="/"
                      }
                    })
                  }}>Logout</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="p-2" style={{ minHeight: "1000px" }}>{children}</div>
      <footer>
        <div className="row m-0 p-3 bg-dark text-light justify-content-center">
          {"Made with <3 by Team Recruitz"}
        </div>
      </footer>
              <Login/>
    </div>
  );
};

export default Base;
