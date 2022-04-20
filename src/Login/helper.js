import { API } from "../env";

export const logIn = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("recruitz-login", JSON.stringify(data));
      next();
    }
  };
export const isLoggedIn = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("recruitz-login")) {
      return JSON.parse(localStorage.getItem("recruitz-login"));
    } else {
      return false;
    }
  };
  export const logOut = (next) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("recruitz-login");
      next();
    }
  };
  export const checkEmail=(email)=>{
    return fetch(`${API}userExists?email=${email}`,{
        method:"GET"
    }).then(resp=>{
        return resp.json()
    }).catch(err=>{
        console.log(err);
    })
  }