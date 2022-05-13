import React, { useEffect, useState } from "react";
import { getApplicationsForUser } from "./helper";



const Application = () => {
  const [applications, setApplications] = useState([]);
  // useEffect(() => {
  console.log(applications);
  // }, []);
  getApplicationsForUser().then((res) => {
    //console.log(res.data)
    setApplications(res.data.application_mst);
  });
  return (
    <div>
      <div class="row text-center mb-5">
        {/* {JSON.stringify(applications)} */}
        <div class="col p-3">
          <h1>
            <strong>Application</strong>
          </h1>
        </div>
      </div>

      {/* <div>
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Role</th>
              <th scope="col">Company</th>
              <th scope="col">Type</th>
              <th scope="col">Location</th>
              <th scope="col">Status</th>
            </tr>
          </thead>

          <tbody>
            {applications.length > 0 ? (
              applications.map((data, index) => {
                return (
                  <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.job.role}</td>
                    <td>{data.job.company}</td>
                    <td>{data.job.type}</td>
                    <td>{data.job.location}</td>
                    <td>{data.application.status}</td>
                  </tr>
                );
              })
            ) : (
              <p className="text-center">No Application Found</p>
            )}
          </tbody>
        </table>
      </div> */}

      {applications.map((data, index) => {
        return (
          
          <div className="col-7 m-3 p-3 mx-auto" >
            <div class="card">
              <div class="card-body ">
                <h4 class="flex-container card-title ">
                  <a href="#" class="card-link">
                    {data.id}{". "}
                    {data.job.role}
                  </a>
                  <div>
                    <h6 class="card-title ">{data.application.status}</h6>
                  </div>
                </h4>
                <h6 class="card-subtitle mb-2 p-1">{data.job.company}</h6>
                <h6 class="card-subtitle mb-1 p-1 text-muted">
                  {data.job.location}
                </h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Application;
