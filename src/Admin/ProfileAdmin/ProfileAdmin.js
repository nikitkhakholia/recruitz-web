import React, { useEffect, useState } from "react";
import { showErrorAlert, showSuccessAlert } from "../../utils";
import { getAllStudents } from "./helper";

const ProfileAdmin = () => {
  const [students, setstudents] = useState([]);
  const [pagination, setpagination] = useState(0);
  useEffect(() => {
    getAllStudents().then((res) => {
      if (res.success) {
        setstudents(res.data);
      } else {
        showErrorAlert("Error Loading Data.");
      }
    });
  }, []);

  return (
    <div className="px-4">
      <div className="row m-0 p-0 justify-content-between align-items-end">
        <div className="col">
          <h1 className="display-1">Student Profiles</h1>
        </div>
        <div className="col-2 text-end">
          <div
            className="btn btn-dark mb-2"
            onClick={(e) => {
              getAllStudents(true).then((x) => {
                showSuccessAlert("Downloaded Successfully.");
              });
            }}
          >
            Download Users
          </div>
        </div>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Bio</th>
            <th scope="col">About</th>
            <th scope="col">Github</th>
            <th scope="col">LinkedIn</th>
            <th scope="col">Phone</th>
            <th scope="col">Skills</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            // (students = students.slice(
            //   pagination * 10,
            //   pagination * 10 + 10
            // )) &&
            students.map((stu, i) => {
              //   alert(pagination * 10);
              //   alert(10 + pagination * 10);
              if (i >= pagination * 10 && i < 10 + pagination * 10) {
                return (
                  <tr key={i}>
                    <th scope="row">{stu[0]}</th>
                    <td>{stu[1]}</td>
                    <td>{stu[2]}</td>
                    <td>{stu[3]}</td>
                    <td>{stu[4]}</td>
                    <td>{stu[5]}</td>
                    <td>{stu[6]}</td>
                    <td>{stu[7]}</td>
                    <td>{stu[8]}</td>
                  </tr>
                );
              }
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

export default ProfileAdmin;
