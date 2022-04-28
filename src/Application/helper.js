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