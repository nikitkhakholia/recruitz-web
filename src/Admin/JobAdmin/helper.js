import { isLoggedIn } from "../../Login/helper";

const { API } = require("../../env");

export const uploadJobs = (data) => {
    document.getElementsByClassName("progress")[0].classList.remove("d-none");
  
    return fetch(`${API}jobs/${isLoggedIn().id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        // "Content-Type": "application/json",
          "Authorization": `Bearer ${isLoggedIn().token}`
        
      },
      // body:JSON.stringify(data)
      body: data,
    })
      .then((res) => {
        document.getElementsByClassName("progress")[0].classList.add("d-none");
  
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const uploadUsers = (data) => {
    document.getElementsByClassName("progress")[0].classList.remove("d-none");
  
    return fetch(`${API}users/${isLoggedIn().id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        // "Content-Type": "application/json",
          "Authorization": `Bearer ${isLoggedIn().token}`
        
      },
      // body:JSON.stringify(data)
      body: data,
    })
      .then((res) => {
        document.getElementsByClassName("progress")[0].classList.add("d-none");
  
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };