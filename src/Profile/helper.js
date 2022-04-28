import { API } from "../env";
import { isLoggedIn } from "../Login/helper";

export const loadStudentdata = (id) => {
  document.getElementsByClassName("progress")[0].classList.remove("d-none");
  return fetch(`${API}user/${id}`, {
    method: "GET",
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
  return fetch(`${API}user/${isLoggedIn().id}?field=${field}&data=${data}`, {
    method: "PUT",
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
  return fetch(`${API}user/edu/${isLoggedIn().id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
  return fetch(`${API}user/cer/${isLoggedIn().id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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

  return fetch(`${API}user/workexp/${isLoggedIn().id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
