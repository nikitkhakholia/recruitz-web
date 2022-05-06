import React, { useState } from "react";
import { showErrorAlert, showSuccessAlert } from "../utils";
import {
  checkEmail,
  createLogin,
  doLogin,
  forgotPassword,
  generateOtp,
  logIn,
} from "./helper";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    otp: "",
    password: "",
    cPassword: "",
  });
  //emailField
  const generateOtpJourney = () => {
    if (
      user.email.match("^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$") &&
      user.email.endsWith("christuniversity.in")
    ) {
      // var otpMessage = document.getElementById("otpMessage");
      var generateOtpButton = document.getElementById("generateOtpBtn");

      generateOtpButton.disabled = true;
      // otpMessage.style.display = "none";

      checkEmail(user.email).then((res) => {
        if (res.success) {
          generateOtp(user.email).then((res1) => {
            if (res1.success) {
              // otpMessage.innerText = "OTP sent to " + user.email;
              // otpMessage.style.display = "block";
              showSuccessAlert("OTP sent to "+user.email);
            } else {
              console.log(res1.error);
            }
          });
        } else {
          showErrorAlert(res.error);
          setUser({ ...user, email: "" });
          generateOtpButton.disabled = false;
          <p
                  className="mt-1 small"
                  id="otpMessage"
                  style={{ display: "none" }}
                ></p>
        }
      });
    } else {
      showErrorAlert("Enter valid email.");
    }
  };
  const registerJourney = () => {
    // validation
    if (user.name.length < 3) {
      showErrorAlert("Please enter a valid name.");
      return;
    }
    if (!user.email.match("^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$")) {
      showErrorAlert("Please enter a valid email.");
      return;
    }
    if (user.otp.length !== 6) {
      showErrorAlert("Please enter a valid OTP.");
      return;
    }
    if (user.password.length < 8) {
      showErrorAlert("Password must be 8 chars long.");
      return;
    }
    if (user.password !== user.cPassword) {
      showErrorAlert("Password doesnot match with Confirm Password.");
      return;
    }

    createLogin(user).then((res) => {
      if (!res.status) {
        showErrorAlert(res.message);
      } else {
        showSuccessAlert(res.message);
        document.getElementById("regClose").click();
      }
    });
  };
  const loginJourney = () => {
    if (user.email.match("^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$")) {
      if (user.password) {
        doLogin(user).then((res) => {
          if (res.status) {
            delete res.status;
            logIn(res, (saved) => {
              if (saved && res.student) {
                window.location = "/profile";
              } else if (saved && res.admin) {
                window.location = "/profile";
                window.location.reload();
              }
            });
          } else {
            showErrorAlert(res.message);
          }
        });
      } else {
        showErrorAlert("Please enter a password.");
      }
    } else {
      showErrorAlert("Please enter a valid email.");
    }
  };
  return (
    <div>
      {/* login modal */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="loginModalLabel">
                Login
              </h5>
              <button
                id="loginClose"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="col">
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control emailField"
                    placeholder="Email"
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                    value={user.email}
                  />
                </div>

                <div className="input-group mt-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                    value={user.password}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              { user.email.match("^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$") &&
      user.email.endsWith("christuniversity.in") && <div
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#resetPasswordModal"
                onClick={e=>{
                  generateOtp(user.email).then(res=>{
                    if(res.success){
                      showSuccessAlert("Otp sent successfully.")
                    }
                  })
                }}
              >
                Reset Password
              </div>}
              <button
                type="button"
                className="btn btn-dark"
                onClick={loginJourney}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* registar modal */}
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="registerModalLabel">
                Register
              </h5>
              <button
                id="regClose"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="col">
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={(e) => {
                      setUser({ ...user, name: e.target.value });
                    }}
                    value={user.name}
                  />
                </div>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control emailField"
                    placeholder="Email"
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                    value={user.email}
                  />
                  <button
                    className="input-group-text"
                    id="generateOtpBtn"
                    onClick={generateOtpJourney}
                  >
                    Generate OTP
                  </button>
                </div>
                {/* <p
                  className="mt-1 small"
                  id="otpMessage"
                  style={{ display: "none" }}
                ></p> */}

                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="OTP"
                    onChange={(e) => {
                      setUser({ ...user, otp: e.target.value });
                    }}
                    value={user.otp}
                  />
                </div>

                <div className="input-group mt-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                    value={user.password}
                  />
                </div>

                <div className="input-group mt-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setUser({ ...user, cPassword: e.target.value });
                    }}
                    value={user.cPassword}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-dark"
                onClick={registerJourney}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* reset password */}
      <div
        className="modal fade"
        id="resetPasswordModal"
        tabIndex="-1"
        aria-labelledby="resetPasswordModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="resetPasswordModalLabel">
                Reset Password
              </h5>
              <button
                id="rpClose"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="col">
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control emailField"
                    placeholder="Email"
                    value={user.email}
                    disabled
                  />
                </div>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="OTP"
                    onChange={(e) => {
                      setUser({ ...user, otp: e.target.value });
                    }}
                    value={user.otp}
                  />
                </div>

                <div className="input-group mt-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                    value={user.password}
                  />
                </div>

                <div className="input-group mt-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setUser({ ...user, cPassword: e.target.value });
                    }}
                    value={user.cPassword}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-dark"
                onClick={(e) => {
                  if (user.otp.length < 6) {
                    showErrorAlert("Enter valid otp.");
                    return;
                  }
                  if (user.cPassword != user.password) {
                    showErrorAlert(
                      "Please make sure that both the passwords are same."
                    );
                    return;
                  }
                  forgotPassword(user).then((res) => {
                    if (res.success) {
                      showSuccessAlert(
                        "Your password is reset successfully. Kindly login."
                      );
                    } else {
                      showErrorAlert(
                        "Some error occured. Kindly contact support."
                      );
                    }
                  });
                }}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
