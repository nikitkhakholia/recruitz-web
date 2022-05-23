import React from "react";
import { Link } from "react-router-dom";
import { isLoggedIn, logOut } from "./Login/helper";
import Login from "./Login/Login";
import { showSuccessAlert } from "./utils";

const Base = ({ children, style }) => {
  return (
    <div style={style}>
      <header className="py-3 ">
        <div className="row justify-content-between align-items-center m-0 p-0">
          <div className="col-5">
            <div className="row justify-content-start align-items-center">
              <div className="col-2">
                <img src="/logo.png" style={{ width: "7rem" }} alt="Logo" />
              </div>
              <div className="col display-5">
                <Link to="/">
                  <div style={{ fontWeight: "bold" }}>Recruitz</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row m-2 p-0 justify-content-end align-items-center text-center">
              {!isLoggedIn() && (
                <div className="col-1">
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
                <div className="col-1">
                  <Link
                    to="/#register"
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                  >
                    Register
                  </Link>
                </div>
              )}
              {isLoggedIn() && isLoggedIn().student && (
                <div className="col-1">
                  <Link to="/jobs">Jobs</Link>
                </div>
              )}
              {isLoggedIn() && isLoggedIn().student && (
                <div className="col-1">
                  <Link to="/activity">Activity</Link>
                </div>
              )}
              {isLoggedIn() && isLoggedIn().student && (
                <div className="col-1">
                  <Link to="/profile">Profile</Link>
                </div>
              )}
              {isLoggedIn() && isLoggedIn().admin && (
                <div
                  id="adminMenuBtn"
                  class="col-1 btn "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#adminMenu"
                  aria-controls="adminMenu"
                >
                  Admin
                </div>
              )}
              {isLoggedIn() && (
                <div className="col-1">
                  <Link
                    to="#"
                    onClick={(e) => {
                      logOut((data) => {
                        if (data) {
                          showSuccessAlert("Logged Out Successfully.");
                          window.location = "/";
                        }
                      });
                    }}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row m-0 p-0 align-items-center justify-content-between">
          <div
            className="col-1 btn"
            onClick={(e) => {
              window.history.back();
            }}
          >
            <i class="bi bi-chevron-left"></i>
          </div>

          <div
            className="col-1 btn"
            onClick={(e) => {
              window.history.forward();

              // history.back(); //Go to the previous page
              // history.forward(); //Go to the next page in the stack
              // history.go(index); //Where index could be 1, -1, 56, etc.
            }}
          >
            <i class="bi bi-chevron-right"></i>
          </div>
        </div>
      </header>

      <div className="" style={{ minHeight: "1000px" }}>
        {children}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </symbol>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </symbol>
        <symbol
          id="exclamation-triangle-fill"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
      </svg>
      <div
        id="alert-failure"
        className="alert alert-danger d-flex align-items-center d-none"
        role="alert"
      >
        <svg
          className="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Danger:"
        >
          <use xlinkHref="#exclamation-triangle-fill" />
        </svg>
        <div id="alert-failure-msg">An example danger alert with an icon</div>
      </div>
      <div
        id="alert-success"
        className="alert alert-success d-flex align-items-center d-none"
        role="alert"
      >
        <svg
          className="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Success:"
        >
          <use xlinkHref="#check-circle-fill" />
        </svg>
        <div id="alert-success-msg">An example success alert with an icon</div>
      </div>
      <footer>
        <div className="row m-0 p-3 bg-dark text-light justify-content-center">
          {"Made with <3 by Team Recruitz"}
        </div>
      </footer>
      <Login />

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="adminMenu"
        aria-labelledby="adminMenuLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="adminMenuLabel">
            Admin Options
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a
                class={
                  "nav-link " +
                  (window.location.href.indexOf("admin/students") > -1)
                    ? "active"
                    : ""
                }
                href="/admin/students"
              >
                Students
              </a>
            </li>
            <li className="nav-item">
              <a
                class={
                  "nav-link " + window.location.href.indexOf("admin/jobs") > -1
                    ? "active"
                    : ""
                }
                href="/admin/jobs"
              >
                Jobs
              </a>
            </li>
            <a
              class={
                "nav-link " +
                  window.location.href.indexOf("admin/applications") >
                -1
                  ? "active"
                  : ""
              }
              href="/admin/applications"
            >
              Applications
            </a>
            <li className="nav-item"> </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Base;
