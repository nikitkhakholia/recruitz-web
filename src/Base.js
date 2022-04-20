import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home/Home";
import { isLoggedIn } from "./Login/helper";

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
                    to="/register"
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

      {/* login modal */}
      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="loginModalLabel">
                Login
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="col">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Email" />
                </div>

                <div class="input-group mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer border-0">
              <div
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#resetPasswordModal"
              >
                Reset Password
              </div>
              <button type="button" class="btn btn-dark">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* registar modal */}
      <div
        class="modal fade"
        id="registerModal"
        tabindex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="registerModalLabel">
                Register
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="col">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Email" />
                  <button class="input-group-text" id="genetareOtpRegister">
                    Generate OTP
                  </button>
                </div>

                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="OTP" />
                </div>

                <div class="input-group mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>

                <div class="input-group mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer border-0">
              <button type="button" class="btn btn-dark">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* reset password */}
      <div
        class="modal fade"
        id="resetPasswordModal"
        tabindex="-1"
        aria-labelledby="resetPasswordModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="resetPasswordModalLabel">
                Reset Password
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="col">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    disabled
                  />
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="OTP" />
                </div>

                <div class="input-group mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>

                <div class="input-group mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer border-0">
              <button type="button" class="btn btn-dark">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
