import React, { useEffect, useState } from "react";
import { API } from "../../env";
import { isLoggedIn } from "../../Login/helper";
import { showErrorAlert, showSuccessAlert } from "../../utils";
import { downloadAllStudents, getAllStudents, uploadUsers } from "./helper";

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
      <div className="row m-0 p-0 justify-content-between align-items-center">
        <div className="col">
          <h1 className="display-1">Student Profiles</h1>
        </div>
        <div className="col-2">
          <div
            class=" btn btn-dark mb-2"
            for="userUpload"
            onClick={(e) => {
              document.getElementById("userUpload").click();
            }}
          >
            Upload Users
          </div>
          <input
            type="file"
            class="d-none"
            id="userUpload"
            placeholder="Upload Users"
            onChange={(e) => {
              if (!e.target.files[0]) {
                return;
              }
              document
                .getElementsByClassName("progress")[0]
                .classList.remove("d-none");

              var formData = new FormData();
              formData.set("file1", e.target.files[0]);
              uploadUsers(formData).then((res) => {
                if (res.success && res.success.result) {
                  var htmlStr =
                    "<table class='table'><thead><tr><th scope='col'>Login Email</th><th scope=\"col\">Status</th></tr></thead><tbody>";
                  res.success.result.forEach((x) => {
                    htmlStr +=
                      "<tr><th scope='row'>" +
                      x.user +
                      "</th><td>" +
                      x.error +
                      "</td></tr>";
                  });
                  htmlStr += "</tbody></table>";
                  document.getElementById("uploadResult").innerHTML = htmlStr;
                  document
                    .getElementById("resultArea")
                    .classList.remove("d-none");
                  document.getElementById("userData").classList.add("d-none");
                }
              });
            }}
          />
        </div>
        <div className="col-2 text-end">
          {/* <a
            href={
              "http://localhost:8000/users/" +
              isLoggedIn().id +
              "?download=true"
            }
            target="_blank"
            className="btn btn-dark mb-2"
            onClick={(e) => {
              getAllStudents().then((x) => {
                showSuccessAlert("Downloaded Successfully.");
              });
            }}
          >
            Download 
            href={
              "http://localhost:8000/users/" +
              isLoggedIn().id +
              "?download=true"
            }
            target="_blank"
            className="btn btn-dark mb-2"
            onClick={(e) => {
              getAllStudents().then((x) => {
                showSuccessAlert("Downloaded Successfully.");
              });
            }}
          >
            Download Users
          </a>Users
          </a> */}
          <div className="btn btn-dark mb-2" onClick={e => {
            downloadAllStudents()
          }}>Download</div>
          {/* <div
            className="btn btn-dark mb-2"
            onClick={(e) => {
              const href = window.URL.createObjectURL(API+"users/"+isLoggedIn().id+"?download=true");
              const link = document.createElement("a");
              link.href = href;
              link.setAttribute("download", "config.xlsx"); //or any other extension
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Users
          </div> */}
        </div>
      </div>
      <div className="text-center d-none" id="resultArea">
        <div id="uploadResult" className="col-6 offset-3"></div>
        <div
          className="btn btn-dark"
          onClick={(e) => {
            document.getElementById("uploadResult").innerHTML = "";
            document.getElementById("resultArea").classList.add("d-none");
            document.getElementById("userData").classList.remove("d-none");
          }}
        >
          Clear
        </div>
      </div>
      <table class="table" id="userData">
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
                // stu[1]+"".indexOf('admin')>-1
                return (
                  true ?
                    <tr
                      key={i}
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        const href = "/profile/" + stu[0];
                        const link = document.createElement("a");
                        link.href = href;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <th scope="row">{stu[0]}</th>
                      <td>{stu[1]}</td>
                      <td>{stu[2]}</td>
                      <td>{stu[3]}</td>
                      <td>{stu[4]}</td>
                      <td><a href={stu[5]} target="_blank">Link ↗</a></td>
                      <td><a href={stu[6]} target="_blank">Link ↗</a></td>
                      {/* <td>{stu[6]}</td> */}
                      <td>{stu[7]}</td>
                      <td>{stu[8]}</td>
                    </tr>
                    : null
                );
              }
            })}
        </tbody>
      </table>
      {/* <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link">Previous</a>
        </li>

        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default ProfileAdmin;
