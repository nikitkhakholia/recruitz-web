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
    </div>)
}

export default JobAdmin