import React, { useEffect, useState } from "react";
import { API } from "../../env";
import { isLoggedIn } from "../../Login/helper";
import { showErrorAlert, showSuccessAlert } from "../../utils";
import { getAllApplications } from "./helper";

const ApplicationAdmin = () => {
  const [applications, setapplications] = useState([]);
  const [pagination, setpagination] = useState(0);
  useEffect(() => {
    getAllApplications().then((res) => {
      if (res.success) {
        setapplications(res.data);
      } else {
        showErrorAlert("Error Loading Data.");
      }
    });
  }, []);

  return (
    <div className="px-4">
      <div className="row m-0 p-0 justify-content-between align-items-end">
        <div className="col">
          <h1 className="display-1">Student Applications</h1>
        </div>
        <div className="col-2 text-end">
          <a
            href={
              API+"apps/" +
              isLoggedIn().id +
              "?download=true"
            }
            target="_blank"
            className="btn btn-dark mb-2"
            onClick={(e) => {
              getAllApplications(true).then((x) => {
                showSuccessAlert("Downloaded Successfully.");
              });
            }}
          >
            Download Application
          </a>
        </div>
      </div>
      
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Company</th>
            <th scope="col">Type</th>
            <th scope="col">Location</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.length>0 &&
            applications.map((application, i) => {
              console.log(JSON.stringify(application));
              return (
                <tr key={i}>
                  <th scope="row">{application.id}</th>
                  <td>{application.student.login.email}</td>
                  <td>{application.student.login.name}</td>
                  <td>{application.job.role}</td>
                  <td>{application.job.company}</td>
                  <td>{application.job.type}</td>
                  <td>{application.job.location}</td>
                  <td>{application.application.status}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link">Previous</a>
        </li>

        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ApplicationAdmin;
