import { API } from "../env";
import { isLoggedIn } from "../Login/helper";

export const getApplicationsForUser = ()=>{
    const {id}  = isLoggedIn()
    // const user  = isLoggedIn()
    // user.id
    return fetch(API+"application/"+id,{
        method: "GET"
    }).then(res=>{
        return res.json()
    }).catch(err=>{
        console.log(err);
    })
}


export const addApplication = (data) => {
    document.getElementsByClassName("progress")[0].classList.remove("d-none");
    const {id, token}=isLoggedIn()
    return fetch(`${API}application/${id}?jobid=${data}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    //   body: JSON.stringify(data),
    })
      .then((res) => {
        document.getElementsByClassName("progress")[0].classList.add("d-none");
  
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  