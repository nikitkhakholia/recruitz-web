import React, { useState } from "react";
import { checkEmail, createLogin, doLogin, generateOtp, logIn } from "./helper";

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
      var otpMessage = document.getElementById("otpMessage");
      var generateOtpButton = document.getElementById("generateOtpBtn");

      generateOtpButton.disabled = true;
      otpMessage.style.display = "none";

      checkEmail(user.email).then((res) => {
        if (res.success) {
          generateOtp(user.email).then((res1) => {
            alert(JSON.stringify(res1));
            if (res1.success) {
              otpMessage.innerText = "OTP sent to " + user.email;
              otpMessage.style.display = "block";
            } else {
              console.log(res1.error);
            }
          });
        } else {
          alert(res.error);
          setUser({ ...user, email: "" });
          generateOtpButton.disabled = false;
        }
      });
    } else {
      alert("Enter valid email.");
    }
  };
  const registerJourney = () => {
    // validation
    if(user.name.length<3){
        alert("Please enter a valid name.")
        return
    }
    if(!user.email.match("^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$")){
        alert("Please enter a valid email.")
        return
    }
    if(user.otp.length!==6){
        alert("Please enter a valid OTP.")
        return
    }
    if(user.password.length<8){
        alert("Password must be 8 chars long.")
        return
    }
    if(user.password!==user.cPassword){
        alert("Password doesnot match with Confirm Password.")
        return
    }

    createLogin(user).then(res=>{
        if(!res.status){
            alert(res.message)
        }else{
            alert(res.message)
        }
    })
  };
  const loginJourney=()=>{
    if(user.email.match("^[\\w-\\.+]*[\\w-\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$")){
      if(user.password){
        doLogin(user).then(res=>{
          if(res.status){
            delete res.status
          logIn(res,(saved)=>{
            if (saved) window.location="/profile"
          })
          }else{
            alert(res.message)
          }
        })
      }else{
        alert("Please enter a password.")
      }
    }else{
      alert("Please enter a valid email.")
    }
  }
  return (
    <div>
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
                <div class="input-group mt-3">
                  <input
                    type="text"
                    class="form-control emailField"
                    placeholder="Email"
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                    value={user.email}
                  />
                </div>

                <div class="input-group mt-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                    value={user.password}
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
              <button type="button" class="btn btn-dark" onClick={loginJourney}>
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
                <div class="input-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    onChange={(e) => {
                      setUser({ ...user, name: e.target.value });
                    }}
                    value={user.name}
                  />
                </div>
                <div class="input-group mt-3">
                  <input
                    type="text"
                    class="form-control emailField"
                    placeholder="Email"
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                    value={user.email}
                  />
                  <button
                    class="input-group-text"
                    id="generateOtpBtn"
                    onClick={generateOtpJourney}
                  >
                    Generate OTP
                  </button>
                </div>
                <p
                  className="mt-1 small"
                  id="otpMessage"
                  style={{ display: "none" }}
                ></p>

                <div class="input-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="OTP"
                    onChange={(e) => {
                      setUser({ ...user, otp: e.target.value });
                    }}
                    value={user.otp}
                  />
                </div>

                <div class="input-group mt-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                    value={user.password}
                  />
                </div>

                <div class="input-group mt-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setUser({ ...user, cPassword: e.target.value });
                    }}
                    value={user.cPassword}
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer border-0">
              <button type="button" class="btn btn-dark" onClick={registerJourney}>
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
                <div class="input-group mt-3">
                  <input
                    type="text"
                    class="form-control emailField"
                    placeholder="Email"
                    value={user.email}
                    disabled
                  />
                </div>
                <div class="input-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="OTP"
                    onChange={(e) => {
                      setUser({ ...user, otp: e.target.value });
                    }}
                    value={user.otp}
                  />
                </div>

                <div class="input-group mt-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                    value={user.password}
                  />
                </div>

                <div class="input-group mt-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setUser({ ...user, cPassword: e.target.value });
                    }}
                    value={user.cPassword}
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
export default Login;
