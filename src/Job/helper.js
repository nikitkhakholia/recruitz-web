import { API } from "../env";
import { isLoggedIn } from "../Login/helper";

export const getJobsForUser = ()=>{
    const {id}  = isLoggedIn()
    // const user  = isLoggedIn()
    // user.id
    return fetch(API+"job/"+id,{
        method: "GET"
    }).then(res=>{
        return res.json()
    }).catch(err=>{
        console.log(err);
    })
}