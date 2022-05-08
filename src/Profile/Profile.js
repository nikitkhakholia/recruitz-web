import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../Login/helper";
import {
  loadStudentdata,
  updateUserData,
  addStudentCertificate,
  addStudentEdu,
  addStudentWE,
} from "./helper";
import "./profile.css";
import { numberOnly, showErrorAlert, showSuccessAlert } from "../utils";

const linkedin = require("./linkedin.png");
const github = require("./github.png");
const phone = require("./telephone-call.png");
const userDefault = require("./user.png");
const Profile = () => {
  const [user, setUser] = useState({
    id: null,
    email: "",
    name: "",
    photo_url: "",
    student: {
      id: null,
      login_id: null,
      bio: "",
      about: "",
      github: "",
      linkedin: "",
      phone: null,
      skills: "",
      certificates: [],
      workExperiences: [],
      educations: [],
    },
  });
  const [updated, setUpdated] = useState(0);
  useEffect(() => {
    if (isLoggedIn()) {
      loadStudentdata(isLoggedIn().id).then((res) => {
        if (res.success) {
          setUser(res.data);
        } else {
          console.log(res.message);
        }
      });
    }
  }, [updated]);
  return (
    <div>
      {user.student && (
        <div className="row justify-content-center m-0 p-0">
          <div className="col-7 text-center">
            
            <img
            onClick={e=>{
              document.getElementById("photoUrlDiv").classList.remove('d-none')
            }}
              className="profile border border-5 border-dark rounded-circle m-2 p-"
              src={
                user.student.photo_url ? user.student.photo_url : userDefault
              }
              alt="profile"
              style={{cursor: "pointer", objectFit:"cover"}}
            />
            { (
              <div className="input-group mb-3 d-none" id="photoUrlDiv">
                <input
                  type="text "
                  className="form-control"
                  placeholder="Profile Pic Url"
                  onBlur={(e) => {
                    if (e.target.value.startsWith("http")) {
                      updateUserData("photo_url", e.target.value).then(
                        (res) => {
                          if (res.success) {
                            showSuccessAlert("Updated Successfully.");
                            e.target.classList.add('d-none')
                          } else {
                            showErrorAlert("Some error Occured.");
                          }
                        }
                      );
                    }else{
                      showErrorAlert("Enter valid url.")
                    }
                  }}
                />
              </div>
            )}
            <h1 className="mt-4">{user.name}</h1>
            {/* {user.student.bio && <h5>{user.student.bio}</h5>} */}
            {
              <div>
                <textarea
                  className="h5 text-center w-100 border-0"
                  onBlur={(e) => {
                    updateUserData("bio", e.target.value).then((res) => {
                      if (res.success) {
                        showSuccessAlert("Updated Successfully.");
                      } else console.log(res.message);
                    });
                  }}
                  onChange={(e) => {}}
                  defaultValue={user.student.bio}
                  placeholder="Bio"
                />
              </div>
            }

            {/* {user.student.about && <p className="m-4">{user.student.about}</p>} */}
            {
              <div>
                <textarea
                  className="p text-center w-100 border-0"
                  onBlur={(e) => {
                    updateUserData("about", e.target.value).then((res) => {
                      if (res.success) {
                        showSuccessAlert("Updated Successfully.");
                      } else console.log(res.message);
                    });
                  }}
                  onChange={(e) => {}}
                  defaultValue={user.student.about}
                  placeholder="About"
                />
              </div>
            }

            <div className="row m-4 p-0 justify-content-center">
              {user.student.github ? (
                <div className="col-1">
                  <a href={user.student.github} target="_blank">
                    <img
                      className="h-100 w-100"
                      src={github}
                      alt="Github_Link"
                    />
                  </a>
                </div>
              ) : (
                <div className="col-3">
                  <textarea
                    className="p text-center w-100 border-0"
                    onBlur={(e) => {
                      updateUserData("github", e.target.value).then((res) => {
                        if (res.success) {
                          showSuccessAlert("Updated Successfully.");
                        } else console.log(res.message);
                      });
                    }}
                    placeholder="Github"
                  />
                </div>
              )}

              {user.student.linkedin ? (
                <div className="col-1">
                  <a href={user.student.linkedin} target="_blank">
                    <img
                      className="h-100 w-100"
                      src={linkedin}
                      alt="LinkedIn_Link"
                    />
                  </a>
                </div>
              ) : (
                <div className="col-3">
                  <textarea
                    className="p text-center w-100 border-0"
                    onBlur={(e) => {
                      updateUserData("linkedin", e.target.value).then((res) => {
                        if (res.success) {
                          showSuccessAlert("Updated Successfully.");
                        } else console.log(res.message);
                      });
                    }}
                    placeholder="LinkedIn"
                  />
                </div>
              )}
              {user.student.phone ? (
                <div className="col-1">
                  <a href={"tel:" + user.student.phone}>
                    <img className="h-100 w-100" src={phone} alt="Phone_Link" />
                  </a>
                </div>
              ) : (
                <div className="col-3">
                  <textarea
                    className="p text-center w-100 border-0"
                    onBlur={(e) => {
                      if (e.target.value.length === 10) {
                        updateUserData("phone", e.target.value).then((res) => {
                          if (res.success) {
                            showSuccessAlert("Updated Successfully.");
                          } else console.log(res.message);
                        });
                      } else {
                        showErrorAlert("Enter a valid phone number.");
                        e.focus();
                      }
                    }}
                    onChange={(e) => {
                      numberOnly(e);
                    }}
                    placeholder="Phone"
                  />
                </div>
              )}
            </div>

            {/* {user.student.skills && (
            <div className="m-4 card text-start">
              <div className="card-body">
                <h2 className="card-title">Skills</h2>
                <p className="card-text">{user.student.skills}</p>
              </div>
            </div>
          )} */}
            <div className="m-4 card text-start">
              <div className="card-body">
                <h2 className="card-title">Skills</h2>
                <p className="card-text">
                  <textarea
                    className="p w-100 border-0 rounded p-2"
                    onBlur={(e) => {
                      updateUserData("skills", e.target.value).then((res) => {
                        if (res.success) {
                          showSuccessAlert("Updated Successfully.");
                        } else console.log(res.message);
                        e.preventDefault();
                      });
                    }}
                    defaultValue={user.student.skills}
                    placeholder="Write your skills seperated by ','"
                  ></textarea>
                </p>
              </div>
            </div>

            <div className="m-4 card text-start">
              <div className="card-body">
                <div className="row m-0 m-0">
                  <div className="col m-0 p-0">
                    <h2 className="card-title">Education</h2>
                  </div>
                  <div className="col-2 m-0 p-0 text-end">
                    <div
                      className="btn btn-sm btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#educationModal"
                    >
                      Add New
                    </div>
                  </div>
                </div>
                <p className="card-text">
                  <div className="row justify-content-center">
                    {user.student.educations &&
                    user.student.educations.length > 0
                      ? user.student.educations.map((edu, i) => {
                          return (
                            <div className="col">
                              <div className="col p-2 m-2 border-bottom">
                                <h5>{edu.institute_name}</h5>
                                <p className="m-0">
                                  {edu.degree + ", " + edu.grade + "%"}
                                </p>
                                <p className="m-0">{edu.specialization}</p>
                                <p className="m-0">
                                  {new Date(
                                    edu.start_date
                                  ).toLocaleDateString() +
                                    " - " +
                                    new Date(edu.end_date).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                          );
                        })
                      : "No courses Added"}
                  </div>
                </p>
              </div>
            </div>

            <div className="m-4 card text-start">
              <div className="card-body">
                <div className="row m-0 m-0">
                  <div className="col m-0 p-0">
                    <h2 className="card-title">Certificates</h2>
                  </div>
                  <div className="col m-0 p-0 text-end">
                    <div
                      className="btn btn-sm btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#certificateModal"
                      onClick={(e) => {
                        document.getElementById("certUrl").value = "";
                      }}
                    >
                      Add New
                    </div>
                  </div>
                </div>
                <p className="card-text">
                  <div className="row justify-content-center">
                    {user.student.certificates &&
                    user.student.certificates.length > 0
                      ? user.student.certificates.map((cert, i) => {
                          return (
                            <div className="col-6">
                              {cert.credential_url.endsWith(".pdf") ? (
                                <embed
                                  className="w-100"
                                  src={cert.credential_url}
                                ></embed>
                              ) : (
                                <img
                                  className="w-100"
                                  src={cert.credential_url}
                                />
                              )}
                            </div>
                          );
                        })
                      : "No certificates Added"}
                  </div>
                </p>
              </div>
            </div>

            <div className="m-4 card text-start">
              <div className="card-body">
                <div className="row m-0 m-0">
                  <div className="col m-0 p-0">
                    <h2 className="card-title">Work Experiences</h2>
                  </div>
                  <div className="col m-0 p-0 text-end">
                    <div
                      className="btn btn-sm btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#wpModal"
                    >
                      Add New
                    </div>
                  </div>
                </div>
                <p className="card-text">
                  <div className="row justify-content-center">
                    {user.student.workExperiences &&
                    user.student.workExperiences.length > 0
                      ? user.student.workExperiences.map((we, i) => {
                          return (
                            <div className="col-12">
                              <div className="col p-2 m-2 border-bottom">
                                <h5>{we.company + ", " + we.title}</h5>
                                <p className="m-0">
                                  {we.location + ", " + we.employment_type}
                                </p>
                                <p className="m-0">{we.description}</p>
                                <p className="m-0">
                                  {new Date(
                                    we.start_date
                                  ).toLocaleDateString() +
                                    " - " +
                                    new Date(we.end_date).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                          );
                        })
                      : "No experiences Added"}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {user.admin && document.getElementById('adminMenuBtn').click()}
      {/* cert Modal */}
      <div
        className="modal fade"
        id="certificateModal"
        tabIndex="-1"
        aria-labelledby="certificateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="certificateModalLabel">
                Add New Certificate
              </h5>
              <button
                type="button"
                id="certClose"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="col">
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Url"
                    id="certUrl"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-dark"
                onClick={(e) => {
                  var url = document.getElementById("certUrl").value;

                  if (!url) {
                    showErrorAlert("Please enter a vaid url.");
                    return;
                  }
                  if (
                    // !url.match(
                    //   "((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)"
                    // )
                    !url.startsWith("http")
                  ) {
                    showErrorAlert("Please enter a vaid url.");
                    return;
                  }
                  addStudentCertificate({ link: url }).then((res) => {
                    if (res.success) {
                      document.getElementById("certClose").click();
                      document.getElementById("certUrl").value = "";
                      showSuccessAlert("Updated Successfully.");
                      setUpdated(updated++);
                    }
                  });
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* edu Modal*/}
      <div
        className="modal fade"
        id="educationModal"
        tabIndex="-1"
        aria-labelledby="educationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="educationModalLabel">
                Add New Education
              </h5>
              <button
                type="button"
                id="eduClose"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="col">
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Institute"
                    id="eduIns"
                  />
                </div>
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Degree"
                    id="eduDe"
                  />
                </div>
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Specialization"
                    id="eduSp"
                  />
                </div>
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Grade"
                    id="eduGd"
                    onChange={(e) => {
                      numberOnly(e);
                    }}
                  />
                </div>
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Registration No."
                    id="eduReg"
                    onChange={(e) => {
                      numberOnly(e);
                    }}
                  />
                </div>
                
                <div className="row m-0 p-0">
                  <div className="col px-0">
                    <div className="input-group mb-3 ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="From"
                        id="eduFrom"
                      />
                    </div>
                  </div>
                  <div className="col pr-0">
                    <div className="input-group mb-3 ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="To"
                        id="eduTo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-dark"
                onClick={(e) => {
                  var insName = document.getElementById("eduIns").value;
                  var spe = document.getElementById("eduSp").value;
                  var ed = document.getElementById("eduTo").value;
                  var gd = document.getElementById("eduGd").value;
                  var deg = document.getElementById("eduDe").value;
                  var sd = document.getElementById("eduFrom").value;
                  var reg = document.getElementById("eduReg").value;
                  if (!insName) {
                    showErrorAlert("Enter valid Institute Name.");
                    return;
                  }
                  if (!deg) {
                    showErrorAlert("Enter valid Degree Name.");
                    return;
                  }
                  if (!spe) {
                    showErrorAlert("Enter valid Specialization Name.");
                    return;
                  }
                  if (!gd) {
                    showErrorAlert("Enter your last grade.");
                    return;
                  }

                  if (!ed) {
                    showErrorAlert("Enter valid end date.");
                    return;
                  }
                  if (!sd) {
                    showErrorAlert("Enter valid start date.");
                    return;
                  }
                  if(!reg){
                    showErrorAlert("Enter a valid Registration No.")
                  }
                  addStudentEdu({ insName, spe, ed, gd, deg, sd ,reg}).then(
                    (res) => {
                      if (res.success) {
                        document.getElementById("eduClose").click();
                        document.getElementById("eduIns").value = "";
                        document.getElementById("eduSp").value = "";
                        document.getElementById("eduTo").value = "";
                        document.getElementById("eduGd").value = "";
                        document.getElementById("eduDe").value = "";
                        document.getElementById("eduFrom").value = "";
                        showSuccessAlert("Updated Successfully.");
                        setUpdated(updated++);
                      }
                    }
                  );
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* wp Modal*/}
      <div
        className="modal fade"
        id="wpModal"
        tabIndex="-1"
        aria-labelledby="wpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="wpModalLabel">
                Add New Work Experience
              </h5>
              <button
                type="button"
                id="weClose"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="col">
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                    id="weCom"
                  />
                </div>{" "}
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Role"
                    id="weTitle"
                  />
                </div>
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                    id="weLoc"
                  />
                </div>
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    id="weDec"
                  />
                </div>
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type(Full Time, Part Time, Intern)"
                    id="weEt"
                  />
                </div>
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Start date"
                    id="weSd"
                  />
                </div>
                <div className="input-group mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="End Date"
                    id="weEd"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-dark"
                onClick={(e) => {
                  var com = document.getElementById("weCom").value;
                  var title = document.getElementById("weTitle").value;
                  var sd = document.getElementById("weSd").value;
                  var ed = document.getElementById("weEd").value;
                  var loc = document.getElementById("weLoc").value;
                  var dec = document.getElementById("weDec").value;
                  var et = document.getElementById("weEt").value;
                  if (!com) {
                    showErrorAlert("Please enter the Company.");
                    return;
                  }
                  if (!title) {
                    showErrorAlert("Please enter the Job Role.");
                    return;
                  }
                  if (!sd) {
                    showErrorAlert("Please enter the valid start date.");
                    return;
                  }
                  if (!loc) {
                    showErrorAlert("Please enter the job location.");
                    return;
                  }
                  if (!et) {
                    showErrorAlert("Please enter the Job Type.");
                    return;
                  }
                  if (!dec) {
                    showErrorAlert("Please enter the Job Description.");
                    return;
                  }

                  addStudentWE({ title, sd, ed, loc, dec, et, com }).then(
                    (res) => {
                      if (res.success) {
                        document.getElementById("weClose").click();
                        document.getElementById("weTitle").value = "";
                        document.getElementById("weSd").value = "";
                        document.getElementById("weEd").value = "";
                        document.getElementById("weLoc").value = "";
                        document.getElementById("weDec").value = "";
                        document.getElementById("weEt").value = "";

                        showSuccessAlert("Updated Successfully.");
                        setUpdated(updated++);
                      }
                    }
                  );
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
