// const Job = ()=>{
//     return <div>123</div>
// }
// export default Job

import { useEffect, useState } from "react";
import { API } from "../env";
import { showErrorAlert, showSuccessAlert } from "../utils";
import { getAllJobs } from "./helper";
import { addApplication } from "../Application/helper";
import "./Job.css";
import $ from "jquery";

const JobAdmin = () => {
  var job = {
    id: "1",
    type: "Full Time",
    location: "loc",
    company: "commm",
    role: "rolll",
  };
  const [jobs, setJobs] = useState([job, job]);

  useEffect(() => {
    getAllJobs().then((res) => {
      if (res.success) {
        setJobs(res.data);
      }
    });
  }, []);

  return (
    <div className="row m-0 p-0">
      <div className="col">
        <table class="table">
          {/* <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Type</th>
              <th scope="col">Location</th>
              <th scope="col">Company</th>
              <th scope="col">Role</th>
            </tr>
          </thead> */}
          {/* <tbody>
            {
              jobs.map((job, index) => {
                return <tr>
                  <th scope="row">{job.id}</th>
                  <td>{job.type}</td>
                  <td>{job.location}</td>
                  <td>{job.company}</td>
                  <td>{job.role}</td>
                </tr>

              })
            }
          </tbody> */}
        </table>

        <div class="container">
          <div class="row">
            {/* {jobs.map((job, i) => {
              return <div className="col-4 m-0 p-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{job.company}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{job.type}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                  </div>
                </div>
              </div>
            })} */}

            {/* {jobs.map((job, i) => {
              return <div className="col-4 m-0 p-5">
                <div class="flip1-card">
                  <div class="flip1-card-inner">
                    <h5 class="flex-container card-title"><div>{job.company}</div> <div><h6 class="card-title mb-2">{job.type}</h6> </div></h5>
                    <h6 class="card-subtitle mb-2 text-muted">{job.role}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">{job.location}</a>

                  </div>

                  <div class="flip1-card-back">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>

                </div>
              </div>
            })} */}

            {/* OG card */}

            {jobs.map((job, i) => {
              return (
                job &&
                job.job &&
                job.job.status &&
                job.job.status == "Active" && (
                  <div
                    className="col-4 m-0 p-3"
                    data-bs-toggle="modal"
                    data-bs-target={"#jobDescModal" + i}
                  >
                    <div class="card h-100">
                      <div class="card-body">
                        <h5 class="flex-container card-title">
                          <div>{job.company}</div>{" "}
                          <div>
                            <h6 class="card-title mb-2">{job.type}</h6>{" "}
                          </div>
                        </h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                          {job.role}
                        </h6>
                        <p style={{ height: "45px" }} class="card-text">
                          {job.job && job.job.description}
                        </p>

                        <a href="#" class="card-link">
                          {job.location}
                        </a>

                        {/* <div id="btns"><button class="button" onClick={e => {
                        addApplication(job.id).then(res => {
                          if (res.success) {
                            showSuccessAlert("Applied Successfully.")
                          } else {
                            showErrorAlert("Failed to apply. Please contact suppport.")
                          }
                        })
                      }}><span>Apply</span></button></div> */}

                        {/* <div class="readmore-btns">

                        <button class="button">
                          <div class="dropdown">
                            <span>Read..</span>

                            <div class="dropdown-content">
                              <p class="jobDesc">{job.job && job.job.description}</p>
                            </div>
                          </div>

                        </button>

                      </div> */}

                        {/* <button type="button" class="btn btn-primary" >
                        Launch demo modal
                      </button> */}

                        {/* <div class="modal fade" id={"jobDescModal"+i} tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            {job.job && job.job.description}
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
      {jobs.map((job, i) => {
        return (
          job &&
          job.job &&
          job.job.status &&
          job.job.status == "Active" && (
            <div
              class="modal fade"
              id={"jobDescModal" + i}
              tabindex="-1"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header border-0">
                    <div className="col">
                      <h5 class=" card-title">{job.company}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">{job.role}</h6>
                    </div>
                    {/* <h5 class="flex-container card-title"><div>{job.company}</div></h5> */}
                    {/* <h6 class="card-subtitle mb-2 text-muted">{job.role}</h6> */}
                  </div>
                  <div class="modal-body ">
                    {job.job && job.job.description}
                  </div>
                  <div class="modal-footer border-0">
                    <div id="btns">
                      <button
                        class="button"
                        onClick={(e) => {
                          addApplication(job.id).then((res) => {
                            if (res.success) {
                              showSuccessAlert("Applied Successfully.");
                            } else {
                              showErrorAlert(
                                "Failed to apply. Please contact suppport."
                              );
                            }
                          });
                        }}
                      >
                        <span>Apply</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default JobAdmin;
