import { useEffect, useState } from "react"
import { API } from "../../env";
import { getAllJobs } from "../../Job/helper";
import { showErrorAlert, showSuccessAlert } from "../../utils";
import { uploadJobs } from "./helper";
import "../../index.css";
import { isLoggedIn } from "../../Login/helper";

const JobAdmin = () => {
  var job = { id: "1", type: 'Full Time', location: "loc", company: "commm", role: "rolll" }
  const [jobs, setJobs] = useState([job, job]);

  //jobimport
  useEffect(() => {
    getAllJobs().then(res => {
      if (res.success) {
        setJobs(res.data)
      }
    })

  }, []);



  return (
    <div>

      <div class="uploadJob">
        <div className="col-2">
          <div
            class=" btn btn-dark mb-2t "
            for="jobUpload"
            onClick={(e) => {
              document.getElementById("jobUpload").click();
            }}
          >
            Upload_Job
          </div>
          <input
            type="file"
            class="d-none"
            id="jobUpload"
            placeholder="Upload Jobs"
            onChange={(e) => {
              if (!e.target.files[0]) {
                return;
              }
              document
                .getElementsByClassName("progress")[0]
                .classList.remove("d-none");

              var formData = new FormData();
              formData.set("file1", e.target.files[0]);
              uploadJobs(formData).then((res) => {
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
      </div>



      <div className="row m-0 p-0">
        <div className="col">

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Type</th>
                <th scope="col">Location</th>
                <th scope="col">Company</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                jobs.map((job, index) => {
                  return      job && job.job &&                <tr>
                      <th scope="row">{job.id}</th>
                      <td>{job.type}</td>
                      <td>{job.location}</td>
                      <td>{job.company}</td>
                      <td>{job.role}</td>
                      <td><select onChange={e => {
                        // fetch(API+"jobs/"+isLoggedIn().id)
                        fetch(`${API}jobs/${isLoggedIn().id}?key=status&value=${e.target.value}&id=${job.job.id}`,{method:"PUT",headers:{Authorization: `Bearer ${isLoggedIn().token}`}})
                        .then((res) => {
                          return res.json()
                        }).then(res=>{
                          console.log(res);

                          if (res.status) showSuccessAlert("Updated...")
                        })
                      }}>
                        <option value="Active" selected={job.job.status == "Active"}>Active</option>
                        <option value="Closed" selected={job.job.status == "Closed"}>Closed</option>
                      </select></td>
                    </tr>

                })
              }
            </tbody>
          </table>
          {/*  */}
          <div class="container">
            <div class="row">

            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default JobAdmin