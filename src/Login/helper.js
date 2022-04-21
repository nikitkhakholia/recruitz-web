import { API } from "../env";

export const logIn = (data, next) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("recruitz-login", JSON.stringify(data));
      next(1);
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
      next(1);
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
  export const generateOtp=(email)=>{
    return fetch(`${API}getOtp?email=${email}`,{
        method:"GET"
    }).then(resp=>{
        return resp.json()
    }).catch(err=>{
        console.log(err);
    })
  }
  export const createLogin=(data)=>{
    return fetch(`${API}createLogin`,{
        method:"POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(resp=>{
        return resp.json()
    }).catch(err=>{
        console.log(err);
    })
  }
  export const doLogin=(data)=>{
    return fetch(`${API}login`,{
      method:"POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
  }).then(resp=>{
      return resp.json()
  }).catch(err=>{
      console.log(err);
  })
  }