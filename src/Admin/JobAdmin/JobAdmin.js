import { useEffect, useState } from "react"
import { API } from "../../env";
import { showErrorAlert } from "../../utils";
import { getAllJobs } from "./helper";

const JobAdmin = ()=>{
    var job = {id:"1", type: 'Full Time',location:"loc", company:"commm", role:"rolll" }
    const [jobs, setJobs]=useState([job, job]);


    useEffect(() => {
        getAllJobs().then(res=>{
            if(res.success){
                setJobs(res.data)
            }
        })
        
      }, []);



    return(
      <div>
        {/* // */}


        {/* <div className="col-2">
          <div
            class=" btn btn-dark mb-2"
            for="userUpload"
            onClick={(e) => {
              document.getElementById("userUpload").click();
            }}
          >
            Upload Job
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
        </div> */}


        {/* // */}


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
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {
        jobs.map((job,index)=>{
            return <tr>
            <th scope="row">{job.id}</th>
            <td>{job.type}</td>
            <td>{job.location}</td>
            <td>{job.company}</td>
            <td>{job.role}</td>
            <td></td>
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