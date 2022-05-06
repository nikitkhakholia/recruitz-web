import React, { useEffect, useState } from "react";
import {
  loadStudentdata1,
} from "./helper";
import "./profile.css";
import { useParams } from "react-router-dom";

const linkedin = require("./linkedin.png");
const github = require("./github.png");
const phone = require("./telephone-call.png");
const userDefault = require("./user.png");
const ProfilePublic = () => {
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
  const [userId, setUserId] = useState(useParams().id)
  useEffect(() => {
      
    loadStudentdata1(userId).then((res) => {
        if (res.success) {
          setUser(res.data);
        } else {
          console.log(res.message);
        }
      });
  }, []);
  return (
    <div>
      {user.student && (
        <div className="row justify-content-center m-0 p-0">
          <div className="col-7 text-center">
            
            <img
           
              className="profile border border-5 border-dark rounded-circle m-2 p-"
              src={
                user.student.photo_url ? user.student.photo_url : userDefault
              }
              alt="profile"
              style={{objectFit:"cover"}}
            />
            
            <h1 className="mt-4">{user.name}</h1>
            {user.student.bio && <h5>{user.student.bio}</h5>}
    

            {user.student.about && <p className="m-4">{user.student.about}</p>}
            <div className="row m-4 p-0 justify-content-center">
              {user.student.github && (
                <div className="col-1">
                  <a href={user.student.github} target="_blank">
                    <img
                      className="h-100 w-100"
                      src={github}
                      alt="Github_Link"
                    />
                  </a>
                </div>
              )}

              {user.student.linkedin && (
                <div className="col-1">
                  <a href={user.student.linkedin} target="_blank">
                    <img
                      className="h-100 w-100"
                      src={linkedin}
                      alt="LinkedIn_Link"
                    />
                  </a>
                </div>
              )}
              {user.student.phone && (
                <div className="col-1">
                  <a href={"tel:" + user.student.phone}>
                    <img className="h-100 w-100" src={phone} alt="Phone_Link" />
                  </a>
                </div>
              )}
            </div>

            {user.student.skills && (
            <div className="m-4 card text-start">
              <div className="card-body">
                <h2 className="card-title">Skills</h2>
                <p className="card-text">{user.student.skills}</p>
              </div>
            </div>
          )}
           

            <div className="m-4 card text-start">
              <div className="card-body">
                <div className="row m-0 m-0">
                  <div className="col m-0 p-0">
                    <h2 className="card-title">Education</h2>
                  </div>
                </div>
                <p className="card-text">
                  <div className="row justify-content-center">
                    {user.student.educations &&
                    user.student.educations.length > 0
                      ? user.student.educations.map((edu, i) => {
                          return (
                            <div className="col">
                              <div className="col p-2 m-2 border rounded bg-light">
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
                    <h2 className="card-title">Work Experience</h2>
                  </div>
                  
                </div>
                <p className="card-text">
                  <div className="row justify-content-center">
                    {user.student.workExperiences &&
                    user.student.workExperiences.length > 0
                      ? user.student.workExperiences.map((we, i) => {
                          return (
                            <div className="col-12">
                              <div className="col p-2 m-2 border rounded bg-light">
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
    </div>
  );
};
export default ProfilePublic;
