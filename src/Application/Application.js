import React, { useEffect, useState } from "react";
import { getApplicationsForUser } from "./helper";

const Application = () => {
  const [applications, setApplications] = useState([]);
  // useEffect(() => {
    
  // }, []);
  getApplicationsForUser().then((res) => {
    setApplications(res.data.application_mst);
  });

  return (
    <div>
      <div class="row text-center mb-5">
        {/* {JSON.stringify(applications)} */}
        <div class="col">
          <h2>
            <strong>Activity</strong>
          </h2>
        </div>
        <div class="col-3">
          <div class="input-group rounded">
            <div class="col-xs-3">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
            <span class="input-group-text border-0" id="search-addon">
              <i class="fa fa-search"></i>
            </span>
          </div>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  );
};
export default Application;
