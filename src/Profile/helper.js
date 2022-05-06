import { API } from "../env";
import { isLoggedIn } from "../Login/helper";

export const loadStudentdata = (userId) => {
  document.getElementsByClassName("progress")[0].classList.remove("d-none");
  const {id, token}=isLoggedIn()
  return fetch(`${API}user/${id}`, {
    method: "GET",
    headers:{
      "Authorization": `Bearer ${token}`
    }
  })
    .then((resp) => {
      document.getElementsByClassName("progress")[0].classList.add("d-none");
      return resp.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const loadStudentdata1 = (userId) => {
  document.getElementsByClassName("progress")[0].classList.remove("d-none");
  // const {id, token}=isLoggedIn()
  return fetch(`${API}user1/${userId}`, {
    method: "GET",
    // headers:{
    //   "Authorization": `Bearer ${token}`
    // }
  })
    .then((resp) => {
      document.getElementsByClassName("progress")[0].classList.add("d-none");
      return resp.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export const updateUserData = (field, data) => {
  document.getElementsByClassName("progress")[0].classList.remove("d-none");
  const {id, token}=isLoggedIn()
  return fetch(`${API}user/${id}?field=${field}&data=${data}`, {
    method: "PUT",
    headers:{
      "Authorization": `Bearer ${token}`
    }
  })
    .then((res) => {
      document.getElementsByClassName("progress")[0].classList.add("d-none");
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addStudentEdu = (data) => {
  document.getElementsByClassName("progress")[0].classList.remove("d-none");
  const {id, token}=isLoggedIn()
  return fetch(`${API}user/edu/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      document.getElementsByClassName("progress")[0].classList.add("d-none");
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addStudentCertificate = (data) => {
  document.getElementsByClassName("progress")[0].classList.remove("d-none");
  const {id, token}=isLoggedIn()
  return fetch(`${API}user/cer/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      document.getElementsByClassName("progress")[0].classList.add("d-none");
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addStudentWE = (data) => {
  document.getElementsByClassName("progress")[0].classList.remove("d-none");
  const {id, token}=isLoggedIn()
  return fetch(`${API}user/workexp/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      document.getElementsByClassName("progress")[0].classList.add("d-none");

      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
