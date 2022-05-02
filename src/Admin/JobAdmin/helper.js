const { API } = require("../../env");

export const getAllJobs=()=>{
    return fetch(API+"listJobs").then(res=>{
        return res.json()
    }).catch(e=>{
        console.log(e);
    })
}